import { Button } from "@/components/ui/button"
import { Zap, ShoppingCart, MapPin } from "lucide-react"
import Image from "next/image"

export function EnviosFlexContent() {
  const features = [
    {
      icon: Zap,
      title: "SLA Garantizado",
      description: "Entregas mismo día antes de las 20:00 hs si vendes antes de las 15:00 hs.",
    },
    {
      icon: ShoppingCart,
      title: "Retiro Bonificado",
      description: "Retiro en tu domicilio bonificado al 100% en todo Mar del Plata.",
    },
    {
      icon: MapPin,
      title: "Reputación al Máximo",
      description: "Cumplimos estrictamente con los tiempos de MercadoLibre para cuidar tu cuenta.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white font-sans">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 font-display">Logística MercadoLibre Flex</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Somos tu partner estratégico para MercadoLibre Flex en Mar del Plata. Ofrecemos integración total con SLA garantizado: si vendés antes de las 15:00 hs, entregamos el mismo día antes de las 20:00 hs. Retiramos por tu local o depósito sin cargo.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 font-display">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-3">
              Sumate a Envios Flex con Nosotros
            </Button>
          </div>

          {/* Right Content - Logo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80">
               <Image
                src="/LogoEnviosDosRuedas.webp"
                alt="Logo Envios DosRuedas"
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                className="rounded-full object-contain filter drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
