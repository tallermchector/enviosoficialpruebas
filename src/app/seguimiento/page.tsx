import { OptimizedHeader } from "@/components/homenew/optimized-header";
import { CarruselRedes } from "@/components/homenew/carrusel-redes";
import { Footer } from "@/components/homenew/footer";
import { TrackingClientPage } from "@/components/tracking/tracking-client-page";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seguimiento de Envío | Envíos DosRuedas',
  description: 'Rastreá tu pedido en tiempo real. Conocé la ubicación de tu cadete y el tiempo estimado de entrega en Mar del Plata.',
  alternates: { canonical: 'https://www.enviosdosruedas.com/seguimiento' },
};

export default function SeguimientoPage() {
  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <OptimizedHeader />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <Link href="/">
            <Button variant="outline" className="text-primary border-primary hover:bg-accent">
              ← Volver al Inicio
            </Button>
          </Link>
        </div>

        <TrackingClientPage />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  );
}
