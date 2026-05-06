import dynamic from "next/dynamic"
import { OptimizedHeader } from "@/components/homenew/optimized-header"
import HeroAnimado from "@/components/homenew/hero-animado"

const VisionSection = dynamic(() => import("@/components/homenew/vision-section").then(mod => mod.VisionSection), { ssr: true })
const ServicesOverview = dynamic(() => import("@/components/homenew/services-overview").then(mod => mod.ServicesOverview), { ssr: true })
const CtaSection = dynamic(() => import("@/components/homenew/cta-section").then(mod => mod.CtaSection), { ssr: true })
const EmprendedoresHome = dynamic(() => import("@/components/homenew/emprendedores-home").then(mod => mod.EmprendedoresHome), { ssr: true })
const SliderServicios = dynamic(() => import("@/components/homenew/slider-servicios"), { ssr: true })
const CarruselRedes = dynamic(() => import("@/components/homenew/carrusel-redes").then(mod => mod.CarruselRedes), { ssr: true })
const Footer = dynamic(() => import("@/components/homenew/footer").then(mod => mod.Footer), { ssr: true })

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050810] text-white selection:bg-blue-500/30 flex flex-col">
      <OptimizedHeader />
      <main className="flex-grow">
        {/* Above the fold (LCP Critical) */}
        <HeroAnimado />

        {/* Below the fold (Lazy loaded to reduce TBT) */}
        <VisionSection />
        <ServicesOverview />
        <CtaSection />
        <EmprendedoresHome />
        <SliderServicios />
        <CarruselRedes />
      </main>
      <Footer />
    </div>
  )
}