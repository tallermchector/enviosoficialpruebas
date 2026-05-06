'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calculator, ArrowRight, Truck } from 'lucide-react';
import Link from 'next/link';

export const CtaSection = () => {
  return (
    <section className="py-24 px-4 bg-[#050810] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="p-16 rounded-[40px] bg-gradient-to-br from-primary/10 via-[#0a0d16]/80 to-secondary/5 border border-white/10 backdrop-blur-xl relative overflow-hidden text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-32 translate-x-32" />

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold tracking-[0.3em] mb-10 uppercase">
             LISTO PARA EMPEZAR? <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          </div>

          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-6xl font-black italic tracking-tighter leading-tight mb-8 uppercase text-white">
            ¿LISTO PARA OPTIMIZAR TU <br />
            DISTRIBUCIÓN EN <span className="text-primary">MAR DEL PLATA?</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
            Súmate a la red logística más confiable de la ciudad. Contáctanos hoy para un esquema de tarifas a medida.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <Link
              href="/cotizar/express"
              className="px-12 py-5 bg-primary hover:bg-primary/90 text-white font-[family-name:var(--font-orbitron)] font-black rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center gap-3 uppercase tracking-tight"
            >
              <Calculator size={20} /> COTIZAR ENVÍO
            </Link>
            <a
              href="tel:+5492236602699"
              className="px-12 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-[family-name:var(--font-orbitron)] font-bold rounded-2xl transition-all flex items-center gap-3 uppercase tracking-tight group"
            >
              <Phone size={20} className="text-secondary" />
              CONTACTAR A UN ASESOR
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="mt-16 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-white font-[family-name:var(--font-orbitron)] font-bold text-lg mb-1 tracking-tighter uppercase italic">98%</div>
              <div className="text-[9px] text-gray-500 uppercase tracking-widest font-black">Satisfacción</div>
            </div>
            <div>
              <div className="text-white font-[family-name:var(--font-orbitron)] font-bold text-lg mb-1 tracking-tighter uppercase italic">24/7</div>
              <div className="text-[9px] text-gray-500 uppercase tracking-widest font-black">Disponibilidad</div>
            </div>
             <div>
              <div className="text-white font-[family-name:var(--font-orbitron)] font-bold text-lg mb-1 tracking-tighter uppercase italic">GPS</div>
              <div className="text-[9px] text-gray-500 uppercase tracking-widest font-black">Tiempo Real</div>
            </div>
             <div>
              <div className="text-white font-[family-name:var(--font-orbitron)] font-bold text-lg mb-1 tracking-tighter uppercase italic">FLEX</div>
              <div className="text-[9px] text-gray-500 uppercase tracking-widest font-black">Integración</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
