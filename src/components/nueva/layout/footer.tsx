"use client";

import Link from "next/link";
import { Camera as Instagram, Share2 as Facebook, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t-4 border-primary pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Information */}
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-secondary border-2 border-white p-2 font-title text-2xl text-primary uppercase tracking-wider">
              DR
            </div>
            <span className="font-title text-2xl uppercase tracking-wider text-white">
              DosRuedas
            </span>
          </Link>
          <p className="font-body text-white/80 text-sm leading-relaxed">
            Cadetería oficial, e-commerce, express y logística inteligente en Mar del Plata.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <Link
              href="https://www.instagram.com/enviosdosruedas/"
              target="_blank"
              className="p-2 bg-white text-primary border-2 border-primary hover:bg-secondary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://facebook.com/enviosdosruedas"
              target="_blank"
              className="p-2 bg-white text-primary border-2 border-primary hover:bg-secondary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Services Navigation */}
        <div>
          <h3 className="font-title text-xl uppercase tracking-wider text-secondary mb-6">
            Servicios
          </h3>
          <ul className="flex flex-col gap-3 font-subtitle text-lg uppercase tracking-wide">
            <li>
              <Link href="/servicios/envios-express" className="hover:underline hover:text-secondary">
                Envíos Express
              </Link>
            </li>
            <li>
              <Link href="/servicios/envios-lowcost" className="hover:underline hover:text-secondary">
                Envíos LowCost
              </Link>
            </li>
            <li>
              <Link href="/servicios/enviosflex" className="hover:underline hover:text-secondary">
                MercadoLibre Flex
              </Link>
            </li>
            <li>
              <Link href="/servicios/plan-emprendedores" className="hover:underline hover:text-secondary">
                Plan Emprendedores
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal links */}
        <div>
          <h3 className="font-title text-xl uppercase tracking-wider text-secondary mb-6">
            Institucional
          </h3>
          <ul className="flex flex-col gap-3 font-subtitle text-lg uppercase tracking-wide">
            <li>
              <Link href="/nosotros/sobre-nosotros" className="hover:underline hover:text-secondary">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link href="/nosotros/preguntas-frecuentes" className="hover:underline hover:text-secondary">
                Preguntas Frecuentes
              </Link>
            </li>
            <li>
              <Link href="/terminos-y-condiciones" className="hover:underline hover:text-secondary">
                Términos y Condiciones
              </Link>
            </li>
            <li>
              <Link href="/politica-de-privacidad" className="hover:underline hover:text-secondary">
                Política de Privacidad
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup (Neo-Brutalist) */}
        <div>
          <h3 className="font-title text-xl uppercase tracking-wider text-secondary mb-6">
            Novedades
          </h3>
          <p className="font-body text-white/80 text-sm mb-4 leading-relaxed">
            Suscribite para recibir actualizaciones de tarifas y nuevos servicios.
          </p>
          <div className="flex border-3 border-white bg-white">
            <input
              type="email"
              placeholder="Tu email..."
              className="bg-transparent text-primary px-3 py-2 outline-none w-full font-body placeholder:text-primary/50 text-sm"
            />
            <button className="bg-secondary text-primary border-l-3 border-primary px-4 hover:bg-white transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Credits */}
      <div className="max-w-7xl mx-auto px-6 border-t-2 border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-white/60">
          &copy; {currentYear} Envíos DosRuedas. Friuli 1972, Mar del Plata, Argentina.
        </p>
        <p className="font-body text-xs text-white/60">
          Diseñado con criterio profesional Neo-Brutalista.
        </p>
      </div>
    </footer>
  );
}
