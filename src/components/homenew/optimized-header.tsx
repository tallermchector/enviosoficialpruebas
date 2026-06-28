'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  Mail,
  Calculator as CalculatorIcon,
  Phone,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeaderContainer } from './header-container';
import { MobileMenu } from './mobile-menu';
import { ActiveLink } from './active-link';
import { NavDropdown } from './nav-dropdown';
import { navGroups } from '@/lib/navigation';

export const OptimizedHeader = () => {
  return (
    <HeaderContainer>
      <Link
        href="/"
        className="flex items-center gap-2 sm:gap-3 group shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        aria-label="Volver al inicio"
      >
        <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
          <Image
            src="/LogoEnviosDosRuedas.webp"
            alt="Logo Dos Ruedas"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 32px, 36px"
          />
        </div>
        <span className="font-display text-[clamp(0.85rem,2.5vw,1.25rem)] tracking-tight text-white uppercase whitespace-nowrap">
          Envíos<span className="text-secondary">DosRuedas</span>
        </span>
      </Link>

      <nav className="hidden lg:flex items-center gap-1 bg-white/[0.06] border border-white/10 px-2 py-1">
        <ActiveLink
          href="/"
          className="text-white/80 hover:text-white hover:bg-white/10 font-bebas text-lg tracking-wider"
          activeClassName="bg-secondary text-primary font-bold"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          <span>Inicio</span>
        </ActiveLink>

        {navGroups.map((group) => (
          <NavDropdown key={group.label} group={group} />
        ))}

        <ActiveLink
          href="/propiedades"
          className="text-white/80 hover:text-white hover:bg-white/10 font-bebas text-lg tracking-wider"
          activeClassName="bg-secondary text-primary font-bold"
        >
          <Building2 className="h-4 w-4" aria-hidden="true" />
          <span>Propiedades</span>
        </ActiveLink>

        <ActiveLink
          href="/contacto"
          className="text-white/80 hover:text-white hover:bg-white/10 font-bebas text-lg tracking-wider"
          activeClassName="bg-secondary text-primary font-bold"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          <span>Contacto</span>
        </ActiveLink>

        <div className="w-px h-6 bg-white/15 mx-1" />

        <Button
          asChild
          className="bg-secondary hover:bg-secondary/90 text-primary font-bebas text-lg tracking-wider uppercase px-5 shadow-hard-secondary hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
        >
          <Link
            href="/cotizar/express"
            aria-label="Cotizá tu envío"
            className="outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <CalculatorIcon className="mr-1.5 h-4 w-4" aria-hidden="true" />
            Cotizá tu Envío
          </Link>
        </Button>
      </nav>

      <div className="flex items-center gap-3">
        <a
          href="tel:+5492236602699"
          aria-label="Llamar al +54 223 660-2699"
          className="hidden xl:flex items-center gap-2 px-4 py-2 border border-secondary/30 text-white text-xs font-bold tracking-widest uppercase hover:text-secondary hover:border-secondary transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-secondary"
        >
          <Phone size={14} className="text-secondary" aria-hidden="true" />
          +54 223 660-2699
        </a>

        <MobileMenu navGroups={navGroups} />
      </div>
    </HeaderContainer>
  );
};
