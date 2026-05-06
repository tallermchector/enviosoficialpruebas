'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import RotatingCard from '@/components/homenew/rotating-card';
import { Play } from 'lucide-react';

export default function HeroAnimado() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bannerenvios.webp"
          alt="Fondo de banner de envíos"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-transparent to-[#050810]" />
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-30 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          className="text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-blue-400 text-xs font-bold tracking-widest mb-8 uppercase"
          >
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            DISPONIBLE EN MAR DEL PLATA
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-[family-name:var(--font-orbitron)] text-5xl md:text-7xl font-black italic tracking-tighter leading-[0.9] mb-8 uppercase text-white"
          >
            LOGÍSTICA URBANA <br />
            DE <span className="text-primary">ALTA PRECISIÓN</span> <br />
            EN <span className="text-primary">MAR DEL PLATA</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-[family-name:var(--font-roboto)]"
          >
            Tu partner logístico de última milla. Optimizamos tus envíos E-commerce y corporativos con tecnología, seguridad y entregas Same-Day.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
          >
            <Link
              href="/cotizar/express"
              className="px-10 py-5 bg-secondary hover:bg-secondary/90 text-black font-[family-name:var(--font-orbitron)] font-black rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(251,191,36,0.3)] uppercase tracking-tight"
            >
              COTIZAR ENVÍO
            </Link>
            <Link
              href="/servicios/envios-express"
              className="flex items-center gap-4 group text-white font-[family-name:var(--font-orbitron)] font-bold uppercase tracking-tight"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all">
                <Play className="fill-white text-white ml-1" size={20} />
              </div>
              <span>ABRIR CUENTA COMERCIAL</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex justify-center items-center h-[400px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative w-full max-w-[450px] aspect-[1.6/1]">
            <RotatingCard className="w-full h-full" />
            {/* Ambient Shadow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-black/40 blur-3xl rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
