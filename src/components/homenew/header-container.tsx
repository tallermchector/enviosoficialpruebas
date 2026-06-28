'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeaderContainerProps {
  children: React.ReactNode;
}

export function HeaderContainer({ children }: HeaderContainerProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-primary border-b-2 border-secondary shadow-hard-secondary py-2"
          : "bg-primary/95 backdrop-blur-sm py-3"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">
        {children}
      </div>
    </motion.header>
  );
}
