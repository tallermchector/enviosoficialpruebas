'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, MapPin, Package } from 'lucide-react';

const ZONES = {
  centro: { name: 'Centro / Macrocentro', price: 1500 },
  norte: { name: 'Zona Norte (Constitución/Camet)', price: 2500 },
  sur: { name: 'Zona Sur (Pto/Faro)', price: 2800 },
  oeste: { name: 'Zona Oeste (Juan B. Justo/Luro)', price: 2200 },
};

const SIZES = {
  sobre: { name: 'Sobre / Documento (hasta 1kg)', multiplier: 1 },
  caja_chica: { name: 'Caja Chica (hasta 5kg)', multiplier: 1.5 },
  caja_mediana: { name: 'Caja Mediana (hasta 10kg)', multiplier: 2 },
  caja_grande: { name: 'Caja Grande (hasta 20kg)', multiplier: 3 },
};

export function QuickQuote() {
  const [origin, setOrigin] = useState<keyof typeof ZONES | ''>('');
  const [destination, setDestination] = useState<keyof typeof ZONES | ''>('');
  const [size, setSize] = useState<keyof typeof SIZES | ''>('');
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  useEffect(() => {
    if (origin && destination && size) {
      const basePriceOrigin = ZONES[origin].price;
      const basePriceDest = ZONES[destination].price;
      // Simple logic: average the zone prices and apply size multiplier
      const avgBase = (basePriceOrigin + basePriceDest) / 2;
      const finalPrice = avgBase * SIZES[size].multiplier;
      setEstimatedPrice(Math.round(finalPrice));
    } else {
      setEstimatedPrice(null);
    }
  }, [origin, destination, size]);

  return (
    <section id="cotizador" className="py-24 bg-brand-surface border-y border-brand-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">
              Cotizador Inteligente B2B
            </h2>
            <p className="font-roboto text-gray-400 text-lg">
              Calculá tus costos logísticos en tiempo real. Precios transparentes para escalar tu e-commerce.
            </p>
          </div>

          <div className="bg-brand-bg rounded-2xl border border-brand-border p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Inputs */}
              <div className="md:col-span-2 flex flex-col gap-6">

                <div className="flex flex-col gap-2">
                  <label className="font-orbitron text-sm text-gray-300 flex items-center gap-2">
                    <MapPin size={16} className="text-brand-blue" /> Origen
                  </label>
                  <select
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value as keyof typeof ZONES)}
                    className="w-full bg-brand-surface border border-brand-border text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-blue transition-colors appearance-none"
                  >
                    <option value="">Seleccioná zona de retiro...</option>
                    {Object.entries(ZONES).map(([key, zone]) => (
                      <option key={key} value={key}>{zone.name}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-orbitron text-sm text-gray-300 flex items-center gap-2">
                    <MapPin size={16} className="text-brand-yellow" /> Destino
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value as keyof typeof ZONES)}
                    className="w-full bg-brand-surface border border-brand-border text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-blue transition-colors appearance-none"
                  >
                    <option value="">Seleccioná zona de entrega...</option>
                    {Object.entries(ZONES).map(([key, zone]) => (
                      <option key={key} value={key}>{zone.name}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-orbitron text-sm text-gray-300 flex items-center gap-2">
                    <Package size={16} className="text-brand-blue" /> Tamaño del Paquete
                  </label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value as keyof typeof SIZES)}
                    className="w-full bg-brand-surface border border-brand-border text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-blue transition-colors appearance-none"
                  >
                    <option value="">Seleccioná el tamaño...</option>
                    {Object.entries(SIZES).map(([key, s]) => (
                      <option key={key} value={key}>{s.name}</option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Result */}
              <div className="bg-brand-surface rounded-xl border border-brand-border p-6 flex flex-col justify-center items-center text-center">
                <Calculator size={48} className="text-gray-600 mb-4" />
                <h4 className="font-orbitron text-lg text-gray-400 mb-2">Costo Estimado</h4>

                {estimatedPrice !== null ? (
                  <div className="animate-in fade-in zoom-in duration-300">
                    <span className="text-4xl font-mono font-bold text-brand-yellow">
                      ${estimatedPrice.toLocaleString('es-AR')}
                    </span>
                    <p className="text-xs text-gray-500 mt-2">*Precio final con IVA incluido</p>
                  </div>
                ) : (
                  <span className="text-xl font-mono text-gray-500">
                    Completá los datos
                  </span>
                )}

                <button
                  disabled={estimatedPrice === null}
                  className="mt-6 w-full bg-brand-blue hover:bg-blue-600 text-white font-orbitron font-semibold uppercase tracking-wider py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuar
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
