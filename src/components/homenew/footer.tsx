'use client';

import React from 'react';
import { Truck, Share2, Settings, MapPin, Phone, Mail, Camera as Instagram, Share2 as Facebook, MessageCircle as Twitter } from "lucide-react";
import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-32 pb-16 px-4 border-t border-white/5 bg-[#050810] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-10 group">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:rotate-12">
                <Truck size={22} className="text-white" />
              </div>
              <span className="font-[family-name:var(--font-orbitron)] font-black text-2xl tracking-tighter text-white uppercase italic">
                DOS<span className="text-primary">RUEDAS</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm mb-10 leading-relaxed font-[family-name:var(--font-roboto)]">
              Liderando la logística de última milla en Mar del Plata. Rapidez, seguridad y compromiso en cada entrega desde 2018.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/enviosdosruedas" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all text-white group/social">
                <Instagram size={20} className="group-hover/social:scale-110 transition-transform" />
              </a>
              <a href="https://facebook.com/enviosdosruedas" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all text-white group/social">
                <Facebook size={20} className="group-hover/social:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all text-white group/social">
                <Twitter size={20} className="group-hover/social:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-orbitron)] font-bold mb-8 tracking-widest text-xs uppercase text-white opacity-50">EMPRESA</h4>
            <ul className="space-y-5 text-gray-500 text-sm font-[family-name:var(--font-roboto)]">
              <li><Link href="/sobre-nosotros" className="hover:text-primary transition-colors flex items-center gap-2 group"><div className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" /> Sobre Nosotros</Link></li>
              <li><Link href="/trabaja-con-nosotros" className="hover:text-primary transition-colors flex items-center gap-2 group"><div className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" /> Trabaja con Nosotros</Link></li>
              <li><Link href="/tarifas" className="hover:text-primary transition-colors flex items-center gap-2 group"><div className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" /> Nuestras Tarifas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-orbitron)] font-bold mb-8 tracking-widest text-xs uppercase text-white opacity-50">SERVICIOS</h4>
            <ul className="space-y-5 text-gray-500 text-sm font-[family-name:var(--font-roboto)]">
              <li><Link href="/servicios/envios-express" className="hover:text-primary transition-colors flex items-center gap-2 group"><div className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" /> Envíos Express</Link></li>
              <li><Link href="/servicios/envios-low-cost" className="hover:text-primary transition-colors flex items-center gap-2 group"><div className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" /> Envíos Low Cost</Link></li>
              <li><Link href="/servicios/enviosflex" className="hover:text-primary transition-colors flex items-center gap-2 group"><div className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" /> Mercado Libre Flex</Link></li>
              <li><Link href="/servicios/moto-fija" className="hover:text-primary transition-colors flex items-center gap-2 group"><div className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" /> Mensajería Fija</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-orbitron)] font-bold mb-8 tracking-widest text-xs uppercase text-white opacity-50">CONTACTO</h4>
            <ul className="space-y-6 text-gray-500 text-sm font-[family-name:var(--font-roboto)]">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-secondary" />
                </div>
                <span className="leading-relaxed">11 de Septiembre, <br /> Mar del Plata, Argentina</span>
              </li>
              <li className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <a href="tel:+5492236602699" className="hover:text-white transition-colors">+54 9 223 660-2699</a>
              </li>
              <li className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <a href="mailto:hola@enviosdosruedas.com" className="hover:text-white transition-colors">hola@enviosdosruedas.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">
            © {currentYear} ENVIOS DOSRUEDAS. LOGÍSTICA URBANA DE ALTA PRECISIÓN.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
            <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
