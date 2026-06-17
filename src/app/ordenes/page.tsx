import { OptimizedHeader } from "@/components/homenew/optimized-header";
import { GenerarEnvioForm } from "@/components/ordenes/GenerarEnvioForm";
import { CarruselRedes } from "@/components/homenew/carrusel-redes";
import { Footer } from "@/components/homenew/footer"; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Generar Envío | Envíos DosRuedas',
  description: 'Completá el formulario para solicitar tu envío. Servicio de mensajería profesional en Mar del Plata.',
  alternates: { canonical: 'https://www.enviosdosruedas.com/ordenes' },
};

export default function OrdenesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <OptimizedHeader />
      <main className="flex-grow container mx-auto px-2 sm:px-4 py-8">
        <GenerarEnvioForm />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  );
}
