'use client';

import { HeroSection } from "@/components/ui/HeroSection";

export function LowcostHero() {
  return (
    <HeroSection
      preTitle="TARIFA OPTIMIZADA"
      title={
        <>
          MENSAJERÍA - <br />
          <span className="text-primary">ENVÍOS LOW-COST</span>
        </>
      }
      description="Descubre nuestros servicios de mensajería rápida y económica. Envíos seguros y a precios bajos para todas tus necesidades con ruteo inteligente."
      ctaButtons={[
        { text: "COTIZAR EL SERVICIO", href: "/cotizar/lowcost", variant: 'secondary' }
      ]}
      backgroundImageUrl="/bannerenvios.webp"
      backgroundImageAlt="Banner Envíos Low Cost Envios DosRuedas"
    />
  );
}
