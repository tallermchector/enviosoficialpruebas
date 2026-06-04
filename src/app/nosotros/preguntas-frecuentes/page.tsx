import { OptimizedHeader } from "@/components/homenew/optimized-header"
import { FaqHero } from "@/components/faq/faq-hero"
import { FaqCategories } from "@/components/faq/faq-categories"
import { FaqContactCta } from "@/components/faq/faq-contact-cta"
import { CarruselRedes } from "@/components/homenew/carrusel-redes"
import { Footer } from "@/components/homenew/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes - Envios DosRuedas | FAQ Mensajería y Delivery",
  description:
    "Encuentra respuestas a las preguntas más frecuentes sobre nuestros servicios de mensajería y delivery en Mar del Plata. Tarifas, tiempos, cobertura y más.",
  keywords: "preguntas frecuentes, faq, envios mar del plata, mensajeria, delivery, tarifas, tiempos entrega",
}

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuáles son las zonas de cobertura? ¿Cubren toda la ciudad/región?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cubrimos todo Mar del Plata (no cubrimos zonas aledañas). Garantizamos presencia en todos los barrios de la ciudad con estándares de seguridad propios."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué los diferencia de otros servicios de mensajería en moto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trabajamos con estándares de excelencia, no toleramos faltas de respeto y preferimos rechazar un envío antes que fallar. Nuestra ventaja es la flota exclusiva y la cero tercerización."
        }
      }
    ]
  };

  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <OptimizedHeader />
      <main>
        <FaqHero />
        <FaqCategories />
        <FaqContactCta />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  )
}
