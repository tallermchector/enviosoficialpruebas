"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu, Home, Calculator as CalculatorIcon, Mail, ChevronDown, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { navGroups } from "@/lib/navigation"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const mobileNavVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const mobileNavItemVariants: Variants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 24,
    },
  },
}

const NavLink = ({
  href,
  children,
  isActive,
}: {
  href: string
  children: React.ReactNode
  isActive: boolean
  scrolled: boolean
}) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      href={href}
      className={cn(
        "flex items-center space-x-2 px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200",
        isActive
          ? "bg-primary/20 text-blue-400 border border-primary/30"
          : "text-white/70 hover:text-white hover:bg-white/10",
      )}
    >
      {children}
    </Link>
  </motion.div>
)

export function OptimizedHeader() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const isGroupActive = (basePath: string = "") => {
    return pathname.startsWith(basePath)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll() 
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#050810]/80 backdrop-blur-md py-4 border-b border-white/10"
          : "bg-transparent py-6",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring" as any, stiffness: 200, damping: 25 }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer max-w-[40%] sm:max-w-none">
          <motion.div
            whileHover={{ rotate: 12, scale: 1.1 }}
            className="w-10 h-10 transition-transform shrink-0"
          >
            <Image
              src="/LogoEnviosDosRuedas.webp"
              alt="Logo Envíos DosRuedas"
              width={40}
              height={40}
              className="object-contain"
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-[family-name:var(--font-orbitron)] font-black text-xl tracking-tighter text-white uppercase italic hidden sm:inline-block leading-none">
              DOS<span className="text-primary">RUEDAS</span>
            </span>
            <span className="text-[8px] text-primary/80 font-bold uppercase tracking-[0.2em] hidden sm:inline-block leading-none mt-1">
              tu solución confiable
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-2 lg:flex">
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
                      "flex cursor-pointer items-center space-x-2 rounded-lg px-6 py-2 text-sm font-medium transition-all duration-200",
                      groupIsActive
                        ? "bg-primary/20 text-blue-400 border border-primary/30"
                        : "text-white/70 hover:text-white hover:bg-white/10",
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GroupIcon className="h-4 w-4" />
                    <span>{group.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2 w-56 bg-[#0a0d16]/95 backdrop-blur-xl border-white/10 text-white shadow-2xl">
                  {group.items.map((item) => {
                    const ItemIcon = item.icon
                    return (
                      <DropdownMenuItem key={item.href} asChild className="focus:bg-primary/20 focus:text-blue-400 cursor-pointer">
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center space-x-3 py-2.5",
                            isActive(item.href) ? "text-primary font-semibold" : "text-white/70",
                          )}
                        >
                          {ItemIcon && <ItemIcon className="h-4 w-4" />}
                          <span>{item.label}</span>
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
              className="bg-secondary hover:bg-secondary/90 text-black font-[family-name:var(--font-orbitron)] font-bold px-6"
            >
              <Link href="/cotizar/express">
                <CalculatorIcon className="mr-2 h-4 w-4" />
                COTIZAR
              </Link>
            </Button>
          </motion.div>
        </nav>

        {/* Right side mobile trigger */}
        <div className="flex items-center gap-4">
           <a href="tel:+5492236602699" className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-bold tracking-widest hover:bg-white/10 transition-all uppercase">
            <Phone size={14} className="text-secondary" /> +54 223 660-2699
          </a>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-11 w-11 flex items-center justify-center">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-[#050810] text-white border-white/10 pt-10">
                <SheetHeader className="mb-8 flex flex-row items-center space-x-3">
                   <div className="w-10 h-10">
                    <Image
                      src="/LogoEnviosDosRuedas.webp"
                      alt="Logo Envíos DosRuedas"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <SheetTitle className="text-white font-[family-name:var(--font-orbitron)] font-black italic text-xl">
                    DOS<span className="text-primary">RUEDAS</span>
                  </SheetTitle>
                </SheetHeader>

                <motion.div
                  className="flex h-full flex-col"
                  variants={mobileNavVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={mobileNavItemVariants}>
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className={cn(
                          "flex items-center space-x-4 py-4 px-6 rounded-xl transition-all duration-300 w-full group",
                          isActive("/")
                            ? "bg-primary/20 text-blue-400 border border-primary/30 shadow-lg"
                            : "text-white/70 hover:text-white hover:bg-white/5",
                        )}
                      >
                        <Home className="w-5 h-5" />
                        <span className="font-medium text-base">Inicio</span>
                      </Link>
                    </SheetClose>
                  </motion.div>

                  <Accordion type="multiple" className="w-full">
                    {navGroups.map((group) => {
                      const GroupIcon = group.icon
                      const groupIsActive = isGroupActive(group.basePath)

                      return (
                        <motion.div variants={mobileNavItemVariants} key={group.label}>
                          <AccordionItem value={group.label} className="border-b-0">
                            <AccordionTrigger
                              className={cn(
                                "py-4 px-6 rounded-xl transition-all duration-300 w-full justify-between group",
                                groupIsActive
                                  ? "text-primary font-semibold [&[data-state=open]]:bg-primary/10"
                                  : "text-white/70 hover:text-white hover:bg-white/5",
                                "hover:no-underline",
                              )}
                            >
                              <div className="flex items-center space-x-4">
                                <GroupIcon className="w-5 h-5" />
                                <span className="font-medium text-base">{group.label}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-0">
                              <div className="flex flex-col space-y-1 pl-8">
                                {group.items.map((item) => {
                                  const ItemIcon = item.icon
                                  return (
                                    <SheetClose asChild key={item.href}>
                                      <Link
                                        href={item.href}
                                        className={cn(
                                          "flex items-center space-x-3 py-3 px-6 rounded-lg transition-all duration-300 w-full text-left",
                                          isActive(item.href)
                                            ? "bg-primary/20 text-blue-400 font-medium"
                                            : "text-white/60 hover:text-white hover:bg-white/5",
                                        )}
                                      >
                                        {ItemIcon && <ItemIcon className="w-4 h-4" />}
                                        <span className="text-sm">{item.label}</span>
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
                          "flex items-center space-x-4 py-4 px-6 rounded-xl transition-all duration-300 w-full group",
                          isActive("/contacto")
                            ? "bg-primary/20 text-blue-400 border border-primary/30 shadow-lg"
                            : "text-white/70 hover:text-white hover:bg-white/5",
                        )}
                      >
                        <Mail className="w-5 h-5" />
                        <span className="font-medium text-base">Contacto</span>
                      </Link>
                    </SheetClose>
                  </motion.div>

                  <motion.div variants={mobileNavItemVariants} className="mt-auto pt-6 pb-10">
                    <SheetClose asChild>
                      <Link href="/cotizar/express" className="block w-full">
                        <Button
                          size="lg"
                          className="w-full bg-secondary hover:bg-secondary/90 text-black font-[family-name:var(--font-orbitron)] font-bold rounded-xl"
                        >
                          <CalculatorIcon className="w-5 h-5 mr-3" />
                          COTIZAR ENVÍO
                        </Button>
                      </Link>
                    </SheetClose>
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
