'use client';

import { HeroSection } from "@/components/ui/HeroSection";

export function EntrepreneurHero() {
  return (
    <HeroSection
      preTitle="E-COMMERCE 3PL"
      title={
        <>
          LOGÍSTICA 3PL Y <br />
          <span className="text-primary">CUENTAS CORRIENTES</span>
        </>
      }
      description="Tercerización integral con integración vertical. Transformá tu estructura de gasto fijo en soluciones escalables que acompañan el crecimiento de tu negocio."
      ctaButtons={[
        { text: "SOLICITAR PLAN CORPORATIVO", href: "/contacto", variant: "secondary" },
        { text: "AGENDAR ASESORÍA 3PL", href: "https://wa.me/5492236602699", variant: "outline", icon: "Mail" }
      ]}
      backgroundImageUrl="/bannerenvios.webp"
      backgroundImageAlt="Banner Plan Emprendedor Envios DosRuedas"
    />
  );
}
