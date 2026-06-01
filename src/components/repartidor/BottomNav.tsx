'use client';

import React from 'react';
import { Map, LayoutDashboard, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export type NavTab = 'route' | 'stats' | 'profile';

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'route' as const, label: 'Ruta', icon: Map },
    { id: 'stats' as const, label: 'Resumen', icon: LayoutDashboard },
    { id: 'profile' as const, label: 'Perfil', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-primary border-t border-white/10 safe-area-pb lg:hidden">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full transition-all duration-300 relative",
                isActive ? "text-secondary" : "text-white/60 hover:text-white"
              )}
            >
              <Icon
                className={cn(
                  "h-6 w-6 mb-1 transition-transform",
                  isActive && "scale-110"
                )}
              />
              <span className="text-[10px] font-display font-bold uppercase tracking-widest">
                {tab.label}
              </span>

              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-secondary" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
