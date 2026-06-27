import React from 'react';
import { Truck, MapPin, Phone, Mail, ShieldCheck, Zap, Globe, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { FooterSocialLinks } from './footer-social-links';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    empresa: [
      { label: "Sobre Nosotros", href: "/nosotros/sobre-nosotros" },
      { label: "Preguntas Frecuentes", href: "/nosotros/preguntas-frecuentes" },
      { label: "Nuestras Redes", href: "/nosotros/nuestras-redes" },
      { label: "Términos y Condiciones", href: "/terminos-y-condiciones" },
      { label: "Política de Privacidad", href: "/politica-de-privacidad" }
    ],
    servicios: [
      { label: "Envíos Express", href: "/servicios/envios-express" },
      { label: "Envíos LowCost", href: "/servicios/envios-lowcost" },
      { label: "Envíos Flex (MeLi)", href: "/servicios/enviosflex" },
      { label: "E-Commerce & 3PL", href: "/servicios/plan-emprendedores" }
    ]
  };

  return (
    <footer className="pt-32 pb-16 px-4 border-t-2 border-secondary bg-[#0636A5] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none opacity-50" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none opacity-30" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">

          {/* Brand Identity */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 group shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-lg" aria-label="Volver al inicio desde el pie de página">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-none flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                <Image src="/LogoEnviosDosRuedas.webp" alt="Logo Dos Ruedas" fill className="object-contain" sizes="(max-width: 640px) 48px, 56px" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-black text-xl sm:text-2xl lg:text-3xl tracking-tighter text-white uppercase italic leading-none mb-1">
                  Envíos<span className="text-secondary drop-shadow-[0_0_10px_rgba(255,236,0,0.35)]">DosRuedas</span>
                </span>
                <span className="font-display font-black text-secondary drop-shadow-[0_0_10px_rgba(255,236,0,0.35)] text-xxs sm:text-sm lg:text-base uppercase italic tracking-[0.15em] leading-none">
                  Tu solución confiable.
                </span>
              </div>
            </Link>
            <p className="text-white/85 text-base mb-12 leading-relaxed font-sans font-light max-w-sm">
              Logística humana y eficiente para Mar del Plata. Tus ventas en las mejores manos: conectamos tu negocio con toda la ciudad.
            </p>

            <FooterSocialLinks
              links={[
                { icon: "/icons/instagram.svg", href: "https://instagram.com/enviosdosruedas", label: "Instagram en el pie de página" },
                { icon: "/icons/facebook.svg", href: "https://facebook.com/enviosdosruedas", label: "Facebook en el pie de página" },
                { icon: "/icons/whatsapp.svg", href: "https://wa.me/542236602699", label: "WhatsApp en el pie de página" },
                { icon: "/icons/google.svg", href: "#", label: "Google en el pie de página" }
              ]}
            />
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-black mb-10 tracking-[0.3em] text-xxs uppercase text-white/50 text-balance">Nosotros</h3>
            <ul className="space-y-6">
              {footerLinks.empresa.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-secondary transition-colors duration-200 flex items-center gap-3 group text-sm font-sans font-light outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm">
                    <div className="w-1 h-1 rounded-none bg-white/20 group-hover:bg-secondary group-hover:scale-150 transition-[background-color,transform] duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display font-black mb-10 tracking-[0.3em] text-xxs uppercase text-white/50 text-balance">Servicios</h3>
            <ul className="space-y-6">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-secondary transition-colors duration-200 flex items-center gap-3 group text-sm font-sans font-light outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm">
                    <div className="w-1 h-1 rounded-none bg-white/20 group-hover:bg-secondary group-hover:scale-150 transition-[background-color,transform] duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h3 className="font-display font-black mb-10 tracking-[0.3em] text-xxs uppercase text-white/50 text-balance">Contacto Rápido</h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-none glass-card flex items-center justify-center shrink-0 group-hover:bg-secondary/20 group-hover:border-secondary/40 transition-[background-color,border-color] duration-200 bg-white/5 border border-white/10">
                  <MapPin size={22} className="text-secondary" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bebas text-sm font-black uppercase tracking-widest mb-1 opacity-50">Ubicación</span>
                  <span className="text-white/90 text-sm leading-relaxed font-light">Friuli 1972, Mar del Plata</span>
                </div>
              </li>

              <li className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-none glass-card flex items-center justify-center shrink-0 group-hover:bg-secondary/20 group-hover:border-secondary/40 transition-[background-color,border-color] duration-200 bg-white/5 border border-white/10">
                  <Phone size={22} className="text-secondary" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bebas text-sm font-black uppercase tracking-widest mb-1 opacity-50">Teléfono</span>
                  <a href="tel:+542236602699" className="text-white/90 hover:text-secondary transition-colors font-light text-sm outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm">+54 223 660-2699</a>
                </div>
              </li>

              <li className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-none glass-card flex items-center justify-center shrink-0 group-hover:bg-secondary/20 group-hover:border-secondary/40 transition-[background-color,border-color] duration-200 bg-white/5 border border-white/10">
                  <Mail size={22} className="text-secondary" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bebas text-sm font-black uppercase tracking-widest mb-1 opacity-50">Email</span>
                  <a href="mailto:matiascejas@enviosdosruedas.com" className="text-white/90 hover:text-secondary transition-colors font-light text-sm outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm">matiascejas@enviosdosruedas.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Stats/Trust Banner */}
        <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/10 bg-white/5">
          {[
            { icon: <ShieldCheck className="text-secondary" />, label: "SEGURIDAD", value: "CERTIFICADA" },
            { icon: <Zap className="text-secondary" />, label: "VELOCIDAD", value: "MÁXIMA" },
            { icon: <Globe className="text-secondary" />, label: "COBERTURA", value: "DISTRITAL" },
            { icon: <ArrowUpRight className="text-secondary" />, label: "STATUS", value: "ONLINE" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center gap-2 px-4 border-r border-white/10 last:border-r-0">
              <div className="opacity-80">{React.cloneElement(item.icon, { size: 20, 'aria-hidden': 'true' })}</div>
              <span className="text-[8px] font-black tracking-[0.4em] text-white/70 uppercase">{item.label}</span>
              <span className="text-xxs font-black text-white uppercase tracking-widest">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-[9px] text-white/60 uppercase tracking-[0.4em] font-black text-center md:text-left">
              © {currentYear} Envíos DosRuedas. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex items-center gap-10">
            <Link href="/politica-de-privacidad" className="text-[9px] text-white/60 hover:text-white uppercase tracking-widest font-black transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm">Privacidad</Link>
            <Link href="/terminos-y-condiciones" className="text-[9px] text-white/60 hover:text-white uppercase tracking-widest font-black transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm">Términos</Link>
            <div className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center text-white" aria-hidden="true">
              <Globe size={14} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};