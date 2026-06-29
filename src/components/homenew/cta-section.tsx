'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, Zap, ShieldCheck, Clock, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const CtaSection = () => {
  return (
    <section data-style="glassmorphism" className="glass-section relative min-h-[100dvh] flex items-center py-20 lg:py-32 px-4 bg-[#050810] overflow-hidden">
      {/* High-End Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero/abstracto_background.jpeg"
          alt=""
          fill
          className="object-cover opacity-[0.07] grayscale"
        />
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
          className="relative p-12 md:p-24 rounded-none primary-gradient-bg overflow-hidden glow-blue group border border-white/10"
        >
          {/* Internal Glow Effects */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 blur-[80px] rounded-full group-hover:bg-white/20 transition-[background-color] duration-1000" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-yellow-400/10 blur-[80px] rounded-full" />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-none glass-card text-white text-xxs font-black tracking-[0.4em] mb-12 uppercase"
            >
              <Zap size={16} className="fill-yellow-400 text-yellow-400 animate-pulse" aria-hidden="true" /> ¡Empezá Ahora!
            </motion.div>

            <h2 className="text-headline-lg-mobile md:text-display-lg text-white mb-10 uppercase italic text-balance">
              ¿Listo para escalar la <br />
              <span className="text-secondary drop-shadow-2xl">logística de tu E-Commerce?</span>
            </h2>

            <p className="text-gray-300 text-body-lg mb-16 max-w-4xl mx-auto opacity-80">
              <span className="font-bold">Olvidate de la gestión de paquetes</span> y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link
                href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web."
                aria-label="Contactanos por WhatsApp para servicios logísticos"
                className="group w-full sm:w-auto px-12 py-6 bg-secondary text-primary text-button-text rounded-none transition-[background-color,transform,box-shadow] shadow-industrial-secondary hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none duration-100 flex items-center justify-center gap-4 uppercase active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
              >
                Contactanos por WhatsApp <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>

              <Link
                href="/tarifas"
                className="w-full sm:w-auto px-12 py-6 bg-white/5 border border-white/10 text-white text-button-text rounded-none transition-[background-color,transform,box-shadow] shadow-crate hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none duration-100 flex items-center justify-center gap-4 hover:bg-white/10 uppercase active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              >
                Ver Tarifas 2026 <Calculator size={22} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 pt-16 border-t border-white/10">
              {[
                { icon: <Clock aria-hidden="true" />, text: "Confianza local comprobada" },
                { icon: <ShieldCheck aria-hidden="true" />, text: "Innovación constante en última milla" },
                { icon: <MousePointer2 aria-hidden="true" />, text: "Motocicletas dedicadas para máxima agilidad urbana" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4 text-label-sm text-blue-100/50 uppercase">
                  <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors duration-300">
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