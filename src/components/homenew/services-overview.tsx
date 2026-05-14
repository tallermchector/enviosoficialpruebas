'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Zap, Package, Truck, ChevronRight, Clock, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

// Definición de tipos para la tematización semántica
type ServiceTheme = {
  card: string;
  icon: string;
  accent: string;
  text: string;
  desc: string;
  button: string;
  badge?: string;
  accentColor: string;
  glowColor: string;
};

const THEMES: Record<string, ServiceTheme> = {
  express: {
    card: "bg-gradient-to-br from-zinc-900/90 to-black border-red-500/20 hover:border-red-500/40 backdrop-blur-md",
    icon: "bg-red-500/10 border border-red-500/20 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]",
    accent: "text-red-500",
    text: "text-white",
    desc: "text-gray-400 [&>span]:text-gray-200",
    button: "text-white group-hover:text-red-500",
    badge: "bg-red-500/20 text-red-500 border-red-500/30",
    accentColor: "red-500",
    glowColor: "rgba(239,68,68,0.2)"
  },
  lowcost: {
    card: "bg-gradient-to-br from-slate-900/90 to-slate-950/90 border-cyan-500/20 hover:border-cyan-500/40 backdrop-blur-md",
    icon: "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]",
    accent: "text-cyan-400",
    text: "text-white",
    desc: "text-gray-400 [&>span]:text-gray-200",
    button: "text-white group-hover:text-cyan-400",
    badge: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    accentColor: "cyan-400",
    glowColor: "rgba(6,182,212,0.15)"
  },
  meli: {
    card: "bg-gradient-to-br from-[#FFFDE7]/95 to-[#FFF9C4]/95 border-[#FFE600]/40 hover:border-[#2D3277]/40 shadow-xl shadow-yellow-500/5 backdrop-blur-md",
    icon: "bg-[#2D3277]/10 border border-[#2D3277]/20 text-[#2D3277]",
    accent: "text-[#2D3277]",
    text: "text-[#2D3277]",
    desc: "text-slate-700 [&>span]:text-slate-900",
    button: "text-[#2D3277] group-hover:gap-6",
    badge: "bg-[#2D3277]/10 text-[#2D3277] border-[#2D3277]/20",
    accentColor: "[#2D3277]",
    glowColor: "rgba(45,50,119,0.1)"
  },
  ecommerce: {
    card: "bg-gradient-to-br from-emerald-50/95 to-white/95 border-emerald-500/20 hover:border-emerald-500/40 backdrop-blur-md",
    icon: "bg-emerald-500/10 border border-emerald-500/20 text-emerald-600",
    accent: "text-emerald-700",
    text: "text-emerald-900",
    desc: "text-emerald-800/80 [&>span]:text-emerald-900",
    button: "text-emerald-700 group-hover:text-emerald-900",
    badge: "bg-emerald-500/20 text-emerald-800 border-emerald-500/30",
    accentColor: "emerald-500",
    glowColor: "rgba(16,185,129,0.2)"
  }
};

export const ServicesOverview = () => {
  const services = [
    {
      theme: "express",
      title: "Envíos Express",
      bajada: "Prioridad absoluta y certeza total.",
      desc: <>Diseñado para operaciones de alta criticidad horaria. <span className="font-bold">Vos elegís el rango exacto</span> de entrega con solo 2 horas de anticipación.</>,
      icon: <Zap />,
      href: "/servicios/envios-express",
      buttonText: "Solicitar Express",
      badge: "ALTA PRIORIDAD",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      theme: "lowcost",
      title: "Envíos LowCost",
      bajada: "Rentabilidad y ruteo masivo.",
      desc: <>Variabilizá tus costos logísticos. <span className="font-bold">Ingresá tus pedidos</span> antes de las 13:00 hs y garantizamos entrega en el día.</>,
      icon: <Clock />,
      href: "/servicios/envios-lowcost",
      buttonText: "Ahorrá con LowCost",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      theme: "meli",
      title: "Envíos Flex (MercadoLibre)",
      bajada: "Potenciá tu reputación al máximo.",
      desc: <>Somos expertos en MercadoLibre. Cumplimos tus <span className="font-bold">acuerdos de nivel de servicio (SLAs) Same-Day</span> para que tu termómetro esté en verde.</>,
      icon: <Package />,
      href: "/servicios/enviosflex",
      buttonText: "Activar Envíos Flex",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      theme: "ecommerce",
      title: "E-Commerce & 3PL",
      bajada: "Tercerización y cuentas corrientes.",
      desc: <>Más que un envío, somos tu depósito. <span className="font-bold">Soluciones escalables</span> para PyMEs con facturación mensual centralizada.</>,
      icon: <Truck />,
      href: "/servicios/plan-emprendedores",
      buttonText: "Hablar con un asesor",
      className: "md:col-span-2 md:row-span-1"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-[100dvh] pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 bg-transparent overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[160px] pointer-events-none opacity-50" />
      
      {/* Section Transition Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full glass-card border border-primary/20 text-blue-400 text-[10px] font-black tracking-[0.2em] mb-8 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> Nuestros Servicios
            </div>
            <h2 className="font-display text-orbitron text-5xl md:text-7xl font-black italic uppercase text-white tracking-tighter leading-[0.9]">
              Soluciones <br />
              <span className="text-primary drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]">Logísticas</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-md lg:border-l lg:border-white/10 lg:pl-10"
          >
            <p className="text-gray-400 text-lg md:text-xl font-[family-name:var(--font-roboto)] font-light leading-relaxed">
              Infraestructura moderna para negocios que no se detienen. Inteligencia aplicada a cada kilómetro.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-6 h-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, idx) => {
            const theme = THEMES[service.theme as keyof typeof THEMES];
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={cn(
                  "group p-6 lg:p-10 rounded-[32px] lg:rounded-[40px] glass-card transition-all duration-500 flex flex-col justify-between relative overflow-hidden",
                  theme.card,
                  service.className
                )}
              >
                {/* Background Highlight on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                  style={{ background: `radial-gradient(circle at top right, ${theme.glowColor}, transparent)` }}
                />

                <div className="relative z-10">
                  <div className={cn(
                    "w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 lg:mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                    theme.icon
                  )}>
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28 })}
                  </div>

                  <h3 className={cn("font-display text-orbitron text-xl md:text-2xl lg:text-3xl font-black mb-1 uppercase tracking-tight leading-tight", theme.text)}>
                    {service.title}
                  </h3>
                  <p className={cn("text-[10px] font-black uppercase tracking-[0.2em] mb-4", theme.accent)}>
                    {service.bajada}
                  </p>
                  <div className={cn("text-xs md:text-sm lg:text-base leading-relaxed mb-6 font-[family-name:var(--font-roboto)] font-light max-w-[320px]", theme.desc)}>
                    {service.desc}
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <Link
                    href={service.href}
                    className={cn("flex items-center gap-3 font-display text-orbitron text-[10px] font-black uppercase tracking-[0.2em] transition-all", theme.button)}
                  >
                    {service.buttonText} <ChevronRight size={16} />
                  </Link>

                  {service.badge && (
                    <div className={cn("hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase border", theme.badge)}>
                      {service.badge}
                    </div>
                  )}
                </div>

                {/* Decorative side border accent */}
                <div className={cn("absolute top-1/2 -right-1 w-[2px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:via-current transition-all", theme.accent)} />

                {/* Specific Visual for the first card */}
                {idx === 0 && (
                  <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true">
                    <MousePointer2 size={120} className="rotate-12 text-white" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};