import { HeroSection } from "@/components/ui/HeroSection";

export function SocialHero() {
  return (
    <HeroSection
      title={<span className="text-secondary font-display">Envios DosRuedas</span>}
      description={
        <>
          <h2 className="text-2xl md:text-3xl text-primary-foreground/90 mt-4 mb-4 font-semibold font-display">Nuestras Redes</h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed font-sans">
            Descubre nuestros servicios y ofertas exclusivas conectándote con nosotros en nuestras plataformas oficiales.
          </p>
        </>
      }
      backgroundType="image"
      backgroundImageUrl="/bannerenvios.png"
      backgroundImageAlt="Banner Redes Sociales Envios DosRuedas"
      backgroundOverlayOpacity={0.75}
      textColorClassName="text-primary-foreground"
      layout="center-stacked"
      textAlignment="text-center"
      minHeight="min-h-[50vh]"
      className="py-12 md:py-16"
      titleClassName="text-4xl md:text-5xl lg:text-6xl font-bold font-display"
    />
  );
}
