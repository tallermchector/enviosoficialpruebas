'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Package, Truck, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const ServicesOverview = () => {
  const services = [
    {
      title: "ENVÍO EXPRESS",
      desc: "Para envíos urgentes. El cliente final elige el rango horario de entrega. Prioridad máxima.",
      icon: <Zap className="text-primary" />,
      iconBg: "bg-blue-500/10",
      href: "/servicios/envios-express"
    },
    {
      title: "ENVÍO LOWCOST",
      desc: "La opción más rentable. Retiro y entrega en el día, sujeto al ruteo óptimo de nuestra flota sin horario fijo.",
      icon: <Package className="text-secondary" />,
      iconBg: "bg-yellow-500/10",
      href: "/servicios/envios-lowcost"
    },
    {
      title: "ENVÍOS FLEX (MERCADOLIBRE)",
      desc: "Integración perfecta para vendedores de MercadoLibre. Cumplimos con tus métricas y SLAs de entrega Same-Day.",
      icon: <Truck className="text-primary" />,
      iconBg: "bg-blue-500/10",
      href: "/servicios/enviosflex"
    },
    {
      title: "E-COMMERCE Y 3PL",
      desc: "Logística integral para tu tienda online. Almacenaje, armado de paquetes y distribución 24hs con liquidaciones automáticas.",
      icon: <Package className="text-secondary" />,
      iconBg: "bg-yellow-500/10",
      href: "/servicios/plan-emprendedores"
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#0a0d16] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter">
              NUESTROS <span className="text-primary">SERVICIOS</span>
            </h2>
            <div className="w-24 h-2 bg-primary mb-8 rounded-full" />
            <p className="text-gray-400 text-lg max-w-xl font-[family-name:var(--font-roboto)]">
              Ofrecemos soluciones adaptadas a cada necesidad, desde envíos urgentes hasta logística empresarial personalizada en Mar del Plata.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all group relative overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rotate-45 translate-x-16 -translate-y-16 group-hover:bg-primary/5 transition-colors" />
              
              <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative`}>
                {React.cloneElement(service.icon as React.ReactElement<any>, { size: 32 })}
              </div>

              <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold mb-4 uppercase text-white tracking-tight">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 font-[family-name:var(--font-roboto)]">{service.desc}</p>

              <Link
                href={service.href}
                className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all"
              >
                CONOCER MÁS <ChevronRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
