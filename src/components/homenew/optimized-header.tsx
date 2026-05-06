'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Truck,
  Menu,
  X,
  ChevronDown,
  Home,
  Mail,
  Calculator as CalculatorIcon,
  Phone,
  Zap,
  Package,
  Clock,
  ShieldCheck,
  Building2,
  Rocket,
  Utensils
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const navGroups = [
  {
    label: 'Servicios',
    basePath: '/servicios',
    icon: Truck,
    items: [
      { label: 'Envíos Express', href: '/servicios/envios-express', icon: Zap },
      { label: 'Envíos Low Cost', href: '/servicios/envios-lowcost', icon: Clock },
      { label: 'Mercado Libre Flex', href: '/servicios/enviosflex', icon: Package },
      { label: 'Mensajería Fija', href: '/servicios/moto-fija', icon: Building2 },
      { label: 'Plan Emprendedores', href: '/servicios/plan-emprendedores', icon: Rocket },
      { label: 'Delivery Gastronómico', href: '/servicios/delivery-gastronomico', icon: Utensils },
    ],
  },
  {
    label: 'Nosotros',
    basePath: '/nosotros',
    icon: Building2,
    items: [
      { label: 'Sobre Nosotros', href: '/nosotros/sobre-nosotros', icon: ShieldCheck },
      { label: 'Preguntas Frecuentes', href: '/nosotros/preguntas-frecuentes', icon: Mail },
      { label: 'Nuestras Redes', href: '/nosotros/nuestras-redes', icon: InstagramIcon },
    ],
  },
]

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const NavLink = ({ href, isActive, scrolled, children }: { href: string; isActive: boolean; scrolled: boolean; children: React.ReactNode }) => (
  <Link href={href}>
    <motion.div
      className={cn(
        "flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300",
        isActive
          ? "bg-primary/20 text-blue-400 border border-primary/30 shadow-lg"
          : "text-white/70 hover:text-white hover:bg-white/10"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  </Link>
)

export const OptimizedHeader = () => {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path
  const isGroupActive = (basePath: string) => pathname?.startsWith(basePath)

  const mobileNavVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  }

  const mobileNavItemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-4 md:px-8",
        scrolled ? "bg-[#050810]/80 backdrop-blur-2xl border-b border-white/10 py-3" : "bg-transparent py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group shrink-0 min-w-0">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all group-hover:rotate-6 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(37,99,235,0.4)]">
            <Image src="/LogoEnviosDosRuedas.webp" alt="Logo Dos Ruedas" fill className="object-contain" priority sizes="(max-width: 768px) 32px, 40px" />
          </div>
          <span className="font-display text-orbitron font-black text-sm sm:text-lg md:text-2xl tracking-tighter text-white uppercase italic whitespace-nowrap">
            Envíos<span className="text-primary drop-shadow-[0_0_10px_rgba(37,99,235,0.3)]">Dosruedas</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-1.5 shadow-2xl">
          <NavLink href="/" isActive={isActive("/")} scrolled={scrolled}>
            <Home className="h-4 w-4" />
            <span>Inicio</span>
          </NavLink>

          {navGroups.map((group) => {
            const GroupIcon = group.icon
            const groupIsActive = isGroupActive(group.basePath)
            return (
              <DropdownMenu key={group.label}>
                <DropdownMenuTrigger asChild>
                  <motion.div
                    className={cn(
                      "flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                      groupIsActive
                        ? "bg-primary/20 text-blue-400 border border-primary/30"
                        : "text-white/70 hover:text-white hover:bg-white/10",
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GroupIcon className="h-4 w-4" />
                    <span>{group.label}</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2 w-64 bg-[#0a0d16]/95 backdrop-blur-2xl border-white/10 text-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] p-2">
                  {group.items.map((item) => {
                    const ItemIcon = item.icon
                    return (
                      <DropdownMenuItem key={item.href} asChild className="focus:bg-primary/20 focus:text-blue-400 cursor-pointer rounded-lg p-3 transition-colors">
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center space-x-4",
                            isActive(item.href) ? "text-primary font-bold" : "text-white/70",
                          )}
                        >
                          <div className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                            isActive(item.href) ? "bg-primary/20 text-primary" : "bg-white/5 text-white/40"
                          )}>
                            {ItemIcon && <ItemIcon className="h-4 w-4" />}
                          </div>
                          <span className="text-sm">{item.label}</span>
                        </Link>
                      </DropdownMenuItem>
                    )
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            )
          })}

          <NavLink href="/contacto" isActive={isActive("/contacto")} scrolled={scrolled}>
            <Mail className="h-4 w-4" />
            <span>Contacto</span>
          </NavLink>

          <div className="w-px h-6 bg-white/10 mx-2" />

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="gradient"
              className="px-6 rounded-xl font-display text-orbitron uppercase tracking-tighter"
            >
              <Link href="/cotizar/express">
                <CalculatorIcon className="mr-2 h-4 w-4" />
                Cotizar Envío
              </Link>
            </Button>
          </motion.div>
        </nav>

        {/* Right side Hub */}
        <div className="flex items-center gap-4">
          <a href="tel:+5492236602699" aria-label="Llamar al +54 223 660-2699" className="hidden xl:flex items-center gap-3 px-5 py-2.5 rounded-full glass-card text-white text-[10px] font-black tracking-[0.2em] hover:bg-white/10 transition-all uppercase">
            <Phone size={14} className="text-secondary animate-pulse" aria-hidden="true" /> +54 223 660-2699
          </a>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 w-12 h-12 rounded-xl" aria-label="Abrir menú de navegación">
                  <Menu className="h-7 w-7" aria-hidden="true" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] bg-[#050810] text-white border-white/10 pt-12 p-6 shadow-2xl" aria-describedby="mobile-menu-description">
                <SheetHeader className="mb-12 flex flex-row items-center space-x-4">
                  <div className="relative w-10 h-10 rounded-xl flex items-center justify-center drop-shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                    <Image src="/LogoEnviosDosRuedas.webp" alt="Logo Dos Ruedas" fill className="object-contain" sizes="40px" priority />
                  </div>
                  <SheetTitle className="text-white font-display text-orbitron font-black italic text-xl tracking-tighter uppercase whitespace-nowrap">
                    Envíos Dos <span className="text-primary">Ruedas</span>
                  </SheetTitle>
                </SheetHeader>

                <motion.div
                  className="flex h-[calc(100vh-200px)] flex-col"
                  variants={mobileNavVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={mobileNavItemVariants}>
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className={cn(
                          "flex items-center space-x-5 py-4 px-5 rounded-2xl transition-all duration-300 w-full mb-2",
                          isActive("/")
                            ? "bg-primary/20 text-blue-400 border border-primary/30 shadow-xl"
                            : "text-white/70 hover:text-white hover:bg-white/5",
                        )}
                      >
                        <Home className="w-5 h-5" />
                        <span className="font-black font-display text-orbitron text-xs tracking-[0.1em] uppercase">Inicio</span>
                      </Link>
                    </SheetClose>
                  </motion.div>

                  <Accordion type="multiple" className="w-full space-y-2">
                    {navGroups.map((group) => {
                      const GroupIcon = group.icon
                      const groupIsActive = isGroupActive(group.basePath)

                      return (
                        <motion.div variants={mobileNavItemVariants} key={group.label}>
                          <AccordionItem value={group.label} className="border-b-0">
                            <AccordionTrigger
                              className={cn(
                                "py-4 px-5 rounded-2xl transition-all duration-300 w-full justify-between group",
                                groupIsActive
                                  ? "text-primary font-bold [&[data-state=open]]:bg-primary/10 border border-primary/20"
                                  : "text-white/70 hover:text-white hover:bg-white/5",
                                "hover:no-underline",
                              )}
                            >
                              <div className="flex items-center space-x-5">
                                <GroupIcon className="w-5 h-5" />
                                <span className="font-black font-display text-orbitron text-xs tracking-[0.1em] uppercase">{group.label}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-0">
                              <div className="flex flex-col space-y-1 pl-10 border-l border-white/5 ml-7 my-2">
                                {group.items.map((item) => {
                                  const ItemIcon = item.icon
                                  return (
                                    <SheetClose asChild key={item.href}>
                                      <Link
                                        href={item.href}
                                        className={cn(
                                          "flex items-center space-x-4 py-3.5 px-5 rounded-xl transition-all duration-300 w-full text-left",
                                          isActive(item.href)
                                            ? "bg-primary/20 text-blue-400 font-bold"
                                            : "text-white/50 hover:text-white hover:bg-white/5",
                                        )}
                                      >
                                        {ItemIcon && <ItemIcon className="w-4 h-4" />}
                                        <span className="text-sm font-medium">{item.label}</span>
                                      </Link>
                                    </SheetClose>
                                  )
                                })}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </motion.div>
                      )
                    })}
                  </Accordion>

                  <motion.div variants={mobileNavItemVariants} className="mt-2">
                    <SheetClose asChild>
                      <Link
                        href="/contacto"
                        className={cn(
                          "flex items-center space-x-5 py-4 px-5 rounded-2xl transition-all duration-300 w-full group",
                          isActive("/contacto")
                            ? "bg-primary/20 text-blue-400 border border-primary/30 shadow-xl"
                            : "text-white/70 hover:text-white hover:bg-white/5",
                        )}
                      >
                        <Mail className="w-5 h-5" />
                        <span className="font-black font-display text-orbitron text-xs tracking-[0.1em] uppercase">Contacto</span>
                      </Link>
                    </SheetClose>
                  </motion.div>

                  <motion.div variants={mobileNavItemVariants} className="mt-auto pt-8">
                    <SheetClose asChild>
                      <Link href="/cotizar/express" className="block w-full">
                        <Button
                          size="lg"
                          className="w-full h-16 bg-secondary hover:bg-secondary/90 text-black font-display text-orbitron font-black rounded-2xl shadow-xl shadow-secondary/20 uppercase tracking-tighter"
                        >
                          <CalculatorIcon className="w-5 h-5 mr-3" />
                          Cotizar Envío
                        </Button>
                      </Link>
                    </SheetClose>
                    <div className="mt-6 flex items-center justify-center gap-6" id="mobile-menu-description">
                      <Link href="https://instagram.com/enviosdosruedas" aria-label="Visitar nuestro Instagram" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all">
                        <InstagramIcon className="w-5 h-5" aria-hidden="true" />
                      </Link>
                      <a href="tel:+5492236602699" aria-label="Llamar a Envios DosRuedas" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-white transition-all">
                        <Phone className="w-5 h-5" aria-hidden="true" />
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}