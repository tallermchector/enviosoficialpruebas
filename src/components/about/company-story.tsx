import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, TrendingUp, Award } from "lucide-react"

export function CompanyStory() {
  const milestones = [
    {
      icon: Calendar,
      year: "2020",
      title: "Nuestros Inicios",
      description: "Comenzamos como un pequeño servicio de mensajería local con una sola moto y mucha pasión.",
    },
    {
      icon: TrendingUp,
      year: "2021",
      title: "Crecimiento",
      description: "Expandimos nuestra flota y comenzamos a ofrecer servicios especializados para emprendedores.",
    },
    {
      icon: Award,
      year: "2022",
      title: "Reconocimiento",
      description: "Alcanzamos las 4.9 estrellas en Google Reviews y nos convertimos en referentes locales.",
    },
    {
      icon: MapPin,
      year: "2024",
      title: "Expansión",
      description: "Hoy cubrimos toda Mar del Plata y localidades cercanas con un equipo de profesionales.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-accent/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">Nuestra Historia</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Desde nuestros humildes comienzos hasta convertirnos en la empresa de confianza en Mar del Plata
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Timeline Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2 z-0"></div>

          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon
            return (
              <Card key={index} className="relative z-10 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border-border/50 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="text-2xl font-bold text-secondary font-display">{milestone.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-display">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-sans">{milestone.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
