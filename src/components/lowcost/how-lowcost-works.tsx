'use client';

import React from 'react';
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function HowLowcostWorks() {
  const steps = [
    {
      title: "1. Despacho",
      description: "Prepara tus pedidos y cárgalos en nuestro sistema antes del horario de corte.",
    },
    {
      title: "2. Recolección",
      description: "Nuestro equipo retira todos tus paquetes en una sola visita a tu local o depósito.",
    },
    {
      title: "3. Ruteo",
      description: "Utilizamos algoritmos de IA para trazar la ruta más corta y eficiente.",
    },
    {
      title: "4. Entrega",
      description: "Entregamos todos los paquetes en el transcurso del día antes de las 19:00 hs.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
       <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-anton text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter">
              ¿CÓMO <span className="text-secondary drop-shadow-[0_0_15px_rgba(255,230,0,0.35)]">FUNCIONA?</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-none shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
              Un proceso simple y transparente diseñado para maximizar tu productividad.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 group glassmorphism shadow-crate rounded-none"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-none" />
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 border border-primary/40 rounded-none flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                 <CheckCircle2 className="w-6 h-6 text-primary group-hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)] transition-all" />
              </div>
              <h3 className="font-bebas text-xl font-bold mb-4 uppercase text-white tracking-wider">{step.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed font-sans">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
