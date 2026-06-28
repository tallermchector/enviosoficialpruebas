'use client';

import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";
import { BusinessHours } from "@/components/contact/business-hours";
import { ContactMap } from "@/components/contact/contact-map";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { Building2, ArrowRight } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut" as any,
    },
  }),
};

export function ContactPageClient() {
  return (
    <>
      <ContactHero />
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <ContactInfo />
      </motion.div>
      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="py-12 md:py-16 px-4 bg-transparent border-t border-primary/10"
      >
        <div className="container mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-headline-lg-mobile md:text-display-md italic uppercase text-primary font-title mb-4">¿Tenés alguna consulta?</h2>
            <p className="text-primary/70 text-body-lg max-w-xl mx-auto font-body">Completá el formulario y te responderemos a la brevedad.</p>
          </div>
          <ContactForm />
        </div>
      </motion.div>
      <motion.div
        custom={2.5}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="py-12 px-4 bg-primary text-white border-y border-white/10"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 text-secondary text-xxs font-black tracking-[0.2em] mb-4 uppercase font-subtitle">
            <Building2 className="w-4 h-4 text-secondary shrink-0" />
            Portal Inmobiliario
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-title uppercase tracking-wide mb-4">¿BUSCÁS TU PRÓXIMO HOGAR O LOCAL?</h2>
          <p className="text-white/80 font-body text-base max-w-xl mx-auto mb-6">
            Elegí entre nuestro catálogo seleccionado de inmuebles en Mar del Plata. En Envíos DosRuedas gestionamos el traslado de tus llaves y contratos con absoluta confidencialidad y velocidad.
          </p>
          <Link
            href="/propiedades"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary font-subtitle font-black tracking-wider uppercase rounded-none border border-secondary transition-all duration-300 px-8 py-3 text-lg h-auto"
          >
            Explorar Propiedades
            <ArrowRight className="w-5 h-5 shrink-0" />
          </Link>
        </div>
      </motion.div>
      <motion.div
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <BusinessHours />
      </motion.div>
      <motion.div
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <ContactMap />
      </motion.div>
    </>
  );
}
