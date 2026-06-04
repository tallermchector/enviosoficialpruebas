import { OptimizedHeader } from "@/components/homenew/optimized-header"
import { AboutHero } from "@/components/about/about-hero"
import { WhoWeAre } from "@/components/about/who-we-are"
import { CompanyValues } from "@/components/about/company-values"
import { CompanyStory } from "@/components/about/company-story"
import { TeamSection } from "@/components/about/team-section"
import { MissionVision } from "@/components/about/mission-vision"
import { CarruselRedes } from "@/components/homenew/carrusel-redes"
import { Footer } from "@/components/homenew/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Logística con Propósito en Mar del Plata | Sobre Envíos DosRuedas",
  description:
    "Conoce la historia de Envios DosRuedas, tu aliado confiable en mensajería y delivery en Mar del Plata. 4.9 estrellas en Google Reviews. Compromiso, rapidez y confiabilidad.",
  keywords: "sobre nosotros, envios dosruedas, historia empresa, valores, equipo, mar del plata, mensajeria",
}

export default function AboutPage() {
  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <OptimizedHeader />
      <main>
        <AboutHero />
        <WhoWeAre />
        <CompanyValues />
        <CompanyStory />
        <TeamSection />
        <MissionVision />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  )
}
