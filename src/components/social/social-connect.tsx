import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Share2 as Facebook, Camera as Instagram } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function SocialConnect() {
  const socialNetworks = [
    {
      name: "Facebook",
      icon: Facebook,
      handle: "@enviosdosruedas",
      description: "Síguenos para ofertas exclusivas y actualizaciones diarias de nuestros servicios en Mar del Plata.",
      color: "bg-[#1877F2]",
      url: "https://facebook.com/enviosdosruedas",
      followers: "2.5K+",
    },
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@enviosdosruedas",
      description: "Mira nuestro día a día, fotos de entregas y promociones especiales diseñadas para ti.",
      color: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
      url: "https://instagram.com/enviosdosruedas",
      followers: "3.2K+",
    },
    {
      name: "WhatsApp",
      icon: null,
      handle: "+54 9 223 660-2699",
      description: "Canal de atención directa y personalizada para cotizaciones y pedidos inmediatos.",
      color: "bg-[#25D366]",
      url: "https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web.",
      followers: "Atención 24/7",
    },
  ]

  return (
    <section className="py-16 px-4 bg-accent/30 font-sans">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-display uppercase tracking-tight">¡Sigue el Movimiento!</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans leading-relaxed">
            Nuestra comunidad crece cada día. Únete para acceder a beneficios exclusivos y estar al tanto de todo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialNetworks.map((network) => {
            const IconComponent = network.icon
            return (
              <Card key={network.name} className="group hover:shadow-2xl transition-all duration-500 border-border/50 bg-background/80 backdrop-blur-sm overflow-hidden rounded-3xl">
                <CardContent className="p-10 flex flex-col h-full items-center text-center">
                  <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform duration-500 shadow-lg", network.color)}>
                    {IconComponent ? (
                      <IconComponent className="w-10 h-10 text-white" />
                    ) : (
                      <Image src="/icon/icon-whatsapp.svg" alt="WhatsApp" width={40} height={40} className="w-10 h-10" />
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground font-display mb-2">{network.name}</h3>
                  <div className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full mb-6 font-sans">
                    {network.followers}
                  </div>

                  <p className="text-muted-foreground mb-8 leading-relaxed font-sans text-lg flex-grow">{network.description}</p>

                  <Button asChild size="lg" className={cn("w-full text-white font-bold h-14 rounded-2xl text-lg shadow-md hover:shadow-xl transition-all", network.color)}>
                    <a href={network.url} target="_blank" rel="noopener noreferrer">
                      {network.name === "WhatsApp" ? "Chatear Ahora" : `Ir a ${network.name}`}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
