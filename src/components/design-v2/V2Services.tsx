'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Package, Truck, ChevronRight } from 'lucide-react';

export const V2Services = () => {
  const services = [
    {
      title: "ENVÍOS EXPRESS",
      desc: "Entrega inmediata en menos de 45 minutos dentro del casco urbano. Seguimiento GPS en tiempo real para tu tranquilidad.",
      icon: <Zap className="text-[hsl(221.2,83.2%,53.3%)]" />,
      iconBg: "bg-blue-500/10"
    },
    {
      title: "ENVÍOS LOW COST",
      desc: "La opción más económica para tus envíos urbanos no urgentes. Programamos tu entrega en franjas horarias convenientes.",
      icon: <Package className="text-[hsl(45,93%,47%)]" />,
      iconBg: "bg-yellow-500/10"
    },
    {
      title: "MOTO FIJA",
      desc: "Personal dedicado exclusivamente para tu empresa. Optimiza tu logística diaria con un servicio de mensajería in-house.",
      icon: <Truck className="text-[hsl(221.2,83.2%,53.3%)]" />,
      iconBg: "bg-blue-500/10"
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#0a0d16]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl font-bold mb-4 uppercase text-white">NUESTROS SERVICIOS</h2>
          <div className="w-20 h-1 bg-[hsl(221.2,83.2%,53.3%)] mb-6" />
          <p className="text-gray-400 max-w-xl">Ofrecemos soluciones adaptadas a cada necesidad, desde envíos urgentes hasta logística empresarial personalizada.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
            >
              <div className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold mb-4 uppercase text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>
              <button className="flex items-center gap-2 text-blue-400 text-sm font-bold group-hover:gap-3 transition-all">
                CONOCER MÁS <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
