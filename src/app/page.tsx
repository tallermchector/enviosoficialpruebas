import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mensajería y Logística E-commerce en Mar del Plata | Envíos DosRuedas",
  description:
    "Especialistas en logística e-commerce y última milla en Mar del Plata. Envíos en el día, Flex y soluciones 3PL para potenciar tu negocio local.",
  alternates: { canonical: "https://www.enviosdosruedas.com/" },
  openGraph: {
    title:
      "Mensajería y Logística E-commerce en Mar del Plata | Envíos DosRuedas",
    description:
      "Especialistas en logística e-commerce y última milla en Mar del Plata. Envíos en el día, Flex y soluciones 3PL para potenciar tu negocio local.",
    url: "https://www.enviosdosruedas.com/",
    images: [{ url: "/og-image.jpg" }],
  },
};

import dynamic from "next/dynamic";
import { OptimizedHeader } from "@/components/homenew/optimized-header";
import HeroAndQuote from "@/components/homenew/hero-and-quote";

// Paso 2: Lazy Loading de Componentes (Code Splitting)
// Implementamos next/dynamic para componentes Below the Fold para reducir el Script Evaluation inicial.
const VisionSection = dynamic(
  () =>
    import("@/components/homenew/vision-section").then(
      (mod) => mod.VisionSection,
    ),
  {
    ssr: true,
    loading: () => <div className="min-h-[400px] bg-background" />,
  },
);

const ServicesOverview = dynamic(
  () =>
    import("@/components/homenew/services-overview").then(
      (mod) => mod.ServicesOverview,
    ),
  {
    ssr: true,
    loading: () => <div className="min-h-[400px] bg-background" />,
  },
);

const CtaSection = dynamic(
  () =>
    import("@/components/homenew/cta-section").then((mod) => mod.CtaSection),
  {
    ssr: true,
  },
);

const EmprendedoresHome = dynamic(
  () =>
    import("@/components/homenew/emprendedores-home").then(
      (mod) => mod.EmprendedoresHome,
    ),
  {
    ssr: true,
  },
);

const SliderServicios = dynamic(
  () => import("@/components/homenew/slider-servicios"),
  {
    ssr: true,
  },
);

const CarruselRedes = dynamic(
  () =>
    import("@/components/homenew/carrusel-redes").then(
      (mod) => mod.CarruselRedes,
    ),
  {
    ssr: true,
  },
);

const Footer = dynamic(
  () => import("@/components/homenew/footer").then((mod) => mod.Footer),
  {
    ssr: true,
  },
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050810] text-foreground selection:bg-primary/30 flex flex-col">
      <OptimizedHeader />
      <main className="flex-grow">
        {/* Sección 1: Hero & Cotización */}
        <HeroAndQuote />

        {/* Sección 2: Vision (Blanco) */}
        <VisionSection />

        {/* Sección 3: Servicios (Azul) */}
        <div className="bg-[#0636A5] text-white">
          <ServicesOverview />
        </div>

        {/* Sección 4: CTA (Blanco) */}
        <CtaSection />

        {/* Sección 5: Emprendedores/Corporativo (Azul) */}
        <div className="bg-[#0636A5] text-white">
          <EmprendedoresHome />
        </div>

        {/* Sección 6: Slider Servicios (Blanco) */}
        <SliderServicios />

        {/* Sección 7: Redes Sociales (Azul) */}
        <CarruselRedes />
      </main>
      <Footer />
    </div>
  );
}
