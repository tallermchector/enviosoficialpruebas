import { Card, CardContent } from "@/components/ui/card"
import { Heart, Zap, Shield, Users } from "lucide-react"
import { cn } from "@/lib/utils"

export function CompanyValues() {
  const values = [
    {
      icon: Heart,
      title: "Compromiso",
      description: "Nos comprometemos con cada envío como si fuera nuestro, garantizando el mejor servicio posible.",
      color: "text-red-500",
      bg: "bg-red-500/10"
    },
    {
      icon: Zap,
      title: "Rapidez",
      description: "Entendemos que el tiempo es valioso, por eso optimizamos cada ruta para entregas más rápidas.",
      color: "text-secondary",
      bg: "bg-secondary/10"
    },
    {
      icon: Shield,
      title: "Confiabilidad",
      description: "Tu tranquilidad es nuestra prioridad. Cada paquete está monitoreado en tiempo real.",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Cercanía",
      description: "Somos una empresa local que entiende las necesidades específicas de Mar del Plata y su gente.",
      color: "text-green-500",
      bg: "bg-green-500/10"
    },
  ]

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">Nuestros Valores</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Los principios que guían nuestro trabajo diario y nos permiten brindar un servicio excepcional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6", value.bg)}>
                    <IconComponent className={cn("w-8 h-8", value.color)} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-display">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-sans">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
