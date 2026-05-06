'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, ShieldCheck, Clock, MapPin, Smartphone, UserCheck } from "lucide-react"
import { motion } from "framer-motion"

export function MercadoLibreBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Más Ventas",
      description: "Los productos con 'Llega hoy' convierten hasta un 40% más que los envíos normales.",
    },
    {
      icon: ShieldCheck,
      title: "Reputación Full",
      description: "Mantenemos tu termómetro en verde cumpliendo el 100% de las promesas de entrega.",
    },
    {
      icon: Clock,
      title: "Flexibilidad Horaria",
      description: "Recolecciones diarias adaptadas a tu volumen de ventas y horarios de despacho.",
    },
    {
      icon: MapPin,
      title: "Cobertura MDP",
      description: "Cubrimos todas las zonas habilitadas por MercadoLibre Flex en Mar del Plata.",
    },
    {
      icon: Smartphone,
      title: "App de Control",
      description: "Gestiona y monitorea tus despachos desde nuestra plataforma exclusiva.",
    },
    {
      icon: UserCheck,
      title: "Choferes Calificados",
      description: "Personal capacitado para brindar la mejor experiencia de entrega a tus clientes.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-[#050810] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter">
              BENEFICIOS <span className="text-primary">PARA VENDEDORES</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
              La solución definitiva para llevar tu tienda de MercadoLibre al siguiente nivel de competitividad.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full bg-white/5 border-white/10 hover:border-primary/30 transition-all group backdrop-blur-sm rounded-3xl overflow-hidden">
                  <CardContent className="p-10 relative">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rotate-45 translate-x-12 -translate-y-12 group-hover:bg-primary/5 transition-colors" />

                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold mb-4 uppercase text-white tracking-tight">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-roboto)]">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
