'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, Zap, ShieldCheck, Clock, MousePointer2 } from 'lucide-react';
import Link from 'next/link';

export const CtaSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center py-20 lg:py-32 px-4 bg-[#050810] overflow-hidden">
      {/* High-End Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-gradient-blue" />
        <div className="absolute inset-0 bg-radial-gradient-yellow" />

        {/* Static Background Highlight (Performance) */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full"
        />

        {/* Tech grid overlay */}
        <div className="absolute inset-0 tech-grid-overlay" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-12 md:p-24 rounded-[60px] primary-gradient-bg overflow-hidden glow-blue group border border-white/10"
        >
          {/* Internal Glow Effects */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 blur-[80px] rounded-full group-hover:bg-white/20 transition-all duration-1000" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-yellow-400/10 blur-[80px] rounded-full" />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-card text-white text-[10px] font-black tracking-[0.4em] mb-12 uppercase"
            >
              <Zap size={16} className="fill-yellow-400 text-yellow-400 animate-pulse" /> ¡Empezá Ahora!
            </motion.div>

            <h2 className="font-display text-orbitron text-4xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9] uppercase italic">
              ¿Listos para tu <br />
              <span className="text-secondary drop-shadow-2xl">Próximo Envío ?</span>
            </h2>

            <p className="text-blue-100 text-lg md:text-2xl mb-16 max-w-3xl mx-auto font-[family-name:var(--font-roboto)] leading-relaxed font-light opacity-80">
              En Envios DosRuedas estamos listos para ayudarte con tus necesidades de mensajería y paquetería . Contáctanos hoy mismo o calcula tu envío.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link
                href="/cotizar/express"
                className="group w-full sm:w-auto px-12 py-6 bg-white text-blue-800 font-display text-orbitron font-black rounded-2xl transition-all shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 flex items-center justify-center gap-4 uppercase tracking-tighter text-sm"
              >
                Solicitar Cotización <Calculator size={22} className="group-hover:rotate-12 transition-transform" />
              </Link>

              <Link
                href="/contacto"
                className="w-full sm:w-auto px-12 py-6 bg-blue-500/20 hover:bg-blue-500/30 border border-white/20 text-white font-display text-orbitron font-bold rounded-2xl transition-all backdrop-blur-md flex items-center justify-center gap-4 uppercase tracking-widest text-xs"
              >
                Contactanos <ArrowRight size={22} />
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 pt-16 border-t border-white/10">
              {[
                { icon: <Clock aria-hidden="true" />, text: "5000+ Clientes" },
                { icon: <ShieldCheck aria-hidden="true" />, text: "98% A Tiempo" },
                { icon: <MousePointer2 aria-hidden="true" />, text: "24/7 Soporte" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4 text-[9px] font-black text-blue-100/50 uppercase tracking-[0.3em]">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white transition-all">
                    {React.cloneElement(item.icon as React.ReactElement<{ size?: number; className?: string; fill?: string }>, { size: 18 })}
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};