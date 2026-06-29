"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios/envios-express" },
  { name: "Cotizar Express", href: "/cotizar/express" },
  { name: "Nosotros", href: "/nosotros/sobre-nosotros" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b-3 border-primary py-3 shadow-[0_4px_0_0_var(--color-primary)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 border-2 border-primary rounded-none overflow-hidden transition-transform duration-300 group-hover:rotate-6 bg-secondary">
            <Image
              src="/LogoEnviosDosRuedas.webp"
              alt="Logo Envíos DosRuedas"
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div>
            <span className="font-title text-2xl uppercase tracking-wider text-primary block leading-none">
              DosRuedas
            </span>
            <span className="font-subtitle text-xs text-primary tracking-widest block">
              ENVÍOS OFICIALES
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-subtitle text-lg uppercase tracking-wide text-primary hover:text-secondary hover:bg-primary px-3 py-1 border border-transparent hover:border-primary transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button (Neo-Brutalist) */}
        <div className="hidden md:block">
          <Link
            href="/cotizar/express"
            className="btn-yellow"
          >
            Hablá con Nosotros
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 border-2 border-primary bg-secondary text-primary shadow-[2px_2px_0_0_var(--color-primary)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white border-b-2 border-primary shadow-[0_2px_0_0_var(--color-primary)] md:hidden px-6 py-8 flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-subtitle text-2xl uppercase tracking-wider text-primary hover:bg-secondary p-2 border border-transparent hover:border-primary transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <Link
              href="/cotizar/express"
              onClick={() => setIsOpen(false)}
              className="btn-yellow w-full text-center"
            >
              Cotizar Envío Flex
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
