
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coins, ArrowRightCircle, HelpCircle } from "lucide-react";
import Image from "next/image";
import type { PriceRange } from '../../../generated/prisma/client/client';

// Define a client-safe type with numbers instead of Decimals
export type PriceRangeClient = Omit<PriceRange, 'distanciaMinKm' | 'distanciaMaxKm' | 'precioRango'> & {
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
};

interface EntrepreneurPricingRangesProps {
  priceRanges: PriceRangeClient[];
}


export function EntrepreneurPricingRanges({ priceRanges }: EntrepreneurPricingRangesProps) {
  // We'll use the same logic as the low-cost pricing
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

  const entrepreneurTiers = [
    {
      name: "3PL Fulfillment",
      price: "$6.000",
      distanceRange: "Tarifa Plana Same Day",
      description: "Incluye almacenamiento, picking y embalaje básico.",
      features: [
        "Cobranza contra-reembolso bonificada",
        "Rechazos devueltos sin cargo",
        "Control de stock incluido",
      ],
      color: "border-purple-200 bg-purple-50",
      badgeText: "Plan E-Commerce",
      badgeColor: "bg-purple-600",
    },
    {
      name: "Plan 24HS",
      price: "$3.800",
      distanceRange: "Next Day (Retiro hoy)",
      description: "Tarifas decrecientes: Pro $3.500 | Elite $3.200 | Partner $3.000",
      features: [
        "20% OFF usando Drop-Off",
        "Entrega garantizada < 24hs",
        "Ideal para grandes volúmenes",
      ],
      color: "border-blue-200 bg-blue-50",
      badgeText: "Plan Escala",
      badgeColor: "bg-blue-600",
    },
    {
      name: "Cta. Cte. Flexible",
      price: "Híbrido",
      distanceRange: "LowCost + Beneficios Express",
      description: "Pagá tarifas LowCost pero con prioridad de gestión.",
      features: [
        "Corte extendido hasta 15:00 hs",
        "Elección de rango horario",
        "Facturación mensual centralizada",
      ],
      color: "border-green-200 bg-green-50",
      badgeText: "Plan Corporativo",
      badgeColor: "bg-green-600",
    },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "5492236602699";
    const message = "Hola, necesito cotizar un envío para mi emprendimiento de más de 13 km.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-16 px-4 bg-gray-50 font-sans">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-display">
            Planes 3PL y Soluciones E-Commerce
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elegí el plan que mejor se adapte al volumen de tu negocio. Desde almacenamiento hasta ruteo masivo de última milla.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entrepreneurTiers.map((tier, index) => {
            return (
              <Card
                key={index}
                className={`relative ${tier.color} border-2 hover:shadow-lg transition-shadow duration-300 flex flex-col`}
              >
                <Badge
                  className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${tier.badgeColor} text-white px-3 py-1 text-xs`}
                >
                  {tier.badgeText}
                </Badge>
                <CardHeader className="text-center pb-4 pt-8">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
                    <Coins className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 font-display">
                    {tier.name}
                  </CardTitle>
                  <p className="text-sm text-gray-500">
                    {tier.distanceRange}
                  </p>
                  <div className="text-3xl font-bold text-blue-700 my-2 font-display">
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
                        <ArrowRightCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}

        </div>
      </div>
    </section>
  );
}
