'use client';

import React from 'react';
import { V2Header } from './V2Header';
import { V2Hero } from './V2Hero';
import { V2Services } from './V2Services';
import { V2Vision } from './V2Vision';
import { V2Footer } from './V2Footer';
import { V2BottomNav } from './V2BottomNav';

const LandingPageV2 = () => {
  return (
    <div className="min-h-screen bg-[#050810] text-white font-[family-name:var(--font-roboto)] selection:bg-blue-500/30">
      <V2Header />
      <V2Hero />
      <V2Services />
      <V2Vision />
      <V2Footer />
      <V2BottomNav />
    </div>
  );
};

export default LandingPageV2;
