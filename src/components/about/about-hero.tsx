import { HeroSection } from "@/components/ui/HeroSection";

export function AboutHero() {
  return (
    <HeroSection
      title={<span className="text-secondary font-display">Envios DosRuedas</span>}
      description={
        <div className="mt-4">
          <h2 className="text-2xl md:text-3xl text-primary-foreground/90 mb-4 font-semibold font-display">Sobre Nosotros</h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed font-sans">
            Conoce la historia, los valores y el equipo que hace posible que tus envíos lleguen a tiempo y seguros en Mar del Plata.
          </p>
        </div>
      }
      backgroundType="image"
      backgroundImageUrl="/bannerenvios.png"
      backgroundImageAlt="Banner Sobre Nosotros Envios DosRuedas"
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
