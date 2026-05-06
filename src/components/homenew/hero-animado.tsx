'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import RotatingCard from '@/components/homenew/rotating-card';
import { Play, ArrowRight, MousePointer2, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function HeroAnimado() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 100]); // Reduced parallax for better perf
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse Parallax Effect for the 3D element
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Simplified spring configuration for less CPU usage
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || typeof window === 'undefined') return;

    // Solo actualizar si estamos en desktop (ancho mayor a 1024px) para evitar bloquear hilos en móviles
    if (window.innerWidth > 1024) {
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const xPct = mouseX / rect.width - 0.5;
      const yPct = mouseY / rect.height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-16 px-4 overflow-hidden bg-[#050810]"
    >
      {/* Dynamic Background Elements */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Image
          src="/bannerenvios.webp"
          alt="Logística Urbana Mar del Plata"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.15]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-transparent to-[#050810]" />
      </motion.div>

      {/* Simplified Background Effects for Performance */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light" />

        {/* Glowing Orbs (Static for better performance) */}
        <div className="absolute -top-[10%] -left-[5%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-yellow-500/10 rounded-full blur-[100px]" />

        {/* Floating Particles/Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <pattern id="grid-dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <motion.div
          className="lg:col-span-7 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 text-blue-400 text-[10px] font-black tracking-[0.3em] mb-8 uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Tu Solución Confiable
          </motion.div>

          <h1
            className="font-display text-orbitron text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black italic tracking-tighter leading-[0.9] mb-4 xl:mb-6 uppercase text-white"
          >
            Servicio de <span className="text-primary drop-shadow-[0_0_25px_rgba(37,99,235,0.4)]">mensajería</span> y <span className="text-secondary italic drop-shadow-[0_0_20px_rgba(234,179,8,0.2)]">delivery</span> Envios Dosruedas
          </h1>

          <p
            className="text-gray-400 text-base lg:text-lg xl:text-xl mb-8 xl:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-[family-name:var(--font-roboto)] font-light"
          >
            Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata. Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
          >
            <Link
              href="/cotizar/express"
              className="group relative px-10 py-5 bg-secondary hover:bg-yellow-400 text-black font-display text-orbitron font-black rounded-2xl transition-all shadow-[0_10px_40px_-10px_rgba(234,179,8,0.4)] uppercase tracking-tight overflow-hidden active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Solicitar Servicio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>

            <Link
              href="/servicios/envios-express"
              aria-label="Ver todos los servicios de envíos"
              className="flex items-center gap-4 group text-white font-display text-orbitron font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors py-2"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all group-hover:scale-110 shadow-xl backdrop-blur-sm" aria-hidden="true">
                <Play className="fill-white text-white ml-1" size={18} />
              </div>
              <span className="text-xs">Ver Servicios</span>
            </Link>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-10 lg:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-white/40">
              <ShieldCheck size={14} className="text-primary" /> 100% SEGURO
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-white/40">
              <Zap size={14} className="text-secondary" /> ULTRA RÁPIDO
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-white/40">
              <Globe size={14} className="text-blue-400" /> COBERTURA TOTAL
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-5 relative flex justify-center items-center h-[350px] lg:h-[450px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            y: y2,
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
        >
          {/* 3D Visual Container */}
          <div className="relative w-full max-w-[480px] aspect-[1.4/1] transform-gpu">
            <div className="absolute inset-0 bg-primary/20 rounded-[40px] blur-[100px] scale-90 opacity-50" />

            {/* Main Interactive Element */}
            <motion.div
              className="w-full h-full relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <RotatingCard className="w-full h-full drop-shadow-[0_45px_70px_-15px_rgba(0,0,0,0.7)]" />

              {/* Floating Glass Badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 px-5 py-4 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center gap-4 shadow-2xl z-20"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <MousePointer2 size={24} />
                </div>
                <div>
                  <div className="text-[9px] text-gray-400 uppercase font-black tracking-[0.2em] mb-0.5">ESTADO REAL</div>
                  <div className="text-sm font-black text-white uppercase italic font-display text-orbitron">EN TRÁNSITO</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-10 -left-6 px-5 py-4 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center gap-4 shadow-2xl z-20"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary border border-secondary/20">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="text-[9px] text-gray-400 uppercase font-black tracking-[0.2em] mb-0.5">SEGURIDAD</div>
                  <div className="text-sm font-black text-white uppercase italic font-display text-orbitron">VERIFICADO</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Ambient Floor Glow */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-primary/10 blur-[100px] rounded-full opacity-60" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20 hover:opacity-50 transition-opacity cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[8px] uppercase tracking-[0.5em] font-black text-white">Explore</span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-white via-white to-transparent" />
      </motion.div>
    </section>
  );
}