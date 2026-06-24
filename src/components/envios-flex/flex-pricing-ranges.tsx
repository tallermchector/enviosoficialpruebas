"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coins, ArrowRightCircle, HelpCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PriceRange } from '../../../generated/prisma/client/client';

export type PriceRangeClient = Omit<PriceRange, 'distanciaMinKm' | 'distanciaMaxKm' | 'precioRango'> & {
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
};

interface FlexPricingRangesProps {
  priceRanges: PriceRangeClient[];
}

export function FlexPricingRanges({ priceRanges }: FlexPricingRangesProps) {
    const flexTiers = [
        {
            name: "Nivel 1",
            price: "Tarifa Clásica",
            distanceRange: "1 a 4 envíos diarios",
            description: "Ideal para vendedores que recién comienzan con Flex.",
            features: [
                "Tarifa zonificada estándar",
                "Segunda visita al 50%",
                "Retiro sin cargo",
            ],
            badgeText: "Crecimiento",
        },
        {
            name: "Nivel 2",
            price: "Tarifa Híbrida",
            distanceRange: "+5 envíos diarios",
            description: "Beneficios exclusivos para vendedores constantes.",
            features: [
                "Zona 4 y 5 tope fijo $6.500",
                "2da visita GRATIS (Zona 1)",
                "Prioridad en ruteo",
            ],
            badgeText: "Pro",
        },
        {
            name: "Nivel 3",
            price: "$4.500",
            distanceRange: "Grandes Cuentas (+10)",
            description: "Máxima eficiencia y previsibilidad de costos.",
            features: [
                "Tarifa PLANA toda la ciudad",
                "Reprogramaciones 100% GRATIS",
                "Soporte dedicado",
            ],
            badgeText: "Elite",
        },
    ];

    const handleWhatsAppClick = () => {
        const phoneNumber = "5492236602699";
        const message = "Hola, necesito cotizar un Envío Flex de más de 13 km.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <section className="py-24 px-4 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-anton text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter">
                            NIVELES Y <span className="text-primary">TARIFAS FLEX</span>
                        </h2>
                        <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-none" />
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
                            Escalá tu negocio con MercadoLibre Flex. A mayor volumen, mejores beneficios y tarifas para tus envíos.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {flexTiers.map((tier, index) => {
                        return (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="relative glassmorphism border border-white/10 hover:border-glow-secondary transition-stitch rounded-none overflow-hidden h-full flex flex-col group shadow-crate hover:shadow-industrial-secondary">
                                    <Badge className="absolute top-4 right-4 bg-primary/20 text-primary border-primary/30 py-1 px-3 rounded-none text-xxs font-bold uppercase tracking-widest font-bebas">
                                        {tier.badgeText}
                                    </Badge>

                                    <CardHeader className="text-center pt-12 pb-6">
                                        <div className="w-16 h-16 bg-primary/10 rounded-none flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all border border-primary/20">
                                            <Coins className="w-8 h-8 text-primary" />
                                        </div>
                                        <CardTitle className="font-anton text-2xl font-bold text-white uppercase tracking-tight">
                                            {tier.name}
                                        </CardTitle>
                                        <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1 font-bebas">
                                            {tier.distanceRange}
                                        </p>
                                        <div className="text-4xl font-black text-secondary mt-6 font-anton italic tracking-tighter">
                                            {tier.price}
                                        </div>
                                    </CardHeader>

                                    <CardContent className="flex-grow pb-12">
                                        <p className="text-gray-400 mb-8 text-center text-sm font-sans leading-relaxed">
                                            {tier.description}
                                        </p>
                                        <ul className="space-y-4 font-sans">
                                            {tier.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                                                    <ArrowRightCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                             </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <Card className="glassmorphism border border-white/10 rounded-none overflow-hidden p-8 md:p-12 shadow-crate hover:border-glow-secondary transition-stitch">
                         <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-secondary/10 border border-secondary/20 text-secondary text-xxs font-bold tracking-widest mb-6 uppercase font-bebas">
                                BENEFICIO CLIMA
                              </div>
                              <h3 className="font-anton text-3xl font-black text-white uppercase tracking-tighter mb-4 italic">
                                RECARGO POR LLUVIA: <span className="text-secondary">SOLO 30%</span>
                              </h3>
                              <p className="text-gray-400 font-sans leading-relaxed">
                                Para nuestros clientes Flex, el recargo por días de lluvia es reducido. Minimizamos el impacto en tus costos operativos.
                              </p>
                            </div>
                            <div className="flex justify-center md:justify-end">
                               <Button
                                onClick={handleWhatsAppClick}
                                className="bg-secondary hover:bg-yellow-400 text-black font-display font-black px-10 py-6 rounded-none transition-all uppercase tracking-tight shadow-[0_0_20px_rgba(251,191,36,0.3)] h-auto text-label-md hover:scale-105"
                              >
                                <Image src="/icon/icon-whatsapp.svg" alt="WhatsApp Icon" width={24} height={24} className="w-6 h-6 mr-3" />
                                MÁS INFORMACIÓN FLEX
                              </Button>
                            </div>
                         </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
