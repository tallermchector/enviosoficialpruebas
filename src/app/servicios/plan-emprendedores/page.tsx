import { OptimizedHeader } from "@/components/homenew/optimized-header"
import { EntrepreneurHero } from "@/components/entrepreneur/entrepreneur-hero"
import { PlanInformation } from "@/components/entrepreneur/plan-information"
import { EntrepreneurBenefits } from "@/components/entrepreneur/entrepreneur-benefits"
import { EntrepreneurPricingRanges } from "@/components/entrepreneur/entrepreneur-pricing-ranges"
import { EntrepreneurCta } from "@/components/entrepreneur/entrepreneur-cta"
import { CarruselRedes } from "@/components/homenew/carrusel-redes"
import { Footer } from "@/components/homenew/footer"
import type { Metadata } from "next"
import prisma from "@/lib/prisma";
import { ServiceTypeEnum } from '../../../../generated/prisma/client/client';
import type { PriceRangeClient } from "@/components/entrepreneur/entrepreneur-pricing-ranges";

export const metadata: Metadata = {
  title: "E-Commerce 3PL y Cuentas Corrientes - Envios DosRuedas",
  description:
    "Soluciones logísticas avanzadas para E-Commerce: 3PL, Fulfillment, Same Day y Next Day. Cuentas corrientes flexibles con beneficios exclusivos para potenciar tu escalabilidad.",
  keywords:
    "ecommerce 3pl, fulfillment mar del plata, envios next day, cuenta corriente logistica, deposito ecommerce, picking y packing",
}

// Disable prerendering during build to avoid database connection issues
export const revalidate = 0;

async function getPriceRanges(): Promise<PriceRangeClient[]> {
  const priceRanges = await prisma.priceRange.findMany({
    where: {
      serviceType: ServiceTypeEnum.LOW_COST, // Entrepreneur plan uses Low Cost pricing structure
      isActive: true,
    },
    orderBy: {
      distanciaMinKm: 'asc',
    },
  });

  return priceRanges.map(pr => ({
    ...pr,
    distanciaMinKm: pr.distanciaMinKm.toNumber(),
    distanciaMaxKm: pr.distanciaMaxKm.toNumber(),
    precioRango: pr.precioRango.toNumber(),
  }));
}

export default async function EntrepreneurPlanPage() {
  const priceRanges = await getPriceRanges();
  return (
    <div className="min-h-screen">
      <OptimizedHeader />
      <main>
        <EntrepreneurHero />
        <PlanInformation />
        <EntrepreneurBenefits />
        <EntrepreneurPricingRanges priceRanges={priceRanges} />
        <EntrepreneurCta />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  )
}
