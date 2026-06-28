'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Menu,
  Home,
  Mail,
  Calculator as CalculatorIcon,
  Phone,
  Building2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface MobileMenuProps {
  navGroups: {
    label: string;
    basePath: string;
    icon: React.ElementType;
    items: {
      label: string;
      href: string;
      icon?: React.ElementType;
    }[];
  }[];
}

export function MobileMenu({ navGroups }: MobileMenuProps) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const isGroupActive = (basePath: string) => pathname?.startsWith(basePath);

  const navVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.04, delayChildren: 0.08 }
    }
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 w-11 h-11 outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            aria-label="Abrir menú de navegación"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[300px] bg-primary border-l-2 border-secondary text-white p-0 flex flex-col"
        >
          <SheetHeader className="p-4 border-b border-white/10">
            <SheetTitle className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <Image
                  src="/LogoEnviosDosRuedas.webp"
                  alt="Logo Dos Ruedas"
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <span className="font-display text-lg tracking-tight text-white uppercase">
                Envíos<span className="text-secondary">DosRuedas</span>
              </span>
            </SheetTitle>
          </SheetHeader>

          <motion.div
            className="flex-1 overflow-y-auto p-4 flex flex-col"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <SheetClose asChild>
                <Link
                  href="/"
                  className={cn(
                    "flex items-center gap-4 py-3 px-4 transition-colors duration-200 w-full outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                    isActive("/")
                      ? "bg-secondary text-primary font-bold"
                      : "text-white/80 hover:text-white hover:bg-white/5",
                  )}
                >
                  <Home className="w-5 h-5" aria-hidden="true" />
                  <span className="font-bebas text-base tracking-wider uppercase">Inicio</span>
                </Link>
              </SheetClose>
            </motion.div>

            <Accordion type="multiple" className="w-full mt-1">
              {navGroups.map((group) => {
                const GroupIcon = group.icon;
                const groupIsActive = isGroupActive(group.basePath);

                return (
                  <motion.div variants={itemVariants} key={group.label}>
                    <AccordionItem value={group.label} className="border-b-0">
                      <AccordionTrigger
                        className={cn(
                          "py-3 px-4 transition-colors duration-200 w-full justify-between hover:no-underline outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                          groupIsActive
                            ? "text-secondary font-bold"
                            : "text-white/80 hover:text-white hover:bg-white/5",
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <GroupIcon className="w-5 h-5" aria-hidden="true" />
                          <span className="font-bebas text-base tracking-wider uppercase">{group.label}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-1 pb-0">
                        <div className="flex flex-col border-l-2 border-white/10 ml-8 my-1">
                          {group.items.map((item) => {
                            const ItemIcon = item.icon;
                            return (
                              <SheetClose asChild key={item.href}>
                                <Link
                                  href={item.href}
                                  className={cn(
                                    "flex items-center gap-3 py-2.5 px-4 transition-colors duration-200 w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                                    isActive(item.href)
                                      ? "text-secondary font-bold bg-secondary/10"
                                      : "text-white/60 hover:text-white hover:bg-white/5",
                                  )}
                                >
                                  {ItemIcon && <ItemIcon className="w-4 h-4" aria-hidden="true" />}
                                  <span className="text-sm">{item.label}</span>
                                </Link>
                              </SheetClose>
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>

            <motion.div variants={itemVariants} className="mt-1">
              <SheetClose asChild>
                <Link
                  href="/propiedades"
                  className={cn(
                    "flex items-center gap-4 py-3 px-4 transition-colors duration-200 w-full outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                    isActive("/propiedades")
                      ? "bg-secondary text-primary font-bold"
                      : "text-white/80 hover:text-white hover:bg-white/5",
                  )}
                >
                  <Building2 className="w-5 h-5" aria-hidden="true" />
                  <span className="font-bebas text-base tracking-wider uppercase">Propiedades</span>
                </Link>
              </SheetClose>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-1">
              <SheetClose asChild>
                <Link
                  href="/contacto"
                  className={cn(
                    "flex items-center gap-4 py-3 px-4 transition-colors duration-200 w-full outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                    isActive("/contacto")
                      ? "bg-secondary text-primary font-bold"
                      : "text-white/80 hover:text-white hover:bg-white/5",
                  )}
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  <span className="font-bebas text-base tracking-wider uppercase">Contacto</span>
                </Link>
              </SheetClose>
            </motion.div>

            <div className="mt-auto pt-6 flex flex-col gap-4">
              <SheetClose asChild>
                <Link href="/cotizar/express" className="block w-full outline-none focus-visible:ring-2 focus-visible:ring-secondary">
                  <Button
                    size="lg"
                    className="w-full h-14 bg-secondary hover:bg-secondary/90 text-primary font-bebas font-bold uppercase tracking-wider text-lg shadow-hard-secondary hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
                  >
                    <CalculatorIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    Cotizá tu Envío
                  </Button>
                </Link>
              </SheetClose>

              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://instagram.com/enviosdosruedas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar nuestro Instagram"
                  className="w-11 h-11 border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  <InstagramIcon className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="tel:+5492236602699"
                  aria-label="Llamar a Envios DosRuedas"
                  className="w-11 h-11 border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary/10 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
