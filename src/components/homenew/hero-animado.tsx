import Link from 'next/link';
import { Play, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { HeroBackground } from './hero-background';
import { HeroVisuals } from './hero-visuals';
import { HeroScrollIndicator } from './hero-scroll-indicator';

export default function HeroAnimado() {
  return (
    <section data-style="glassmorphism" className="glass-section relative min-h-[100dvh] flex items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-16 px-4 overflow-hidden bg-transparent">
      {/* Background Parallax - Client Component */}
      <HeroBackground />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Badge - Animation with CSS */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-none bg-white/[0.03] backdrop-blur-md border border-white/10 text-secondary text-xxs font-black tracking-[0.3em] mb-8 uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both font-subtitle">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-none h-2 w-2 bg-secondary"></span>
            </span>
            Tu Solución Confiable
          </div>

          <h1 className="text-headline-lg-mobile md:text-display-lg italic mb-4 xl:mb-6 uppercase text-white text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both font-title">
            Conectá tu negocio <br className="hidden sm:inline" />
            <span className="text-primary drop-shadow-[0_0_25px_rgba(6,53,166,0.4)]">con toda la ciudad</span>
          </h1>

          <p className="text-white/80 text-body-lg mb-8 xl:mb-10 max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both font-body">
            Logística humana y eficiente para Mar del Plata. Poné tus ventas en las mejores manos: conectamos tu negocio con entregas rápidas y seguras. Clientes felices siempre.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 fill-mode-both">
            <Link
              href="/cotizar/express"
              aria-label="Solicitar Servicio de mensajería desde el héroe"
              className="group relative px-10 py-5 bg-secondary hover:bg-secondary/90 text-primary text-button-text rounded-none transition-[background-color,transform,box-shadow] shadow-industrial-secondary hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none duration-100 uppercase overflow-hidden active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 font-subtitle font-bold"
            >
              <span className="relative z-10 flex items-center gap-2">
                Solicitá tu envío <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>

            <Link
              href="/servicios/envios-express"
              aria-label="Ver todos los servicios de envíos"
              className="flex items-center gap-4 group text-white text-label-md hover:text-secondary transition-colors py-2 outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm"
            >
              <div className="w-14 h-14 rounded-none bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-[background-color,border-color,transform] duration-300 group-hover:scale-110 shadow-xl backdrop-blur-sm" aria-hidden="true">
                <Play className="fill-white text-white ml-1" size={18} />
              </div>
              <span className="text-xs uppercase">Ver Servicios</span>
            </Link>
          </div>

          <div className="mt-10 lg:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000 fill-mode-both">
            <div className="flex items-center gap-2 text-label-sm uppercase text-white/40">
              <ShieldCheck size={14} className="text-primary" aria-hidden="true" /> 100% SEGURO
            </div>
            <div className="flex items-center gap-2 text-label-sm uppercase text-white/40">
              <Zap size={14} className="text-secondary" aria-hidden="true" /> ULTRA RÁPIDO
            </div>
            <div className="flex items-center gap-2 text-label-sm uppercase text-white/40">
              <Globe size={14} className="text-primary" aria-hidden="true" /> COBERTURA TOTAL
            </div>
          </div>
        </div>

        {/* Visuals - Client Component */}
        <HeroVisuals />
      </div>

      {/* Scroll Indicator - Client Component */}
      <HeroScrollIndicator />
    </section>
  );
}