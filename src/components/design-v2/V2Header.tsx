'use client';

import React from 'react';
import { Truck, Menu } from 'lucide-react';

export const V2Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050810]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[hsl(221.2,83.2%,53.3%)] flex items-center justify-center">
            <Truck size={18} className="text-white" />
          </div>
          <span className="font-[family-name:var(--font-orbitron)] font-bold tracking-wider text-lg uppercase text-white">DOSRUEDAS</span>
        </div>
        <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};
