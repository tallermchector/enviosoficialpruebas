'use client';

import React from 'react';
import { Home, Layers, Navigation, User } from 'lucide-react';

export const V2BottomNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 w-full bg-[#0a0d16]/90 backdrop-blur-xl border-t border-white/5 px-4 py-3 z-50">
      <div className="max-w-lg mx-auto flex justify-between items-center">
        {[
          { label: 'INICIO', icon: <Home size={20} />, active: true },
          { label: 'SERVICIOS', icon: <Layers size={20} /> },
          { label: 'RASTREO', icon: <Navigation size={20} /> },
          { label: 'PERFIL', icon: <User size={20} /> }
        ].map((item, idx) => (
          <button
            key={idx}
            className={`flex flex-col items-center gap-1 ${item.active ? 'text-[hsl(221.2,83.2%,53.3%)]' : 'text-gray-500'}`}
          >
            {item.icon}
            <span className="text-[8px] font-bold tracking-tighter uppercase">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
