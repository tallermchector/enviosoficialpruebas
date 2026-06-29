'use server';

import prisma from '@/lib/prisma';
import { Prisma, ServiceTypeEnum as PrismaServiceTypeEnum } from '@prisma/client';
import { z } from 'zod';
import type { QuoteShipmentInput, QuoteShipmentResult } from '@/types/order-actions';
import { geocodeNominatim } from '@/lib/maps/nominatim';

const quoteShipmentSchema = z.object({
  originAddress: z.string().min(5, "La dirección de origen es requerida."),
  destinationAddress: z.string().min(5, "La dirección de destino es requerida."),
  serviceType: z.nativeEnum(PrismaServiceTypeEnum),
});

export async function quoteShipment(input: QuoteShipmentInput): Promise<QuoteShipmentResult> {
  try {
    const validatedData = quoteShipmentSchema.parse(input);

    const originCoords = await geocodeNominatim(validatedData.originAddress);
    if (!originCoords) return { success: false, error: `No se pudo geolocalizar la dirección de origen: ${validatedData.originAddress}` };

    const destinationCoords = await geocodeNominatim(validatedData.destinationAddress);
    if (!destinationCoords) return { success: false, error: `No se pudo geolocalizar la dirección de destino: ${validatedData.destinationAddress}` };

    let distanceKm: number;
    let distanceText: string;
    let durationText: string;

    const directionsUrl = `https://router.project-osrm.org/route/v1/driving/${originCoords.lng},${originCoords.lat};${destinationCoords.lng},${destinationCoords.lat}?overview=false`;

    const directionsResponse = await fetch(directionsUrl);
    if (!directionsResponse.ok) {
      const errorText = await directionsResponse.text();
      console.error(`OSRM Routing API HTTP error: ${directionsResponse.status}. URL: ${directionsUrl}. Response: ${errorText}`);
      return { success: false, error: `Error del API de ruteo OSRM (status ${directionsResponse.status}): ${directionsResponse.statusText}` };
    }

    const directionsData = await directionsResponse.json();

    if (!directionsData.routes || directionsData.routes.length === 0) {
      console.error(`OSRM Routing API logical error. Message: ${directionsData.message}`);
      return { success: false, error: `No se pudo calcular la ruta: ${directionsData.message || 'Sin rutas disponibles'}` };
    }

    const route = directionsData.routes[0];
    distanceKm = route.distance / 1000; // Convert meters to km
    distanceText = `${distanceKm.toFixed(1)} km`;
    const durationMins = Math.round(route.duration / 60);
    durationText = `${durationMins} min`;

    let price: number | null = null;

    if (distanceKm <= 10.00) {
      // Fetch standard range from database
      const priceRangeRecord = await prisma.priceRange.findFirst({
        where: {
          distanciaMinKm: { lte: new Prisma.Decimal(distanceKm.toFixed(2)) },
          distanciaMaxKm: { gte: new Prisma.Decimal(distanceKm.toFixed(2)) },
          serviceType: validatedData.serviceType,
          isActive: true,
        },
      });
      price = priceRangeRecord ? priceRangeRecord.precioRango.toNumber() : null;
    } else {
      // Distance > 10 km: calculate base + extra per-km rate
      // 1. Get base price of the last standard range (7.00 to 10.00 km)
      const baseRangeRecord = await prisma.priceRange.findFirst({
        where: {
          distanciaMinKm: { gte: 7.00 },
          distanciaMaxKm: { lte: 10.00 },
          serviceType: validatedData.serviceType,
          isActive: true,
        },
      });

      // 2. Get the extra km price from the special range starting at 10.00 and going up to 99999.00
      const extraKmRecord = await prisma.priceRange.findFirst({
        where: {
          distanciaMinKm: { gte: 10.00 },
          distanciaMaxKm: { gte: 9999.00 },
          serviceType: validatedData.serviceType,
          isActive: true,
        },
      });

      const basePrice = baseRangeRecord ? baseRangeRecord.precioRango.toNumber() : (validatedData.serviceType === PrismaServiceTypeEnum.EXPRESS ? 15300 : 7000);
      const extraPricePerKm = extraKmRecord ? extraKmRecord.precioRango.toNumber() : (validatedData.serviceType === PrismaServiceTypeEnum.EXPRESS ? 1000 : 700);
      const extraKm = Math.max(0, distanceKm - 10.00);

      const calculatedPrice = basePrice + extraKm * extraPricePerKm;
      // Round to 2 decimals
      price = Math.round(calculatedPrice * 100) / 100;
    }

    return {
      success: true,
      data: {
        price,
        distanceText,
        durationText,
        originLat: originCoords.lat,
        originLng: originCoords.lng,
        destinationLat: destinationCoords.lat,
        destinationLng: destinationCoords.lng,
      },
    };

  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return { success: false, error: "Datos de entrada para cotización inválidos.", fieldErrors: error.issues };
    }
    console.error('Error quoting shipment (outer catch):', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return { success: false, error: `Error al cotizar envío: ${errorMessage}` };
  }
}
