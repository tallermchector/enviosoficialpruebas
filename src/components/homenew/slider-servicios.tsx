'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "ENTREGA EXPRESS",
    desc: "Menos de 60 minutos para tus pedidos más críticos.",
    icon: <Clock />,
    color: "hsl(221.2, 83.2%, 53.3%)"
  },
  {
    title: "MULTIENTREGAS",
    desc: "Optimiza rutas y ahorra hasta un 30% en logística diaria.",
    icon: <Truck />,
    color: "hsl(45, 93%, 47%)"
  },
  {
    title: "ALMACENAJE",
    desc: "Guardamos tus productos en puntos estratégicos de la ciudad.",
    icon: <Package />,
    color: "hsl(221.2, 83.2%, 53.3%)"
  },
  {
    title: "SEGURO TOTAL",
    desc: "Cada paquete viaja protegido contra todo riesgo.",
    icon: <ShieldCheck />,
    color: "hsl(45, 93%, 47%)"
  }
];

export default function SliderServicios() {
  return (
    <section className="py-24 px-4 bg-[#0a0d16]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl font-black text-white mb-4 uppercase italic">
              SOLUCIONES A <span className="text-[hsl(221.2,83.2%,53.3%)]">MEDIDA</span>
            </h2>
            <p className="text-gray-400 font-[family-name:var(--font-roboto)]">Potencia cada área de tu negocio con herramientas diseñadas para crecer.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all cursor-pointer relative overflow-hidden"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${service.color}15`, color: service.color }}
              >
                {React.cloneElement(service.icon, { size: 28 })}
              </div>
              <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-white mb-4 uppercase">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 font-[family-name:var(--font-roboto)]">
                {service.desc}
              </p>
              <div className="flex items-center gap-2 text-blue-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all group-hover:gap-3">
                DETALLES <ChevronRight size={16} />
              </div>

              {/* Animated Background Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: service.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
