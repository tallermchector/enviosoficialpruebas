"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle, Loader2 } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 5000)
  }

  return (
    <section className="py-24 px-4 bg-[#0a0d16]/60 border-t border-white/10 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <Card className="glassmorphism border-white/10 shadow-crate rounded-none overflow-hidden">
          <CardContent className="p-10 md:p-16 text-center">
            {isSubscribed ? (
              <div className="text-white animate-in zoom-in duration-500">
                <CheckCircle className="w-20 h-20 mx-auto mb-6 text-secondary" />
                <h3 className="text-display-md mb-4 font-display uppercase">¡Bienvenido a la Comunidad!</h3>
                <p className="text-body-lg font-sans text-gray-300">Te suscribiste correctamente. Pronto recibirás nuestras mejores novedades.</p>
              </div>
            ) : (
              <>
                <div className="w-20 h-20 bg-secondary rounded-none flex items-center justify-center mx-auto mb-8 shadow-industrial rotate-3">
                  <Mail className="w-10 h-10 text-primary-foreground" />
                </div>

                <h2 className="text-display-md text-white mb-6 font-display uppercase tracking-tight">Newsletter Exclusivo</h2>
                <p className="text-body-lg text-gray-300 mb-12 max-w-2xl mx-auto font-sans">
                  Recibí promociones relámpago, noticias del sector y actualizaciones directamente en tu bandeja de entrada.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                  <Input
                    type="email"
                    placeholder="Escribí tu correo electrónico..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-16 bg-[#0a0d16]/50 border-white/30 text-white placeholder:text-gray-500 rounded-none px-6 focus:bg-[#0a0d16]/80 focus-visible:border-secondary focus-visible:ring-2 focus-visible:ring-secondary/20 transition-all font-sans text-body-md"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="h-16 px-10 bg-secondary hover:bg-yellow-400 text-black uppercase font-bebas text-lg tracking-wider rounded-none shadow-industrial transition-all"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin mr-3 h-6 w-6" />
                        Procesando...
                      </>
                    ) : (
                      "Unirme Ahora"
                    )}
                  </Button>
                </form>

                  <p className="text-label-sm text-gray-500 mt-8 font-sans">
                    Garantizamos la privacidad de tus datos. Podés darte de baja con un solo clic en cualquier momento.
                </p>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
