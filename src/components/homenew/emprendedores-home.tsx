'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, TrendingUp, Zap, ArrowRight, CheckCircle, Package, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from "@/lib/utils";

export const EmprendedoresHome = () => {
  const solutions = [
    {
      icon: TrendingUp,
      title: "Plan Emprendedores",
      description: "Tarifas preferenciales y servicios adaptados para hacer crecer tu negocio online",
      features: ["Tarifas LowCost", "Facturación mensual", "Soporte dedicado", "Reportes detallados"],
      link: "/servicios/plan-emprendedores",
      image: "/cards/card1.webp",
      badge: "Emprendedores",
    },
    {
      icon: Package,
      title: "Envíos Flex MercadoLibre",
      description: "Integración perfecta con MercadoLibre para potenciar tus ventas",
      features: ["Entregas el mismo día", "Mejora tu reputación", "Tarifas LowCost", "API integrada"],
      link: "/servicios/enviosflex",
      image: "/cards/card2.webp",
      badge: "MercadoLibre",
    },
    {
      icon: Users,
      title: "Moto Fija para Negocios",
      description: "Repartidor dedicado exclusivamente para tu empresa",
      features: ["Repartidor exclusivo", "Horarios personalizados", "Rutas optimizadas", "Seguimiento GPS"],
      link: "/servicios/moto-fija",
      image: "/cards/card3.webp",
      badge: "Dedicado",
    },
  ];

  return (
    <section className="relative py-32 px-4 overflow-hidden bg-[#050810]">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-blue-400 text-xs font-bold tracking-widest mb-6 uppercase"
          >
            <Zap size={14} className="animate-pulse" /> SOLUCIONES PARA EMPRENDEDORES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-orbitron)] text-4xl md:text-6xl font-black italic tracking-tighter leading-tight mb-8 uppercase text-white"
          >
            IMPULSA TU <span className="text-primary">NEGOCIO</span> <br />
            CON LOGÍSTICA <span className="text-secondary">ELITE</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-[family-name:var(--font-roboto)] text-gray-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Diseñamos servicios específicos para ayudar a crecer tu negocio online. Desde
            tarifas preferenciales hasta integración con plataformas de venta líderes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-2xl"
            >
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/40 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex justify-between items-start mb-auto">
                  <span className="px-3 py-1 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">
                    {solution.badge}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center text-white">
                    <solution.icon size={24} />
                  </div>
                </div>

                <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-white mb-3 uppercase tracking-tight group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2 font-[family-name:var(--font-roboto)]">
                  {solution.description}
                </p>

                <div className="space-y-2 mb-8">
                  {solution.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-white/70">
                      <CheckCircle size={14} className="text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={solution.link}
                  className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-[family-name:var(--font-orbitron)] font-bold text-sm text-center flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-all"
                >
                  VER DETALLES <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 text-lg mb-8">¿Necesitas una solución personalizada para tu empresa?</p>
          <Link
            href="/contacto"
            className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-[family-name:var(--font-orbitron)] font-bold rounded-xl transition-all inline-flex items-center gap-3 group"
          >
            HABLEMOS DE TU PROYECTO
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
