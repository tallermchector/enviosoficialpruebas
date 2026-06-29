import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, Mail } from "lucide-react"

export function FaqContactCta() {
  return (
    <section data-style="glassmorphism" className="glass-section py-16 px-4 bg-[#030710]">
      <div className="container mx-auto max-w-4xl">
        <Card className="glassmorphism text-white border-white/10 shadow-crate overflow-hidden relative rounded-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-none -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <CardContent className="p-10 md:p-14 text-center relative z-10">
            <h2 className="text-display-md mb-6 font-display uppercase">¿No encontraste lo que buscabas?</h2>
            <p className="text-body-lg mb-10 text-gray-300 font-sans max-w-2xl mx-auto">
              Nuestro equipo está listo para ayudarte con cualquier consulta específica sobre nuestros servicios.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-black font-bebas uppercase tracking-wider text-lg h-14 px-8 rounded-none shadow-industrial">
                <a
                  href="https://wa.me/5492236602699?text=Hola, tengo una consulta que no encontré en las FAQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Hablá por WhatsApp
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-slate-900 font-bebas uppercase tracking-wider text-lg h-14 px-8 rounded-none backdrop-blur-sm"
              >
                <Link href="/contacto">
                  <Mail className="w-6 h-6 mr-2" />
                  Contacto Directo
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
