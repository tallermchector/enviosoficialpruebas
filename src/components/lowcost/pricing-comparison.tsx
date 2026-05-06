"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coins, MapPin, ArrowRightCircle, HelpCircle } from "lucide-react";
import Image from "next/image";
import type { PriceRange } from '../../../generated/prisma/client/client';

// Define a client-safe type with numbers instead of Decimals
export type PriceRangeClient = Omit<PriceRange, 'distanciaMinKm' | 'distanciaMaxKm' | 'precioRango'> & {
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
};

interface PricingComparisonProps {
  priceRanges: PriceRangeClient[];
}

export function PricingComparison({ priceRanges }: PricingComparisonProps) {
  // Filtrar los rangos para mostrar solo hasta 12.99 km
  const displayedPriceRanges = priceRanges.filter(
    (rango) => rango.distanciaMaxKm < 13
  );

  const formatKmDisplay = (km: number, isMaxBoundaryInTitleOrRange: boolean = false) => {
    const kmFixed = parseFloat(km.toFixed(2)); 

    if (isMaxBoundaryInTitleOrRange && String(kmFixed.toFixed(2)).endsWith('.99')) {
      return Math.ceil(kmFixed).toString();
    }
    
    return Number.isInteger(kmFixed) ? kmFixed.toFixed(0) : kmFixed.toFixed(2).replace(".", ",");
  };

  const lowCostTiers = [
    {
      name: "Zona 1",
      icon: MapPin,
      price: "$3.000",
      distanceRange: "Radio céntrico",
      description: "La mejor tarifa para ruteo en el centro",
      features: ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"],
      color: "border-green-200 bg-green-50",
      badgeText: "Tarifa 2026",
      badgeColor: "bg-green-600",
    },
    {
      name: "Zona 2",
      icon: MapPin,
      price: "$4.000",
      distanceRange: "Periferia cercana",
      description: "Cobertura extendida económica",
      features: ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"],
      color: "border-green-200 bg-green-50",
      badgeText: "Tarifa 2026",
      badgeColor: "bg-green-600",
    },
    {
      name: "Zona 3",
      icon: MapPin,
      price: "$5.300",
      distanceRange: "Zonas alejadas",
      description: "Llegamos a toda la ciudad al mejor costo",
      features: ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"],
      color: "border-green-200 bg-green-50",
      badgeText: "Tarifa 2026",
      badgeColor: "bg-green-600",
    },
    {
      name: "Zona 4",
      icon: MapPin,
      price: "$7.000",
      distanceRange: "Límites de ciudad",
      description: "Máximo ahorro en distancias largas",
      features: ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"],
      color: "border-green-200 bg-green-50",
      badgeText: "Tarifa 2026",
      badgeColor: "bg-green-600",
    },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "5492236602699";
    const message = "Hola, necesito cotizar un envío Low Cost de más de 13 km.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-display">
            Tarifas 2026 Envíos LowCost
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Eficiencia en ruteo masivo. Garantizamos entregas antes de las 19:00 hs para pedidos antes de las 13:00 hs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lowCostTiers.map((tier, index) => {
            return (
              <Card
                key={index}
                className={`relative ${tier.color} border-2 hover:shadow-lg transition-shadow duration-300 flex flex-col font-sans`}
              >
                <Badge
                  className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${tier.badgeColor} text-white px-3 py-1 text-xs`}
                >
                  {tier.badgeText}
                </Badge>
                <CardHeader className="text-center pb-4 pt-8">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-200">
                    <Coins className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 font-display">
                    {tier.name}
                  </CardTitle>
                  <p className="text-sm text-gray-500">
                    {tier.distanceRange}
                  </p>
                  <div className="text-3xl font-bold text-green-700 my-2 font-display">
                    {tier.price}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-4 text-center text-sm">
                    {tier.description}
                  </p>
                  <ul className="space-y-2 text-sm">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-700"
                      >
                        <ArrowRightCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}

          {/* Card especial para distancias mayores */}
          <Card className="relative border-blue-200 bg-blue-50 border-2 hover:shadow-lg transition-shadow duration-300 flex flex-col font-sans">
            <Badge
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 text-xs"
            >
                Cotización Especial
            </Badge>
            <CardHeader className="text-center pb-4 pt-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
                <HelpCircle className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800 font-display">
                Zona 5
              </CardTitle>
              <p className="text-sm text-gray-500">
                $700 por kilómetro
              </p>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <p className="text-gray-600 mb-4 text-center text-sm">
                Para envíos de larga distancia fuera del ejido urbano masivo, ofrecemos la tarifa más competitiva por km.
              </p>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white mt-4"
              >
                <Image src="/icon/icon-whatsapp.svg" alt="WhatsApp Icon" width={20} height={20} className="w-5 h-5 mr-2" />
                Consultar por WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
