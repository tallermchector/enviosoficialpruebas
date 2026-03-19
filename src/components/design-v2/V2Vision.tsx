'use client';

import React from 'react';
import { Play } from 'lucide-react';

export const V2Vision = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl font-bold leading-tight mb-8 uppercase text-white">
            NUESTRA VISIÓN DE LA <br />
            <span className="text-[hsl(221.2,83.2%,53.3%)] italic">LOGÍSTICA MODERNA</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            En Envios DosRuedas, no solo movemos paquetes; movemos la economía de Mar del Plata.
            Nuestra meta es integrar tecnología de punta con la agilidad del transporte urbano
            para ofrecer un servicio sin fisuras.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-black font-[family-name:var(--font-orbitron)] text-[hsl(45,93%,47%)] mb-2">150+</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">MENSAJEROS ACTIVOS</div>
            </div>
            <div>
              <div className="text-4xl font-black font-[family-name:var(--font-orbitron)] text-[hsl(221.2,83.2%,53.3%)] mb-2">15min</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">TIEMPO DE RETIRO PROMEDIO</div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-600/20 rounded-2xl blur-2xl group-hover:bg-blue-600/30 transition-all" />
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800"
              alt="Motorcycle Delivery"
              className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform group-hover:scale-105 duration-700"
            />
            <button className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 transition-transform z-10">
              <Play className="fill-white text-white" size={32} />
            </button>
            <div className="absolute bottom-6 left-6 font-[family-name:var(--font-orbitron)] font-bold text-white/30 text-2xl uppercase italic">UERÁSTIA</div>
          </div>
        </div>
      </div>
    </section>
  );
};
