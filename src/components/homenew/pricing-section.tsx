'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export function PricingSection() {
  return (
    <section className="py-20 px-4 bg-primary text-white border-t border-white/10" id="pricing">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="borline_w"></div>
          <h2 className="text-3xl md:text-5xl font-black font-title uppercase tracking-wide mb-4">
            Guía de Precios
          </h2>
          <p className="text-white/70 font-body text-base max-w-xl mx-auto">
            Elegí el plan óptimo para escalar tu negocio en Mar del Plata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Plan Standard */}
          <div className="group bg-white/5 backdrop-blur-md border border-white/15 p-8 flex flex-col justify-between rounded-none shadow-crate hvr-grow-shadow transition-all duration-300">
            <div>
              <h4 className="text-xl font-bold font-title tracking-wider text-white/90 uppercase mb-4">
                Estándar
              </h4>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-black font-subtitle text-secondary">U$S 64</span>
                <span className="text-white/60 text-sm font-body">/ mes</span>
              </div>
              <p className="text-xs text-white/50 font-body mb-6">Facturado de forma anual</p>
              
              <ul className="space-y-3 mb-8 text-white/80 font-body text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary shrink-0" />
                  <span>Envíos urbanos ocasionales</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary shrink-0" />
                  <span>Seguimiento de entregas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary shrink-0" />
                  <span>Soporte telefónico estándar</span>
                </li>
              </ul>
            </div>
            
            <Button 
              className="w-full bg-white/10 hover:bg-white/20 text-white font-subtitle font-bold tracking-wider uppercase rounded-none border border-white/20 transition-all duration-300 h-11 text-base"
            >
              Registrarme Gratis
            </Button>
          </div>

          {/* Plan Premium */}
          <div className="group bg-white/10 backdrop-blur-md border-2 border-secondary p-8 flex flex-col justify-between rounded-none shadow-hard-secondary hvr-grow-shadow transition-all duration-300 relative">
            <div className="absolute top-0 right-6 -translate-y-1/2 bg-secondary text-primary font-subtitle font-black tracking-wider text-xs px-3 py-1 uppercase rounded-none">
              Más Buscado
            </div>
            <div>
              <h4 className="text-xl font-bold font-title tracking-wider text-secondary uppercase mb-4">
                Premium (Flex)
              </h4>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-black font-subtitle text-secondary">U$S 54</span>
                <span className="text-white/60 text-sm font-body">/ mes</span>
              </div>
              <p className="text-xs text-white/50 font-body mb-6">Facturado de forma anual</p>
              
              <ul className="space-y-3 mb-8 text-white/85 font-body text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary shrink-0" />
                  <span>Prioridad MercadoLibre Flex</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary shrink-0" />
                  <span>Entregas Same-Day en Mar del Plata</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary shrink-0" />
                  <span>Integración de catálogo API</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary shrink-0" />
                  <span>Soporte dedicado por WhatsApp</span>
                </li>
              </ul>
            </div>
            
            <Button 
              className="w-full bg-secondary hover:bg-secondary/90 text-primary font-subtitle font-black tracking-wider uppercase rounded-none border border-secondary transition-all duration-300 h-11 text-base"
            >
              Probar Plan Premium
            </Button>
          </div>

          {/* Plan Business */}
          <div className="group bg-white/5 backdrop-blur-md border border-white/15 p-8 flex flex-col justify-between rounded-none shadow-crate hvr-grow-shadow transition-all duration-300">
            <div>
              <h4 className="text-xl font-bold font-title tracking-wider text-white/90 uppercase mb-4">
                Corporativo
              </h4>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-black font-subtitle text-secondary">U$S 143</span>
                <span className="text-white/60 text-sm font-body">/ mes</span>
              </div>
              <p className="text-xs text-white/50 font-body mb-6">Facturado de forma anual</p>
              
              <ul className="space-y-3 mb-8 text-white/80 font-body text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary shrink-0" />
                  <span>Distribución masiva por lotes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary shrink-0" />
                  <span>Cuentas corrientes corporativas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary shrink-0" />
                  <span>Ruteo logístico avanzado (3PL)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary shrink-0" />
                  <span>Asesor de cuenta exclusivo</span>
                </li>
              </ul>
            </div>
            
            <Button 
              className="w-full bg-white/10 hover:bg-white/20 text-white font-subtitle font-bold tracking-wider uppercase rounded-none border border-white/20 transition-all duration-300 h-11 text-base"
            >
              Registrarme Gratis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
