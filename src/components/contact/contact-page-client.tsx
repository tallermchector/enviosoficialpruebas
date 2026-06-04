'use client';

import { HeroSection } from "@/components/ui/HeroSection";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";
import { BusinessHours } from "@/components/contact/business-hours";
import { ContactMap } from "@/components/contact/contact-map";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
      <HeroSection
        title="Contacto Comercial"
        description="¿Listo para escalar tu negocio? Hablá con un asesor logístico y diseñemos un esquema tarifario a tu medida."
        backgroundImageUrl="/bannerenvios.png"
        backgroundImageAlt="Banner contacto Envios DosRuedas"
        backgroundType="image"
        textColorClassName="text-white"
        titleClassName="text-headline-lg-mobile md:text-display-lg italic uppercase text-white mb-8"
        descriptionClassName="text-gray-400 text-body-lg mb-12 max-w-xl mx-auto leading-relaxed"
      />
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
        className="py-12 md:py-16 px-4 bg-transparent border-t border-white/5"
      >
        <div className="container mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-headline-lg-mobile md:text-display-md italic uppercase text-white mb-4">¿Tenés alguna consulta?</h2>
            <p className="text-gray-400 text-body-lg max-w-xl mx-auto">Completá el formulario y te responderemos a la brevedad.</p>
          </div>
          <ContactForm />
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
