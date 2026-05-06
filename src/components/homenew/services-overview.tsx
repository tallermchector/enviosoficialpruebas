'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Package, Truck, ChevronRight, Shield, Globe, Clock, ArrowRight, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

export const ServicesOverview = () => {
  const services = [
    {
      title: "Envíos Express",
      bajada: "Prioridad absoluta y certeza total.",
      desc: <>Diseñado para operaciones de alta criticidad horaria. <span className="font-bold text-gray-200">Vos elegís el rango exacto</span> de entrega con solo 2 horas de anticipación. Garantizamos precisión en el tiempo de tu cliente final.</>,
      icon: <Zap />,
      href: "/servicios/envios-express",
      buttonText: "Solicitar Express",
      className: "md:col-span-2 md:row-span-1 bg-primary/10 border-primary/20 hover:border-primary/50",
      iconClassName: "bg-primary text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]",
      badge: "ALTA PRIORIDAD",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Envíos LowCost",
      bajada: "Máxima rentabilidad y eficiencia en ruteo masivo.",
      desc: <>Variabilizá tus costos logísticos. <span className="font-bold text-gray-200">Ingresá tus pedidos</span> antes de las 13:00 hs y te <span className="font-bold text-gray-200">garantizamos la entrega en el día</span> antes de las 19:00 hs.</>,
      icon: <Clock />,
      href: "/servicios/envios-lowcost",
      buttonText: "Ahorrá con LowCost",
      className: "md:col-span-2 md:row-span-1 bg-white/[0.03] border-white/5 hover:border-secondary/40",
      iconClassName: "bg-secondary text-black shadow-[0_0_20px_rgba(234,179,8,0.3)]",
    },
    {
      title: "Envíos Flex (MercadoLibre)",
      bajada: "Potenciá tu reputación al máximo.",
      desc: <>Somos expertos en MercadoLibre. Despachá hasta las 15:00 hs y nosotros cumplimos tus <span className="font-bold text-gray-200">acuerdos de nivel de servicio (SLAs) Same-Day</span> para que tu termómetro siempre esté en verde.</>,
      icon: <Package />,
      href: "/servicios/enviosflex",
      buttonText: "Activar Envíos Flex",
      className: "md:col-span-2 md:row-span-1 bg-white/[0.03] border-white/5 hover:border-blue-400/30",
      iconClassName: "bg-blue-400/20 text-blue-400",
    },
    {
      title: "E-Commerce & 3PL",
      bajada: "Tercerización integral y cuentas corrientes.",
      desc: <>Más que un envío, somos tu depósito y tu equipo. <span className="font-bold text-gray-200">Soluciones escalables</span> para PyMEs y plataformas digitales, con facturación mensual centralizada.</>,
      icon: <Truck />,
      href: "/servicios/plan-emprendedores",
      buttonText: "Hablar con un asesor",
      className: "md:col-span-2 md:row-span-1 bg-white/[0.03] border-white/5 hover:border-primary/30",
      iconClassName: "bg-primary/20 text-primary",
    }
  ];

  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-[100dvh] pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 bg-[#050810] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[160px] pointer-events-none opacity-50" />

      {/* Section Lines */}
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
              Nuestros Servicios <br />
              <span className="text-primary drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]">Principales</span>
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
              Soluciones adaptadas a cada necesidad, desde entregas urgentes hasta servicios dedicados para tu negocio.
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
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={cn(
                "group p-6 lg:p-10 rounded-[32px] lg:rounded-[40px] glass-card transition-all duration-500 flex flex-col justify-between relative overflow-hidden",
                service.className
              )}
            >
              {/* Background Highlight on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className={cn(
                  "w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 lg:mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                  service.iconClassName
                )}>
                  {React.cloneElement(service.icon as React.ReactElement<{ size?: number; className?: string; fill?: string }>, { size: 28 })}
                </div>

                <h3 className="font-display text-orbitron text-xl md:text-2xl lg:text-3xl font-black mb-1 uppercase text-white tracking-tight leading-tight">
                  {service.title}
                </h3>
                <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                  {service.bajada}
                </p>
                <div className="text-gray-400 text-xs md:text-sm lg:text-base leading-relaxed mb-6 font-[family-name:var(--font-roboto)] font-light max-w-[320px]">
                  {service.desc}
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <Link
                  href={service.href}
                  aria-label={`Solicitar información sobre ${service.title}`}
                  className="flex items-center gap-3 text-white font-display text-orbitron text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-primary transition-all group-hover:gap-5"
                >
                  {service.buttonText} <ChevronRight size={16} aria-hidden="true" />
                </Link>

                {service.badge && (
                  <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-[9px] font-black tracking-widest uppercase border border-blue-500/30">
                    <Clock size={12} aria-hidden="true" /> {service.badge}
                  </div>
                )}
              </div>

              {/* Decorative side border accent */}
              <div className="absolute top-1/2 -right-1 w-[2px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:via-primary/50 transition-all" />

              {/* Specific Visual for the main card */}
              {idx === 0 && (
                <>
                  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/30 transition-all duration-700" />
                  <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity" aria-hidden="true">
                    <MousePointer2 size={120} className="rotate-12 text-white" />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};