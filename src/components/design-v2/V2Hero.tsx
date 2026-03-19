'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const V2Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(221.2,83.2%,53.3%)] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(45,93%,47%)] rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          DISPONIBLE EN MAR DEL PLATA
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-[family-name:var(--font-orbitron)] text-4xl md:text-6xl font-black italic tracking-tighter leading-tight mb-6 uppercase text-white"
        >
          SERVICIO DE <br />
          MENSAJERÍA <span className="text-[hsl(221.2,83.2%,53.3%)]">Y</span> <br />
          <span className="text-[hsl(221.2,83.2%,53.3%)]">DELIVERY</span> <br />
          ENVIOS DOSRUEDAS
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Tu solución confiable en Mar del Plata. Rápido, seguro y económico.
          La evolución de la logística urbana sobre dos ruedas.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 sm:flex-row justify-center px-4"
        >
          <button className="px-8 py-4 bg-[hsl(45,93%,47%)] hover:opacity-90 text-black font-[family-name:var(--font-orbitron)] font-bold rounded-lg transition-all transform hover:scale-105 active:scale-95">
            SOLICITAR SERVICIO
          </button>
          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 font-[family-name:var(--font-orbitron)] font-bold rounded-lg transition-all text-white">
            VER TARIFAS
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
