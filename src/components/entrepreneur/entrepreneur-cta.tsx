"use client"

import { Button } from "@/components/ui/button"
import { ShieldCheck, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function EntrepreneurCta() {
  return (
    <section data-style="glassmorphism" className="glass-section py-24 px-4 bg-surface-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="p-12 md:p-16 border border-white/10 relative overflow-hidden text-center glassmorphism shadow-crate rounded-none"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-none blur-[80px] -translate-y-32 translate-x-32" />

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-none bg-white/5 border border-white/10 text-white/70 text-xxs font-bold tracking-[0.3em] mb-10 uppercase">
            SOCIO LOGÍSTICO <div className="w-1.5 h-1.5 rounded-none bg-primary animate-pulse" />
          </div>

          <h2 className="font-anton text-4xl md:text-6xl font-black italic tracking-tighter leading-tight mb-8 uppercase text-white">
            ¿LISTO PARA ESCALAR <br />
            TU <span className="text-primary">E-COMMERCE?</span>
          </h2>

          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-sans">
            Olvídate de los paquetes y concéntrate en tu producto. Nosotros nos encargamos de toda la cadena de distribución.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contacto"
              className="px-12 py-5 bg-secondary hover:bg-yellow-400 text-black font-bebas text-lg tracking-wider rounded-none transition-all transform hover:scale-105 active:scale-95 shadow-industrial flex items-center gap-3 uppercase h-auto"
            >
              <ShieldCheck size={20} /> SOLICITAR PLAN
            </Link>
            <a
              href="tel:+5492236602699"
              className="px-12 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bebas text-lg tracking-wider rounded-none transition-all flex items-center gap-3 uppercase group h-auto"
            >
              <Phone size={20} className="text-secondary" />
              HABLAR CON UN ASESOR
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
