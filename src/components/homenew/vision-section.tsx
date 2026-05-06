'use client';

import React from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const VisionSection = () => {
  return (
    <section className="py-32 px-4 bg-[#050810] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-blue-400 text-[10px] font-bold tracking-widest mb-6 uppercase">
            NUESTRA HISTORIA
          </div>
          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black leading-[1] mb-10 uppercase text-white tracking-tighter">
            REVOLUCIONANDO <br />
            <span className="text-primary italic">LA ÚLTIMA MILLA</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed font-[family-name:var(--font-roboto)]">
            Resolvemos el eslabón más complejo de la cadena logística. Garantizamos seguridad,
            ruteo eficiente y comunicación transparente para que tus clientes reciban sus
            paquetes en tiempo y forma.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-l border-white/10 pl-8">
            <div>
              <div className="text-5xl font-black font-[family-name:var(--font-orbitron)] text-secondary mb-2 tracking-tighter italic">150+</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">MENSAJEROS ACTIVOS</div>
            </div>
            <div>
              <div className="text-5xl font-black font-[family-name:var(--font-orbitron)] text-primary mb-2 tracking-tighter italic">15min</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">TIEMPO DE RETIRO PROMEDIO</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-900 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800"
              alt="Motorcycle Delivery Vision"
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform group-hover:scale-105 duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-transparent to-transparent opacity-60" />

            <button className="w-24 h-24 rounded-full bg-primary/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 hover:bg-primary/20 transition-all z-10 group/btn shadow-[0_0_30px_rgba(37,99,235,0.4)]">
              <Play className="fill-white text-white ml-2 transition-transform group-hover/btn:scale-110" size={32} />
            </button>

            <div className="absolute bottom-8 left-8 font-[family-name:var(--font-orbitron)] font-black text-white/40 text-3xl md:text-4xl uppercase italic tracking-tighter select-none">
              EXPERIENCE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
