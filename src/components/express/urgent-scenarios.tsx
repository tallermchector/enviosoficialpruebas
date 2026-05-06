'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Heart, Briefcase, Gift } from "lucide-react"
import { motion } from "framer-motion"

export function UrgentScenarios() {
  const scenarios = [
    {
      icon: FileText,
      title: "Documentos",
      description: "Contratos, documentos legales, certificados que no pueden esperar.",
      examples: ["Documentos notariales", "Contratos comerciales", "Certificados médicos"],
    },
    {
      icon: Heart,
      title: "Salud",
      description: "Medicamentos, análisis médicos y suministros de salud con prioridad de entrega.",
      examples: ["Medicamentos especiales", "Resultados de laboratorio", "Suministros médicos"],
    },
    {
      icon: Briefcase,
      title: "Negocios",
      description: "Entregas comerciales que no pueden retrasarse sin afectar operaciones.",
      examples: ["Repuestos", "Muestras comerciales", "Productos perecederos"],
    },
    {
      icon: Gift,
      title: "Regalos",
      description: "Regalos y sorpresas que deben llegar en un rango horario acotado",
      examples: ["Regalos de cumpleaños", "Desayunos/Meriendas", "Comida especial"],
    },
  ]

  return (
    <section className="py-24 px-4 bg-[#0a0d16] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter">
              ¿CUÁNDO NECESITAS <span className="text-primary">EXPRESS?</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
              Situaciones donde cada minuto cuenta y la rapidez es fundamental.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {scenarios.map((scenario, index) => {
            const IconComponent = scenario.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm group hover:border-primary/30 transition-all h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-7 h-7 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold mb-3 uppercase text-white tracking-tight">{scenario.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-roboto)]">{scenario.description}</p>
                      </div>
                    </div>
                    <div className="ml-20">
                      <h4 className="font-[family-name:var(--font-orbitron)] text-xs font-bold text-white/50 mb-4 uppercase tracking-widest">Ejemplos comunes:</h4>
                      <ul className="space-y-3 font-[family-name:var(--font-roboto)]">
                        {scenario.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="text-sm text-gray-400 flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
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
