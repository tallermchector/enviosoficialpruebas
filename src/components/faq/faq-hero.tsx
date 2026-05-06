'use client';

import { HeroSection } from "@/components/ui/HeroSection";

export function FaqHero() {
  return (
    <HeroSection
      title="Preguntas Frecuentes"
      description="Todo lo que necesitas saber sobre nuestras operativas, tarifas y SLAs de entrega. Transparencia total."
      backgroundImageUrl="/bannerenvios.png"
      backgroundImageAlt="Banner FAQ Envios DosRuedas"
    />
  );
}
