import { Star } from "lucide-react"
import { motion } from "framer-motion"

export function WhoWeAre() {
  return (
    <section className="py-16 px-4 bg-accent/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-display">Quiénes Somos</h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-display italic">
              "Tu aliado confiable en mensajería y delivery en Mar del Plata"
            </p>

            <div className="flex flex-col items-center justify-center mb-8 p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-sm">
              <div className="flex items-center space-x-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-xl font-bold text-foreground font-display">4.9 estrellas en Google Reviews</span>
              <p className="text-muted-foreground mt-2 font-sans">Basado en la confianza de cientos de clientes locales</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed font-sans">
              Envios DosRuedas nació de la necesidad de un servicio de logística ágil y personal en nuestra ciudad.
              Nos dedicamos a brindar soluciones rápidas, seguras y económicas, adaptándonos a las exigencias
              del comercio moderno y las necesidades particulares de cada habitante de Mar del Plata.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
