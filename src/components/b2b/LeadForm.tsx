'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <section id="contacto" className="py-24 bg-brand-bg relative">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="bg-brand-surface border border-brand-border rounded-2xl p-12 flex flex-col items-center animate-in zoom-in duration-500 shadow-neon-glow">
            <CheckCircle2 size={64} className="text-brand-yellow mb-6" />
            <h3 className="font-orbitron text-3xl font-bold text-white mb-4">¡Solicitud Recibida!</h3>
            <p className="font-roboto text-gray-300 mb-8">
              Un asesor comercial analizará el perfil de tu empresa y se comunicará en los próximos 15 minutos.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="px-8 py-3 bg-transparent border border-brand-border text-white font-orbitron hover:bg-brand-bg rounded-lg transition-colors"
            >
              Enviar otra solicitud
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-24 bg-brand-bg relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">
              Integrá tu Negocio
            </h2>
            <p className="font-roboto text-gray-400 text-lg">
              Completá el formulario para acceder a tarifas B2B preferenciales, panel de control propio y API de integración.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-brand-surface rounded-2xl border border-brand-border p-8 md:p-10 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="flex flex-col gap-2">
                <label className="font-roboto text-sm text-gray-400">Nombre de la Empresa</label>
                <input
                  type="text"
                  required
                  className="bg-brand-bg border border-brand-border text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-blue transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-roboto text-sm text-gray-400">Email Corporativo</label>
                <input
                  type="email"
                  required
                  className="bg-brand-bg border border-brand-border text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-blue transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-roboto text-sm text-gray-400">Rubro</label>
                <select
                  required
                  className="bg-brand-bg border border-brand-border text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-blue transition-colors appearance-none"
                >
                  <option value="">Seleccionar rubro...</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="gastronomia">Gastronomía</option>
                  <option value="retail">Retail / Tienda Física</option>
                  <option value="salud">Salud / Farmacia</option>
                  <option value="otros">Otros</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-roboto text-sm text-gray-400">Volumen de envíos mensual</label>
                <select
                  required
                  className="bg-brand-bg border border-brand-border text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-blue transition-colors appearance-none"
                >
                  <option value="">Seleccionar volumen...</option>
                  <option value="0-50">0 - 50 envíos</option>
                  <option value="51-200">51 - 200 envíos</option>
                  <option value="201-500">201 - 500 envíos</option>
                  <option value="500+">Más de 500 envíos</option>
                </select>
              </div>

            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-brand-blue to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white font-orbitron font-bold uppercase tracking-widest py-4 rounded-lg flex justify-center items-center gap-2 transition-all shadow-neon-glow disabled:opacity-70 disabled:cursor-wait"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Procesando Solicitud...</span>
                ) : (
                  <>
                    Solicitar Alta B2B <Send size={20} />
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 mt-6 font-roboto">
              Tus datos están protegidos. No compartimos información con terceros.
            </p>
          </form>

        </div>
      </div>
    </section>
  );
}
