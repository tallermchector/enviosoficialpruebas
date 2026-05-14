import dynamic from "next/dynamic"
import { OptimizedHeader } from "@/components/homenew/optimized-header"
import HeroAnimado from "@/components/homenew/hero-animado"

// Paso 2: Lazy Loading de Componentes (Code Splitting)
// Implementamos next/dynamic para componentes Below the Fold para reducir el Script Evaluation inicial.
const VisionSection = dynamic(() => import("@/components/homenew/vision-section").then(mod => mod.VisionSection), {
  ssr: true,
  loading: () => <div className="min-h-[400px] bg-[#050810]" />
})

const ServicesOverview = dynamic(() => import("@/components/homenew/services-overview").then(mod => mod.ServicesOverview), {
  ssr: true,
  loading: () => <div className="min-h-[400px] bg-[#050810]" />
})

const CtaSection = dynamic(() => import("@/components/homenew/cta-section").then(mod => mod.CtaSection), {
  ssr: true
})

const EmprendedoresHome = dynamic(() => import("@/components/homenew/emprendedores-home").then(mod => mod.EmprendedoresHome), {
  ssr: true
})

const SliderServicios = dynamic(() => import("@/components/homenew/slider-servicios"), {
  ssr: true
})

const CarruselRedes = dynamic(() => import("@/components/homenew/carrusel-redes").then(mod => mod.CarruselRedes), {
  ssr: true
})

const Footer = dynamic(() => import("@/components/homenew/footer").then(mod => mod.Footer), {
  ssr: true
})

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050810] text-white selection:bg-blue-500/30 flex flex-col">
      <OptimizedHeader />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-[#050810] via-[#0a0a0a] to-[#121212]">
          {/* Above the fold (LCP Critical) - Renderizado estático inicial para performance extrema */}
          <HeroAnimado />

          {/* Below the fold (Lazy loaded to reduce TBT and Script Evaluation) */}
          <VisionSection />
        </div>

        <div className="bg-gradient-to-b from-[#121212] via-[#0a0f1c] to-[#0a1a14]">
          <ServicesOverview />
          <CtaSection />
        </div>

        <div className="bg-gradient-to-b from-[#0a1a14] via-[#050810] to-[#050810]">
          <EmprendedoresHome />
          <SliderServicios />
          <CarruselRedes />
        </div>
      </main>
      <Footer />
    </div>
  )
}
