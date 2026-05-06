'use client';

import { HeroSection } from "@/components/ui/HeroSection";

export function EnviosFlexHero() {
  return (
    <HeroSection
      preTitle="BENEFICIO EMPRENDEDORES"
      title={
        <>
          ENVÍOS FLEX - <br />
          <span className="text-primary">MERCADOLIBRE</span>
        </>
      }
      description="Potencia tus ventas online con envíos profesionales y entregas en el día. Ofrece envíos en el día para tus ventas antes de las 15hs y mejora tu reputación."
      ctaButtons={[
        { text: "COTIZAR SERVICIO FLEX", href: "/cotizar/lowcost", variant: "secondary" }
      ]}
      backgroundImageUrl="/bannerenvios.webp"
      backgroundImageAlt="Banner Envíos Flex Envios DosRuedas"
    />
  );
}
