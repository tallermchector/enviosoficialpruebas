'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Clock, ShieldCheck, ChevronRight, LayoutGrid, Zap, Globe } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Envíos Express",
    bajada: "Prioridad absoluta y certeza total.",
    desc: "Diseñado para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación. Garantizamos precisión en el tiempo de tu cliente final.",
    icon: <Zap />,
    color: "#0636A5", // Egyptian Blue
    href: "/servicios/envios-express",
    badge: "ALTA PRIORIDAD",
    buttonText: "Solicitar Express"
  },
  {
    title: "Envíos LowCost",
    bajada: "Máxima rentabilidad y eficiencia en ruteo masivo.",
    desc: "Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y te garantizamos la entrega en el día antes de las 19:00 hs.",
    icon: <Clock />,
    color: "#FFEC01", // Sunbeam Yellow
    href: "/servicios/envios-lowcost",
    badge: "RENTABILIDAD",
    buttonText: "Ahorrá con LowCost"
  },
  {
    title: "Envíos Flex (MercadoLibre)",
    bajada: "Potenciá tu reputación al máximo.",
    desc: "Somos expertos en MercadoLibre. Despachá hasta las 15:00 hs y nosotros cumplimos tus acuerdos de nivel de servicio (SLAs) Same-Day para que tu termómetro siempre esté en verde.",
    icon: <Package />,
    color: "#0636A5", // Egyptian Blue
    href: "/servicios/enviosflex",
    badge: "MERCADOLIBRE",
    buttonText: "Activar Envíos Flex"
  },
  {
    title: "E-Commerce & 3PL",
    bajada: "Tercerización integral y cuentas corrientes.",
    desc: "Más que un envío, somos tu depósito y tu equipo. Soluciones escalables para PyMEs y plataformas digitales, con facturación mensual centralizada.",
    icon: <Truck />,
    color: "#FFEC01", // Sunbeam Yellow
    href: "/servicios/plan-emprendedores",
    badge: "INTEGRAL",
    buttonText: "Hablá con un asesor"
  }
];

export default function SliderServicios() {
  return (
    <section data-style="soft-ui" className="bg-[var(--bg-base)] relative min-h-[100dvh] flex items-center py-20 lg:py-32 px-4 bg-[#050810] overflow-hidden">
      {/* Tech lines background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full tech-grid-overlay" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-none bg-primary/5 border border-primary/10 text-primary text-xxs font-black tracking-[0.25em] mb-8 uppercase font-sans">
              <LayoutGrid size={12} className="text-primary animate-pulse" aria-hidden="true" /> CAPACIDADES DINÁMICAS
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black italic text-primary uppercase tracking-tighter mb-4 text-balance">
              SOLUCIONES A <span className="text-secondary drop-shadow-[0_0_20px_rgba(6,54,165,0.15)] bg-primary px-3 py-1 text-white inline-block">MEDIDA</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md lg:border-l lg:border-primary/10 lg:pl-10"
          >
            <p className="text-primary/70 text-lg md:text-xl leading-relaxed font-light font-sans">
              Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real en un mercado en constante evolución.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group p-6 md:p-10 rounded-none bg-[#050810] border-2 border-technical-black shadow-hard-primary hover:shadow-hard-secondary transition-[box-shadow,transform] duration-300 relative overflow-hidden flex flex-col min-h-[440px] h-auto"
            >
              {/* Internal Accent Light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[40px] rounded-full group-hover:bg-primary/10 transition-all duration-700 pointer-events-none" />

              <div
                className="w-16 h-16 rounded-none flex items-center justify-center mb-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 border border-technical-black"
                style={{ backgroundColor: service.color, color: idx % 2 === 0 ? 'white' : 'black' }}
              >
                {React.cloneElement(service.icon, { size: 32, 'aria-hidden': 'true' })}
              </div>

              <div className="mb-auto">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[9px] font-black text-primary/45 uppercase tracking-[0.3em]">{service.badge}</span>
                  <div className="h-px w-6 bg-primary/10" />
                </div>
                <h3 className="font-display text-2xl font-black text-primary mb-1 uppercase tracking-tight group-hover:text-primary-container transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4" style={{ color: service.color === '#FFEC01' ? '#6d6400' : service.color }}>
                  {service.bajada}
                </p>
                <p className="text-primary/75 text-sm leading-relaxed font-sans font-light">
                  {service.desc}
                </p>
              </div>

              <Link
                href={service.href}
                className="flex items-center gap-4 text-primary font-display text-xxs font-black uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 group-hover:text-secondary-foreground transition-[color,gap] duration-300 group-hover:gap-6 pt-6 mt-auto border-t border-primary/10 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
              >
                {service.buttonText} <ChevronRight size={18} aria-hidden="true" />
              </Link>

              {/* Decorative Side Accent */}
              <div className="absolute bottom-10 -right-1 w-[2px] h-20 bg-gradient-to-b from-transparent via-primary/10 to-transparent group-hover:via-secondary/50 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Interactive Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 flex flex-col items-center gap-8 py-12 border-t border-primary/10"
        >
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3 text-primary/30">
              <Zap size={14} aria-hidden="true" />
              <span className="text-[9px] font-black tracking-[0.5em] uppercase">MÁXIMO PODER</span>
            </div>
            <div className="w-1.5 h-1.5 bg-primary/20" />
            <div className="flex items-center gap-3 text-primary/30">
              <Globe size={14} aria-hidden="true" />
              <span className="text-[9px] font-black tracking-[0.5em] uppercase">INFRAESTRUCTURA TOTAL</span>
            </div>
          </div>
          <p className="text-primary/40 text-[8px] font-black uppercase tracking-[1em] text-center max-w-lg leading-loose opacity-50 font-sans">
            ENGINEERING LOGISTICS FOR THE MODERN ERA OF COMMERCE IN MAR DEL PLATA
          </p>
        </motion.div>
      </div>
    </section>
  );
}