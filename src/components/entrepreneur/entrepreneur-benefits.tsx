'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Package, ShieldCheck, CreditCard, BarChart, Truck, Users } from "lucide-react"
import { motion } from "framer-motion"

export function EntrepreneurBenefits() {
  const benefits = [
    {
      icon: Package,
      title: "Almacenaje Seguro",
      description: "Contamos con depósitos propios con seguridad 24/7 para tu mercadería.",
    },
    {
      icon: ShieldCheck,
      title: "Control de Stock",
      description: "Sistemas integrados para que sepas exactamente qué tienes y qué falta.",
    },
    {
      icon: CreditCard,
      title: "Cuenta Corriente",
      description: "Paga tus servicios de forma quincenal o mensual según tu conveniencia.",
    },
    {
      icon: BarChart,
      title: "Reportes Detallados",
      description: "Métricas claras sobre tus entregas, devoluciones y tiempos promedio.",
    },
    {
      icon: Truck,
      title: "Flota Exclusiva",
      description: "Prioridad en el ruteo para pedidos corporativos y de emprendedores.",
    },
    {
      icon: Users,
      title: "Asesor Dedicado",
      description: "Un ejecutivo de cuentas para resolver todas tus dudas operativas.",
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
              BENEFICIOS <span className="text-primary">PARA NEGOCIOS</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
              Potenciamos tu capacidad operativa con soluciones logísticas de clase mundial.
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
