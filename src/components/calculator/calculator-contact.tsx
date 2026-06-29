
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function CalculatorContact() {
  return (
    <section data-style="soft-ui" className="bg-[var(--bg-base)] py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glassmorphism border border-white/10 p-6 md:p-10 lg:p-12 rounded-none shadow-crate text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 font-display uppercase">
            ¿Dudas o Envíos Especiales?
          </h2>
          <p className="text-md sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-lg md:max-w-2xl mx-auto font-sans">
            Si tu envío excede nuestros rangos estándar, necesitas múltiples paradas, o tienes alguna consulta específica, no dudes en contactarnos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <Button size="lg" asChild className="text-black bg-secondary hover:bg-yellow-400 w-full sm:w-auto font-bebas text-lg tracking-wider rounded-none shadow-industrial">
              <Link href="/contacto">
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Formulario de Contacto
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-white border-white/30 hover:bg-white hover:text-black w-full sm:w-auto font-bebas text-lg tracking-wider rounded-none">
              <a href="tel:+542236602699">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Llámanos: 223-660-2699
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
