'use client';

import { motion } from 'framer-motion';

export function HeroScrollIndicator() {
  return (
    <motion.button
      type="button"
      animate={{ y: [0, 12, 0] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20 hover:opacity-50 focus-visible:opacity-100 transition-opacity cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm"
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      aria-label="Desplazarse hacia abajo"
    >
      <span className="text-[8px] uppercase tracking-[0.5em] font-black text-white">Explore</span>
      <div className="w-[1px] h-14 bg-gradient-to-b from-white via-white to-transparent" />
    </motion.button>
  );
}
