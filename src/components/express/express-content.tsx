import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { WhatsAppButton } from "./whatsapp-button"

export function ExpressContent() {
  const features = [
    {
      title: "Alta criticidad horaria",
      description: "Servicio diseñado para cuando el tiempo es el factor más importante. Tú eliges cuándo entregamos.",
    },
    {
      title: "Rango horario a elección",
      description: "El cliente elige el rango horario de entrega que mejor se adapte a su necesidad.",
    },
    {
      title: "Anticipación mínima",
      description: "Solo requerimos un mínimo de 2 horas de anticipación para coordinar tu envío prioritario.",
    },
  ]

  return (
    <section className="py-32 px-4 bg-background relative overflow-hidden border-t border-primary/20">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-primary text-white border border-white/10 text-label-sm font-bold tracking-widest mb-8 uppercase rounded-none">
              SOLUCIONES PREMIUM
            </div>
            <h2 className="font-title text-display-lg md:text-[60px] font-black leading-[1] mb-10 uppercase text-foreground tracking-tighter">
              ENTREGAS RÁPIDAS Y <br />
              <span className="text-primary italic">EFICIENTES</span>
            </h2>
            <p className="text-primary/70 text-body-lg mb-12 leading-relaxed font-body max-w-xl">
              Nuestro servicio Express ofrece cobertura total en Mar del Plata, llegando a barrios clave como Güemes, Chauvín, Los Troncos y la zona del Puerto con rapidez absoluta. Es la solución premium para alta criticidad horaria donde vos tenés el control total.
            </p>

            {/* Features */}
            <div className="space-y-8 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index} 
                  className="flex items-start"
                >
                  <div className="w-8 h-8 bg-primary/10 border border-primary/20 flex items-center justify-center mr-6 flex-shrink-0 mt-1 rounded-none">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-headline-lg-mobile font-bold text-foreground mb-2 font-title uppercase tracking-tight">{feature.title.toUpperCase()}</h3>
                    <p className="text-primary/70 text-body-md leading-relaxed font-body">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-primary font-subtitle font-bold px-10 py-6 rounded-none transition-all uppercase tracking-tight h-auto text-label-md shadow-lg"
              >
                <Link href="/cotizar/express">Cotizá tu Envío</Link>
              </Button>
              <WhatsAppButton />
            </div>
          </div>

          {/* Right Content - Large Branding */}
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="text-center lg:text-right select-none opacity-10">
              <div className="space-y-4">
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-foreground font-title tracking-tighter leading-none uppercase">
                  ENVIOS
                </div>
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-primary font-title tracking-tighter leading-none uppercase">
                  DOS RUEDAS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
