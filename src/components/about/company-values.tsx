"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Zap, Shield, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function CompanyValues() {
  const values = [
    {
      icon: Heart,
      title: "Compromiso",
      description: "Nos comprometemos con cada envío como si fuera propio, garantizando excelencia en cada entrega.",
      color: "text-red-500",
      bg: "bg-red-500/10"
    },
    {
      icon: Zap,
      title: "Rapidez",
      description: "Agilidad motorizada para cumplir con los SLAs más exigentes del mercado actual.",
      color: "text-secondary",
      bg: "bg-secondary/10"
    },
    {
      icon: Shield,
      title: "Confiabilidad",
      description: "Procesos auditados y notificaciones en tiempo real para tu total tranquilidad.",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Cercanía",
      description: "Atención personalizada y conocimiento profundo de la logística en Mar del Plata.",
      color: "text-green-500",
      bg: "bg-green-500/10"
    },
  ]

  return (
    <section data-style="soft-ui" className="bg-[var(--bg-base)] py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display uppercase tracking-tight">Nuestros Valores</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
            Los pilares que sostienen nuestra operativa y nos permiten ser tu partner logístico de confianza.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="text-center transition-all duration-500 border-white/10 glassmorphism shadow-crate rounded-none hover:border-primary/50 hover:-translate-y-1.5 transition-stitch group h-full">
                  <CardContent className="p-8">
                    <div className={cn("w-16 h-16 rounded-none flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform duration-500", value.bg)}>
                      <IconComponent className={cn("w-8 h-8", value.color)} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 font-display uppercase">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-sans">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
