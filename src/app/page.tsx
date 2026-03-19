import { OptimizedHeader } from "@/components/homenew/optimized-header"
import HeroAnimado from "@/components/homenew/hero-animado"
import SliderServicios from "@/components/homenew/slider-servicios"
import { ServicesOverview } from "@/components/homenew/services-overview"
import { VisionSection } from "@/components/homenew/vision-section"
import { EmprendedoresHome } from "@/components/homenew/emprendedores-home"
import { CtaSection } from "@/components/homenew/cta-section"
import { CarruselRedes } from "@/components/homenew/carrusel-redes"
import { Footer } from "@/components/homenew/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050810] text-white selection:bg-blue-500/30">
      <OptimizedHeader />
      <HeroAnimado />
      <VisionSection />
      <ServicesOverview />
      <CtaSection />
      <EmprendedoresHome />
      <SliderServicios />
      <CarruselRedes />
      <Footer />
    </div>
  )
}
