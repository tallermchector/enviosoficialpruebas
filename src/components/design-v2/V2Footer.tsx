'use client';

import React from 'react';
import { Truck, Share2, Settings, MapPin, Phone, Mail } from 'lucide-react';

export const V2Footer = () => {
  return (
    <footer className="pt-24 pb-32 px-4 border-t border-white/5 bg-[#050810]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[hsl(221.2,83.2%,53.3%)] flex items-center justify-center">
                <Truck size={18} className="text-white" />
              </div>
              <span className="font-[family-name:var(--font-orbitron)] font-bold tracking-wider text-lg uppercase text-white">DOSRUEDAS</span>
            </div>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Liderando la logística de última milla en Mar del Plata. Rapidez, seguridad y compromiso en cada entrega.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600/20 transition-colors text-white">
                <Share2 size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600/20 transition-colors text-white">
                <Settings size={18} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-orbitron)] font-bold mb-6 tracking-widest text-sm uppercase text-white">EMPRESA</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trabaja con Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prensa</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-orbitron)] font-bold mb-6 tracking-widest text-sm uppercase text-white">SOPORTE</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-orbitron)] font-bold mb-6 tracking-widest text-sm uppercase text-white">CONTACTO</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[hsl(221.2,83.2%,53.3%)] shrink-0" />
                <span>Av. Colón 1234, Mar del Plata, Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[hsl(221.2,83.2%,53.3%)] shrink-0" />
                <span>+54 223 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[hsl(221.2,83.2%,53.3%)] shrink-0" />
                <span>hola@enviosdosruedas.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-gray-600 uppercase tracking-widest font-medium">
          <p>© 2024 Envios DosRuedas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
