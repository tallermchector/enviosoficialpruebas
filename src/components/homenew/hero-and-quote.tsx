"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Play,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  MapPin,
  Clock,
  Truck,
  Package,
  Calculator,
  Loader2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AddressAutocomplete } from "@/components/calculator/address-autocomplete";

export default function HeroAndQuote() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);

  const handleQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 1000);
  };

  const statusCards = [
    {
      service: "EXPRESS",
      km: "0 - 5 km",
      time: "En el día",
      color: "bg-primary",
    },
    {
      service: "LOW_COST",
      km: "0 - 10 km",
      time: "24-48 hs",
      color: "bg-primary/90",
    },
    {
      service: "MERCADO_FLEX",
      km: "Todo MDP",
      time: "Mismo día",
      color: "bg-primary/80",
    },
    {
      service: "3PL_EMPRENDEDORES",
      km: "Nacional",
      time: "Logística Total",
      color: "bg-primary/70",
    },
  ];

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-16 bg-[#050810] overflow-hidden">
      {/* Hero Section */}
      <div className="w-full bg-[#0636A5] text-white py-16 px-4 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Column: Text & CTA */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-5xl md:text-7xl font-display font-black uppercase italic tracking-tighter text-white">
              Conectamos tu negocio <br className="hidden sm:inline" />
              <span className="text-[#FFEC01] drop-shadow-[0_4px_0px_#000000]">
                con toda la ciudad.
              </span>
            </h1>

            <p className="text-[#FFFFFF] text-lg md:text-xl font-sans max-w-2xl mx-auto lg:mx-0">
              Tus ventas en las mejores manos. Logística humana y eficiente para
              Mar del Plata.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
              <Link href="#cotizador">
                <Button className="px-10 py-8 bg-[#FFEC01] hover:bg-[#FFEC01]/90 text-[#0636A5] font-bebas text-2xl uppercase rounded-none border-[3px] border-[#0636A5] shadow-[6px_6px_0px_0px_#0636A5] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                  Cotizá tu Envío <ArrowRight className="ml-2" size={24} />
                </Button>
              </Link>
            </div>

            {/* Informative Panel */}
            <div className="mt-8 bg-white/10 p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#FFEC01] shrink-0 mt-1" size={24} />
                <p className="text-white font-sans text-sm md:text-base">
                  <strong className="font-bold">
                    Base central en Friuli 1972, Mar del Plata.
                  </strong>
                  <br />
                  Horarios de corte: 13:00 hs (LowCost) y 15:00 hs (Flex)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Asset (Prompt Representation) */}
          <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
            {/* Visual background placeholder mimicking the prompt asset */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80"
              style={{ backgroundImage: "url('/hero/hero_background.jpeg')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0636A5] via-transparent to-transparent"></div>

            {/* Floating Status Cards */}
            <div className="relative z-10 grid grid-cols-2 gap-4 p-4">
              {statusCards.map((card, idx) => (
                <div
                  key={idx}
                  className={`${card.color} border-2 border-[#FFEC01] p-4 shadow-[4px_4px_0px_0px_#FFEC01] transform hover:-translate-y-2 transition-transform duration-300`}
                >
                  <p className="font-bebas text-[#FFEC01] text-xl tracking-wider">
                    {card.service}
                  </p>
                  <p className="font-sans text-white text-sm mt-2">{card.km}</p>
                  <p className="font-sans text-white text-xs opacity-80 uppercase font-bold mt-1">
                    {card.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div id="cotizador" className="w-full bg-[#050810] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-[#0636A5] tracking-tight">
              Cotizador Rápido
            </h2>
            <p className="text-[#0636A5] font-sans mt-4 text-lg">
              Calculá el costo de tu envío en segundos.
            </p>
          </div>

          <Card className="bg-[#050810] border-4 border-[#0636A5] shadow-[12px_12px_0px_0px_#0636A5] rounded-none">
            <CardContent className="p-8">
              <form onSubmit={handleQuote} className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="origin"
                    className="text-[#0636A5] font-sans font-bold text-lg"
                  >
                    Dirección de Origen
                  </Label>
                  <Input
                    id="origin"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="Ej: Av. Colón 1234, Mar del Plata"
                    className="border-2 border-[#0636A5] text-[#0636A5] rounded-none focus-visible:ring-0 focus-visible:border-[#FFEC01] font-sans h-12 text-lg"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="destination"
                    className="text-[#0636A5] font-sans font-bold text-lg"
                  >
                    Dirección de Destino
                  </Label>
                  <Input
                    id="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Ej: Juan B. Justo 5678, Mar del Plata"
                    className="border-2 border-[#0636A5] text-[#0636A5] rounded-none focus-visible:ring-0 focus-visible:border-[#FFEC01] font-sans h-12 text-lg"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isCalculating}
                  className="w-full h-16 bg-[#0636A5] hover:bg-[#0636A5]/90 text-[#FFEC01] font-bebas text-3xl uppercase tracking-widest rounded-none shadow-[6px_6px_0px_0px_#FFEC01] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all mt-8"
                >
                  {isCalculating ? (
                    <Loader2 className="animate-spin mr-2" size={28} />
                  ) : (
                    <Calculator className="mr-3" size={28} />
                  )}
                  Calcular Precio
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
