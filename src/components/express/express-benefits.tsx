'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, MapPin, Phone, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"

function UrgencyClock() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
      <motion.div
        className="absolute top-1/2 left-1/2 w-1 h-12 bg-primary origin-bottom -translate-x-1/2 -translate-y-full rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-1 h-8 bg-secondary origin-bottom -translate-x-1/2 -translate-y-full rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg" />
      <div className="absolute inset-0 border-t-4 border-primary rounded-full animate-spin-slow opacity-30" />
    </div>
  )
}

export function ExpressBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Alta criticidad horaria",
      description: "Diseñado para cuando el tiempo es el factor crítico. Vos elegís el límite de entrega (ej. \"antes de las 17:00 hs\").",
    },
    {
      icon: Zap,
      title: "Anticipación mínima",
      description: "Solo requerimos 2 horas de anticipación para garantizar la viabilidad del ruteo exclusivo.",
    },
    {
      icon: Award,
      title: "Certeza Absoluta",
      description: "Precisión garantizada en el tiempo de tu cliente final.",
    },
    {
      icon: MapPin,
      title: "Seguimiento en Tiempo Real",
      description: "Monitoreá tu envío en vivo desde la recolección hasta la entrega final.",
    },
    {
      icon: Phone,
      title: "Soporte Prioritario",
      description: "Línea directa de atención para clientes express con respuesta inmediata.",
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
            <UrgencyClock />
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter">
              ¿POR QUÉ <span className="text-primary">ELEGIR EXPRESS?</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
              Descubre todas las ventajas de nuestro servicio premium de entregas rápidas.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
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
