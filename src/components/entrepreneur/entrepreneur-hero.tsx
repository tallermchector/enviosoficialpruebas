
import { HeroSection } from "@/components/ui/HeroSection";
import { Badge } from "@/components/ui/badge";
import { BarChart3, ShoppingCart } from "lucide-react";

export function EntrepreneurHero() {
  return (
    <HeroSection
      preTitle={
        <Badge className="bg-blue-600 text-white hover:bg-blue-700 mb-6 px-4 py-2 text-sm font-medium font-sans">
          E-Commerce 3PL y Soluciones Corporativas
        </Badge>
      }
      title={
        <div className="flex items-center justify-center gap-4">
          <BarChart3 className="w-10 h-10 md:w-12 md:h-12 text-yellow-400" />
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400">
            Logística 3PL
          </span>
          <ShoppingCart className="w-10 h-10 md:w-12 md:h-12 text-yellow-400" />
        </div>
      }
      description={
        <>
          <h2 className="text-2xl md:text-3xl text-primary-foreground/90 mt-6 mb-2 font-semibold font-display">Más que un envío, somos tu depósito</h2>
          <div className="max-w-4xl mx-auto space-y-2">
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed font-sans">
              <strong>Fulfillment, Almacenamiento y Cuentas Corrientes Flexibles.</strong>
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed font-sans">
            Delegá tu logística y centrate en vender. Nosotros nos encargamos del resto.
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed font-sans">
            Soluciones escalables para negocios que buscan el siguiente nivel.
            </p>
          </div>
        </>
      }
      backgroundType="image"
      backgroundImageUrl="/bannerenvios.png"
      backgroundImageAlt="Banner Plan Emprendedor Envios DosRuedas"
      backgroundOverlayOpacity={0.7}
      textColorClassName="text-primary-foreground"
      layout="center-stacked"
      textAlignment="text-center"
      minHeight="min-h-[60vh]"
      className="py-12 md:py-16"
      titleClassName="mb-4 font-display" 
      descriptionClassName="mb-8"
    />
  );
}
