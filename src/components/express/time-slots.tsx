'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Zap, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function TimeSlots() {
  const timeSlots = [
    {
      icon: Zap,
      title: "Express Inmediato",
      time: "30-60 minutos",
      description: "Para emergencias y documentos",
      price: "Desde $3.500",
      features: ["Máxima prioridad", "Seguimiento en vivo", "Confirmación inmediata"],
    },
    {
      icon: Clock,
      title: "Express Mañana",
      time: "9:00 - 13:00",
      description: "Entrega garantizada en horario matutino",
      price: "Desde $2.800",
      features: ["Horario comercial", "Ideal para oficinas", "Seguimiento completo"],
    },
    {
      icon: Calendar,
      title: "Express Tarde",
      time: "14:00 - 18:00",
      description: "Perfecto para entregas de tarde",
      price: "Desde $2.800",
      features: ["Horario extendido", "Entregas residenciales", "Flexibilidad horaria"],
    },
  ]

  return (
    <section className="py-24 px-4 bg-[#050810] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter">
              HORARIOS <span className="text-primary">EXPRESS</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
              Elige el horario que mejor se adapte a tus necesidades.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {timeSlots.map((slot, index) => {
            const IconComponent = slot.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:border-primary/50 transition-all duration-300 rounded-3xl overflow-hidden h-full flex flex-col group">
                  <CardContent className="p-10 text-center relative">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rotate-45 translate-x-12 -translate-y-12 group-hover:bg-primary/5 transition-colors" />

                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform relative">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-white mb-2 uppercase tracking-tight">{slot.title}</h3>
                    <div className="text-3xl font-black text-primary mb-4 font-[family-name:var(--font-orbitron)] italic tracking-tighter">{slot.time}</div>
                    <p className="text-gray-400 text-sm mb-6 font-[family-name:var(--font-roboto)]">{slot.description}</p>
                    <div className="text-xl font-bold text-white mb-8 font-[family-name:var(--font-orbitron)]">{slot.price}</div>
                    <ul className="space-y-3 font-[family-name:var(--font-roboto)]">
                      {slot.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-400 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
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
