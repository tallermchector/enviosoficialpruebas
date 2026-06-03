"use client";

import React, { useState } from 'react';
import HeroPrototype from '@/components/homenew/HeroPrototype';
import ServicesShowcase from '@/components/prototypes/ServicesShowcase';
import OperationalDashboard from '@/components/prototypes/OperationalDashboard';
import BrandSupportScreen from '@/components/prototypes/BrandSupportScreen';
import LandingPageV2 from '@/components/design-v2/LandingPageV2';

const PrototypePreview = () => {
  const [activeTab, setActiveTab] = useState('v2');

  const tabs = [
    { id: 'v2', label: 'Design V2' },
    { id: 'hero', label: 'Home / Hero' },
    { id: 'services', label: 'Servicios' },
    { id: 'ops', label: 'Operaciones' },
    { id: 'support', label: 'Soporte / Marca' },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Prototype Selector */}
      <div className="fixed top-2 left-1/2 -translate-x-1/2 z-[100] flex gap-2 p-1 bg-slate-900/80 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl overflow-x-auto max-w-[95vw]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Render Active Prototype */}
      <div className="pt-0">
        {activeTab === 'v2' && <LandingPageV2 />}
        {activeTab === 'hero' && <HeroPrototype />}
        {activeTab === 'services' && <ServicesShowcase />}
        {activeTab === 'ops' && <OperationalDashboard />}
        {activeTab === 'support' && <BrandSupportScreen />}
      </div>
    </div>
  );
};

export default PrototypePreview;
