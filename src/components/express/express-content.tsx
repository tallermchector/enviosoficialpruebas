"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

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

  const handleWhatsAppClick = () => {
    const phoneNumber = "5492236602699"
    const message = "Hola, me gustaría consultar sobre el servicio de Envíos Express."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as any, stiffness: 100 } },
  };

  return (
    <section className="py-24 px-4 bg-[#0a0d16] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-blue-400 text-[10px] font-bold tracking-widest mb-6 uppercase">
              SOLUCIONES PREMIUM
            </div>
            <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-5xl font-black leading-[1] mb-8 uppercase text-white tracking-tighter">
              ENTREGAS RÁPIDAS Y <br />
              <span className="text-primary italic">EFICIENTES</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-[family-name:var(--font-roboto)] max-w-xl">
              Nuestro servicio Express está diseñado para situaciones de alta criticidad horaria. Es la solución premium donde el cliente tiene el control total, eligiendo el rango horario exacto para su entrega con una mínima anticipación.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  custom={index}
                  variants={itemVariants}
                >
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 border border-primary/30">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-orbitron)] uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-roboto)]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-black font-[family-name:var(--font-orbitron)] font-black px-8 py-4 rounded-xl transition-all uppercase tracking-tight shadow-[0_0_20px_rgba(251,191,36,0.3)] h-auto"
              >
                <Link href="/cotizar/express">Cotiza tu Envío</Link>
              </Button>
              <Button
                onClick={handleWhatsAppClick}
                variant="outline"
                size="lg"
                className="bg-white/5 border border-white/10 text-white hover:bg-white/10 font-[family-name:var(--font-orbitron)] font-bold px-8 py-4 rounded-xl transition-all uppercase tracking-tight h-auto"
              >
                <Image src="/icon/icon-whatsapp-verde.svg" alt="WhatsApp Icon" width={20} height={20} className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Large Branding */}
          <motion.div 
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            variants={itemVariants}
          >
            <div className="text-center lg:text-right select-none opacity-20">
              <div className="space-y-2">
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-white font-[family-name:var(--font-orbitron)] tracking-tighter leading-none">
                  ENVIOS
                </div>
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-primary font-[family-name:var(--font-orbitron)] tracking-tighter leading-none">
                  DOS RUEDAS
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
