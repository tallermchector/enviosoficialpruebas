'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, ShieldCheck, CheckCircle2, Play, Globe, ArrowRight, MousePointer2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const VisionSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  const features = [
    { icon: <Zap className="text-secondary" />, title: "Entregas a Tiempo", text: "Puntualidad garantizada en cada envío" },
    { icon: <ShieldCheck className="text-primary-navy" />, title: "Envíos Seguros", text: "Protección total de tus paquetes" }
  ];

  const stats = [
    { label: "Confianza local comprobada", value: "+5.000", color: "text-primary" },
    { label: "Innovación constante en última milla", value: "7 Años", color: "text-primary" },
    { label: "Motocicletas dedicadas para máxima agilidad", value: "Flota Exclusiva", color: "text-primary" }
  ];

  return (
    <section className="relative min-h-[100dvh] pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 bg-[#050810] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 tech-grid-overlay" />
      </div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-none bg-primary/5 border border-primary/10 text-primary text-xxs font-black tracking-[0.3em] mb-10 uppercase">
              <span className="w-1.5 h-1.5 rounded-none bg-primary animate-pulse" /> Partner Logístico Especializado
            </div>

            <h2 className="text-headline-lg-mobile md:text-display-lg mb-10 uppercase text-primary text-balance">
              Llegá más rápido <br />
              <span className="text-white bg-primary px-3 py-1 inline-block mt-2 italic shadow-hard-secondary">y sin límites</span>
            </h2>

            <p className="text-primary/70 text-body-lg mb-12 max-w-2xl">
              Transformá <span className="font-bold text-primary">tus costos fijos en soluciones flexibles</span> que acompañan el crecimiento de tu negocio. Olvidate de las demoras y enfocate en vender.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-5 group"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-14 h-14 rounded-none bg-primary/5 border border-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/50 transition-[background-color,border-color,transform] duration-300 shadow-md">
                    {React.cloneElement(item.icon, { size: 28, 'aria-hidden': 'true' })}
                  </div>
                  <div>
                    <h3 className="text-headline-md text-sm text-primary uppercase mb-2 group-hover:text-primary-navy transition-colors">{item.title}</h3>
                    <p className="text-primary/75 text-body-md text-xs">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-16 gap-y-10 pt-10 border-t border-primary/10">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col max-w-[200px]">
                  <span className={`text-headline-lg-mobile md:text-headline-lg ${stat.color} tracking-tighter italic drop-shadow-md leading-tight`}>
                    {stat.value}
                  </span>
                  <span className="text-label-sm text-primary/60 uppercase mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}

              <motion.div
                whileHover={{ rotate: 90 }}
                className="hidden md:flex ml-auto w-16 h-16 rounded-none border border-primary/10 items-center justify-center text-primary/10 opacity-40 transition-transform duration-300"
              >
                <Globe size={24} aria-hidden="true" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative"
            style={{ scale, y }}
          >
            {/* Visual Glass Frame */}
            <div className="relative aspect-[4/5] rounded-none overflow-hidden group border border-primary/15 shadow-[0_40px_100px_-20px_rgba(6,54,165,0.15)]">
              <Image
                src="/hero/mapa_background.jpeg"
                alt="Vanguardia Logística"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[3000ms] group-hover:scale-110 filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0636A5]/50 via-transparent to-transparent opacity-90" />

              {/* Animated Inner Glow */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Floating Interactive Hub */}
              <div className="absolute bottom-10 left-8 right-8 p-10 rounded-none bg-[#0636A5] text-white border-2 border-primary flex items-center justify-between group-hover:bg-[#0636A5]/95 transition-all duration-700 shadow-2xl">
                <div>
                  <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight mb-2">Conocé más sobre nosotros</h3>
                  <div className="flex items-center gap-3 text-xxs text-secondary font-black tracking-[0.2em] uppercase">
                    <CheckCircle2 size={14} className="animate-pulse text-secondary" aria-hidden="true" /> ¿Querés potenciar tus entregas? Sumate.
                  </div>
                </div>
                <Link href="/nosotros/sobre-nosotros">
                  {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                  }
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 12 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Ir a página sobre nosotros"
                    className="w-16 h-16 rounded-none bg-secondary text-primary flex items-center justify-center shadow-hard-secondary hover:bg-secondary/90 transition-[background-color,border-color,transform,box-shadow] duration-200 border border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer"
                  >
                    <Play size={24} fill="currentColor" className="ml-1" aria-hidden="true" />
                  </motion.a>
                </Link>
              </div>

              {/* Holographic Status */}
              <div className="absolute top-10 right-10 flex flex-col items-end gap-3">
                <div className="px-3 py-1.5 rounded-none bg-secondary/20 backdrop-blur-md border border-secondary/30 text-[9px] font-black text-secondary uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-secondary animate-ping" />
                  EN LÍNEA
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-secondary/50 to-transparent mr-4" />
              </div>
            </div>

            {/* Background Light Leaks */}
            <div className="absolute -z-10 -bottom-20 -right-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
            <div className="absolute -z-10 -top-20 -left-20 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] mix-blend-screen opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};