"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRightCircle, Calculator, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PriceRange } from '../../../generated/prisma/client/client';

export type PriceRangeClient = Omit<PriceRange, 'distanciaMinKm' | 'distanciaMaxKm' | 'precioRango'> & {
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
};

interface ExpressPricingRangesProps {
  priceRanges: PriceRangeClient[];
}

export function ExpressPricingRanges({ priceRanges }: ExpressPricingRangesProps) {
  const formatKmDisplay = (km: number, isMaxBoundaryInTitleOrRange: boolean = false) => {
    const kmFixed = parseFloat(km.toFixed(2)); 
    if (isMaxBoundaryInTitleOrRange && String(kmFixed.toFixed(2)).endsWith('.99')) {
      return Math.ceil(kmFixed).toString();
    }
    return Number.isInteger(kmFixed) ? kmFixed.toFixed(0) : kmFixed.toFixed(2).replace(".", ",");
  };

  const displayedPriceRanges = priceRanges.slice(0, 4);

  // Hardcoded descriptions and features to match the visual style but using dynamic prices
  const staticData = [
    {
      description: "Ideal para entregas inmediatas en el centro",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
    },
    {
      description: "Cobertura extendida con rapidez",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
    },
    {
      description: "Llegamos a donde otros no",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
    },
    {
      description: "Máxima cobertura urbana",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#050810] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter">
              TARIFAS 2026 <span className="text-primary">ENVÍOS EXPRESS</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
              Consulta los precios actualizados para nuestro servicio premium con rango horario a elección.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedPriceRanges.map((range, index) => (
            <motion.div
              key={range.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative bg-white/5 border-white/10 backdrop-blur-md hover:border-primary/50 transition-all duration-300 rounded-3xl overflow-hidden h-full flex flex-col group">
                <Badge className="absolute top-4 right-4 bg-primary/20 text-primary border-primary/30 py-1 px-3 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Tarifa 2026
                </Badge>

                <CardHeader className="text-center pt-12 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-white uppercase tracking-tight">
                    {range.nombreZona || `Zona ${index + 1}`}
                  </CardTitle>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">
                    {index === 0 ? "Radio céntrico" : index === 1 ? "Periferia cercana" : index === 2 ? "Zonas alejadas" : "Límites de ciudad"}
                  </p>
                  <div className="text-4xl font-black text-white mt-6 font-[family-name:var(--font-orbitron)] italic tracking-tighter">
                    ${range.precioRango.toLocaleString('es-AR')}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow pb-12">
                  <p className="text-gray-400 mb-8 text-center text-sm font-[family-name:var(--font-roboto)] leading-relaxed">
                    {staticData[index]?.description || "Servicio premium garantizado"}
                  </p>
                  <ul className="space-y-4 font-[family-name:var(--font-roboto)]">
                    {(staticData[index]?.features || ["Elegís rango horario", "Seguimiento real"]).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <ArrowRightCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-12"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/5 border-white/10 backdrop-blur-md rounded-3xl overflow-hidden p-8 md:p-12">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-bold tracking-widest mb-6 uppercase">
                    COTIZACIÓN DINÁMICA
                  </div>
                  <h3 className="font-[family-name:var(--font-orbitron)] text-3xl font-black text-white uppercase tracking-tighter mb-4 italic">
                    ZONA 5: <span className="text-secondary">$1.000 / KM</span>
                  </h3>
                  <p className="text-gray-400 font-[family-name:var(--font-roboto)] leading-relaxed">
                    Para envíos de larga distancia fuera del ejido urbano o una cotización precisa con mapa, utiliza nuestro cotizador inteligente.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                   <Button
                    asChild
                    className="bg-secondary hover:bg-secondary/90 text-black font-[family-name:var(--font-orbitron)] font-black px-10 py-6 rounded-2xl transition-all uppercase tracking-tight shadow-[0_0_20px_rgba(251,191,36,0.3)] h-auto text-lg"
                  >
                    <Link href="/cotizar/express">
                      <Calculator className="w-6 h-6 mr-3" />
                      IR AL COTIZADOR
                    </Link>
                  </Button>
                </div>
             </div>
          </Card>
        </motion.div>

         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-12"
         >
           <Card className="bg-white/5 border-white/10 backdrop-blur-sm rounded-3xl p-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
              <div className="font-[family-name:var(--font-roboto)]">
                <h4 className="font-bold text-white text-lg mb-4 uppercase tracking-tight">Condiciones del Servicio Express:</h4>
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
                  <ul className="text-sm text-gray-400 space-y-3">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>Tolerancia:</strong> 10 min en puerta.</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>Recargo lluvia:</strong> 50% sobre el valor.</li>
                  </ul>
                  <ul className="text-sm text-gray-400 space-y-3">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>Bulto excedente:</strong> +$1.800 (5kg/40cm).</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>Anticipación:</strong> Mínimo 2 horas.</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
