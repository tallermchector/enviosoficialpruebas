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
    card: "glassmorphism-primary hover:border-glow-primary shadow-crate hover:shadow-industrial transition-stitch",
    icon: "bg-primary/20 border border-primary/30 text-white drop-shadow-[0_0_15px_rgba(6,53,166,0.5)]",
    accent: "text-secondary",
    text: "text-white",
    desc: "text-gray-300 [&>span]:text-secondary font-sans",
    button: "text-gray-300 hover:text-secondary group-hover:text-secondary",
    badge: "bg-secondary/15 text-secondary border-secondary/20",
    accentColor: "secondary",
    glowColor: "rgba(6,53,166,0.2)"
  },
  lowcost: {
    card: "glassmorphism hover:border-glow-secondary shadow-crate hover:shadow-industrial-secondary transition-stitch",
    icon: "bg-white/5 border border-white/10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]",
    accent: "text-secondary",
    text: "text-white",
    desc: "text-gray-300 [&>span]:text-white font-sans",
    button: "text-gray-300 hover:text-white group-hover:text-white",
    badge: "bg-white/5 text-white border-white/10",
    accentColor: "white",
    glowColor: "rgba(255,255,255,0.05)"
  },
  meli: {
    card: "glassmorphism hover:border-glow-secondary shadow-crate hover:shadow-industrial-secondary transition-stitch",
    icon: "bg-secondary/20 border border-secondary/30 text-secondary drop-shadow-[0_0_15px_rgba(255,236,0,0.4)]",
    accent: "text-secondary",
    text: "text-white",
    desc: "text-gray-300 [&>span]:text-secondary font-sans",
    button: "text-gray-300 hover:text-secondary group-hover:text-secondary",
    badge: "bg-secondary/10 text-secondary border-secondary/20",
    accentColor: "secondary",
    glowColor: "rgba(255,236,0,0.15)"
  },
  ecommerce: {
    card: "glassmorphism-primary hover:border-glow-primary shadow-crate hover:shadow-industrial transition-stitch",
    icon: "bg-primary/20 border border-primary/30 text-white drop-shadow-[0_0_15px_rgba(6,53,166,0.4)]",
    accent: "text-secondary",
    text: "text-white",
    desc: "text-gray-300 [&>span]:text-primary font-sans",
    button: "text-gray-300 hover:text-primary group-hover:text-primary",
    badge: "bg-primary/10 text-primary border-primary/20",
    accentColor: "primary",
    glowColor: "rgba(6,53,166,0.15)"
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
      bajada: "Tus ventas en las mejores manos.",
      desc: <>Somos expertos en MercadoLibre. Cumplimos tus <span className="font-bold">acuerdos de nivel de servicio (SLAs) Same-Day</span> para que tu termómetro esté en verde.</>,
      icon: <Package />,
      href: "/servicios/enviosflex",
      buttonText: "Activar Envíos Flex",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      theme: "ecommerce",
      title: "E-Commerce & 3PL",
      bajada: "Conectamos tu negocio con la ciudad.",
      desc: <>Más que un envío, somos tu depósito. <span className="font-bold">Soluciones escalables</span> para PyMEs con facturación mensual centralizada.</>,
      icon: <Truck />,
      href: "/servicios/plan-emprendedores",
      buttonText: "Hablá con un asesor",
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
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-none glass-card border border-primary/20 text-secondary text-xxs font-black tracking-[0.2em] mb-8 uppercase">
              <span className="w-1.5 h-1.5 rounded-none bg-secondary animate-pulse" /> Nuestros Servicios
            </div>
            <h2 className="text-headline-lg-mobile md:text-display-lg italic uppercase text-white text-balance">
              Elegí tu plan <br />
              <span className="text-primary drop-shadow-[0_0_20px_rgba(6,53,166,0.4)]">de entregas</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-md lg:border-l lg:border-white/10 lg:pl-10"
          >
            <p className="text-gray-400 text-body-lg">
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
                  "group p-6 lg:p-10 rounded-none glass-card transition-[background-color,border-color,transform,box-shadow] duration-500 flex flex-col justify-between relative overflow-hidden",
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
                    "w-12 h-12 lg:w-16 lg:h-16 rounded-none flex items-center justify-center mb-6 lg:mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                    theme.icon
                  )}>
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28, 'aria-hidden': 'true' })}
                  </div>

                  <h3 className={cn("text-headline-md mb-1 uppercase", theme.text)}>
                    {service.title}
                  </h3>
                  <p className={cn("text-label-sm uppercase mb-4 font-bebas tracking-wider text-[15px]", theme.accent)}>
                    {service.bajada}
                  </p>
                  <div className={cn("text-body-md mb-6 max-w-[320px]", theme.desc)}>
                    {service.desc}
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between font-bebas text-[17px] tracking-wider">
                  <Link
                    href={service.href}
                    className={cn(
                      "flex items-center gap-3 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm",
                      theme.accentColor === 'secondary' ? 'focus-visible:ring-secondary' : 
                      theme.accentColor === 'primary' ? 'focus-visible:ring-primary' : 'focus-visible:ring-white',
                      theme.button
                    )}
                  >
                    {service.buttonText} <ChevronRight size={16} aria-hidden="true" />
                  </Link>

                  {service.badge && (
                    <div className={cn("hidden md:flex items-center gap-2 px-3 py-1.5 rounded-none text-[9px] font-black tracking-widest uppercase border", theme.badge)}>
                      {service.badge}
                    </div>
                  )}
                </div>

                {/* Decorative side border accent */}
                <div className={cn("absolute top-1/2 -right-1 w-[2px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:via-current transition-colors duration-300", theme.accent)} />

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