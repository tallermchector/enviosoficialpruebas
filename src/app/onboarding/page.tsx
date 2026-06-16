"use client";

import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/ui/HeroSection";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import {
  Package,
  Send,
  Search,
  MessageCircle,
  Mail,
  ShieldCheck,
  Handshake,
  MapPin,
  Download,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-[#050810] text-white selection:bg-[#FFE600] selection:text-[#050810]">
      <Header />

      <main>
        {/* Hero Section */}
        <HeroSection
          title={
            <span className="block">
              Bienvenido a <br />
              <span className="text-[#FFE600] drop-shadow-[0_0_20px_rgba(255,230,0,0.4)]">Envíos DosRuedas</span>
            </span>
          }
          description="Tu partner logístico para escalar en Mar del Plata. Operativa simplificada y tecnología de punta para potenciar tu PyME."
          backgroundType="shader"
          ctaButtons={[
            {
              text: "Comenzar Ahora",
              href: "#operativa",
              variant: "secondary",
              icon: "ArrowRight"
            }
          ]}
        />

        {/* Operativa Simple */}
        <section id="operativa" className="py-24 px-4 relative overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">
                Operativa <span className="text-[#FFE600]">Simple</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#FFE600] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Package,
                  title: "1. Preparar",
                  desc: "Embalá tus productos de forma segura y pegá la etiqueta de envío generada en nuestro sistema.",
                },
                {
                  icon: Send,
                  title: "2. Solicitar",
                  desc: "Pedí tu recolección desde la plataforma. Nuestros repartidores pasarán por tu local en el horario pactado.",
                },
                {
                  icon: Search,
                  title: "3. Rastrear",
                  desc: "Seguí el estado de tus entregas en tiempo real y compartí el link de seguimiento con tus clientes.",
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <GlowCard className="h-full border-[#2D3277]/30">
                    <div className="w-16 h-16 bg-[#2D3277]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#2D3277]/40">
                      <step.icon className="w-8 h-8 text-[#FFE600]" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-4 uppercase tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 font-sans leading-relaxed">
                      {step.desc}
                    </p>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Canales de Comunicación */}
        <section className="py-24 px-4 bg-[#2D3277]/5 border-y border-white/5">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">
                  Canales de <br />
                  <span className="text-[#FFE600]">Comunicación</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 font-sans max-w-xl">
                  Estamos con vos en cada paso. Nuestro equipo de soporte técnico está disponible para resolver cualquier duda operativa de forma inmediata.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 h-auto rounded-none font-sans font-bold uppercase tracking-tight"
                  >
                    <Link href="https://wa.me/542236602699" target="_blank">
                      <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Directo
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-white/10 hover:bg-white/5 text-white px-8 py-6 h-auto rounded-none font-sans font-bold uppercase tracking-tight"
                  >
                    <Link href="mailto:contacto@enviosdosruedas.com">
                      <Mail className="mr-2 h-5 w-5" /> Soporte Email
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-[#FFE600]/10 blur-[100px] rounded-full" />
                <GlowCard className="border-[#FFE600]/20 bg-[#050810]/80 backdrop-blur-sm relative z-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                        <span className="text-[#FFE600] font-display font-bold">01</span>
                      </div>
                      <p className="font-sans text-gray-300">Asesoramiento personalizado para tu primera carga.</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                        <span className="text-[#FFE600] font-display font-bold">02</span>
                      </div>
                      <p className="font-sans text-gray-300">Resolución de incidencias en menos de 30 minutos.</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                        <span className="text-[#FFE600] font-display font-bold">03</span>
                      </div>
                      <p className="font-sans text-gray-300">Actualizaciones de estado automáticas vía WhatsApp.</p>
                    </div>
                  </div>
                </GlowCard>
              </div>
            </div>
          </div>
        </section>

        {/* Compromiso DosRuedas */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">
                Compromiso <span className="text-[#FFE600]">DosRuedas</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#FFE600] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Confianza",
                  desc: "Garantizamos que tus productos lleguen en perfectas condiciones y en los tiempos prometidos.",
                },
                {
                  icon: Handshake,
                  title: "Seguridad",
                  desc: "Tu mercadería está protegida y monitoreada durante todo el proceso logístico.",
                },
                {
                  icon: MapPin,
                  title: "Identidad Local",
                  desc: "Conocemos cada rincón de Mar del Plata mejor que nadie. Somos parte de tu comunidad.",
                }
              ].map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2D3277]/20 transition-colors border border-white/10 group-hover:border-[#FFE600]/30">
                    <value.icon className="w-10 h-10 text-[#FFE600]" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 uppercase text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 font-sans leading-relaxed max-w-xs mx-auto">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action / Download PDF */}
        <section className="py-24 px-4 bg-gradient-to-t from-[#2D3277]/20 to-transparent">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="glass-card p-12 md:p-16 border border-[#FFE600]/20 rounded-[3rem] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFE600]/5 blur-[80px] -translate-y-1/2 translate-x-1/2" />

              <h2 className="font-display text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-6 text-white relative z-10">
                ¿Listo para empezar <br />a <span className="text-[#FFE600]">despachar</span>?
              </h2>
              <p className="text-gray-300 text-lg mb-10 font-sans relative z-10">
                Descargá el manual completo en PDF para tener toda la información operativa siempre a mano.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
                <Button
                  variant="secondary"
                  asChild
                  className="bg-[#FFE600] hover:bg-[#E6CF00] text-[#050810] px-10 py-7 h-auto rounded-none font-sans font-black uppercase tracking-tight text-lg shadow-[0_20px_40px_rgba(255,230,0,0.2)]"
                >
                  <Link href="/manual-pymes-dosruedas.pdf" target="_blank">
                    <Download className="mr-3 h-6 w-6" /> Descargar Manual PDF
                  </Link>
                </Button>
                <Link
                  href="/contacto"
                  className="text-white hover:text-[#FFE600] font-sans font-bold uppercase tracking-widest text-sm flex items-center gap-2 transition-colors"
                >
                  Hablar con un asesor <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
