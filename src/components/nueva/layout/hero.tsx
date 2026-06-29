"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Truck, Clock, ShieldCheck } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 120 },
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 bg-white flex items-center overflow-hidden">
      {/* Neo-brutalist Grid Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
           style={{
             backgroundImage: "linear-gradient(var(--color-primary) 2px, transparent 2px), linear-gradient(90deg, var(--color-primary) 2px, transparent 2px)",
             backgroundSize: "40px 40px"
           }}
      />

      {/* Decorative colored neo-brutalist shapes */}
      <div className="absolute top-1/4 right-[-5%] w-96 h-96 bg-secondary border-4 border-primary z-0 -rotate-12 hidden lg:block" />
      <div className="absolute bottom-10 left-[-5%] w-72 h-72 bg-primary z-0 rotate-45 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Text Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block bg-primary text-secondary font-subtitle text-lg uppercase tracking-widest px-4 py-2 border-2 border-primary mb-6 shadow-[3px_3px_0_0_var(--color-secondary)]"
          >
            Logística local y mensajería oficial
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-title text-5xl md:text-7xl lg:text-8xl text-primary uppercase tracking-tight leading-none mb-6"
          >
            MANDÁ AL TOQUE <br />
            <span className="bg-secondary px-3 border-4 border-primary inline-block -rotate-2 my-2 shadow-brutal-blue">
              EN MDP
            </span>
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            variants={itemVariants}
            className="font-body text-xl md:text-2xl text-primary/90 mb-8 max-w-xl leading-relaxed"
          >
            Llegá a tiempo con la mayor red de mensajería de Mar del Plata. Envíos Express, LowCost y MercadoLibre Flex para que tu negocio nunca pare de crecer.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              href="/cotizar/express"
              className="btn-yellow text-xl"
            >
              Hacé tu Envío Flex
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
            <Link
              href="/servicios/envios-express"
              className="btn-white text-xl"
            >
              Ver Servicios
            </Link>
          </motion.div>
        </motion.div>

        {/* Right column: Dynamic Cards Grid */}
        <motion.div
          className="lg:col-span-5 grid grid-cols-1 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Card 1: Express Delivery (Card Blanca → Texto Azul) */}
          <motion.div
            variants={cardVariants}
            className="card-white flex items-start gap-5"
          >
            <div className="bg-secondary border-2 border-primary p-3 rounded-none text-primary shrink-0">
              <Truck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-title text-2xl uppercase mb-1">
                Servicios Express
              </h3>
              <p className="font-body text-base">
                Tu cadetería oficial al instante. Hacemos entregas locales con la máxima velocidad y seguridad.
              </p>
            </div>
          </motion.div>

          {/* Card 2: LowCost (Card Azul → Texto Blanco) */}
          <motion.div
            variants={cardVariants}
            className="card-blue flex items-start gap-5"
          >
            <div className="bg-secondary border-2 border-white p-3 rounded-none text-primary shrink-0">
              <Clock className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-title text-2xl uppercase mb-1">
                LowCost y Plan Pyme
              </h3>
              <p className="font-body text-base">
                Planificá tus envíos con tarifas super reducidas. Ideal para tiendas online y despachos masivos.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Safe / Insured (Card Amarilla → Texto Azul) */}
          <motion.div
            variants={cardVariants}
            className="card-yellow flex items-start gap-5"
          >
            <div className="bg-white border-2 border-primary p-3 rounded-none text-primary shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-title text-2xl uppercase mb-1">
                Control Completo
              </h3>
              <p className="font-body text-base">
                Seguimiento en tiempo real de tus envíos y repartidores capacitados con seguro.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
