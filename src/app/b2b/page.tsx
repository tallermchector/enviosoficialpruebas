import { Metadata } from 'next';
import { HeroSection } from '@/components/b2b/HeroSection';
import { QuickQuote } from '@/components/b2b/QuickQuote';
import { LeadForm } from '@/components/b2b/LeadForm';

export const metadata: Metadata = {
  title: 'Logística B2B y E-Commerce | Envíos DosRuedas',
  description: 'Soluciones integrales de logística de última milla para empresas y e-commerce en Mar del Plata. Cotizá e integrá tu negocio hoy.',
};

export default function B2BLandingPage() {
  return (
    <main className="min-h-screen bg-brand-bg flex flex-col">
      <HeroSection />
      <QuickQuote />
      <LeadForm />
    </main>
  );
}
