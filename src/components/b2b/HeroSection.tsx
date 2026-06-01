'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function HeroSection() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      alert(`Buscando envío: ${trackingNumber}`);
    }, 1500);
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-brand-bg text-white overflow-hidden py-20 lg:py-0">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Copywriting Column */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              Logística B2B <br/>
              <span className="text-brand-blue drop-shadow-neon-glow">de Alta Performance</span>
            </h1>
            <p className="font-roboto text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Soluciones integrales de última milla para empresas y e-commerce en Mar del Plata. Escalá tu negocio con envíos rápidos, seguros y rastreables en tiempo real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
              <a href="#cotizador" className="px-8 py-4 bg-brand-blue hover:bg-blue-600 text-white font-orbitron font-semibold uppercase tracking-wider rounded-lg transition-all shadow-neon-glow hover:shadow-[0_0_35px_rgba(37,99,235,0.4)]">
                Cotizar Envío
              </a>
              <a href="#contacto" className="px-8 py-4 bg-transparent border border-brand-border hover:bg-brand-surface text-white font-orbitron font-semibold uppercase tracking-wider rounded-lg transition-all">
                Contactar Ventas
              </a>
            </div>
          </div>

          {/* Tracking Form Column */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="bg-brand-surface/60 backdrop-blur-md border border-brand-border rounded-2xl p-8 shadow-2xl relative">
              <h3 className="font-orbitron text-2xl font-semibold mb-2 text-white">Rastreá tu Envío</h3>
              <p className="font-roboto text-gray-400 mb-6 text-sm">Ingresá el código de seguimiento de tu paquete.</p>

              <form onSubmit={handleTrack} className="flex flex-col gap-4">
                <div className="relative">
                  <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Ej: DR-987654321"
                    className="w-full bg-brand-bg/50 border border-brand-border text-white font-mono px-4 py-4 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors placeholder:text-gray-600"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSearching}
                  className="w-full bg-brand-yellow hover:bg-yellow-500 text-black font-orbitron font-bold uppercase tracking-wider py-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
                >
                  {isSearching ? (
                    <span className="animate-pulse">Buscando...</span>
                  ) : (
                    <>
                      <Search size={20} />
                      Rastrear
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
