'use client';

import { HeroSection } from "@/components/ui/HeroSection";
import RotatingCard from "@/components/homenew/rotating-card";

export function ExpressHero() {
  return (
    <HeroSection
      preTitle="DISPONIBLE EN MAR DEL PLATA"
      title={
        <>
          MENSAJERÍA - <br />
          <span className="text-primary">ENVÍOS EXPRESS</span>
        </>
      }
      description="Servicio de mensajería rápido y confiable para entregas el mismo día en Mar del Plata. Ideal para documentos y paquetes con máxima prioridad."
      ctaButtons={[
        { text: "COTIZAR ENVÍO EXPRESS", href: "/cotizar/express", variant: "secondary" },
        { text: "VER TARIFAS", href: "#express-pricing-ranges", variant: "outline", icon: "Play" },
      ]}
      backgroundImageUrl="/bannerenvios.webp"
      backgroundImageAlt="Banner envíos express Envios DosRuedas"
      layout="split-visual-right"
      visualElement={
        <div className="relative w-full max-w-[450px] aspect-[1.6/1]">
           <RotatingCard className="w-full h-full" />
           <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-black/40 blur-3xl rounded-full" />
        </div>
      }
    />
  );
}
