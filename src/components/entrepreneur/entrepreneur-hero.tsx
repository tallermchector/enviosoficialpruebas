'use client';

import { HeroSection } from "@/components/ui/HeroSection";

export function EntrepreneurHero() {
  return (
    <HeroSection
      preTitle="E-COMMERCE 3PL"
      title={
        <>
          LOGÍSTICA <br />
          <span className="text-primary">INTEGRAL 3PL</span>
        </>
      }
      description="Más que un envío, somos tu depósito. Fulfillment, Almacenamiento y Cuentas Corrientes Flexibles para negocios que buscan escalar al siguiente nivel."
      ctaButtons={[
        { text: "SOLICITAR ASESORÍA", href: "/contacto", variant: "secondary" }
      ]}
      backgroundImageUrl="/bannerenvios.webp"
      backgroundImageAlt="Banner Plan Emprendedor Envios DosRuedas"
    />
  );
}
