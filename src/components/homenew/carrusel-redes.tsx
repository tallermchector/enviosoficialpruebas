'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera as Instagram, Share2 as Facebook, MessageCircle as Twitter, ExternalLink, Phone, Heart } from "lucide-react";

const socialNetworks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/enviosdosruedas",
    color: "#FFEC01", // Sunbeam Yellow for high visibility
    description: "Novedades diarias",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/enviosdosruedas",
    color: "#FFFFFF",
    description: "Comunidad activa",
  },
  {
    name: "WhatsApp",
    icon: Phone,
    isWhatsApp: true,
    color: "#FFEC01",
    description: "Atención inmediata",
  },
];

const feedItems = [
  { 
    id: 17, 
    type: 'fb', 
    image: '/redes/fac1.webp',
    postUrl: "https://www.facebook.com/enviosdosruedas/posts/pfbid0a1i4tygsZQjwp9bsvS9xSHApJqMe5JkeoJbqx12Qvas18nSojtGhj6U9cFn3m5hDl"
  },
  { 
    id: 15, 
    type: 'ig', 
    image: '/redes/ig1.webp',
    postUrl: "https://www.instagram.com/enviosdosruedas/p/DJhlS5xOrTb/"
  },
  { 
    id: 7, 
    type: 'ig', 
    image: '/redes/ig3.webp',
    postUrl: "https://www.instagram.com/enviosdosruedas/p/DK12WIDslKW/"
  },
  { 
    id: 19, 
    type: 'ig', 
    image: '/redes/ig4.webp',
    postUrl: "https://www.instagram.com/enviosdosruedas/p/DEaAGAmRMKj/"
  },
  { 
    id: 21, 
    type: 'fb', 
    image: '/redes/fac2.webp',
    postUrl: "https://www.facebook.com/enviosdosruedas/posts/pfbid03WPv5ZE93ZNwL5PMRwuTpJxGaGSBzLigJqDSyzATNcSkRT3xBMZz7GKbhPv1mC53l"
  },
];

export const CarruselRedes = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5492236602699"
    const message = "Hola, me gustaría obtener información sobre sus servicios de envío."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-32 px-6 bg-[#0636A5] overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-white/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-secondary/10 border border-secondary/20 text-secondary text-xxs font-bold tracking-widest mb-6 uppercase">
              <Heart size={12} className="fill-secondary text-secondary" /> CONECTA CON NOSOTROS
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
              SIGUE NUESTRO <span className="text-secondary drop-shadow-[0_0_15px_rgba(255,236,0,0.3)]">MOVIMIENTO</span>
            </h2>
            <p className="text-white/80 text-lg mt-4 font-sans max-w-xl font-light">
              Únete a nuestra comunidad digital y mantente al día con las últimas noticias de logística en Mar del Plata.
            </p>
          </div>

          <div className="flex gap-4">
            {socialNetworks.map((net, idx) => (
              <button
                key={idx}
                onClick={net.isWhatsApp ? handleWhatsAppClick : () => window.open(net.href, "_blank")}
                className="group flex items-center gap-4 p-4 rounded-none bg-white/5 border border-white/10 hover:border-secondary hover:bg-white/10 transition-all text-white"
                aria-label={`Seguinos en ${net.name}`}
              >
                <div
                  className="w-12 h-12 rounded-none flex items-center justify-center transition-transform group-hover:scale-110 border border-white/10"
                  style={{ backgroundColor: `${net.color}15`, color: net.color }}
                  aria-hidden="true"
                >
                  <net.icon size={24} />
                </div>
                <div className="text-left hidden lg:block">
                  <div className="text-sm font-bold font-subtitle tracking-tight uppercase">{net.name}</div>
                  <div className="text-xxs text-white/60 uppercase tracking-widest">{net.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="relative group/carousel">
          <div className="flex gap-6 w-fit overflow-hidden py-10">
            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" as any }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {[...feedItems, ...feedItems, ...feedItems].map((item, idx) => (
                <a
                  key={idx}
                  href={(item as any).postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-72 h-72 shrink-0 rounded-none overflow-hidden relative group border border-white/10 shadow-2xl transition-all hover:border-secondary block"
                  aria-label={`Ver publicación ${item.id} en ${item.type === 'ig' ? 'Instagram' : 'Facebook'}`}
                >
                  <img src={item.image} alt={`Publicación de ${item.type === 'ig' ? 'Instagram' : 'Facebook'}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#0636A5]/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-6 p-8">
                    <div className="w-16 h-16 rounded-none bg-white/10 border border-white/20 flex items-center justify-center text-white">
                      {item.type === 'ig' && <Instagram size={32} />}
                      {item.type === 'fb' && <Facebook size={32} />}
                    </div>
                    <div className="text-center">
                      <div className="text-white font-subtitle text-lg uppercase tracking-wider mb-2">VER POST</div>
                      <ExternalLink size={20} className="text-secondary mx-auto" />
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Side Gradients using dominant blue color */}
          <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-[#0636A5] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-[#0636A5] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
