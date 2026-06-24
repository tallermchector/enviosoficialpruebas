This file is a merged representation of a subset of the codebase, containing specifically included files and files not matching ignore patterns, combined into a single document by Repomix.
The content has been processed where comments have been removed, empty lines have been removed, content has been formatted for parsing in markdown style.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: src/ai/flows/summarize-testimonials.ts, src/ai/genkit.ts, src/app/actions.ts, src/app/contacto/page.tsx, src/app/cotizar/express/loading.tsx, src/app/cotizar/express/page.tsx, src/app/cotizar/lowcost/loading.tsx, src/app/cotizar/lowcost/page.tsx, src/app/nosotros/nuestras-redes/page.tsx, src/app/nosotros/preguntas-frecuentes/page.tsx, src/app/nosotros/sobre-nosotros/page.tsx, src/app/ordenes/actions.ts, src/app/page.tsx, src/app/servicios/envios-express/page.tsx, src/app/servicios/envios-lowcost/page.tsx, src/app/servicios/enviosflex/page.tsx, src/app/servicios/plan-emprendedores/page.tsx, src/components/about/about-hero.tsx, src/components/about/company-story.tsx, src/components/about/company-values.tsx, src/components/about/mission-vision.tsx, src/components/about/team-section.tsx, src/components/about/who-we-are.tsx, src/components/calculator/address-autocomplete.tsx, src/components/calculator/calculator-contact.tsx, src/components/calculator/calculator-hero.tsx, src/components/calculator/calculator-tips.tsx, src/components/calculator/express-calculator.tsx, src/components/calculator/lowcost-calculator-hero.tsx, src/components/calculator/lowcost-calculator.tsx, src/components/calculator/map-features.tsx, src/components/calculator/pricing-info.tsx, src/components/calculator/route-map.tsx, src/components/contact/business-hours.tsx, src/components/contact/contact-form.tsx, src/components/contact/contact-hero.tsx, src/components/contact/contact-info.tsx, src/components/contact/contact-map.tsx, src/components/contact/contact-page-client.tsx, src/components/entrepreneur/entrepreneur-benefits.tsx, src/components/entrepreneur/entrepreneur-cta.tsx, src/components/entrepreneur/entrepreneur-hero.tsx, src/components/entrepreneur/entrepreneur-pricing-ranges.tsx, src/components/entrepreneur/plan-information.tsx, src/components/envios-flex/envios-flex-content.tsx, src/components/envios-flex/envios-flex-cta.tsx, src/components/envios-flex/envios-flex-hero.tsx, src/components/envios-flex/flex-pricing-ranges.tsx, src/components/envios-flex/how-it-works.tsx, src/components/envios-flex/mercadolibre-benefits.tsx, src/components/envios-flex/requirements.tsx, src/components/express/express-benefits.tsx, src/components/express/express-content.tsx, src/components/express/express-cta.tsx, src/components/express/express-hero.tsx, src/components/express/express-page-client.tsx, src/components/express/express-pricing-ranges.tsx, src/components/express/urgent-scenarios.tsx, src/components/express/whatsapp-button.tsx, src/components/faq/faq-categories.tsx, src/components/faq/faq-contact-cta.tsx, src/components/faq/faq-hero.tsx, src/components/faq/faq-item.tsx, src/components/homenew/active-link.tsx, src/components/homenew/carrusel-redes.tsx, src/components/homenew/cta-section.tsx, src/components/homenew/emprendedores-home.tsx, src/components/homenew/footer-social-links.tsx, src/components/homenew/footer.tsx, src/components/homenew/header-container.tsx, src/components/homenew/hero-animado.tsx, src/components/homenew/hero-background.tsx, src/components/homenew/hero-scroll-indicator.tsx, src/components/homenew/hero-visuals.tsx, src/components/homenew/mobile-menu.tsx, src/components/homenew/nav-dropdown.tsx, src/components/homenew/optimized-header.tsx, src/components/homenew/rotating-card.tsx, src/components/homenew/services-overview.tsx, src/components/homenew/slider-servicios.tsx, src/components/homenew/vision-section.tsx, src/components/lowcost/how-lowcost-works.tsx, src/components/lowcost/lowcost-benefits.tsx, src/components/lowcost/lowcost-content.tsx, src/components/lowcost/lowcost-cta.tsx, src/components/lowcost/lowcost-hero.tsx, src/components/lowcost/pricing-comparison.tsx, src/components/maps/leaflet-map.tsx, src/components/maps/map-utils.ts, src/components/social/newsletter-signup.tsx, src/components/social/social-benefits.tsx, src/components/social/social-connect.tsx, src/components/social/social-feed.tsx, src/components/social/social-hero.tsx, src/components/ui/HeroSection.tsx, src/components/ui/MeshGradientBackground.tsx, src/components/ui/accordion.tsx, src/components/ui/badge.tsx, src/components/ui/button.tsx, src/components/ui/card.tsx, src/components/ui/dropdown-menu.tsx, src/components/ui/form.tsx, src/components/ui/input.tsx, src/components/ui/label.tsx, src/components/ui/sheet.tsx, src/components/ui/skeleton.tsx, src/components/ui/textarea.tsx, src/components/ui/toast.tsx, src/hooks/use-toast.ts, src/lib/maps/nominatim.ts, src/lib/maps/osrm.ts, src/lib/maps/photon.ts, src/lib/navigation.ts, src/lib/prisma.ts, src/lib/social/posts.ts, src/lib/utils.ts, src/types/order-actions.ts, src/types/social-post.ts, prisma/schema.prisma, prisma/seed.ts, .eslintrc.json, eslint.config.mjs, next.config.mjs, package.json, postcss.config.mjs, prisma.config.ts, tailwind.config.ts, tsconfig.json
- Files matching these patterns are excluded: src/context/**, src/components/ui/**, src/components/design-v2/**, src/components/homenew/**, src/components/admin/**, src/components/ordenes/**, src/app/admin/**, src/app/api/**, test-results/**, src/components/prototypes/**, src/components/admin/**, src/lib/imagenes.json, src/components/ordenes/**, src/components/homenew/**, src/app/ordenes/**, src/components/prototype/**
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Code comments have been removed from supported file types
- Empty lines have been removed from all files
- Content has been formatted for parsing in markdown style
- Long base64 data strings (e.g., data:image/png;base64,...) have been truncated to reduce token count
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.eslintrc.json
eslint.config.mjs
next.config.mjs
package.json
postcss.config.mjs
prisma.config.ts
prisma/schema.prisma
prisma/seed.ts
src/ai/flows/summarize-testimonials.ts
src/ai/genkit.ts
src/app/actions.ts
src/app/contacto/page.tsx
src/app/cotizar/express/loading.tsx
src/app/cotizar/express/page.tsx
src/app/cotizar/lowcost/loading.tsx
src/app/cotizar/lowcost/page.tsx
src/app/nosotros/nuestras-redes/page.tsx
src/app/nosotros/preguntas-frecuentes/page.tsx
src/app/nosotros/sobre-nosotros/page.tsx
src/app/page.tsx
src/app/servicios/envios-express/page.tsx
src/app/servicios/envios-lowcost/page.tsx
src/app/servicios/enviosflex/page.tsx
src/app/servicios/plan-emprendedores/page.tsx
src/components/about/about-hero.tsx
src/components/about/company-story.tsx
src/components/about/company-values.tsx
src/components/about/mission-vision.tsx
src/components/about/team-section.tsx
src/components/about/who-we-are.tsx
src/components/calculator/address-autocomplete.tsx
src/components/calculator/calculator-contact.tsx
src/components/calculator/calculator-hero.tsx
src/components/calculator/calculator-tips.tsx
src/components/calculator/express-calculator.tsx
src/components/calculator/lowcost-calculator-hero.tsx
src/components/calculator/lowcost-calculator.tsx
src/components/calculator/map-features.tsx
src/components/calculator/pricing-info.tsx
src/components/calculator/route-map.tsx
src/components/contact/business-hours.tsx
src/components/contact/contact-form.tsx
src/components/contact/contact-hero.tsx
src/components/contact/contact-info.tsx
src/components/contact/contact-map.tsx
src/components/contact/contact-page-client.tsx
src/components/entrepreneur/entrepreneur-benefits.tsx
src/components/entrepreneur/entrepreneur-cta.tsx
src/components/entrepreneur/entrepreneur-hero.tsx
src/components/entrepreneur/entrepreneur-pricing-ranges.tsx
src/components/entrepreneur/plan-information.tsx
src/components/envios-flex/envios-flex-content.tsx
src/components/envios-flex/envios-flex-cta.tsx
src/components/envios-flex/envios-flex-hero.tsx
src/components/envios-flex/flex-pricing-ranges.tsx
src/components/envios-flex/how-it-works.tsx
src/components/envios-flex/mercadolibre-benefits.tsx
src/components/envios-flex/requirements.tsx
src/components/express/express-benefits.tsx
src/components/express/express-content.tsx
src/components/express/express-cta.tsx
src/components/express/express-hero.tsx
src/components/express/express-page-client.tsx
src/components/express/express-pricing-ranges.tsx
src/components/express/urgent-scenarios.tsx
src/components/express/whatsapp-button.tsx
src/components/faq/faq-categories.tsx
src/components/faq/faq-contact-cta.tsx
src/components/faq/faq-hero.tsx
src/components/faq/faq-item.tsx
src/components/lowcost/how-lowcost-works.tsx
src/components/lowcost/lowcost-benefits.tsx
src/components/lowcost/lowcost-content.tsx
src/components/lowcost/lowcost-cta.tsx
src/components/lowcost/lowcost-hero.tsx
src/components/lowcost/pricing-comparison.tsx
src/components/maps/leaflet-map.tsx
src/components/maps/map-utils.ts
src/components/social/newsletter-signup.tsx
src/components/social/social-benefits.tsx
src/components/social/social-connect.tsx
src/components/social/social-feed.tsx
src/components/social/social-hero.tsx
src/hooks/use-toast.ts
src/lib/maps/nominatim.ts
src/lib/maps/osrm.ts
src/lib/maps/photon.ts
src/lib/navigation.ts
src/lib/prisma.ts
src/lib/social/posts.ts
src/lib/utils.ts
src/types/order-actions.ts
src/types/social-post.ts
tailwind.config.ts
tsconfig.json
```

# Files

## File: .eslintrc.json
```json
{
    "extends": [
      "next/core-web-vitals",
      "plugin:react/recommended"
    ],
    "rules": {
      "no-restricted-imports": "off",
      "react/react-in-jsx-scope": "error",
      "@next/next/no-html-link-for-pages": "error"
    }
  }
```

## File: postcss.config.mjs
```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
      tailwindcss: {},
    },
  };
  
  export default config;
```

## File: prisma.config.ts
```typescript
import "dotenv/config";
import { defineConfig, env } from "prisma/config";
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

## File: prisma/schema.prisma
```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../generated/prisma/client"
}

datasource db {
  provider = "postgresql"
}

model SocialPost {
  id        Int                @id @default(autoincrement())
  platform  SocialPlatformEnum
  userName  String
  userAvatar String?
  userUrl   String?
  content   String             @db.Text
  postUrl   String             @unique
  imageUrl  String?
  imageHint String?
  likes     Int?
  comments  Int?
  shares    Int?
  timestamp DateTime           @default(now())
}

model Client {
  id         Int      @id @default(autoincrement())
  name       String
  lastName   String?
  phone      String?  @unique
  email      String?  @unique
  address    String
  addressLat Decimal? @db.Decimal(10, 8)
  addressLng Decimal? @db.Decimal(11, 8)
  isActive   Boolean  @default(true)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
  orders     Order[]
}

model Order {
  id                      Int                 @id @default(autoincrement())
  clientId                Int?
  repartidorId            Int?
  serviceType             ServiceTypeEnum
  status                  OrderStatusEnum     @default(PENDIENTE)
  originFullName          String
  originPhone             String
  originAddress           String
  originLat               Decimal?            @db.Decimal(10, 8)
  originLng               Decimal?            @db.Decimal(11, 8)
  pickupStreetAddress     String?
  destinationContactName  String
  destinationContactPhone String
  destinationContactEmail String?
  destinationAddress      String
  destinationLat          Decimal?            @db.Decimal(10, 8)
  destinationLng          Decimal?            @db.Decimal(11, 8)
  deliveryAddress         String?
  deliveryNotes           String?
  pickupDate              DateTime?
  pickupTimeFrom          String?
  pickupTimeTo            String?
  deliveryDate            DateTime?
  deliveryTimeFrom        String?
  deliveryTimeTo          String?
  distanceText            String?
  durationText            String?
  quotedPrice             Decimal?            @db.Decimal(10, 2)
  shippingCost            Decimal?            @db.Decimal(10, 2)
  totalCost               Decimal?            @db.Decimal(10, 2)
  clientNameAtOrder       String?
  clientPhoneAtOrder      String?
  client                  Client?             @relation(fields: [clientId], references: [id])
  repartidor              Repartidor?         @relation(fields: [repartidorId], references: [id])
  createdAt               DateTime            @default(now())
  updatedAt               DateTime            @updatedAt
  pickupDateTime          DateTime?
  deliveryDateTime        DateTime?
}

model Repartidor {
  id           Int        @id @default(autoincrement())
  name         String
  phone        String     @unique
  vehicleType  String
  licensePlate String     @unique
  isActive     Boolean    @default(true)
  createdAt    DateTime   @default(now())
  updatedAt    DateTime   @updatedAt
  orders       Order[]
  etiquetas    Etiqueta[]
}

model PriceRange {
  id             Int             @id @default(autoincrement())
  serviceType    ServiceTypeEnum
  distanciaMinKm Decimal         @db.Decimal(10, 2)
  distanciaMaxKm Decimal         @db.Decimal(10, 2)
  precioRango    Decimal         @db.Decimal(10, 2)
  isActive       Boolean         @default(true)
  createdAt      DateTime        @default(now())
  updatedAt      DateTime        @updatedAt

  @@unique([serviceType, distanciaMinKm, distanciaMaxKm])
}

model Etiqueta {
  id                   Int             @id @default(autoincrement())
  orderNumber          String?         @unique
  tipoEnvio            ServiceTypeEnum
  remitenteNombre      String
  remitenteDireccion   String
  remitenteNotas       String?
  destinatarioNombre   String
  destinatarioDireccion String
  destinatarioTelefono String
  montoACobrar         Decimal?        @db.Decimal(10, 2)
  destinatarioNotas    String?
  status               EtiquetaStatus  @default(PENDIENTE)
  createdAt            DateTime        @default(now())
  updatedAt            DateTime        @updatedAt
  deliveryStartTime    String?
  deliveryEndTime      String?
  repartidorId         Int?
  repartidor           Repartidor?     @relation(fields: [repartidorId], references: [id])
}

enum EtiquetaStatus {
  PENDIENTE
  IMPRESA
  EN_CAMINO
  ENTREGADA
  NO_ENTREGADA
}

enum SocialPlatformEnum {
  facebook
  instagram
  whatsapp
}

enum OrderStatusEnum {
  PENDIENTE
  EN_CURSO
  ENTREGADO
  CANCELADO
}

enum ServiceTypeEnum {
  EXPRESS
  LOW_COST
  PUNTO_DE_RETIRO
}
```

## File: src/app/actions.ts
```typescript
'use server';
import { z } from 'zod';
import { summarizeTestimonials as summarizeTestimonialsFlow } from '@/ai/flows/summarize-testimonials';
const aiSummarySchema = z.object({
  testimonials: z.string().min(20, { message: 'El testimonio debe tener al menos 20 caracteres.' }).max(5000, { message: 'El testimonio no debe exceder los 5000 caracteres.' }),
});
export interface AISummaryState {
  summary?: string;
  error?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof aiSummarySchema>, string[]>>;
  formError?: string;
  timestamp?: number;
}
export async function generateTestimonialSummary(
  prevState: AISummaryState,
  formData: FormData
): Promise<AISummaryState> {
  const rawText = formData.get('testimonials');
  const validatedFields = aiSummarySchema.safeParse({
    testimonials: rawText,
  });
  if (!validatedFields.success) {
    return {
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      formError: "Por favor corrige los errores en el formulario.",
      timestamp: Date.now(),
    };
  }
  try {
    const result = await summarizeTestimonialsFlow({ testimonials: validatedFields.data.testimonials });
    return { summary: result.summary, timestamp: Date.now() };
  } catch (e: unknown) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'Error desconocido.';
    return { error: `Error al generar el resumen: ${errorMessage}. Inténtalo de nuevo.`, timestamp: Date.now() };
  }
}
const contactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre es requerido y debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }).max(1000, { message: 'El mensaje no debe exceder los 1000 caracteres.'}),
});
export interface ContactFormState {
  message?: string;
  error?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof contactSchema>, string[]>>;
  formError?: string;
  timestamp?: number;
}
export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });
  if (!validatedFields.success) {
    return {
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      formError: "Por favor corrige los errores en el formulario.",
      timestamp: Date.now(),
    };
  }
  console.log('Contact form submitted:', validatedFields.data);
  return { message: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.', timestamp: Date.now() };
}
```

## File: src/components/about/about-hero.tsx
```typescript
'use client';
import { HeroSection } from "@/components/ui/HeroSection";
export function AboutHero() {
  return (
    <HeroSection
      title="Sobre Nosotros"
      description="Somos Envíos DosRuedas, tu solución confiable. Más de 7 años revolucionando la logística de última milla en Mar del Plata."
      backgroundImageUrl="/bannerenvios.png"
      backgroundImageAlt="Banner Sobre Nosotros Envios DosRuedas"
    />
  );
}
```

## File: src/components/about/company-story.tsx
```typescript
"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, TrendingUp, Award } from "lucide-react"
import { motion } from "framer-motion"
export function CompanyStory() {
  const milestones = [
    {
      icon: Calendar,
      year: "2017",
      title: "Inicios",
      description: "Comenzamos como un servicio de mensajería local, adaptándonos rápidamente a las exigencias del mercado.",
    },
    {
      icon: TrendingUp,
      year: "2021",
      title: "Transformación",
      description: "Evolucionamos hacia el E-commerce moderno en Mar del Plata, optimizando procesos de última milla.",
    },
    {
      icon: Award,
      year: "2023",
      title: "Consolidación",
      description: "Alcanzamos los 4.9 estrellas en Google Reviews, validando nuestro compromiso con la excelencia.",
    },
    {
      icon: MapPin,
      year: "2024",
      title: "Actualidad",
      description: "Operamos bajo un modelo de tercerización 3PL diseñado para potenciar PyMEs y plataformas digitales.",
    },
  ]
  return (
    <section className="py-16 px-4 bg-accent/30 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display uppercase tracking-tight">Nuestra Historia</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
            Más de 7 años revolucionando la logística de última milla en Mar del Plata.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2 z-0"></div>
          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <Card className="relative z-10 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-border/10 bg-background/60 backdrop-blur-md group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-secondary" />
                      </div>
                      <span className="text-2xl font-bold text-secondary font-display">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 font-display">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-sans">{milestone.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

## File: src/components/about/company-values.tsx
```typescript
"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Zap, Shield, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
export function CompanyValues() {
  const values = [
    {
      icon: Heart,
      title: "Compromiso",
      description: "Nos comprometemos con cada envío como si fuera propio, garantizando excelencia en cada entrega.",
      color: "text-red-500",
      bg: "bg-red-500/10"
    },
    {
      icon: Zap,
      title: "Rapidez",
      description: "Agilidad motorizada para cumplir con los SLAs más exigentes del mercado actual.",
      color: "text-secondary",
      bg: "bg-secondary/10"
    },
    {
      icon: Shield,
      title: "Confiabilidad",
      description: "Procesos auditados y notificaciones en tiempo real para tu total tranquilidad.",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Cercanía",
      description: "Atención personalizada y conocimiento profundo de la logística en Mar del Plata.",
      color: "text-green-500",
      bg: "bg-green-500/10"
    },
  ]
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display uppercase tracking-tight">Nuestros Valores</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
            Los pilares que sostienen nuestra operativa y nos permiten ser tu partner logístico de confianza.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-border/50 bg-card/40 backdrop-blur-sm group h-full">
                  <CardContent className="p-8">
                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform duration-500", value.bg)}>
                      <IconComponent className={cn("w-8 h-8", value.color)} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 font-display">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-sans">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

## File: src/components/about/mission-vision.tsx
```typescript
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Lightbulb } from "lucide-react"
export function MissionVision() {
  return (
    <section className="py-16 px-4 bg-accent/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border-border/50 bg-background/80 backdrop-blur-sm">
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-display">Nuestra Misión</h3>
              <p className="text-muted-foreground leading-relaxed font-sans text-lg">
                Conectar personas y negocios en Mar del Plata a través de un servicio de mensajería y delivery
                confiable, rápido y accesible, contribuyendo al crecimiento de nuestra comunidad local.
              </p>
            </CardContent>
          </Card>
          {}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border-border/50 bg-background/80 backdrop-blur-sm">
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Eye className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-display">Nuestra Visión</h3>
              <p className="text-muted-foreground leading-relaxed font-sans text-lg">
                Ser la empresa líder en servicios de mensajería y delivery en la región, reconocida por nuestra
                excelencia, innovación y compromiso con la satisfacción del cliente.
              </p>
            </CardContent>
          </Card>
          {}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border-border/50 bg-background/80 backdrop-blur-sm">
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Lightbulb className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-display">Innovación</h3>
              <p className="text-muted-foreground leading-relaxed font-sans text-lg">
                Incorporamos constantemente nuevas tecnologías y metodologías para mejorar nuestros servicios y ofrecer
                soluciones cada vez más eficientes a nuestros clientes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
```

## File: src/components/about/team-section.tsx
```typescript
import { Card, CardContent } from "@/components/ui/card"
import { User, Bike, Headphones, Settings } from "lucide-react"
export function TeamSection() {
  const teamRoles = [
    {
      icon: User,
      title: "Equipo Directivo",
      description: "Liderazgo comprometido con la excelencia en el servicio y la satisfacción del cliente.",
      count: "3",
    },
    {
      icon: Bike,
      title: "Repartidores",
      description: "Profesionales capacitados que conocen cada rincón de Mar del Plata para entregas eficientes.",
      count: "15+",
    },
    {
      icon: Headphones,
      title: "Atención al Cliente",
      description: "Equipo dedicado a resolver consultas y brindar soporte personalizado.",
      count: "5",
    },
    {
      icon: Settings,
      title: "Soporte Técnico",
      description: "Especialistas en logística y tecnología que optimizan nuestros procesos continuamente.",
      count: "4",
    },
  ]
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">Nuestro Equipo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Un equipo de profesionales apasionados por brindar el mejor servicio de mensajería y delivery
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamRoles.map((role, index) => {
            const IconComponent = role.icon
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute top-0 right-1/4 translate-x-1/2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground border-2 border-background">
                      {role.count}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-display">{role.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-sans">{role.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

## File: src/components/calculator/address-autocomplete.tsx
```typescript
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { geocode } from '@/lib/maps/photon';
interface AddressAutocompleteProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
}
export function AddressAutocomplete({ id, placeholder, value, onChange, required, className }: AddressAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (!value || value.length < 3) {
      setSuggestions([]);
      return;
    }
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(async () => {
      try {
        const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(value + ', Mar del Plata')}&bbox=-57.65,-38.08,-57.50,-37.90`;
        const res = await fetch(url);
        const data = await res.json();
        if (data && data.features) {
          setSuggestions(data.features);
          setShowSuggestions(true);
        }
      } catch (e) {
        console.error('Autocomplete error', e);
      }
    }, 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [value]);
  const handleSelect = (feature: any) => {
    const properties = feature.properties;
    const name = properties.name || '';
    const street = properties.street || '';
    const housenumber = properties.housenumber || '';
    let fullAddress = '';
    if (street && housenumber) fullAddress = `${street} ${housenumber}`;
    else if (name) fullAddress = name;
    else if (street) fullAddress = street;
    if (properties.city) {
      fullAddress += `, ${properties.city}`;
    }
    onChange(fullAddress);
    setShowSuggestions(false);
  };
  return (
    <div className="relative w-full">
      <Input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setShowSuggestions(true);
        }}
        required={required}
        className={className}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-60 overflow-auto">
          {suggestions.map((s, i) => (
            <li
              key={i}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-800"
              onMouseDown={() => handleSelect(s)}
            >
              {s.properties.name || s.properties.street} {s.properties.housenumber}
              <span className="text-xs text-gray-500 block">
                {s.properties.city || 'Mar del Plata'}, {s.properties.state}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

## File: src/components/calculator/calculator-tips.tsx
```typescript
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, MapPin, Phone } from "lucide-react";
const tips = [
  {
    icon: <MapPin className="h-6 w-6 md:h-7 md:w-7 text-secondary" />,
    title: "Direcciones Precisas",
    description: "Asegúrate de ingresar direcciones completas y exactas, incluyendo número, barrio o referencias si es necesario.",
  },
  {
    icon: <Lightbulb className="h-6 w-6 md:h-7 md:w-7 text-secondary" />,
    title: "Verifica en el Mapa",
    description: "Una vez calculada la ruta, revisa que los puntos de origen y destino en el mapa sean los correctos.",
  },
  {
    icon: <Phone className="h-6 w-6 md:h-7 md:w-7 text-secondary" />,
    title: "Datos de Contacto Claros",
    description: "Al confirmar el envío (próximamente), proporciona números de teléfono válidos para origen y destino.",
  },
];
export default function CalculatorTips() {
  return (
    <section className="py-12 md:py-16 bg-muted/30 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-3 md:mb-4 font-display">
          Consejos para una Cotización Exitosa
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-8 md:mb-10 max-w-xl md:max-w-2xl mx-auto">
          Sigue estas recomendaciones para obtener la cotización más precisa y facilitar tu envío.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {tips.map((tip, index) => (
            <Card
              key={index}
              className="bg-card shadow-lg text-center h-full flex flex-col transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1"
            >
              <CardHeader className="items-center pb-3">
                <div className="p-3 bg-secondary/10 rounded-full mb-2">
                    {tip.icon}
                </div>
                <CardTitle className="text-xl md:text-2xl font-display">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <CardDescription className="text-sm md:text-base">{tip.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## File: src/components/calculator/map-features.tsx
```typescript
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Map, Route } from "lucide-react";
const features = [
  {
    icon: <Map className="h-7 w-7 md:h-8 md:w-8 text-primary" />,
    title: "Visualización en Mapa",
    description: "Observa la ruta exacta que tomará tu envío en un mapa interactivo.",
  },
  {
    icon: <Route className="h-7 w-7 md:h-8 md:w-8 text-primary" />,
    title: "Cálculo Preciso",
    description: "Obtén estimaciones de distancia y tiempo basadas en datos de tráfico actualizados.",
  },
  {
    icon: <CheckCircle className="h-7 w-7 md:h-8 md:w-8 text-primary" />,
    title: "Confirmación Fácil",
    description: "Una vez cotizado, puedes proceder a confirmar tu envío con pocos clics (próximamente).",
  },
];
export default function MapFeatures() {
  return (
    <section className="py-12 md:py-16 bg-muted/30 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-3 md:mb-4 font-display">
          Beneficios de Nuestro Cotizador
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-8 md:mb-10 max-w-xl md:max-w-2xl mx-auto">
          Nuestra herramienta de cotización con mapa integrado te ofrece transparencia y control sobre tus envíos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1"
            >
              <CardHeader className="items-center text-center pb-3">
                {feature.icon}
                <CardTitle className="mt-3 text-xl md:text-2xl font-display">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## File: src/components/calculator/pricing-info.tsx
```typescript
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Clock } from "lucide-react";
export default function PricingInfo() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl md:max-w-3xl mx-auto text-center">
          <Badge variant="outline" className="mb-3 md:mb-4 text-xs sm:text-sm py-1 px-3 font-sans">
            Transparencia de Precios
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6 font-display">
            ¿Cómo Calculamos el Precio?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 font-sans">
            Nuestros precios se basan en la distancia. Queremos que siempre sepas qué estás pagando.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          <Card className="shadow-md transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center text-xl md:text-2xl text-primary font-display">
                <Scale className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                Basado en la Distancia
              </CardTitle>
            </CardHeader>
            <CardContent className="font-sans">
              <p className="text-muted-foreground text-sm md:text-base">
                Utilizamos la distancia calculada entre origen y destino para determinar la tarifa base.
                Contamos con rangos de precios predefinidos.
              </p>
              <ul className="mt-3 space-y-1.5 text-xs md:text-sm text-muted-foreground list-disc list-inside">
                <li>Rangos claros y sin sorpresas.</li>
                <li>Precio justo por la distancia recorrida.</li>
                <li>Cubre el esfuerzo y tiempo del repartidor.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-md transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center text-xl md:text-2xl text-primary font-display">
                <Clock className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                Tiempo Estimado (Informativo)
              </CardTitle>
            </CardHeader>
            <CardContent className="font-sans">
              <p className="text-muted-foreground text-sm md:text-base">
                El tiempo de entrega estimado se calcula utilizando datos de tráfico (cuando la API lo permite) y la distancia.
              </p>
              <ul className="mt-3 space-y-1.5 text-xs md:text-sm text-muted-foreground list-disc list-inside">
                <li>Te ayuda a planificar mejor.</li>
                <li>No afecta directamente el precio estándar.</li>
                <li>Para servicios con espera, podrían aplicarse cargos.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
         <div className="mt-8 md:mt-10 text-center">
            <p className="text-sm md:text-base text-muted-foreground font-sans">
                Para distancias muy largas o fuera de cobertura habitual, el cotizador podría indicar &quot;Consultar&quot;.
                En estos casos, te invitamos a <a href="/contacto" className="text-primary hover:underline font-semibold">contactarnos</a> para una cotización personalizada.
            </p>
        </div>
      </div>
    </section>
  );
}
```

## File: src/components/calculator/route-map.tsx
```typescript
'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { getRoute } from '@/lib/maps/osrm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Map, Loader2 } from 'lucide-react';
const LeafletMap = dynamic(() => import('@/components/maps/leaflet-map'), { ssr: false });
interface LatLngLiteral {
  lat: number;
  lng: number;
}
interface RouteMapProps {
  origin?: LatLngLiteral;
  destination?: LatLngLiteral;
}
export default function RouteMap({ origin, destination }: RouteMapProps) {
  const [routeGeometry, setRouteGeometry] = useState<[number, number][] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    let active = true;
    async function fetchRoute() {
      if (!origin || !destination) {
        setRouteGeometry(null);
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        const route = await getRoute(origin, destination);
        if (!active) return;
        if (route && route.geometry && route.geometry.coordinates) {
          const mappedGeometry = route.geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]]);
          setRouteGeometry(mappedGeometry);
        } else {
          setError("No se pudo trazar la ruta.");
          setRouteGeometry(null);
        }
      } catch (err) {
        if (active) {
          console.error("Routing error:", err);
          setError("Error al calcular la ruta (Servicio saturado).");
          setRouteGeometry(null);
        }
      } finally {
        if (active) setIsLoading(false);
      }
    }
    fetchRoute();
    return () => {
      active = false;
    };
  }, [origin, destination]);
  const openInOSM = () => {
    if (!origin || !destination) return;
    const url = `https://www.openstreetmap.org/directions?engine=osrm_car&route=${origin.lat}%2C${origin.lng}%3B${destination.lat}%2C${destination.lng}`;
    window.open(url, '_blank');
  };
  return (
    <div className="mt-6">
      {error && (
        <Card className="mb-4 border-destructive bg-destructive/10">
          <CardContent className="p-4 text-center text-destructive text-sm">
            {error}
          </CardContent>
        </Card>
      )}
      {isLoading && (
        <div className="mb-4 flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Calculando ruta...</span>
        </div>
      )}
      <div className="rounded-lg overflow-hidden shadow-md border relative">
        <LeafletMap origin={origin} destination={destination} routeGeometry={routeGeometry || undefined} />
      </div>
      <div className="text-center mt-2">
        <Button onClick={openInOSM} variant="ghost" size="sm" disabled={!origin || !destination}>
          <Map className="mr-2 h-4 w-4" />
          Abrir en OpenStreetMap
        </Button>
      </div>
    </div>
  );
}
```

## File: src/components/express/express-page-client.tsx
```typescript
'use client';
import { ExpressHero } from "@/components/express/express-hero";
import { ExpressContent } from "@/components/express/express-content";
import { ExpressBenefits } from "@/components/express/express-benefits";
import { UrgentScenarios } from "@/components/express/urgent-scenarios";
import { ExpressCta } from "@/components/express/express-cta";
import { ExpressPricingRanges, type PriceRangeClient } from "@/components/express/express-pricing-ranges";
interface ExpressPageClientProps {
  priceRanges: PriceRangeClient[];
}
export function ExpressPageClient({ priceRanges }: ExpressPageClientProps) {
  return (
    <>
      <ExpressHero />
      <ExpressContent />
      <div id="express-pricing-ranges">
        <ExpressPricingRanges priceRanges={priceRanges} />
      </div>
      <ExpressBenefits />
      <UrgentScenarios />
      <ExpressCta />
    </>
  );
}
```

## File: src/components/faq/faq-hero.tsx
```typescript
'use client';
import { HeroSection } from "@/components/ui/HeroSection";
export function FaqHero() {
  return (
    <HeroSection
      title="Preguntas Frecuentes"
      description="Todo lo que necesitás saber sobre nuestra operativa, tarifas y SLAs de entrega. Transparencia total."
      backgroundImageUrl="/bannerenvios.png"
      backgroundImageAlt="Banner FAQ Envios DosRuedas"
    />
  );
}
```

## File: src/components/faq/faq-item.tsx
```typescript
"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
interface FaqItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}
export function FaqItem({ question, answer, defaultOpen = false }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 border-border/50",
      isOpen ? "shadow-lg bg-background/80" : "shadow-sm bg-background/50 hover:bg-background/80"
    )}>
      <CardContent className="p-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left p-6 flex items-center justify-between transition-colors duration-200"
          aria-expanded={isOpen}
        >
          <h3 className={cn(
            "text-lg font-bold font-display pr-4",
            isOpen ? "text-primary" : "text-foreground"
          )}>{question}</h3>
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
            isOpen ? "bg-primary text-primary-foreground rotate-180" : "bg-accent text-muted-foreground"
          )}>
            <ChevronDown className="w-5 h-5 flex-shrink-0" />
          </div>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 pb-6">
                <div className="pt-4 border-t border-border/50">
                  <p className="text-muted-foreground leading-relaxed font-sans text-lg">{answer}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}
```

## File: src/components/maps/map-utils.ts
```typescript
import L from 'leaflet';
export const MAR_DEL_PLATA = {
  lat: -37.9951,
  lng: -57.6432,
};
export const INITIAL_ZOOM = 13;
export const CARTO_DARK_TILES = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
export const OSM_TILES = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
export function fixLeafletIcon() {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
}
```

## File: src/components/social/social-hero.tsx
```typescript
'use client';
import { HeroSection } from "@/components/ui/HeroSection";
export function SocialHero() {
  return (
    <HeroSection
      title="Comunidad DosRuedas"
      description="Conectate con nuestra red logística. Seguí nuestro día a día, novedades y casos de éxito corporativo en Mar del Plata."
      backgroundImageUrl="/bannerenvios.png"
      backgroundImageAlt="Banner Redes Sociales Envios DosRuedas"
    />
  );
}
```

## File: src/hooks/use-toast.ts
```typescript
"use client"
import * as React from "react"
import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"
const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000
type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const
let count = 0
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}
type ActionType = typeof actionTypes
type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }
interface State {
  toasts: ToasterToast[]
}
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()
const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)
  toastTimeouts.set(toastId, timeout)
}
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }
    case "DISMISS_TOAST": {
      const { toastId } = action
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}
const listeners: Array<(state: State) => void> = []
let memoryState: State = { toasts: [] }
function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}
type Toast = Omit<ToasterToast, "id">
function toast({ ...props }: Toast) {
  const id = genId()
  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })
  return {
    id: id,
    dismiss,
    update,
  }
}
function useToast() {
  const [state, setState] = React.useState<State>(memoryState)
  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])
  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}
export { useToast, toast }
```

## File: src/lib/maps/nominatim.ts
```typescript
export async function geocodeNominatim(address: string) {
  const q = `${address}, Mar del Plata, Buenos Aires, Argentina`;
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=1`;
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'EnviosDosRuedas/1.0',
    },
  });
  if (!response.ok) {
    throw new Error('Geocoding failed');
  }
  const data = await response.json();
  if (data && data.length > 0) {
    return {
      lat: parseFloat(data[0].lat),
      lng: parseFloat(data[0].lon),
    };
  }
  return null;
}
```

## File: src/lib/maps/osrm.ts
```typescript
export async function getRoute(origin: { lat: number, lng: number }, destination: { lat: number, lng: number }) {
  const url = `https://router.project-osrm.org/route/v1/driving/${origin.lng},${origin.lat};${destination.lng},${destination.lat}?overview=full&geometries=geojson`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Routing failed');
  }
  const data = await response.json();
  if (data.routes && data.routes.length > 0) {
    const route = data.routes[0];
    return {
      distance: route.distance,
      duration: route.duration,
      geometry: route.geometry,
    };
  }
  return null;
}
```

## File: src/lib/maps/photon.ts
```typescript
export async function geocode(address: string) {
  const q = `${address}, Mar del Plata, Buenos Aires, Argentina`;
  const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(q)}&bbox=-57.65,-38.08,-57.50,-37.90`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Geocoding failed');
  }
  const data = await response.json();
  if (data.features && data.features.length > 0) {
    return {
      lat: data.features[0].geometry.coordinates[1],
      lng: data.features[0].geometry.coordinates[0],
    };
  }
  return null;
}
```

## File: src/lib/navigation.ts
```typescript
import { Truck, Zap, Clock, Package, Building2, ShieldCheck, Mail, Share2 } from 'lucide-react';
export const navGroups = [
  {
    label: 'Servicios',
    basePath: '/servicios',
    icon: Truck,
    items: [
      { label: 'Envíos Express', href: '/servicios/envios-express', icon: Zap },
      { label: 'Envíos LowCost', href: '/servicios/envios-lowcost', icon: Clock },
      { label: 'Envíos Flex (MeLi)', href: '/servicios/enviosflex', icon: Package },
      { label: 'E-Commerce & 3PL', href: '/servicios/plan-emprendedores', icon: Building2 },
    ],
  },
  {
    label: 'Nosotros',
    basePath: '/nosotros',
    icon: Building2,
    items: [
      { label: 'Sobre Nosotros', href: '/nosotros/sobre-nosotros', icon: ShieldCheck },
      { label: 'Preguntas Frecuentes', href: '/nosotros/preguntas-frecuentes', icon: Mail },
      { label: 'Nuestras Redes', href: '/nosotros/nuestras-redes', icon: Share2 },
    ],
  },
];
```

## File: src/lib/prisma.ts
```typescript
import "dotenv/config";
import { PrismaClient } from "../../generated/prisma/client/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
const pool = new pg.Pool({ connectionString: process.env.DIRECT_URL });
const adapter = new PrismaPg(pool);
const prismaClientSingleton = () => {
  return new PrismaClient({ adapter }).$extends(withAccelerate());
};
type PrismaClientExtended = ReturnType<typeof prismaClientSingleton>;
declare global {
  var prisma: undefined | PrismaClientExtended;
}
const prisma = globalThis.prisma ?? prismaClientSingleton();
export default prisma;
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}
```

## File: src/lib/social/posts.ts
```typescript
import prisma from "@/lib/prisma";
import type { SocialPost as SocialPostType } from "@/types/social-post";
export async function getAllPosts(): Promise<SocialPostType[]> {
  const postsFromDb = await prisma.socialPost.findMany({
    orderBy: {
      timestamp: 'desc',
    },
  });
  return postsFromDb.map(post => ({
    id: String(post.id),
    platform: post.platform.toLowerCase() as 'facebook' | 'instagram' | 'whatsapp',
    user: {
      name: post.userName,
      avatarUrl: post.userAvatar || undefined,
      profileUrl: post.userUrl || undefined,
    },
    content: post.content,
    imageUrl: post.imageUrl || undefined,
    imageHint: post.imageHint || undefined,
    postUrl: post.postUrl,
    timestamp: post.timestamp,
    likes: post.likes ?? undefined,
    comments: post.comments ?? undefined,
    shares: post.shares ?? undefined,
  }));
}
```

## File: src/lib/utils.ts
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function generateOrderNumber(prefix: string): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < 7; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return `${prefix}-${result}`;
}
```

## File: src/types/order-actions.ts
```typescript
import type { Client, Prisma, ServiceTypeEnum as PrismaServiceTypeEnum } from '../../generated/prisma/client/client';
import type { z } from 'zod';
export interface ClientSearchInput {
  phone: string;
}
export interface ClientSearchResult {
  success: boolean;
  data?: Client | null;
  error?: string;
  message?: string;
  fieldErrors?: z.ZodIssue[];
}
export interface RegisterClientInput {
  name: string;
  lastName?: string;
  phone: string;
  email?: string;
  address: string;
}
export interface RegisterClientResult {
  success: boolean;
  data?: Client;
  error?: string;
  fieldErrors?: z.ZodIssue[];
}
export interface QuoteShipmentInput {
  originAddress: string;
  destinationAddress: string;
  serviceType: PrismaServiceTypeEnum;
}
export interface QuoteDetails {
  price: number | null;
  distanceText: string;
  durationText: string;
  originLat: number;
  originLng: number;
  destinationLat: number;
  destinationLng: number;
}
export interface QuoteShipmentResult {
  success: boolean;
  data?: QuoteDetails;
  error?: string;
  fieldErrors?: z.ZodIssue[];
}
export interface SaveShipmentInput {
  clientId?: number;
  originFullName: string;
  originPhone: string;
  originAddress: string;
  originLat: number;
  originLng: number;
  destinationContactName: string;
  destinationContactPhone: string;
  destinationContactEmail?: string;
  destinationAddress: string;
  destinationLat: number;
  destinationLng: number;
  serviceType: PrismaServiceTypeEnum;
  quotedPrice: number;
  distanceText?: string;
  durationText?: string;
  clientNameAtOrder?: string;
  clientPhoneAtOrder?: string;
  pickupDate: Date;
  pickupTimeFrom: string;
  pickupTimeTo: string;
  deliveryDate: Date;
  deliveryTimeFrom: string;
  deliveryTimeTo: string;
  shippingCost?: number;
  totalCost?: number;
}
export interface SaveShipmentResult {
  success: boolean;
  message?: string;
  error?: string;
  fieldErrors?: z.ZodIssue[];
  shipmentId?: number;
}
```

## File: src/types/social-post.ts
```typescript
export type SocialPlatform = 'facebook' | 'instagram' | 'whatsapp';
export interface SocialPost {
  id: string;
  platform: SocialPlatform;
  user: {
    name: string;
    avatarUrl?: string;
    profileUrl?: string;
  };
  content: string;
  imageUrl?: string;
  imageHint?: string;
  videoUrl?: string;
  postUrl: string;
  timestamp: Date;
  likes?: number;
  comments?: number;
  shares?: number;
}
```

## File: next.config.mjs
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' }
        ],
      },
    ];
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
```

## File: src/app/cotizar/express/loading.tsx
```typescript
import { Skeleton } from "@/components/ui/skeleton"
export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="h-16 w-full border-b border-border bg-card/50" />
      <main className="flex-grow">
        <Skeleton className="h-[400px] w-full" />
        <div className="container mx-auto px-4 py-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <Skeleton className="h-[500px] w-full" />
             <Skeleton className="h-[500px] w-full" />
          </div>
        </div>
      </main>
    </div>
  )
}
```

## File: src/app/cotizar/lowcost/loading.tsx
```typescript
import { Skeleton } from "@/components/ui/skeleton"
export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="h-16 w-full border-b border-border bg-card/50" />
      <main className="flex-grow">
        <Skeleton className="h-[400px] w-full" />
        <div className="container mx-auto px-4 py-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <Skeleton className="h-[500px] w-full" />
             <Skeleton className="h-[500px] w-full" />
          </div>
        </div>
      </main>
    </div>
  )
}
```

## File: src/components/calculator/calculator-contact.tsx
```typescript
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
export default function CalculatorContact() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-primary to-primary/80 p-6 md:p-10 lg:p-12 rounded-lg shadow-xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3 md:mb-4 font-display">
            ¿Dudas o Envíos Especiales?
          </h2>
          <p className="text-md sm:text-lg md:text-xl text-primary-foreground/90 mb-6 md:mb-8 max-w-lg md:max-w-2xl mx-auto font-sans">
            Si tu envío excede nuestros rangos estándar, necesitas múltiples paradas, o tienes alguna consulta específica, no dudes en contactarnos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <Button size="lg" variant="secondary" asChild className="text-sm sm:text-base w-full sm:w-auto font-sans">
              <Link href="/contacto">
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Formulario de Contacto
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-sm sm:text-base border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary focus-visible:ring-primary-foreground w-full sm:w-auto font-sans">
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
```

## File: src/components/calculator/calculator-hero.tsx
```typescript
'use client';
import { HeroSection } from "@/components/ui/HeroSection";
export default function CalculatorHero() {
  return (
    <HeroSection
      preTitle="Cotizador Express"
      title={
        <>
          Cotizador de Envíos <span className="text-secondary">Express</span>
        </>
      }
      description="Calcula el costo de tu envío prioritario al instante. Alta precisión y elección de rango horario."
      ctaButtons={[
        {
          text: "Más Sobre Envíos Express",
          href: "/servicios/envios-express",
          variant: "secondary",
          icon: "ArrowRight"
        }
      ]}
    />
  );
}
```

## File: src/components/calculator/lowcost-calculator-hero.tsx
```typescript
'use client';
import { HeroSection } from "@/components/ui/HeroSection";
export default function LowCostCalculatorHero() {
  return (
    <HeroSection
      preTitle="Cotizador Low Cost"
      title={
        <>
          Cotizador de Envíos <span className="text-secondary">LowCost</span>
        </>
      }
      description="Eficiencia y rentabilidad. Calcula tu envío de ruteo diario masivo con entrega garantizada en el día."
      ctaButtons={[
        {
          text: "Más Información sobre Envíos Low Cost",
          href: "/servicios/envios-lowcost",
          variant: "secondary",
          icon: "ArrowRight"
        }
      ]}
    />
  );
}
```

## File: src/components/contact/business-hours.tsx
```typescript
"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { motion } from "framer-motion";
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.4,
      ease: "easeOut" as any,
    },
  }),
};
export function BusinessHours() {
  const schedule = [
    { day: "Lunes - Viernes", hours: "9:00 - 18:00" },
    { day: "Sábados", hours: "10:00 - 15:00 " },
    { day: "Domingos", hours: "Cerrado" },
  ]
  return (
    <section className="py-12 md:py-16 px-4 bg-transparent border-t border-white/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-headline-lg-mobile md:text-display-md italic uppercase text-white mb-4">Horarios de Atención</h2>
            <p className="text-gray-400 text-body-lg max-w-xl mx-auto">Estamos disponibles para atenderte en los siguientes horarios.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 justify-center items-center">
            {}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="md:col-span-2 max-w-2xl mx-auto w-full"
            >
              <Card className="hover:shadow-2xl h-full border border-white/10 bg-[#0a0d16]/60 backdrop-blur-md hover:border-primary/30 rounded-2xl transition-all duration-500">
                <CardHeader className="pb-3 sm:pb-4 p-6 sm:p-8">
                  <CardTitle className="flex items-center text-headline-lg text-primary uppercase font-bold">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-primary" />
                    Horarios Regulares
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <div className="space-y-3 font-sans">
                    {schedule.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0 text-sm sm:text-base"
                      >
                        <span className="text-body-md font-bold text-white">{item.day}</span>
                        <span className="text-body-md text-gray-400">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

## File: src/components/contact/contact-hero.tsx
```typescript
'use client';
import { HeroSection } from "@/components/ui/HeroSection";
export function ContactHero() {
  return (
    <HeroSection
      title={
        <>
          CONTACTO <span className="text-secondary">COMERCIAL</span>
        </>
      }
      description="¿Listo para escalar tu negocio? Hablá con un asesor logístico y diseñemos un esquema tarifario a tu medida."
      backgroundImageUrl="/bannerenvios.png"
      backgroundImageAlt="Banner contacto Envios DosRuedas"
    />
  );
}
```

## File: src/components/envios-flex/envios-flex-hero.tsx
```typescript
'use client';
import { HeroSection } from "@/components/ui/HeroSection";
export function EnviosFlexHero() {
  return (
    <HeroSection
      preTitle="BENEFICIO EMPRENDEDORES"
      title={
        <>
          ENVÍOS FLEX MERCADOLIBRE: <br />
          <span className="text-secondary">POTENCIÁ TU REPUTACIÓN</span>
        </>
      }
      description="Somos expertos en la logística de MercadoLibre. Optimizamos tus entregas Same-Day para que tu medidor siempre esté en verde y vos solo te enfoques en vender."
      ctaButtons={[
        { text: "ACTIVAR ENVÍOS FLEX", href: "/cotizar/lowcost", variant: "secondary" },
        { text: "CONTACTAR ASESOR FLEX", href: "https://wa.me/5492236602699", variant: "outline", icon: "Mail" }
      ]}
      backgroundImageUrl="/bannerenvios.webp"
      backgroundImageAlt="Banner Envíos Flex Envios DosRuedas"
    />
  );
}
```

## File: src/components/express/whatsapp-button.tsx
```typescript
'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5492236602699";
    const message = "Hola, me gustaría consultar sobre el servicio de Envíos Express.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <Button
      onClick={handleWhatsAppClick}
      variant="outline"
      size="lg"
      className="bg-white/5 border border-white/10 text-slate-900 hover:bg-white/10 font-[family-name:var(--font-orbitron)] font-bold px-8 py-4 rounded-xl transition-all uppercase tracking-tight h-auto"
    >
      <Image src="/icon/icon-whatsapp-verde.svg" alt="WhatsApp Icon" width={20} height={20} className="w-5 h-5 mr-2" />
      WhatsApp
    </Button>
  );
}
```

## File: src/components/lowcost/lowcost-hero.tsx
```typescript
'use client';
import { HeroSection } from "@/components/ui/HeroSection";
export function LowcostHero() {
  return (
    <HeroSection
      preTitle="TARIFA OPTIMIZADA"
      title={
        <>
          ENVÍOS LOWCOST: <br />
          <span className="text-secondary">MÁXIMA RENTABILIDAD</span>
        </>
      }
      description="Variabilizá tus costos logísticos con nuestro servicio de ruteo masivo inteligente. La mejor tarifa de Mar del Plata sin sacrificar seguridad."
      ctaButtons={[
        { text: "COTIZAR ENVÍO LOWCOST", href: "/cotizar/lowcost", variant: 'secondary' },
        { text: "VER TARIFAS OPTIMIZADAS", href: "#pricing-comparison", variant: 'outline', icon: 'Play' }
      ]}
      backgroundImageUrl="/bannerenvios.webp"
      backgroundImageAlt="Banner Envíos Low Cost Envios DosRuedas"
    />
  );
}
```

## File: src/components/maps/leaflet-map.tsx
```typescript
'use client';
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MAR_DEL_PLATA, INITIAL_ZOOM, OSM_TILES, CARTO_DARK_TILES, fixLeafletIcon } from './map-utils';
import { useTheme } from 'next-themes';
import { MapPin } from 'lucide-react';
import { renderToStaticMarkup } from 'react-dom/server';
interface LatLngLiteral {
  lat: number;
  lng: number;
}
interface LeafletMapProps {
  origin?: LatLngLiteral;
  destination?: LatLngLiteral;
  routeGeometry?: [number, number][];
}
const UpdateView = ({ origin, destination, routeGeometry }: LeafletMapProps) => {
  const map = useMap();
  useEffect(() => {
    if (routeGeometry && routeGeometry.length > 0) {
      const bounds = L.latLngBounds(routeGeometry);
      map.fitBounds(bounds, { padding: [50, 50] });
    } else if (origin) {
      map.setView([origin.lat, origin.lng], 15);
    } else if (destination) {
      map.setView([destination.lat, destination.lng], 15);
    }
  }, [map, origin, destination, routeGeometry]);
  return null;
};
const customMarkerIcon = L.divIcon({
  html: renderToStaticMarkup(<MapPin color="#eab308" size={32} />),
  className: '',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});
export default function LeafletMap({ origin, destination, routeGeometry }: LeafletMapProps) {
  useEffect(() => {
    fixLeafletIcon();
  }, []);
  const { theme } = useTheme();
  const tileUrl = theme === 'dark' ? CARTO_DARK_TILES : OSM_TILES;
  return (
    <div className="h-[320px] w-full rounded-lg overflow-hidden shadow-md border z-0">
      <MapContainer
        center={[MAR_DEL_PLATA.lat, MAR_DEL_PLATA.lng]}
        zoom={INITIAL_ZOOM}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={tileUrl}
        />
        {origin && <Marker position={[origin.lat, origin.lng]} icon={customMarkerIcon} />}
        {destination && <Marker position={[destination.lat, destination.lng]} icon={customMarkerIcon} />}
        {routeGeometry && routeGeometry.length > 0 && (
          <Polyline positions={routeGeometry} pathOptions={{ color: '#eab308', weight: 4 }} />
        )}
        <UpdateView origin={origin} destination={destination} routeGeometry={routeGeometry} />
      </MapContainer>
    </div>
  );
}
```

## File: src/components/social/social-benefits.tsx
```typescript
import { Card, CardContent } from "@/components/ui/card"
import { Gift, Bell, Users, Zap } from "lucide-react"
export function SocialBenefits() {
  const benefits = [
    {
      icon: Gift,
      title: "Ofertas Exclusivas",
      description: "Accede a descuentos y promociones especiales solo para nuestros seguidores.",
    },
    {
      icon: Bell,
      title: "Actualizaciones",
      description: "Sé el primero en conocer nuevos servicios y cambios de horarios importantes.",
    },
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "Únete a nuestra comunidad de clientes y comparte tus experiencias con nosotros.",
    },
    {
      icon: Zap,
      title: "Soporte Ágil",
      description: "Obtén respuestas rápidas a tus consultas a través de mensajes directos.",
    },
  ]
  return (
    <section className="py-20 px-4 bg-[#030710]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-display-md text-foreground mb-4 font-display uppercase">Beneficios de Formar Parte</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Descubrí por qué cientos de marplatenses ya nos siguen en nuestras redes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-white/10 bg-[#0a0d16]/60 backdrop-blur-sm group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-headline-lg text-foreground mb-4 font-display">{benefit.title}</h3>
                  <p className="text-body-md text-muted-foreground leading-relaxed font-sans">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

## File: tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2023",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

## File: eslint.config.mjs
```javascript
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
const eslintConfig = [...nextCoreWebVitals, ...nextTypescript, {
  ignores: [
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-require-imports": "off",
    "react-hooks/set-state-in-effect": "off",
  },
}];

export default eslintConfig;
```

## File: prisma/seed.ts
```typescript
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
import { PrismaClient } from "../generated/prisma/client/index.js";
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
async function main() {
  console.log("Iniciando el proceso de seeding...");
  try {
    console.log("Limpiando tablas PriceRange y SocialPost...");
    await prisma.priceRange.deleteMany({});
    await prisma.socialPost.deleteMany({});
    console.log("Insertando datos en PriceRange...");
    const priceRangeData = [
      { id: 1, serviceType: "EXPRESS", distanciaMinKm: 0.00, distanciaMaxKm: 2.99, precioRango: 3700.00, isActive: true, createdAt: new Date("2026-06-05T04:09:54.371Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
      { id: 2, serviceType: "EXPRESS", distanciaMinKm: 3.00, distanciaMaxKm: 4.99, precioRango: 4600.00, isActive: true, createdAt: new Date("2026-06-05T04:10:54.005Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
      { id: 3, serviceType: "EXPRESS", distanciaMinKm: 5.00, distanciaMaxKm: 6.99, precioRango: 6100.00, isActive: true, createdAt: new Date("2026-06-05T04:11:19.839Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
      { id: 4, serviceType: "EXPRESS", distanciaMinKm: 7.00, distanciaMaxKm: 9.99, precioRango: 8200.00, isActive: true, createdAt: new Date("2026-06-05T04:11:46.278Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
      { id: 5, serviceType: "EXPRESS", distanciaMinKm: 10.00, distanciaMaxKm: 9999.00, precioRango: 1000.00, isActive: true, createdAt: new Date("2026-06-05T04:14:07.352Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
      { id: 6, serviceType: "LOW_COST", distanciaMinKm: 0.00, distanciaMaxKm: 2.99, precioRango: 3000.00, isActive: true, createdAt: new Date("2026-06-05T04:15:01.568Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
      { id: 7, serviceType: "LOW_COST", distanciaMinKm: 3.00, distanciaMaxKm: 4.99, precioRango: 4000.00, isActive: true, createdAt: new Date("2026-06-05T04:15:27.461Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
      { id: 8, serviceType: "LOW_COST", distanciaMinKm: 5.00, distanciaMaxKm: 6.99, precioRango: 5300.00, isActive: true, createdAt: new Date("2026-06-05T04:15:55.207Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
      { id: 9, serviceType: "LOW_COST", distanciaMinKm: 7.00, distanciaMaxKm: 9.99, precioRango: 7000.00, isActive: true, createdAt: new Date("2026-06-05T04:16:14.314Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
      { id: 10, serviceType: "LOW_COST", distanciaMinKm: 10.00, distanciaMaxKm: 9999.00, precioRango: 700.00, isActive: true, createdAt: new Date("2026-06-05T04:16:36.317Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
    ];
    for (const data of priceRangeData) {
      await prisma.priceRange.create({ data: data as any });
    }
    console.log(`-> ${priceRangeData.length} rangos de precios insertados.`);
    console.log("Insertando datos en SocialPost...");
    const socialPostData = [
      {
        id: 7,
        comments: 10,
        content: "En cada envío, nos das tu confianza. Con cada entrega, te demostramos por qué vale la pena. 🤝 En Envíos Dos Ruedas, la responsabilidad es nuestro motor...",
        imageHint: "",
        imageUrl: "/redes/ig3.webp",
        likes: 20,
        platform: "instagram",
        postUrl: "https://www.instagram.com/enviosdosruedas/p/DK12WIDslKW/",
        shares: 0,
        timestamp: new Date("2025-06-21T06:16:02.648Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://www.instagram.com/enviosdosruedas/",
      },
      {
        id: 15,
        comments: 10,
        content: "En Envíos DosRuedas, nuestro servicio se construye sobre tres pilares fundamentales: Responsabilidad, Eficiencia y Confianza...",
        imageHint: "",
        imageUrl: "/redes/ig1.webp",
        likes: 20,
        platform: "instagram",
        postUrl: "https://www.instagram.com/enviosdosruedas/p/DJhlS5xOrTb/",
        shares: 2,
        timestamp: new Date("2025-06-21T06:30:06.365Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://www.instagram.com/enviosdosruedas/",
      },
      {
        id: 17,
        comments: 0,
        content: 'Para vos, que vendés en Mar del Plata y hacés envíos... ¿Soles usar las apps para tus envíos? Pero no te generan confianza?',
        imageHint: "",
        imageUrl: "/redes/fac1.webp",
        likes: 0,
        platform: "facebook",
        postUrl: "https://www.facebook.com/enviosdosruedas/posts/pfbid0a1i4tygsZQjwp9bsvS9xSHApJqMe5JkeoJbqx12Qvas18nSojtGhj6U9cFn3m5hDl",
        shares: 0,
        timestamp: new Date("2025-06-21T06:51:19.635Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://facebook.com/enviosdosruedas",
      },
      {
        id: 19,
        comments: 2,
        content: "📦 MENSAJERÍA ENVÍOS DOSRUEDAS 🚀 ~ ¡Somos la solución para tus envíos en Mar del Plata! ~ Te ofrecemos un servicio confiable...",
        imageHint: "",
        imageUrl: "/redes/ig4.webp",
        likes: 14,
        platform: "instagram",
        postUrl: "https://www.instagram.com/enviosdosruedas/p/DEaAGAmRMKj/",
        shares: 2,
        timestamp: new Date("2025-06-21T07:01:58.906Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://instagram.com/enviosdosruedas",
      },
      {
        id: 21,
        comments: 10,
        content: "📦 MENSAJERÍA ENVÍOS DOSRUEDAS 🚀 ~ ¡Somos la solución para tus envíos en Mar del Plata! ~ Confianza y responsabilidad son nuestros pilares.",
        imageHint: "",
        imageUrl: "/redes/fac2.webp",
        likes: 12,
        platform: "facebook",
        postUrl: "https://www.facebook.com/enviosdosruedas/posts/pfbid03WPv5ZE93ZNwL5PMRwuTpJxGaGSBzLigJqDSyzATNcSkRT3xBMZz7GKbhPv1mC53l",
        shares: 0,
        timestamp: new Date("2025-06-21T07:07:40.127Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://facebook.com/enviosdosruedas",
      },
    ];
    for (const post of socialPostData) {
      await prisma.socialPost.create({ data: post as any });
    }
    console.log(`-> ${socialPostData.length} publicaciones sociales insertadas.`);
    console.log("\n¡Seeding completado exitosamente!");
  } catch (error) {
    console.error("Error durante el seeding:", error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}
main();
```

## File: src/app/contacto/page.tsx
```typescript
import type { Metadata } from "next";
import { OptimizedHeader } from "@/components/homenew/optimized-header";
import { CarruselRedes } from "@/components/homenew/carrusel-redes";
import { Footer } from "@/components/homenew/footer";
import { ContactPageClient } from "@/components/contact/contact-page-client";
export const metadata: Metadata = {
  title: "Contacto | WhatsApp y Atención Logística en Mar del Plata",
  description: "Contactanos por WhatsApp o visitanos en Friuli 1972, Mar del Plata. Atención personalizada en logística y mensajería para PyMEs y emprendedores.",
  alternates: { canonical: 'https://www.enviosdosruedas.com/contacto' },
  openGraph: {
    title: "Contacto | WhatsApp y Atención Logística en Mar del Plata",
    description: "Contactanos por WhatsApp o visitanos en Friuli 1972, Mar del Plata. Atención personalizada en logística y mensajería para PyMEs y emprendedores.",
    url: 'https://www.enviosdosruedas.com/contacto',
    images: [{ url: '/og-image.jpg' }],
  },
};
export default function ContactPage() {
  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <OptimizedHeader />
      <main className="flex-grow">
        <ContactPageClient />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  );
}
```

## File: src/app/cotizar/express/page.tsx
```typescript
import type { Metadata } from 'next';
import { OptimizedHeader } from "@/components/homenew/optimized-header";
import { CarruselRedes } from "@/components/homenew/carrusel-redes";
import { Footer } from "@/components/homenew/footer";
import CalculatorHero from '@/components/calculator/calculator-hero';
import ExpressCalculator from '@/components/calculator/express-calculator';
import PricingInfo from '@/components/calculator/pricing-info';
import CalculatorTips from '@/components/calculator/calculator-tips';
import CalculatorContact from '@/components/calculator/calculator-contact';
import MapFeatures from '@/components/calculator/map-features';
export const metadata: Metadata = {
  title: 'Cotizador de Mensajería Express Online | Mar del Plata',
  description: 'Calculá en tiempo real el costo de tu envío express en Mar del Plata. Cotizador online de cadetería en moto para entregas rápidas y seguras.',
  alternates: { canonical: 'https://www.enviosdosruedas.com/cotizar/express' },
  openGraph: {
    title: 'Cotizador de Mensajería Express Online | Mar del Plata',
    description: 'Calculá en tiempo real el costo de tu envío express en Mar del Plata. Cotizador online de cadetería en moto para entregas rápidas y seguras.',
    url: 'https://www.enviosdosruedas.com/cotizar/express',
    images: [{ url: '/og-image.jpg' }],
  },
};
export default function CotizarExpressPage() {
  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <OptimizedHeader />
      <main className="flex-grow">
        <CalculatorHero />
        <ExpressCalculator />
        <MapFeatures />
        <PricingInfo />
        <CalculatorTips />
        <CalculatorContact />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  );
}
```

## File: src/app/cotizar/lowcost/page.tsx
```typescript
import type { Metadata } from 'next';
import { OptimizedHeader } from "@/components/homenew/optimized-header";
import { CarruselRedes } from "@/components/homenew/carrusel-redes";
import { Footer } from "@/components/homenew/footer";
import LowCostCalculatorHero from '@/components/calculator/lowcost-calculator-hero';
import LowCostCalculator from '@/components/calculator/lowcost-calculator';
import MapFeatures from '@/components/calculator/map-features';
import PricingInfo from '@/components/calculator/pricing-info';
import CalculatorTips from '@/components/calculator/calculator-tips';
import CalculatorContact from '@/components/calculator/calculator-contact';
export const metadata: Metadata = {
  title: 'Presupuesto Logístico E-commerce | Envíos en Mar del Plata',
  description: 'Solicitá tu presupuesto para envíos por volumen en Mar del Plata. Cotizá tu logística e-commerce con las mejores tarifas del mercado local hoy.',
  alternates: { canonical: 'https://www.enviosdosruedas.com/cotizar/lowcost' },
  openGraph: {
    title: 'Presupuesto Logístico E-commerce | Envíos en Mar del Plata',
    description: 'Solicitá tu presupuesto para envíos por volumen en Mar del Plata. Cotizá tu logística e-commerce con las mejores tarifas del mercado local hoy.',
    url: 'https://www.enviosdosruedas.com/cotizar/lowcost',
    images: [{ url: '/og-image.jpg' }],
  },
};
export default function CotizarLowCostPage() {
  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <OptimizedHeader />
      <main className="flex-grow">
        <LowCostCalculatorHero />
        <LowCostCalculator />
        <MapFeatures />
        <PricingInfo />
        <CalculatorTips />
        <CalculatorContact />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  );
}
```

## File: src/app/nosotros/nuestras-redes/page.tsx
```typescript
import { OptimizedHeader } from "@/components/homenew/optimized-header";
import { SocialHero } from "@/components/social/social-hero";
import { SocialConnect } from "@/components/social/social-connect";
import { SocialBenefits } from "@/components/social/social-benefits";
import { SocialFeed } from "@/components/social/social-feed";
import { NewsletterSignup } from "@/components/social/newsletter-signup";
import { Footer } from "@/components/homenew/footer";
import { getAllPosts } from "@/lib/social/posts";
import type { Metadata } from "next";
import { CarruselRedes } from "@/components/homenew/carrusel-redes";
export const metadata: Metadata = {
    title: "Nuestras Redes | Comunidad de Emprendedores en Mar del Plata",
    description: "Unite a la comunidad de Envíos DosRuedas. Seguinos en redes sociales para novedades logísticas, consejos para PyMEs y canales de contacto oficial.",
    alternates: { canonical: 'https://www.enviosdosruedas.com/nosotros/nuestras-redes' },
    openGraph: {
        title: "Nuestras Redes | Comunidad de Emprendedores en Mar del Plata",
        description: "Unite a la comunidad de Envíos DosRuedas. Seguinos en redes sociales para novedades logísticas, consejos para PyMEs y canales de contacto oficial.",
        url: 'https://www.enviosdosruedas.com/nosotros/nuestras-redes',
        images: [{ url: '/og-image.jpg' }],
    },
};
export const revalidate = 0;
export default async function SocialNetworksPage() {
  const posts = await getAllPosts();
  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <OptimizedHeader />
      <main className="flex-grow">
        <SocialHero />
        <SocialConnect />
        <SocialFeed posts={posts} />
        <SocialBenefits />
        <NewsletterSignup />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  );
}
```

## File: src/components/calculator/express-calculator.tsx
```typescript
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, Loader2, PackageCheck, RotateCcw, ThumbsUp } from 'lucide-react';
import React, { useState, FormEvent, useMemo } from 'react';
import RouteMap from './route-map';
import { AddressAutocomplete } from './address-autocomplete';
import { useToast } from '@/hooks/use-toast';
import { quoteShipment } from '@/app/ordenes/actions';
import { ServiceTypeEnum } from '../../../generated/prisma/client/client';
import type { QuoteDetails } from '@/types/order-actions';
export default function ExpressCalculator() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [quoteDetails, setQuoteDetails] = useState<QuoteDetails | null>(null);
  const { toast } = useToast();
  const mapCoordinates = useMemo(() => {
    if (!quoteDetails) return null;
    return {
      origin: { lat: quoteDetails.originLat, lng: quoteDetails.originLng },
      destination: { lat: quoteDetails.destinationLat, lng: quoteDetails.destinationLng },
    };
  }, [quoteDetails]);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!origin.trim() || !destination.trim()) {
      toast({
        variant: "destructive",
        title: "Campos incompletos",
        description: "Por favor, ingresa la dirección de origen y destino.",
      });
      return;
    }
    setIsCalculating(true);
    setQuoteDetails(null);
    const result = await quoteShipment({
        originAddress: origin,
        destinationAddress: destination,
        serviceType: ServiceTypeEnum.EXPRESS,
    });
    setIsCalculating(false);
    if (result.success && result.data) {
        setQuoteDetails(result.data);
        const priceText = result.data.price !== null ? `$${result.data.price.toLocaleString('es-AR')}` : "Consultar";
        toast({
            title: "Cotización Exitosa",
            description: `Distancia: ${result.data.distanceText}. Precio: ${priceText}`,
            variant: "default",
        });
    } else {
        toast({
            variant: "destructive",
            title: "Error de Cálculo",
            description: result.error || "No se pudo calcular la ruta o el precio. Verifica las direcciones o inténtalo más tarde.",
        });
    }
  };
  const handleNewQuote = () => {
    setOrigin('');
    setDestination('');
    setQuoteDetails(null);
    setIsCalculating(false);
  };
  return (
    <section className="w-full py-12 md:py-16 bg-background font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl lg:max-w-3xl">
        <Card className="shadow-2xl bg-[#0a0d16]/60 border-white/10 backdrop-blur-md rounded-3xl overflow-hidden">
          <CardHeader className="pt-8">
            <CardTitle className="text-headline-lg text-primary font-display">Calculá tu Envío Express</CardTitle>
            <CardDescription className="text-body-md mt-1 font-sans text-gray-400">
              Ingresá las direcciones de origen y destino para obtener una cotización instantánea.
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="space-y-1.5">
                <Label htmlFor="origin" className="text-label-md font-sans text-gray-300">Dirección de Origen</Label>
                <AddressAutocomplete
                  id="origin"
                  placeholder="Ej: Av. Colón 1234, Mar del Plata"
                  value={origin}
                  onChange={setOrigin}
                  required
                  className="text-body-md font-sans bg-[#030710] border-white/20 text-white rounded-xl focus-visible:ring-secondary"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="destination" className="text-label-md font-sans text-gray-300">Dirección de Destino</Label>
                <AddressAutocomplete
                  id="destination"
                  placeholder="Ej: Juan B. Justo 5678, Mar del Plata"
                  value={destination}
                  onChange={setDestination}
                  required
                  className="text-body-md font-sans bg-[#030710] border-white/20 text-white rounded-xl focus-visible:ring-secondary"
                />
              </div>
              <Button type="submit" className="w-full text-label-md py-6 font-display uppercase tracking-tight rounded-xl bg-secondary hover:bg-yellow-400 text-black shadow-lg" size="lg" disabled={isCalculating}>
                {isCalculating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Calculando...
                  </>
                ) : (
                  <>
                    <Calculator className="mr-2 h-5 w-5" />
                    Calcular Ruta y Precio Express
                  </>
                )}
              </Button>
            </form>
            {mapCoordinates && (
              <RouteMap
                origin={mapCoordinates.origin}
                destination={mapCoordinates.destination}
              />
            )}
            {quoteDetails && !isCalculating && (
              <Card className="mt-6 md:mt-8 bg-primary/10 border-primary/20 rounded-2xl overflow-hidden backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-headline-lg-mobile text-primary flex items-center font-display uppercase tracking-tight">
                    <PackageCheck className="mr-2 md:mr-3 h-6 w-6 md:h-7 md:w-7" />
                    Tu Cotización Express
                  </CardTitle>
                  <CardDescription className="text-body-sm mt-1 font-sans text-gray-400">
                    Basado en la distancia y tiempo estimados para tu envío.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-body-md font-sans text-gray-300">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">Distancia:</span>
                    <span className="text-white">{quoteDetails.distanceText || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">Tiempo Estimado:</span>
                    <span className="text-white">{quoteDetails.durationText || 'N/A'}</span>
                  </div>
                  <hr className="my-2 border-white/10" />
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-headline-lg text-primary font-display uppercase tracking-tight">Precio Estimado:</span>
                    {quoteDetails.price !== null ? (
                      <span className="text-headline-lg font-black text-primary font-display italic">${quoteDetails.price.toLocaleString('es-AR')}</span>
                    ) : (
                      <span className="text-headline-lg font-black text-amber-500 font-display italic">Consultar</span>
                    )}
                  </div>
                  {quoteDetails.price === null && (
                    <p className="text-label-sm text-amber-500 text-center pt-2 font-sans">
                      La distancia excede los rangos estándar o no pudo ser calculada. Contactanos para cotización.
                    </p>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-3 pt-4 md:pt-6">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-slate-900 font-display font-bold uppercase tracking-tight text-label-md rounded-xl"
                    disabled={quoteDetails.price === null}
                    onClick={() => alert('Funcionalidad "Confirmar Envío" pendiente de implementación.')}
                  >
                    <ThumbsUp className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Confirmar Envío Express
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto font-display font-bold uppercase tracking-tight text-label-md rounded-xl border-white/20 text-white hover:bg-white/10" onClick={handleNewQuote}>
                    <RotateCcw className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Nueva Cotización
                  </Button>
                </CardFooter>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
```

## File: src/components/calculator/lowcost-calculator.tsx
```typescript
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, Loader2, PackageCheck, RotateCcw, ThumbsUp } from 'lucide-react';
import React, { useState, FormEvent, useMemo } from 'react';
import RouteMap from './route-map';
import { AddressAutocomplete } from './address-autocomplete';
import { useToast } from '@/hooks/use-toast';
import { quoteShipment } from '@/app/ordenes/actions';
import { ServiceTypeEnum } from '../../../generated/prisma/client/client';
import type { QuoteDetails } from '@/types/order-actions';
export default function LowCostCalculator() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [quoteDetails, setQuoteDetails] = useState<QuoteDetails | null>(null);
  const { toast } = useToast();
  const mapCoordinates = useMemo(() => {
    if (!quoteDetails) return null;
    return {
      origin: { lat: quoteDetails.originLat, lng: quoteDetails.originLng },
      destination: { lat: quoteDetails.destinationLat, lng: quoteDetails.destinationLng },
    };
  }, [quoteDetails]);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!origin.trim() || !destination.trim()) {
      toast({
        variant: "destructive",
        title: "Campos incompletos",
        description: "Por favor, ingresa la dirección de origen y destino.",
      });
      return;
    }
    setIsCalculating(true);
    setQuoteDetails(null);
    const result = await quoteShipment({
        originAddress: origin,
        destinationAddress: destination,
        serviceType: ServiceTypeEnum.LOW_COST,
    });
    setIsCalculating(false);
    if (result.success && result.data) {
        setQuoteDetails(result.data);
        const priceText = result.data.price !== null ? `$${result.data.price.toLocaleString('es-AR')}` : "Consultar";
        toast({
            title: "Cotización Exitosa",
            description: `Distancia: ${result.data.distanceText}. Precio: ${priceText}`,
            variant: "default",
        });
    } else {
        toast({
            variant: "destructive",
            title: "Error de Cálculo",
            description: result.error || "No se pudo calcular la ruta o el precio. Verifica las direcciones o inténtalo más tarde.",
        });
    }
  };
  const handleNewQuote = () => {
    setOrigin('');
    setDestination('');
    setQuoteDetails(null);
    setIsCalculating(false);
  };
  return (
    <section className="w-full py-12 md:py-16 bg-background font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl lg:max-w-3xl">
        <Card className="shadow-2xl bg-[#0a0d16]/60 border-white/10 backdrop-blur-md rounded-3xl overflow-hidden">
          <CardHeader className="pt-8">
            <CardTitle className="text-headline-lg text-primary font-display">Calculá tu Envío Low Cost</CardTitle>
            <CardDescription className="font-sans text-body-md mt-1 text-gray-400">
              Ingresá las direcciones de origen y destino para obtener una cotización para envíos programados.
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="origin" className="text-label-md font-sans text-gray-300">Dirección de Origen</Label>
                <AddressAutocomplete
                  id="origin"
                  placeholder="Ej: Av. Colón 1234, Mar del Plata"
                  value={origin}
                  onChange={setOrigin}
                  required
                  className="text-body-md font-sans bg-[#030710] border-white/20 text-white rounded-xl focus-visible:ring-secondary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination" className="text-label-md font-sans text-gray-300">Dirección de Destino</Label>
                <AddressAutocomplete
                  id="destination"
                  placeholder="Ej: Juan B. Justo 5678, Mar del Plata"
                  value={destination}
                  onChange={setDestination}
                  required
                  className="text-body-md font-sans bg-[#030710] border-white/20 text-white rounded-xl focus-visible:ring-secondary"
                />
              </div>
              <Button type="submit" className="w-full text-label-md py-6 font-display uppercase tracking-tight rounded-xl bg-secondary hover:bg-yellow-400 text-black shadow-lg" size="lg" disabled={isCalculating}>
                {isCalculating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Calculando...
                  </>
                ) : (
                  <>
                    <Calculator className="mr-2 h-5 w-5" />
                    Calcular Ruta y Precio Low Cost
                  </>
                )}
              </Button>
            </form>
            {mapCoordinates && (
              <RouteMap
                origin={mapCoordinates.origin}
                destination={mapCoordinates.destination}
              />
            )}
            {quoteDetails && !isCalculating && (
              <Card className="mt-8 bg-primary/10 border-primary/20 rounded-2xl overflow-hidden backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-headline-lg-mobile text-primary flex items-center font-display uppercase tracking-tight">
                    <PackageCheck className="mr-3 h-7 w-7" />
                    Tu Cotización Low Cost
                  </CardTitle>
                  <CardDescription className="text-body-sm font-sans text-gray-400 mt-1">
                    Basado en la distancia y tiempo estimados para tu envío económico.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-body-md font-sans text-gray-300">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">Distancia:</span>
                    <span className="text-white">{quoteDetails.distanceText || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">Tiempo Estimado:</span>
                    <span className="text-white">{quoteDetails.durationText || 'N/A'}</span>
                  </div>
                  <hr className="my-2 border-white/10" />
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-headline-lg text-primary font-display uppercase tracking-tight">Precio Estimado:</span>
                    {quoteDetails.price !== null ? (
                      <span className="text-headline-lg font-black text-primary font-display italic">${quoteDetails.price.toLocaleString('es-AR')}</span>
                    ) : (
                      <span className="text-headline-lg font-black text-amber-500 font-display italic">Consultar</span>
                    )}
                  </div>
                  {quoteDetails.price === null && (
                    <p className="text-label-sm text-amber-500 text-center pt-2 font-sans">
                      La distancia excede nuestros rangos de precios estándar o no pudo ser calculada. Por favor, contactanos para una cotización personalizada.
                    </p>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-3 pt-4 md:pt-6 font-sans">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-slate-900 font-display font-bold uppercase tracking-tight text-label-md rounded-xl"
                    disabled={quoteDetails.price === null}
                    onClick={() => alert('Funcionalidad "Confirmar Envío Low Cost" pendiente de implementación.')}
                  >
                    <ThumbsUp className="mr-2 h-5 w-5" />
                    Confirmar Envío Low Cost
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto font-display font-bold uppercase tracking-tight text-label-md rounded-xl border-white/20 text-white hover:bg-white/10" onClick={handleNewQuote}>
                    <RotateCcw className="mr-2 h-5 w-5" />
                    Nueva Cotización
                  </Button>
                </CardFooter>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
```

## File: src/components/contact/contact-form.tsx
```typescript
"use client"
import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type FieldErrors } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, Loader2, User, MailIcon as Mail, MessageSquare } from "lucide-react"
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { motion } from "framer-motion";
const contactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre es requerido y debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }).max(1000, { message: 'El mensaje no debe exceder los 1000 caracteres.'}),
});
type ContactFormValues = z.infer<typeof contactSchema>;
const initialState: ContactFormState = {
  message: undefined,
  error: undefined,
  fieldErrors: {},
  formError: undefined,
  timestamp: Date.now(),
};
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-secondary hover:bg-secondary/90 text-black py-4 uppercase font-bebas font-black tracking-wider rounded-none transition-all duration-300 transform active:scale-95 text-lg h-auto" size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Enviando...
        </>
      ) : (
        <>
          <Send className="mr-2 h-5 w-5" />
          Enviar Mensaje
        </>
      )}
    </Button>
  );
}
export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema) as any,
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    errors: state?.fieldErrors ? state.fieldErrors as FieldErrors<ContactFormValues> : {},
  });
   useEffect(() => {
    if (state?.timestamp && state.timestamp > (initialState.timestamp ?? 0)) {
        if (state.message) {
          toast({
            title: "Mensaje Enviado",
            description: state.message,
            className: "bg-green-100 border-green-400 text-green-700",
          });
          form.reset();
        }
        if (state.error) {
          toast({
            variant: "destructive",
            title: "Error al Enviar",
            description: state.error,
          });
        }
        if (state.formError) {
           toast({
            variant: "destructive",
            title: "Error en el Formulario",
            description: state.formError,
          });
        }
        if (state.fieldErrors) {
          const fieldErrors = state.fieldErrors;
          (Object.keys(fieldErrors) as Array<keyof ContactFormValues>).forEach((key) => {
            if (form.getFieldState(key) && fieldErrors[key]) {
                 form.setError(key, { type: 'server', message: fieldErrors[key]!.join(', ') });
            }
          });
        }
    }
  }, [state, toast, form]);
  if (state?.message && state.timestamp && state.timestamp > (initialState.timestamp ?? 0)) {
    return (
       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="max-w-2xl mx-auto shadow-lg border-green-300 bg-green-50 dark:bg-green-900/20 rounded-none">
            <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2 font-display uppercase">¡Mensaje Enviado!</h3>
            <p className="text-green-600 dark:text-green-300 font-sans">{state.message}</p>
            </CardContent>
        </Card>
      </motion.div>
    );
  }
  return (
    <Card className="max-w-2xl mx-auto shadow-2xl border border-white/10 bg-[#0a0d16]/60 backdrop-blur-md hover:border-primary/30 transition-all duration-500 rounded-none">
      <CardContent className="p-6 sm:p-8">
        <Form {...form}>
            <form action={formAction} className="space-y-5 sm:space-y-6">
              <FormField
                control={form.control as any}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center text-label-md uppercase text-gray-300 font-bold mb-2"><User className="w-4 h-4 mr-2 text-primary"/>Nombre *</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" {...field} className="h-11 text-base bg-[#030710]/50 border border-white/10 hover:border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/20 text-white rounded-none transition-all duration-300 font-sans"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <FormField
              control={form.control as any}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-label-md uppercase text-gray-300 font-bold mb-2"><Mail className="w-4 h-4 mr-2 text-primary"/>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="tu@email.com" {...field} className="h-11 text-base bg-[#030710]/50 border border-white/10 hover:border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/20 text-white rounded-none transition-all duration-300 font-sans"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control as any}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-label-md uppercase text-gray-300 font-bold mb-2"><MessageSquare className="w-4 h-4 mr-2 text-primary"/>Mensaje *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Contanos sobre tu consulta o necesidad de envío..."
                      rows={5}
                      {...field}
                      className="text-base bg-[#030710]/50 border border-white/10 hover:border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/20 text-white rounded-none transition-all duration-300 font-sans"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-2">
                <SubmitButton />
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
```

## File: src/components/contact/contact-page-client.tsx
```typescript
'use client';
import { ContactHero } from "@/components/contact/contact-hero";
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
```

## File: src/components/entrepreneur/entrepreneur-hero.tsx
```typescript
'use client';
import { HeroSection } from "@/components/ui/HeroSection";
export function EntrepreneurHero() {
  return (
    <HeroSection
      preTitle="E-COMMERCE 3PL"
      title={
        <>
          ALMACENAMIENTO Y <br />
          <span className="text-secondary">FULFILLMENT PARA PyMEs</span>
        </>
      }
      description="Solución integral de almacenamiento y fulfillment para PyMEs en Mar del Plata. Contamos con depósitos propios en la ciudad para garantizar el mejor servicio 3PL."
      ctaButtons={[
        { text: "SOLICITAR PLAN CORPORATIVO", href: "/contacto", variant: "secondary" },
        { text: "AGENDAR ASESORÍA 3PL", href: "https://wa.me/5492236602699", variant: "outline", icon: "Mail" }
      ]}
      backgroundImageUrl="/bannerenvios.webp"
      backgroundImageAlt="Banner Plan Emprendedor Envios DosRuedas"
    />
  );
}
```

## File: src/components/express/express-hero.tsx
```typescript
'use client';
import { HeroSection } from "@/components/ui/HeroSection";
import RotatingCard from "@/components/homenew/rotating-card";
export function ExpressHero() {
  return (
    <HeroSection
      preTitle="DISPONIBLE EN MAR DEL PLATA"
      title={
        <>
          ENVÍOS EXPRESS <br />
          <span className="text-secondary italic">INMEDIATOS</span>
        </>
      }
      description="La solución premium para operaciones de alta criticidad horaria. Vos tenés el control total: elegí el rango exacto de entrega con certeza absoluta."
      ctaButtons={[
        { text: "COTIZÁ TU ENVÍO EXPRESS", href: "/cotizar/express", variant: "secondary" },
        { text: "HABLAR POR WHATSAPP", href: "https://wa.me/5492236602699", variant: "outline", icon: "Mail" },
      ]}
      backgroundImageUrl="/bannerenvios.webp"
      backgroundImageAlt="Banner envíos express Envios DosRuedas"
      layout="split-visual-right"
      visualElement={
        <div className="relative w-full max-w-[450px] aspect-[1.6/1]">
           <RotatingCard className="w-full h-full" />
        </div>
      }
    />
  );
}
```

## File: src/components/faq/faq-categories.tsx
```typescript
"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FaqItem } from "./faq-item"
import { Truck, DollarSign, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
interface FaqData {
  category: string
  icon: React.ElementType
  questions: Array<{
    question: string
    answer: string
  }>
}
export function FaqCategories() {
  const [activeCategory, setActiveCategory] = useState("servicios")
  const faqData: FaqData[] = [
    {
      category: "servicios",
      icon: Truck,
      questions: [
        {
          question: "¿Qué tipo de envíos realizan?",
          answer:
            "Transportamos en moto: mandados, trámites, paquetes, delivery y servicios de cadetería.",
        },
        {
          question: "¿Cuáles son las zonas de cobertura? ¿Cubren toda la ciudad/región?",
          answer:
            "Cubrimos todo Mar del Plata (no cubrimos zonas aledañas). Garantizamos presencia en todos los barrios de la ciudad con estándares de seguridad propios.",
        },
        {
          question: "¿Realizan entregas a Contrareembolso?",
          answer:
            "Sí, el efectivo cobrado será rendido en el transcurso del día o al día siguiente.",
        },
        {
          question: "¿Cómo realizo el seguimiento de mi envío?",
          answer:
            "Centralizamos la gestión vía WhatsApp. Por razones de seguridad no utilizamos GPS en tiempo real, pero garantizamos la notificación inmediata tras la entrega efectiva del paquete.",
        },
        {
          question: "¿Cuáles son los límites de carga?",
          answer:
            "Operamos con una flota exclusiva de motocicletas. La capacidad máxima es de 5 kg o dimensiones de 40x40x30 cm por bulto.",
        },
        {
          question: "¿Cómo puedo solicitar un servicio de mensajería?",
          answer:
            "Comunícate por mensaje de WhatsApp al 2236602699 y un operador te responderá a la brevedad.",
        },
        {
          question: "¿Cuáles son sus horarios de atención/servicio?",
          answer:
            "Nuestro horario de atención es de lunes a viernes de 8 a 18 hs y sábados de 9 a 15 hs. Consulta por WhatsApp para el servicio de delivery nocturno.",
        },
        {
          question: "¿Trabajan con empresas o solo con particulares?",
          answer: "Atendemos empresas, emprendedores y particulares.",
        },
        {
          question: "¿Qué los diferencia de otros servicios de mensajería en moto?",
          answer:
            "Trabajamos con estándares de excelencia, no toleramos faltas de respeto y preferimos rechazar un envío antes que fallar. Nuestra ventaja es la flota exclusiva y la cero tercerización.",
        },
      ],
    },
    {
      category: "precios",
      icon: DollarSign,
      questions: [
        {
          question: "¿Cómo calculan el costo del envío?",
          answer:
            "El costo de envío se calcula según la distancia entre el retiro y la entrega, y adicionales que puedan existir (bulto, lluvia, demora, distancia de retiro).",
        },
        {
          question: "¿Cuáles son las formas de pago que aceptan?",
          answer: "Se puede abonar en efectivo o por transferencia.",
        },
        {
          question: "¿Emiten factura?",
          answer: "Para todos nuestros servicios profesionales emitimos Factura C.",
        },
        {
          question: "¿Ofrecen descuentos para emprendedores o clientes masivos?",
          answer: "Sí, ofrecemos planes especiales para emprendedores y clientes con muchos envíos.",
        },
      ],
    },
    {
      category: "proceso",
      icon: Clock,
      questions: [
        {
          question: "¿Qué información necesito proporcionar para solicitar un envío?",
          answer:
            "Para solicitar un envío necesitamos los siguientes datos: dirección de retiro, dirección de entrega, tamaño del envío, nombre y teléfono de quien recibe.",
        },
        {
          question: "¿Puedo modificar la dirección de entrega una vez que el envío está en curso?",
          answer:
            "Sí, pero dependiendo de la distancia, podría tener un costo adicional.",
        },
        {
          question: "¿Qué sucede si el destinatario no está presente o rechaza el producto?",
          answer:
            "Si tu comprador rechaza el producto en el domicilio, la devolución del paquete a tu tienda o local se realiza totalmente SIN CARGO.",
        },
      ],
    },
  ]
  const categories = [
    { id: "servicios", label: "Servicios Generales", icon: Truck },
    { id: "precios", label: "Precios y Pagos", icon: DollarSign },
    { id: "proceso", label: "Proceso de Envío", icon: Clock },
  ]
  const activeFaq = faqData.find((faq) => faq.category === activeCategory)
  return (
    <section className="py-16 px-4 bg-[#030710]">
      <div className="container mx-auto max-w-6xl">
        {}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon
            const isActive = activeCategory === category.id
            return (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={isActive ? "default" : "outline"}
                className={cn(
                  "h-auto p-6 flex flex-col items-center space-y-4 transition-all duration-300 font-display rounded-xl",
                  isActive
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl scale-105 border-primary"
                    : "bg-[#0a0d16]/60 backdrop-blur-sm border-white/10 hover:bg-white/5 hover:border-primary/50 text-muted-foreground"
                )}
              >
                <div className={cn(
                  "p-3 rounded-full",
                  isActive ? "bg-primary-foreground/10" : "bg-primary/5"
                )}>
                  <IconComponent className={cn("w-6 h-6", isActive ? "text-primary-foreground" : "text-primary")} />
                </div>
                <span className="text-base font-bold uppercase tracking-wider">{category.label}</span>
              </Button>
            )
          })}
        </div>
        {}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-display-md text-foreground font-display">
              {categories.find((cat) => cat.id === activeCategory)?.label}
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="space-y-4">
            {activeFaq?.questions.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} defaultOpen={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

## File: src/components/faq/faq-contact-cta.tsx
```typescript
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, Mail } from "lucide-react"
export function FaqContactCta() {
  return (
    <section className="py-16 px-4 bg-[#030710]">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-[#0a0d16]/60 text-white border-white/10 shadow-2xl overflow-hidden relative backdrop-blur-md rounded-3xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <CardContent className="p-10 md:p-14 text-center relative z-10">
            <h2 className="text-display-md mb-6 font-display">¿No encontraste lo que buscabas?</h2>
            <p className="text-body-lg mb-10 text-gray-300 font-sans max-w-2xl mx-auto">
              Nuestro equipo está listo para ayudarte con cualquier consulta específica sobre nuestros servicios.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-slate-900 font-display uppercase tracking-tight text-label-md h-14 px-8 rounded-xl shadow-lg">
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
                className="border-white/30 text-white hover:bg-white hover:text-slate-900 font-display uppercase tracking-tight text-label-md h-14 px-8 rounded-xl backdrop-blur-sm"
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
```

## File: src/components/social/newsletter-signup.tsx
```typescript
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
      {}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <Card className="bg-[#030710] backdrop-blur-md border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden">
          <CardContent className="p-10 md:p-16 text-center">
            {isSubscribed ? (
              <div className="text-white animate-in zoom-in duration-500">
                <CheckCircle className="w-20 h-20 mx-auto mb-6 text-secondary" />
                <h3 className="text-display-md mb-4 font-display">¡Bienvenido a la Comunidad!</h3>
                <p className="text-body-lg font-sans text-gray-300">Te suscribiste correctamente. Pronto recibirás nuestras mejores novedades.</p>
              </div>
            ) : (
              <>
                <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg rotate-3">
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
                    className="flex-1 h-16 bg-[#0a0d16] border-white/30 text-white placeholder:text-gray-500 rounded-xl px-6 focus:bg-[#0a0d16]/80 focus-visible:border-secondary transition-all font-sans text-body-md"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="h-16 px-10 bg-secondary hover:bg-yellow-400 text-black uppercase font-display text-label-md rounded-xl shadow-xl transition-all"
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
```

## File: src/components/social/social-connect.tsx
```typescript
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
      description: "Seguinos en Facebook para ofertas exclusivas y actualizaciones diarias de nuestros servicios en Mar del Plata.",
      color: "bg-[#1877F2]",
      url: "https://facebook.com/enviosdosruedas",
      followers: "2.5K+",
    },
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@enviosdosruedas",
      description: "Mirá nuestro día a día en Instagram, fotos de entregas y promociones especiales diseñadas para vos.",
      color: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
      url: "https://instagram.com/enviosdosruedas",
      followers: "3.2K+",
    },
    {
      name: "WhatsApp",
      icon: null,
      handle: "+54 9 223 660-2699",
      description: "Atención directa por WhatsApp. Canal personalizado para cotizaciones y pedidos inmediatos.",
      color: "bg-[#25D366]",
      url: "https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web.",
      followers: "Atención 24/7",
    },
  ]
  return (
    <section className="py-16 px-4 bg-background font-sans">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-display-md text-foreground mb-6 font-display uppercase tracking-tight">¡Seguí el Movimiento!</h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto font-sans leading-relaxed">
            Unite a nuestra comunidad para acceder a beneficios exclusivos y estar al tanto de todo.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialNetworks.map((network) => {
            const IconComponent = network.icon
            return (
              <Card key={network.name} className="group hover:shadow-2xl transition-all duration-500 border-white/10 bg-[#0a0d16]/60 backdrop-blur-md overflow-hidden rounded-3xl hover:-translate-y-2">
                <CardContent className="p-10 flex flex-col h-full items-center text-center">
                  <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg relative", network.color)}>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                    {IconComponent ? (
                      <IconComponent className="w-10 h-10 text-slate-900 relative z-10" />
                    ) : (
                      <Image src="/icon/icon-whatsapp.svg" alt="WhatsApp" width={40} height={40} className="w-10 h-10 relative z-10" />
                    )}
                  </div>
                  <h3 className="text-headline-lg text-foreground font-display mb-2">{network.name}</h3>
                  <div className="px-3 py-1 bg-primary/10 text-primary text-label-sm rounded-full mb-6 font-sans">
                    {network.followers}
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed font-sans text-body-lg flex-grow">{network.description}</p>
                  <Button asChild size="lg" className={cn("w-full text-slate-900 font-bold h-14 rounded-xl shadow-md hover:shadow-xl transition-all relative overflow-hidden group/btn text-label-md uppercase font-display", network.color)}>
                    <a href={network.url} target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10">
                        {network.name === "WhatsApp" ? "Hablá con nosotros" : `Seguinos en ${network.name}`}
                      </span>
                      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
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
```

## File: src/components/social/social-feed.tsx
```typescript
'use client';
import type { SocialPost } from "@/types/social-post";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Share2 as Facebook, Camera as Instagram, MessageSquare, MessageCircle as MessageIcon, Share2, ExternalLink, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";
interface SocialFeedProps {
  posts: SocialPost[];
}
const platformIcons = {
  facebook: Facebook,
  instagram: Instagram,
  whatsapp: MessageSquare,
};
const platformColors = {
  facebook: "bg-[#1877F2]",
  instagram: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
  whatsapp: "bg-[#25D366]",
};
const PlatformIcon = ({ platform }: { platform: SocialPost['platform'] }) => {
  const Icon = platformIcons[platform];
  return <Icon className="w-5 h-5" />;
};
export function SocialFeed({ posts }: SocialFeedProps) {
  if (!posts || posts.length === 0) {
    return (
      <section className="py-20 px-4 bg-[#030710]">
        <div className="container mx-auto text-center">
          <p className="text-body-lg text-muted-foreground font-sans">Mantenete atento a nuestras próximas publicaciones.</p>
        </div>
      </section>
    );
  }
  return (
    <section className="py-20 px-4 bg-[#030710]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-display-md text-foreground mb-6 font-display uppercase tracking-tight">Publicaciones Recientes</h2>
          <p className="text-body-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Lo que está pasando ahora mismo en nuestras redes sociales oficiales.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col bg-[#0a0d16]/60 backdrop-blur-sm rounded-3xl border-white/10">
              <CardHeader className="flex flex-row items-center space-x-4 p-6 border-b border-white/10">
                {post.user.avatarUrl ? (
                  <div className="relative">
                    <Image
                      src={post.user.avatarUrl}
                      alt={post.user.name}
                      width={48}
                      height={48}
                      className="rounded-full border-2 border-primary/20"
                    />
                    <div className={cn("absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-slate-900 border-2 border-background shadow-sm", platformColors[post.platform])}>
                      <PlatformIcon platform={post.platform} />
                    </div>
                  </div>
                ) : (
                  <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-slate-900 shadow-md", platformColors[post.platform])}>
                    <PlatformIcon platform={post.platform} />
                  </div>
                )}
                <div>
                  <a href={post.user.profileUrl || post.postUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <CardTitle className="text-body-lg font-bold font-display">{post.user.name}</CardTitle>
                  </a>
                  <p className="text-label-sm text-muted-foreground font-sans uppercase tracking-wider">
                    {new Date(post.timestamp).toLocaleDateString('es-AR', { month: 'short', day: 'numeric' })} • {post.platform}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                {post.imageUrl && post.platform !== 'whatsapp' && (
                  <a href={post.postUrl} target="_blank" rel="noopener noreferrer" className="block overflow-hidden relative group">
                    <Image
                      src={post.imageUrl}
                      alt={`Post de ${post.user.name}`}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  </a>
                )}
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed text-body-md font-sans line-clamp-4">
                    {post.content}
                  </p>
                </div>
                {post.platform === 'whatsapp' && (
                   <div className="px-6 pb-6">
                    <Button asChild className={cn("w-full h-12 text-slate-900 uppercase font-display text-label-md rounded-xl", platformColors[post.platform])}>
                      <a href={post.postUrl} target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="mr-2 h-5 w-5" /> Iniciar Chat Web
                      </a>
                    </Button>
                   </div>
                )}
              </CardContent>
              {post.platform !== 'whatsapp' && (
                <CardFooter className="p-6 border-t border-white/10 flex items-center justify-between bg-white/5">
                  <div className="flex items-center space-x-4 text-muted-foreground font-sans font-bold text-sm">
                    {post.likes !== undefined && (
                      <span className="flex items-center hover:text-primary transition-colors cursor-pointer"><ThumbsUp className="w-4 h-4 mr-1.5" /> {post.likes}</span>
                    )}
                    {post.comments !== undefined && (
                      <span className="flex items-center hover:text-primary transition-colors cursor-pointer"><MessageIcon className="w-4 h-4 mr-1.5" /> {post.comments}</span>
                    )}
                  </div>
                  <Button variant="ghost" size="sm" asChild className="text-primary font-bold hover:bg-primary/10 rounded-xl">
                    <a href={post.postUrl} target="_blank" rel="noopener noreferrer">
                      Ver Original <ExternalLink className="ml-1.5 w-4 h-4" />
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground uppercase font-display text-label-md h-14 px-10 rounded-xl shadow-xl hover:shadow-primary/20 transition-all">
            Seguir todas nuestras cuentas <span className="ml-2 font-sans">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
```

## File: src/ai/flows/summarize-testimonials.ts
```typescript
'use server';
import {ai} from '@/ai/genkit';
import {z} from 'genkit';
const SummarizeTestimonialsInputSchema = z.object({
  testimonials: z
    .string()
    .describe('The testimonials to summarize.  This can be a long string.'),
});
export type SummarizeTestimonialsInput = z.infer<typeof SummarizeTestimonialsInputSchema>;
const SummarizeTestimonialsOutputSchema = z.object({
  summary: z
    .string()
    .describe('A summary of the testimonials, highlighting the key sentiments.'),
});
export type SummarizeTestimonialsOutput = z.infer<typeof SummarizeTestimonialsOutputSchema>;
export async function summarizeTestimonials(input: SummarizeTestimonialsInput): Promise<SummarizeTestimonialsOutput> {
  return summarizeTestimonialsFlow(input);
}
const prompt = ai.definePrompt({
  name: 'summarizeTestimonialsPrompt',
  input: {schema: SummarizeTestimonialsInputSchema},
  output: {schema: SummarizeTestimonialsOutputSchema},
  prompt: `Summarize the following customer testimonials, highlighting the overall sentiment and key points:\n\n{{{testimonials}}}`,
});
const summarizeTestimonialsFlow = ai.defineFlow(
  {
    name: 'summarizeTestimonialsFlow',
    inputSchema: SummarizeTestimonialsInputSchema,
    outputSchema: SummarizeTestimonialsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
```

## File: src/ai/genkit.ts
```typescript
import { genkit } from "genkit";
import { googleAI } from "@genkit-ai/google-genai";
const apiKey = process.env.GEMINIENLACE;
if (!apiKey) {
  throw new Error(
    "❌ ERROR CRÍTICO: La variable de entorno GEMINIENLACE no está definida. " +
      "Por favor, verifícala en tu archivo .env",
  );
}
export const ai = genkit({
  plugins: [googleAI({ apiKey })],
  model: "googleai/gemini-2.5-flash",
});
export const models = {
  flash: "googleai/gemini-2.5-flash",
  pro: "googleai/gemini-2.5-pro",
};
```

## File: src/app/nosotros/preguntas-frecuentes/page.tsx
```typescript
import { OptimizedHeader } from "@/components/homenew/optimized-header"
import { FaqHero } from "@/components/faq/faq-hero"
import { FaqCategories } from "@/components/faq/faq-categories"
import { FaqContactCta } from "@/components/faq/faq-contact-cta"
import { CarruselRedes } from "@/components/homenew/carrusel-redes"
import { Footer } from "@/components/homenew/footer"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Soporte y Cobertura en Mar del Plata",
  description: "Resolvé tus dudas sobre horarios, zonas de cobertura en Mar del Plata y métodos de pago. Todo lo que necesitás saber para tus envíos DosRuedas.",
  alternates: { canonical: 'https://www.enviosdosruedas.com/nosotros/preguntas-frecuentes' },
  openGraph: {
    title: "Preguntas Frecuentes | Soporte y Cobertura en Mar del Plata",
    description: "Resolvé tus dudas sobre horarios, zonas de cobertura en Mar del Plata y métodos de pago. Todo lo que necesitás saber para tus envíos DosRuedas.",
    url: 'https://www.enviosdosruedas.com/nosotros/preguntas-frecuentes',
    images: [{ url: '/og-image.jpg' }],
  },
}
export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuáles son las zonas de cobertura? ¿Cubren toda la ciudad/región?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cubrimos todo Mar del Plata (no cubrimos zonas aledañas). Garantizamos presencia en todos los barrios de la ciudad con estándares de seguridad propios."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué los diferencia de otros servicios de mensajería en moto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trabajamos con estándares de excelencia, no toleramos faltas de respeto y preferimos rechazar un envío antes que fallar. Nuestra ventaja es la flota exclusiva y la cero tercerización."
        }
      }
    ]
  };
  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <OptimizedHeader />
      <main>
        <FaqHero />
        <FaqCategories />
        <FaqContactCta />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  )
}
```

## File: src/app/nosotros/sobre-nosotros/page.tsx
```typescript
import { OptimizedHeader } from "@/components/homenew/optimized-header"
import { AboutHero } from "@/components/about/about-hero"
import { WhoWeAre } from "@/components/about/who-we-are"
import { CompanyValues } from "@/components/about/company-values"
import { CompanyStory } from "@/components/about/company-story"
import { TeamSection } from "@/components/about/team-section"
import { MissionVision } from "@/components/about/mission-vision"
import { CarruselRedes } from "@/components/homenew/carrusel-redes"
import { Footer } from "@/components/homenew/footer"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Sobre Nosotros | Empresa de Logística Líder en Mar del Plata",
  description: "Conocé nuestra infraestructura y valores como la empresa de logística local referente en Mar del Plata. Transparencia, flota propia y compromiso total.",
  alternates: { canonical: 'https://www.enviosdosruedas.com/nosotros/sobre-nosotros' },
  openGraph: {
    title: "Sobre Nosotros | Empresa de Logística Líder en Mar del Plata",
    description: "Conocé nuestra infraestructura y valores como la empresa de logística local referente en Mar del Plata. Transparencia, flota propia y compromiso total.",
    url: 'https://www.enviosdosruedas.com/nosotros/sobre-nosotros',
    images: [{ url: '/og-image.jpg' }],
  },
}
export default function AboutPage() {
  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <OptimizedHeader />
      <main>
        <AboutHero />
        <WhoWeAre />
        <CompanyValues />
        <CompanyStory />
        <TeamSection />
        <MissionVision />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  )
}
```

## File: src/components/contact/contact-map.tsx
```typescript
'use client';
import { ExternalLink, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
export function ContactMap() {
  const openInOSM = () => {
    const osmUrl = `https://www.openstreetmap.org/search?query=Mar%20del%20Plata`;
    window.open(osmUrl, '_blank');
  };
  return (
    <section className="py-12 md:py-16 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-none mb-4"
          >
            <MapPin className="w-5 h-5 text-primary mr-2" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider font-sans">Ubicación</span>
          </motion.div>
          <h2 className="text-headline-lg-mobile md:text-display-md italic uppercase text-white mb-4">
            Nuestra Zona de Cobertura
          </h2>
          <p className="text-gray-400 text-body-lg max-w-xl mx-auto">
            Operamos en toda la ciudad de Mar del Plata, listos para llegar a donde nos necesites.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-[450px] md:h-[550px] w-full rounded-none overflow-hidden shadow-2xl border border-white/10 bg-[#0a0d16]/60 backdrop-blur-md"
        >
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-57.8,-38.15,-57.4,-37.85&layer=mapnik"
            width="100%"
            height="100%"
            style={{ border:0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de cobertura de Envios DosRuedas en Mar del Plata"
            className="grayscale contrast-[1.1] invert dark:invert-0 dark:grayscale-0"
          ></iframe>
        </motion.div>
        <div className="text-center mt-8">
          <Button onClick={openInOSM} variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-black font-bebas font-black tracking-wider rounded-none uppercase py-4 h-auto text-lg">
            <ExternalLink className="mr-2 h-4 w-4" />
            Ver en OpenStreetMap
          </Button>
        </div>
      </div>
    </section>
  );
}
```

## File: src/components/entrepreneur/entrepreneur-cta.tsx
```typescript
"use client"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
export function EntrepreneurCta() {
  return (
    <section className="py-24 px-4 bg-surface-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="p-12 md:p-16 rounded-[40px] bg-gradient-to-br from-primary/10 via-[#0a0d16]/80 to-secondary/5 border border-white/10 backdrop-blur-xl relative overflow-hidden text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-32 translate-x-32" />
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-900/50 text-xxs font-bold tracking-[0.3em] mb-10 uppercase">
             SOCIO LOGÍSTICO <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </div>
          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-6xl font-black italic tracking-tighter leading-tight mb-8 uppercase text-slate-900">
            ¿LISTO PARA ESCALAR <br />
            TU <span className="text-primary">E-COMMERCE?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
            Olvídate de los paquetes y concéntrate en tu producto. Nosotros nos encargamos de toda la cadena de distribución.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <Link
              href="/contacto"
              className="px-12 py-5 bg-primary hover:bg-primary/90 text-slate-900 font-[family-name:var(--font-orbitron)] font-black rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center gap-3 uppercase tracking-tight h-auto"
            >
              <ShieldCheck size={20} /> SOLICITAR PLAN
            </Link>
            <a
              href="tel:+5492236602699"
              className="px-12 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-900 font-[family-name:var(--font-orbitron)] font-bold rounded-2xl transition-all flex items-center gap-3 uppercase tracking-tight group h-auto"
            >
              <Phone size={20} className="text-secondary" />
              HABLAR CON UN ASESOR
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

## File: src/components/entrepreneur/entrepreneur-pricing-ranges.tsx
```typescript
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coins, ArrowRightCircle, Calculator } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PriceRange } from '../../../generated/prisma/client/client';
export type PriceRangeClient = Omit<PriceRange, 'distanciaMinKm' | 'distanciaMaxKm' | 'precioRango'> & {
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
};
interface EntrepreneurPricingRangesProps {
  priceRanges: PriceRangeClient[];
}
export function EntrepreneurPricingRanges({ priceRanges }: EntrepreneurPricingRangesProps) {
  const entrepreneurTiers = [
    {
      name: "3PL Fulfillment",
      price: "$6.000",
      distanceRange: "Tarifa Plana Same Day",
      description: "Incluye almacenamiento, picking y embalaje básico.",
      features: [
        "Cobranza contra-reembolso bonificada",
        "Rechazos devueltos sin cargo",
        "Control de stock incluido",
      ],
      badgeText: "Plan E-Commerce",
    },
    {
      name: "Plan 24HS",
      price: "$3.800",
      distanceRange: "Next Day (Retiro hoy)",
      description: "Tarifas decrecientes: Pro $3.500 | Elite $3.200 | Partner $3.000",
      features: [
        "20% OFF usando Drop-Off",
        "Entrega garantizada < 24hs",
        "Ideal para grandes volúmenes",
      ],
      badgeText: "Plan Escala",
    },
    {
      name: "Cta. Cte. Flexible",
      price: "Híbrido",
      distanceRange: "LowCost + Beneficios Express",
      description: "Pagá tarifas LowCost pero con prioridad de gestión.",
      features: [
        "Corte extendido hasta 15:00 hs",
        "Elección de rango horario",
        "Facturación mensual centralizada",
      ],
      badgeText: "Plan Corporativo",
    },
  ];
  return (
    <section className="py-24 px-4 bg-surface-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-slate-900 tracking-tighter">
              PLANES 3PL Y <span className="text-primary">SOLUCIONES E-COMMERCE</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
              Elegí el plan que mejor se adapte al volumen de tu negocio. Desde almacenamiento hasta ruteo masivo.
            </p>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {entrepreneurTiers.map((tier, index) => {
            return (
               <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
              >
                  <Card className="relative bg-white/5 border-white/10 backdrop-blur-md hover:border-primary/50 transition-all duration-300 rounded-3xl overflow-hidden h-full flex flex-col group">
                      <Badge className="absolute top-4 right-4 bg-primary/20 text-primary border-primary/30 py-1 px-3 rounded-full text-xxs font-bold uppercase tracking-widest">
                          {tier.badgeText}
                      </Badge>
                      <CardHeader className="text-center pt-12 pb-6">
                          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                              <Coins className="w-8 h-8 text-primary" />
                          </div>
                          <CardTitle className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-slate-900 uppercase tracking-tight">
                              {tier.name}
                          </CardTitle>
                          <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">
                              {tier.distanceRange}
                          </p>
                          <div className="text-4xl font-black text-slate-900 mt-6 font-[family-name:var(--font-orbitron)] italic tracking-tighter">
                              {tier.price}
                          </div>
                      </CardHeader>
                      <CardContent className="flex-grow pb-12">
                          <p className="text-gray-400 mb-8 text-center text-sm font-[family-name:var(--font-roboto)] leading-relaxed">
                              {tier.description}
                          </p>
                          <ul className="space-y-4 font-[family-name:var(--font-roboto)]">
                              {tier.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                                      <ArrowRightCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                                      {feature}
                                  </li>
                              ))}
                          </ul>
                      </CardContent>
                  </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

## File: src/components/envios-flex/envios-flex-cta.tsx
```typescript
"use client"
import { Button } from "@/components/ui/button"
import { Zap, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
export function EnviosFlexCta() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5492236602699"
    const message = "Hola, soy vendedor de MercadoLibre y quiero implementar Envíos Flex."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }
  return (
    <section className="py-24 px-4 bg-[#0a0d16] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="p-12 md:p-16 rounded-[40px] bg-gradient-to-br from-primary/10 via-[#0a0d16]/80 to-secondary/5 border border-white/10 backdrop-blur-xl relative overflow-hidden text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-32 translate-x-32" />
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-900/50 text-xxs font-bold tracking-[0.3em] mb-10 uppercase">
             IMPULSA TU REPUTACIÓN <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          </div>
          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-6xl font-black italic tracking-tighter leading-tight mb-8 uppercase text-slate-900">
            ¿LISTO PARA VENDER <br />
            MÁS CON <span className="text-primary">ENVÍOS FLEX?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
            No pierdas más ventas por tiempos de entrega largos. Implementa Same-Day hoy mismo con los expertos en MercadoLibre.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <Link
              href="/cotizar/lowcost"
              className="px-12 py-5 bg-primary hover:bg-primary/90 text-slate-900 font-[family-name:var(--font-orbitron)] font-black rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center gap-3 uppercase tracking-tight h-auto"
            >
              <Zap size={20} /> EMPEZAR AHORA
            </Link>
            <Button
              onClick={handleWhatsAppClick}
              className="px-12 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-900 font-[family-name:var(--font-orbitron)] font-bold rounded-2xl transition-all flex items-center gap-3 uppercase tracking-tight h-auto group"
            >
              <Phone size={20} className="text-secondary" />
              CONTACTAR ASESOR
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

## File: src/components/envios-flex/flex-pricing-ranges.tsx
```typescript
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coins, ArrowRightCircle, HelpCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PriceRange } from '../../../generated/prisma/client/client';
export type PriceRangeClient = Omit<PriceRange, 'distanciaMinKm' | 'distanciaMaxKm' | 'precioRango'> & {
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
};
interface FlexPricingRangesProps {
  priceRanges: PriceRangeClient[];
}
export function FlexPricingRanges({ priceRanges }: FlexPricingRangesProps) {
    const flexTiers = [
        {
            name: "Nivel 1",
            price: "Tarifa Clásica",
            distanceRange: "1 a 4 envíos diarios",
            description: "Ideal para vendedores que recién comienzan con Flex.",
            features: [
                "Tarifa zonificada estándar",
                "Segunda visita al 50%",
                "Retiro sin cargo",
            ],
            badgeText: "Crecimiento",
        },
        {
            name: "Nivel 2",
            price: "Tarifa Híbrida",
            distanceRange: "+5 envíos diarios",
            description: "Beneficios exclusivos para vendedores constantes.",
            features: [
                "Zona 4 y 5 tope fijo $6.500",
                "2da visita GRATIS (Zona 1)",
                "Prioridad en ruteo",
            ],
            badgeText: "Pro",
        },
        {
            name: "Nivel 3",
            price: "$4.500",
            distanceRange: "Grandes Cuentas (+10)",
            description: "Máxima eficiencia y previsibilidad de costos.",
            features: [
                "Tarifa PLANA toda la ciudad",
                "Reprogramaciones 100% GRATIS",
                "Soporte dedicado",
            ],
            badgeText: "Elite",
        },
    ];
    const handleWhatsAppClick = () => {
        const phoneNumber = "5492236602699";
        const message = "Hola, necesito cotizar un Envío Flex de más de 13 km.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };
    return (
        <section className="py-24 px-4 bg-surface-light relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-slate-900 tracking-tighter">
                            NIVELES Y <span className="text-primary">TARIFAS FLEX</span>
                        </h2>
                        <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full" />
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
                            Escalá tu negocio con MercadoLibre Flex. A mayor volumen, mejores beneficios y tarifas para tus envíos.
                        </p>
                    </motion.div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {flexTiers.map((tier, index) => {
                        return (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="relative bg-white/5 border-white/10 backdrop-blur-md hover:border-primary/50 transition-all duration-300 rounded-3xl overflow-hidden h-full flex flex-col group">
                                    <Badge className="absolute top-4 right-4 bg-primary/20 text-primary border-primary/30 py-1 px-3 rounded-full text-xxs font-bold uppercase tracking-widest">
                                        {tier.badgeText}
                                    </Badge>
                                    <CardHeader className="text-center pt-12 pb-6">
                                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                            <Coins className="w-8 h-8 text-primary" />
                                        </div>
                                        <CardTitle className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-slate-900 uppercase tracking-tight">
                                            {tier.name}
                                        </CardTitle>
                                        <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">
                                            {tier.distanceRange}
                                        </p>
                                        <div className="text-4xl font-black text-slate-900 mt-6 font-[family-name:var(--font-orbitron)] italic tracking-tighter">
                                            {tier.price}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow pb-12">
                                        <p className="text-gray-400 mb-8 text-center text-sm font-[family-name:var(--font-roboto)] leading-relaxed">
                                            {tier.description}
                                        </p>
                                        <ul className="space-y-4 font-[family-name:var(--font-roboto)]">
                                            {tier.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                                                    <ArrowRightCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <Card className="bg-gradient-to-r from-primary/10 to-secondary/5 border-white/10 backdrop-blur-md rounded-3xl overflow-hidden p-8 md:p-12">
                         <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xxs font-bold tracking-widest mb-6 uppercase">
                                BENEFICIO CLIMA
                              </div>
                              <h3 className="font-[family-name:var(--font-orbitron)] text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4 italic">
                                RECARGO POR LLUVIA: <span className="text-secondary">SOLO 30%</span>
                              </h3>
                              <p className="text-gray-400 font-[family-name:var(--font-roboto)] leading-relaxed">
                                Para nuestros clientes Flex, el recargo por días de lluvia es reducido. Minimizamos el impacto en tus costos operativos.
                              </p>
                            </div>
                            <div className="flex justify-center md:justify-end">
                               <Button
                                onClick={handleWhatsAppClick}
                                className="bg-secondary hover:bg-secondary/90 text-black font-[family-name:var(--font-orbitron)] font-black px-10 py-6 rounded-2xl transition-all uppercase tracking-tight shadow-[0_0_20px_rgba(251,191,36,0.3)] h-auto text-lg"
                              >
                                <Image src="/icon/icon-whatsapp.svg" alt="WhatsApp Icon" width={24} height={24} className="w-6 h-6 mr-3" />
                                MÁS INFORMACIÓN FLEX
                              </Button>
                            </div>
                         </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
```

## File: src/components/envios-flex/how-it-works.tsx
```typescript
'use client';
import React from 'react';
import { motion } from "framer-motion"
import { PackageSearch, Truck, CheckSquare, Star } from "lucide-react"
export function HowItWorks() {
  const steps = [
    {
      icon: PackageSearch,
      title: "1. Vendes",
      description: "Recibes una venta con Mercado Envios Flex en tu panel de MercadoLibre.",
    },
    {
      icon: Truck,
      title: "2. Retiramos",
      description: "Coordinamos el retiro por tu local o domicilio en el horario de corte pactado.",
    },
    {
      icon: CheckSquare,
      title: "3. Entregamos",
      description: "Nuestra flota distribuye los paquetes en Mar del Plata durante la tarde.",
    },
    {
      icon: Star,
      title: "4. Calificas",
      description: "Tu cliente recibe el paquete en el día y tu reputación sube automáticamente.",
    },
  ]
  return (
    <section className="py-24 px-4 bg-[#0a0d16] relative overflow-hidden">
       <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-slate-900 tracking-tighter">
              LOGÍSTICA <span className="text-primary">SIN FRICCIONES</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
              Integramos tu flujo de ventas con nuestra red de distribución en tiempo real.
            </p>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all group backdrop-blur-sm"
            >
              <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold mb-4 uppercase text-slate-900 tracking-tight">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-roboto)]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

## File: src/components/envios-flex/requirements.tsx
```typescript
'use client';
import React from 'react';
import { motion } from "framer-motion"
import { ShieldCheck, Laptop, PhoneCall, CheckCircle2 } from "lucide-react"
export function Requirements() {
  const requirements = [
    {
      title: "Cuenta MercadoLibre",
      desc: "Tener habilitada la opción de Mercado Envíos Flex en tu cuenta de vendedor.",
      icon: Laptop
    },
    {
      title: "Ubicación",
      desc: "Estar ubicado dentro de las zonas de cobertura para retiro en Mar del Plata.",
      icon: CheckCircle2
    },
    {
      title: "Horario de Corte",
      desc: "Establecer un horario de corte (sugerido 15hs) para procesar tus ventas diarias.",
      icon: PhoneCall
    },
    {
      title: "Suscripción",
      desc: "Alta en nuestra plataforma para el control y liquidación de servicios.",
      icon: ShieldCheck
    }
  ]
  return (
    <section className="py-24 px-4 bg-surface-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-slate-900 tracking-tighter">
              ¿QUÉ <span className="text-primary">NECESITAS?</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
              Requisitos mínimos para empezar a ofrecer envíos Same-Day hoy mismo.
            </p>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all group backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <req.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-bold mb-3 uppercase text-slate-900 tracking-tight">{req.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-roboto)]">{req.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

## File: src/components/express/express-cta.tsx
```typescript
"use client"
import { Button } from "@/components/ui/button"
import { Zap, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
export function ExpressCta() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5492236602699"
    const message = "Necesito un envío express prioritario. ¿Pueden ayudarme?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }
  return (
    <section className="py-24 px-4 bg-surface-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="p-12 md:p-16 rounded-[40px] bg-gradient-to-br from-primary/10 via-[#0a0d16]/80 to-secondary/5 border border-white/10 backdrop-blur-xl relative overflow-hidden text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-32 translate-x-32" />
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-900/50 text-xxs font-bold tracking-[0.3em] mb-10 uppercase">
             PRIORIDAD MÁXIMA <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </div>
          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-6xl font-black italic tracking-tighter leading-tight mb-8 uppercase text-slate-900">
            ¿LISTO PARA TU <br />
            ENVÍO <span className="text-primary">EXPRESS?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
            No esperes más. Nuestro equipo está listo para manejar tu envío prioritario y garantizar que llegue a tiempo. ¡Cada minuto cuenta!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <Link
              href="/cotizar/express"
              className="px-12 py-5 bg-primary hover:bg-primary/90 text-slate-900 font-[family-name:var(--font-orbitron)] font-black rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center gap-3 uppercase tracking-tight h-auto"
            >
              <Zap size={20} /> COTIZAR AHORA
            </Link>
            <Button
              onClick={handleWhatsAppClick}
              className="px-12 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-900 font-[family-name:var(--font-orbitron)] font-bold rounded-2xl transition-all flex items-center gap-3 uppercase tracking-tight h-auto group"
            >
              <Phone size={20} className="text-secondary" />
              WHATSAPP PRIORITARIO
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

## File: src/components/express/urgent-scenarios.tsx
```typescript
'use client';
import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Heart, Briefcase, Gift } from "lucide-react"
import { motion } from "framer-motion"
export function UrgentScenarios() {
  const scenarios = [
    {
      icon: FileText,
      title: "Documentos",
      description: "Contratos, documentos legales, certificados que no pueden esperar.",
      examples: ["Documentos notariales", "Contratos comerciales", "Certificados médicos"],
    },
    {
      icon: Heart,
      title: "Salud",
      description: "Medicamentos, análisis médicos y suministros de salud con prioridad de entrega.",
      examples: ["Medicamentos especiales", "Resultados de laboratorio", "Suministros médicos"],
    },
    {
      icon: Briefcase,
      title: "Negocios",
      description: "Entregas comerciales que no pueden retrasarse sin afectar operaciones.",
      examples: ["Repuestos", "Muestras comerciales", "Productos perecederos"],
    },
    {
      icon: Gift,
      title: "Regalos",
      description: "Regalos y sorpresas que deben llegar en un rango horario acotado",
      examples: ["Regalos de cumpleaños", "Desayunos/Meriendas", "Comida especial"],
    },
  ]
  return (
    <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-slate-900 tracking-tighter">
              ¿CUÁNDO NECESITAS <span className="text-secondary drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">EXPRESS?</span>
            </h2>
            <div className="w-24 h-2 bg-secondary mx-auto mb-8 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
              Situaciones donde cada minuto cuenta y la rapidez es fundamental.
            </p>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {scenarios.map((scenario, index) => {
            const IconComponent = scenario.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-surface-light border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm group hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] transition-all h-full relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="w-14 h-14 bg-secondary/10 border border-secondary/20 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 group-hover:border-secondary/50 transition-transform">
                        <IconComponent className="w-7 h-7 text-secondary group-hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.8)] transition-all" />
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold mb-3 uppercase text-slate-900 tracking-tight">{scenario.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-roboto)]">{scenario.description}</p>
                      </div>
                    </div>
                    <div className="ml-20">
                      <h4 className="font-[family-name:var(--font-orbitron)] text-xs font-bold text-slate-900/50 mb-4 uppercase tracking-widest">Ejemplos comunes:</h4>
                      <ul className="space-y-3 font-[family-name:var(--font-roboto)]">
                        {scenario.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="text-sm text-gray-400 flex items-center">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

## File: src/components/lowcost/lowcost-benefits.tsx
```typescript
'use client';
import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Clock, MapPin, TrendingDown, Users, Globe, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
export function LowcostBenefits() {
  const benefits = [
    {
      icon: Globe,
      title: "Eficiencia en Ruteo",
      description: "Ruteo diario masivo optimizado mediante IA. NO se elige rango horario para maximizar tu rentabilidad.",
    },
    {
      icon: Clock,
      title: "Corte y Entrega (SLA)",
      description: "Ingresá tus pedidos antes de las 13:00 hs y te garantizamos la entrega efectiva en el día, antes de las 19:00 hs.",
    },
    {
      icon: DollarSign,
      title: "Economía y Escala",
      description: "Bajá tus costos fijos y pagá solo por lo que enviás.",
    },
    {
      icon: MapPin,
      title: "Cobertura Total",
      description: "Llegamos a todos los barrios de Mar del Plata con ruteos optimizados.",
    },
    {
      icon: TrendingDown,
      title: "Menos Operatividad",
      description: "Simplificá tus despachos diarios con un esquema de retiro programado.",
    },
    {
      icon: Users,
      title: "Ideal Emprendedores",
      description: "Escalá tu negocio sin preocuparte por los costos fijos de envío.",
    },
  ]
  return (
    <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter">
              BENEFICIOS <span className="text-secondary drop-shadow-[0_0_15px_rgba(255,230,0,0.35)]">LOWCOST</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
              La combinación perfecta entre economía y eficiencia logística para tu negocio.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <Card className="h-full bg-white/5 border-white/10 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all duration-300 group backdrop-blur-md rounded-3xl overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-10 relative">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rotate-45 translate-x-12 -translate-y-12 group-hover:bg-primary/5 transition-colors duration-300" />
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/50 transition-transform relative">
                        <IconComponent className="w-8 h-8 text-primary group-hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)] transition-all" />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-green-500/80 drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                      </motion.div>
                    </div>
                    <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold mb-4 uppercase text-white tracking-tight">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-roboto)]">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

## File: src/components/about/who-we-are.tsx
```typescript
"use client"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
export function WhoWeAre() {
  return (
    <section className="py-16 px-4 bg-[#030710]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-display-md text-secondary mb-6 font-display">Quiénes Somos</h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mb-8 rounded-full"></div>
        </motion.div>
        <div className="space-y-8">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-headline-lg text-foreground leading-relaxed mb-8 font-display italic"
            >
              "Tu aliado confiable en mensajería y delivery en Mar del Plata"
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col items-center justify-center mb-8 p-6 bg-[#0a0d16]/60 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm"
            >
              <div className="flex items-center space-x-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-headline-lg-mobile font-bold text-foreground font-display">4.9 estrellas en Google Reviews</span>
              <p className="text-body-md text-muted-foreground mt-2 font-sans">Basado en la confianza de cientos de clientes locales</p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-body-lg text-muted-foreground leading-relaxed font-sans"
            >
              Envíos DosRuedas se posiciona en el mercado como tu Partner Logístico Especializado. Entendemos que la eficiencia operativa en la entrega es el pilar fundamental de la experiencia del cliente final. Transformamos tu estructura de gasto fijo en soluciones flexibles que acompañan el crecimiento de tu negocio.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 p-8 bg-[#0a0d16]/60 backdrop-blur-md border border-white/10 rounded-xl text-left"
            >
              <h3 className="text-headline-lg text-primary mb-4 font-display uppercase tracking-tight">Nuestra Ventaja Injusta</h3>
              <p className="text-body-lg text-gray-300 leading-relaxed font-sans mb-4">
                En un mercado saturado de apps genéricas, nosotros decidimos ir por el camino de la excelencia territorial. Nuestra "Ventaja Injusta" se basa en tres pilares innegociables:
              </p>
              <ul className="space-y-4 text-body-md text-gray-400 font-sans">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">●</span>
                  <span><strong>Atención Personalizada:</strong> Damos la cara frente a cualquier inconveniente. No sos un ticket, sos un partner.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">●</span>
                  <span><strong>Flota Exclusiva:</strong> Controlamos cada eslabón de la cadena para asegurar puntualidad y seguridad.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">●</span>
                  <span><strong>Cero Tercerización:</strong> No delegamos tu confianza en terceros. Si es DosRuedas, lo hacemos nosotros.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

## File: src/components/entrepreneur/entrepreneur-benefits.tsx
```typescript
'use client';
import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Package, ShieldCheck, CreditCard, BarChart, Truck, Users } from "lucide-react"
import { motion } from "framer-motion"
function SuccessMetrics() {
  const metrics = [
    { label: "Entregas Efectivas", value: "99.8%" },
    { label: "Clientes Corporativos", value: "+150" },
    { label: "SLA Cumplido", value: "100%" },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-center p-8 bg-[#0a0d16]/60 rounded-3xl border border-white/10 backdrop-blur-sm"
        >
          <div className="text-display-md font-black text-primary font-display mb-2 italic">
            {metric.value}
          </div>
          <div className="text-label-sm font-bold uppercase tracking-widest text-gray-500">
            {metric.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
export function EntrepreneurBenefits() {
  const benefits = [
    {
      icon: Truck,
      title: "Partner Logístico Especializado",
      description: "Más que un envío, somos tu depósito. Soluciones de almacenamiento y fulfillment para PyMEs.",
    },
    {
      icon: CreditCard,
      title: "Cuentas Corrientes",
      description: "Esquemas de facturación mensual centralizada adaptados a tu flujo de caja (Factura C disponible).",
    },
    {
      icon: ShieldCheck,
      title: "Límites Claros y Seguros",
      description: "Flota de motos exclusiva. Llevamos bultos de hasta 5 kg (40x40x30 cm). Seguimiento centralizado vía WhatsApp.",
    },
    {
      icon: Package,
      title: "Almacenaje Seguro",
      description: "Contamos con depósitos propios con seguridad para tu mercadería.",
    },
    {
      icon: BarChart,
      title: "Reportes Detallados",
      description: "Métricas claras sobre tus entregas, devoluciones y tiempos promedio.",
    },
    {
      icon: Users,
      title: "Asesor Dedicado",
      description: "Un ejecutivo de cuentas para resolver todas tus dudas operativas.",
    },
  ]
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SuccessMetrics />
            <h2 className="font-display text-display-md font-black italic mb-6 uppercase text-foreground tracking-tighter">
              BENEFICIOS <span className="text-primary">PARA NEGOCIOS</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-body-lg max-w-2xl mx-auto font-sans">
              Potenciamos tu capacidad operativa con soluciones logísticas de clase mundial.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full bg-[#0a0d16]/60 border-white/10 hover:border-primary/30 transition-all group backdrop-blur-sm rounded-3xl overflow-hidden">
                  <CardContent className="p-10 relative">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rotate-45 translate-x-12 -translate-y-12 group-hover:bg-primary/5 transition-colors" />
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-headline-lg font-bold mb-4 uppercase text-foreground tracking-tight">{benefit.title}</h3>
                    <p className="text-gray-400 text-body-md leading-relaxed font-sans">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

## File: src/components/entrepreneur/plan-information.tsx
```typescript
"use client"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
export function PlanInformation() {
  const features = [
    {
      title: "Soluciones 3PL",
      description: "Terceriza tu logística con nosotros. Almacenamos, preparamos y enviamos tus productos.",
    },
    {
      title: "Fulfillment",
      description: "Picking y packing profesional. Tu mercadería segura y lista para salir en minutos.",
    },
    {
      title: "Cuentas Corrientes",
      description: "Esquemas de pago flexibles adaptados al flujo de caja de tu empresa o emprendimiento.",
    },
  ]
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as any, stiffness: 100 } },
  };
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-blue-400 text-label-sm font-bold tracking-widest mb-6 uppercase">
              SOLUCIONES CORPORATIVAS
            </div>
            <h2 className="font-display text-display-lg md:text-[60px] font-black leading-[1] mb-8 uppercase text-foreground tracking-tighter">
              LOGÍSTICA 3PL <br />
              <span className="text-primary italic">PARA EMPRENDEDORES</span>
            </h2>
            <p className="text-gray-400 text-body-lg mb-10 leading-relaxed font-sans max-w-xl">
              Somos más que una empresa de envíos; nos convertimos en tu departamento de logística. Delegá el almacenamiento y la distribución en expertos y enfocate en hacer crecer tu negocio.
            </p>
            {}
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
                    <h3 className="text-headline-lg-mobile font-bold text-foreground mb-2 font-display uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-gray-400 text-body-md leading-relaxed font-sans">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {}
          <motion.div
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            variants={itemVariants}
          >
            <div className="text-center lg:text-right select-none opacity-20">
              <div className="space-y-2">
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-foreground font-display tracking-tighter leading-none">
                  CORE
                </div>
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-primary font-display tracking-tighter leading-none">
                  BUSINESS
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

## File: src/components/envios-flex/mercadolibre-benefits.tsx
```typescript
'use client';
import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, ShieldCheck, Clock, MapPin, Smartphone, UserCheck } from "lucide-react"
import { motion } from "framer-motion"
function ReputationThermometer() {
  return (
    <div className="max-w-md mx-auto mb-12">
      <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
        <span>Reputación</span>
        <span className="text-green-500">MercadoLíder Platinum</span>
      </div>
      <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 flex">
        <div className="h-full w-1/5 bg-red-500/50" />
        <div className="h-full w-1/5 bg-orange-500/50" />
        <div className="h-full w-1/5 bg-yellow-500/50" />
        <div className="h-full w-1/5 bg-lime-500/50" />
        <motion.div
          className="h-full w-1/5 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]"
          initial={{ width: 0 }}
          whileInView={{ width: '20%' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
export function MercadoLibreBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Corte 15:00 hs",
      description: "Despachá tus ventas hasta las 15:00 hs para entrega garantizada en el mismo día.",
    },
    {
      icon: ShieldCheck,
      title: "Reputación Intacta",
      description: "Cumplimos el 100% de tus acuerdos de nivel de servicio (SLAs) para que mantengas tu estatus de MercadoLíder.",
    },
    {
      icon: TrendingUp,
      title: "Devoluciones sin cargo",
      description: "Si el comprador rechaza el producto en domicilio, la devolución a tu local es totalmente SIN CARGO.",
    },
    {
      icon: MapPin,
      title: "Cobertura MDP",
      description: "Cubrimos todas las zonas habilitadas por MercadoLibre Flex en Mar del Plata.",
    },
    {
      icon: Smartphone,
      title: "App de Control",
      description: "Gestioná y monitoreá tus despachos desde nuestra plataforma exclusiva.",
    },
    {
      icon: UserCheck,
      title: "Choferes Calificados",
      description: "Personal capacitado para brindar la mejor experiencia de entrega a tus clientes.",
    },
  ]
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFF159]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ReputationThermometer />
            <h2 className="font-display text-display-md font-black italic mb-6 uppercase text-foreground tracking-tighter">
              BENEFICIOS <span className="text-[#FFF159]">PARA VENDEDORES</span>
            </h2>
            <div className="w-24 h-2 bg-[#FFF159] mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-body-lg max-w-2xl mx-auto font-sans">
              La solución definitiva para llevar tu tienda de MercadoLibre al siguiente nivel de competitividad.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full bg-[#0a0d16]/60 border-white/10 hover:border-[#FFF159]/50 transition-all group backdrop-blur-sm rounded-3xl overflow-hidden relative">
                   <div className="absolute top-0 left-0 w-full h-1 bg-[#FFF159] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-10 relative">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rotate-45 translate-x-12 -translate-y-12 group-hover:bg-[#FFF159]/5 transition-colors" />
                    <div className="w-16 h-16 rounded-2xl bg-[#FFF159]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative">
                      <IconComponent className="w-8 h-8 text-[#FFF159]" />
                    </div>
                    <h3 className="font-display text-headline-lg font-bold mb-4 uppercase text-foreground tracking-tight">{benefit.title}</h3>
                    <p className="text-gray-400 text-body-md leading-relaxed font-sans">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

## File: src/components/express/express-benefits.tsx
```typescript
'use client';
import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, MapPin, Phone, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"
function UrgencyClock() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      <div className="absolute inset-0 border-4 border-secondary/20 rounded-full" />
      <motion.div
        className="absolute top-1/2 left-1/2 w-1 h-12 bg-secondary origin-bottom -translate-x-1/2 -translate-y-full rounded-full shadow-[0_0_15px_rgba(234,179,8,0.8)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-1 h-8 bg-white origin-bottom -translate-x-1/2 -translate-y-full rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg" />
      <div className="absolute inset-0 border-t-4 border-secondary rounded-full animate-spin-slow opacity-50" />
    </div>
  )
}
export function ExpressBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Alta criticidad horaria",
      description: "Diseñado para cuando el tiempo es el factor crítico. Vos elegís el límite de entrega (ej. \"antes de las 17:00 hs\").",
    },
    {
      icon: Zap,
      title: "Anticipación mínima",
      description: "Solo requerimos 2 horas de anticipación para garantizar la viabilidad del ruteo exclusivo.",
    },
    {
      icon: Award,
      title: "Certeza Absoluta",
      description: "Precisión garantizada en el tiempo de tu cliente final.",
    },
    {
      icon: MapPin,
      title: "Seguimiento en Tiempo Real",
      description: "Monitoreá tu envío en vivo desde la recolección hasta la entrega final.",
    },
    {
      icon: Phone,
      title: "Soporte Prioritario",
      description: "Línea directa de atención para clientes express con respuesta inmediata.",
    },
  ]
  return (
    <section className="py-24 px-4 bg-[#030710] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <UrgencyClock />
            <h2 className="font-display text-display-md font-black italic mb-6 uppercase text-foreground tracking-tighter">
              ¿POR QUÉ <span className="text-secondary drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">ELEGIR EXPRESS?</span>
            </h2>
            <div className="w-24 h-2 bg-secondary mx-auto mb-8 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
            <p className="text-gray-400 text-body-lg max-w-2xl mx-auto font-sans">
              Descubrí todas las ventajas de nuestro servicio premium de entregas rápidas.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <Card className="h-full bg-[#0a0d16]/60 border-white/10 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] transition-all duration-300 group backdrop-blur-sm rounded-3xl overflow-hidden relative">
                   <div className="absolute top-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-10 relative">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rotate-45 translate-x-12 -translate-y-12 group-hover:bg-secondary/5 transition-colors duration-300" />
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative border border-secondary/20 group-hover:border-secondary/50">
                      <IconComponent className="w-8 h-8 text-secondary group-hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.8)] transition-all" />
                    </div>
                    <h3 className="font-display text-headline-lg font-bold mb-4 uppercase text-foreground tracking-tight">{benefit.title}</h3>
                    <p className="text-gray-400 text-body-md leading-relaxed font-sans">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

## File: src/components/lowcost/how-lowcost-works.tsx
```typescript
'use client';
import React from 'react';
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
export function HowLowcostWorks() {
  const steps = [
    {
      title: "1. Despacho",
      description: "Prepara tus pedidos y cárgalos en nuestro sistema antes del horario de corte.",
    },
    {
      title: "2. Recolección",
      description: "Nuestro equipo retira todos tus paquetes en una sola visita a tu local o depósito.",
    },
    {
      title: "3. Ruteo",
      description: "Utilizamos algoritmos de IA para trazar la ruta más corta y eficiente.",
    },
    {
      title: "4. Entrega",
      description: "Entregamos todos los paquetes en el transcurso del día antes de las 19:00 hs.",
    },
  ]
  return (
    <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
       <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter">
              ¿CÓMO <span className="text-secondary drop-shadow-[0_0_15px_rgba(255,230,0,0.35)]">FUNCIONA?</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
              Un proceso simple y transparente diseñado para maximizar tu productividad.
            </p>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-surface-light border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-3xl" />
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 border border-primary/40 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                 <CheckCircle2 className="w-6 h-6 text-primary group-hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)] transition-all" />
              </div>
              <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold mb-4 uppercase text-white tracking-tight">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-roboto)]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

## File: src/components/lowcost/lowcost-content.tsx
```typescript
"use client"
import { Button } from "@/components/ui/button"
import { DollarSign, Calendar, BarChart3, Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
export function LowcostContent() {
  const features = [
    {
      icon: BarChart3,
      title: "Eficiencia en Ruteo",
      description: "Ruteo diario masivo optimizado. NO se elige rango horario para maximizar eficiencia.",
    },
    {
      icon: Calendar,
      title: "Corte y Entrega",
      description: "Pedidos antes de las 13:00 hs se entregan garantizados antes de las 19:00 hs.",
    },
    {
      icon: DollarSign,
      title: "Tarifa Económica",
      description: "La mejor tarifa de Mar del Plata para envíos masivos y ruteos diarios.",
    },
  ]
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as any, stiffness: 100 } },
  };
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {}
          <motion.div
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <div className="text-center lg:text-left select-none opacity-20">
              <div className="space-y-2">
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-foreground font-display tracking-tighter leading-none">
                  ENVIOS
                </div>
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-primary font-display tracking-tighter leading-none">
                  LOWCOST
                </div>
              </div>
            </div>
          </motion.div>
          {}
          <motion.div className="order-1 lg:order-2" variants={itemVariants}>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-blue-400 text-label-sm font-bold tracking-widest mb-6 uppercase">
              MÁXIMA RENTABILIDAD
            </div>
            <h2 className="font-display text-display-lg md:text-[60px] font-black leading-[1] mb-8 uppercase text-foreground tracking-tighter">
              ENVÍOS LOWCOST: <br />
              <span className="text-primary italic">MÁXIMA EFICIENCIA</span>
            </h2>
            <p className="text-gray-400 text-body-lg mb-10 leading-relaxed font-sans max-w-xl">
              Nuestro servicio LowCost está diseñado para el ruteo diario masivo. Optimizamos nuestras rutas para ofrecer la tarifa más competitiva, garantizando la entrega en el día para pedidos ingresados antes del horario de corte.
            </p>
            {}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 mt-1">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-headline-lg-mobile font-bold text-foreground mb-2 font-display uppercase tracking-tight">{feature.title}</h3>
                      <p className="text-gray-400 text-body-md leading-relaxed font-sans">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
            {}
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-yellow-400 text-black font-display font-black px-10 py-5 rounded-xl transition-all uppercase tracking-tight shadow-[0_0_20px_rgba(251,191,36,0.3)] h-auto text-label-md"
            >
              <Link href="/cotizar/lowcost">Cotizá tu Envío Low Cost</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

## File: src/components/lowcost/lowcost-cta.tsx
```typescript
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calculator, ArrowRight } from 'lucide-react';
import Link from 'next/link';
export function LowcostCta() {
  return (
    <section className="py-24 px-4 bg-surface-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="p-12 md:p-16 rounded-[40px] bg-gradient-to-br from-primary/10 via-[#0a0d16]/80 to-secondary/5 border border-white/10 backdrop-blur-xl relative overflow-hidden text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-32 translate-x-32" />
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 text-xxs font-bold tracking-[0.3em] mb-10 uppercase">
             ECONOMÍA Y ESCALA <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          </div>
          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-6xl font-black italic tracking-tighter leading-tight mb-8 uppercase text-white">
            ¿LISTO PARA BAJAR TUS <br />
            COSTOS <span className="text-secondary drop-shadow-[0_0_15px_rgba(255,230,0,0.2)]">LOGÍSTICOS?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
            Empieza hoy mismo a enviar de forma inteligente. Súmate a la flota con mayor eficiencia de Mar del Plata.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <Link
              href="/cotizar/lowcost"
              className="px-12 py-5 bg-secondary hover:bg-yellow-400 text-black font-[family-name:var(--font-orbitron)] font-black rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,230,0,0.2)] flex items-center gap-3 uppercase tracking-tight h-auto"
            >
              <Calculator size={20} /> COTIZAR ENVÍO
            </Link>
            <a
              href="tel:+5492236602699"
              className="px-12 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-[family-name:var(--font-orbitron)] font-bold rounded-2xl transition-all flex items-center gap-3 uppercase tracking-tight group h-auto"
            >
              <Phone size={20} className="text-secondary" />
              CONTACTAR ASESOR
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

## File: src/components/lowcost/pricing-comparison.tsx
```typescript
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PriceRange } from '../../../generated/prisma/client/client';
export type PriceRangeClient = Omit<PriceRange, 'distanciaMinKm' | 'distanciaMaxKm' | 'precioRango'> & {
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
  nombreZona?: string;
};
interface PricingComparisonProps {
  priceRanges: PriceRangeClient[];
}
export function PricingComparison({ priceRanges }: PricingComparisonProps) {
  const displayedPriceRanges = priceRanges.slice(0, 4);
  const staticData = [
    {
      description: "La mejor tarifa para ruteo en el centro",
      features: ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"],
    },
    {
      description: "Cobertura extendida económica",
      features: ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"],
    },
    {
      description: "Llegamos a toda la ciudad al mejor costo",
      features: ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"],
    },
    {
      description: "Máximo ahorro en distancias largas",
      features: ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"],
    },
  ];
  const handleWhatsAppClick = () => {
    const phoneNumber = "5492236602699";
    const message = "Hola, necesito cotizar un envío Low Cost de más de 13 km.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <section id="pricing-comparison" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-display-md font-black italic mb-6 uppercase text-foreground tracking-tighter">
              TARIFAS 2026 <span className="text-primary">ENVÍOS LOWCOST</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-body-lg max-w-2xl mx-auto font-sans">
              Eficiencia en ruteo masivo. Garantizamos entregas antes de las 19:00 hs para pedidos antes de las 13:00 hs.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedPriceRanges.map((range, index) => (
            <motion.div
              key={range.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative bg-[#0a0d16]/60 border-white/10 backdrop-blur-md hover:border-primary/50 transition-all duration-300 rounded-3xl overflow-hidden h-full flex flex-col group">
                <Badge className="absolute top-4 right-4 bg-primary/20 text-primary border-primary/30 py-1 px-3 rounded-full text-xxs font-bold uppercase tracking-widest">
                  Tarifa 2026
                </Badge>
                <CardHeader className="text-center pt-12 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-display text-headline-lg font-bold text-foreground uppercase tracking-tight">
                    {range.nombreZona || `Zona ${index + 1}`}
                  </CardTitle>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">
                    {index === 0 ? "Radio céntrico" : index === 1 ? "Periferia cercana" : index === 2 ? "Zonas alejadas" : "Límites de ciudad"}
                  </p>
                  <div className="text-4xl font-black text-foreground mt-6 font-display italic tracking-tighter">
                    ${range.precioRango.toLocaleString('es-AR')}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pb-12">
                  <p className="text-gray-400 mb-8 text-center text-body-md font-sans leading-relaxed">
                    {staticData[index]?.description || "Eficiencia en ruteo masivo"}
                  </p>
                  <ul className="space-y-4 font-sans">
                    {(staticData[index]?.features || ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"]).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-body-md">
                        <ArrowRightCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-12"
        >
          <Card className="bg-[#0a0d16]/60 border-white/10 backdrop-blur-md rounded-3xl overflow-hidden p-8 md:p-12">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-label-sm font-bold tracking-widest mb-6 uppercase">
                    COTIZACIÓN ESPECIAL
                  </div>
                  <h3 className="font-display text-display-md font-black text-foreground uppercase tracking-tighter mb-4 italic">
                    ZONA 5: <span className="text-secondary">$700 / KM</span>
                  </h3>
                  <p className="text-gray-400 font-sans leading-relaxed text-body-lg">
                    Para envíos de larga distancia fuera del ejido urbano masivo, ofrecemos la tarifa más competitiva por kilómetro.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                   <Button
                    onClick={handleWhatsAppClick}
                    className="bg-secondary hover:bg-yellow-400 text-black font-display font-black px-10 py-6 rounded-xl transition-all uppercase tracking-tight shadow-[0_0_20px_rgba(251,191,36,0.3)] h-auto text-label-md"
                  >
                    <Image src="/icon/icon-whatsapp.svg" alt="WhatsApp Icon" width={24} height={24} className="w-6 h-6 mr-3" />
                    CONSULTAR POR WHATSAPP
                  </Button>
                </div>
             </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
```

## File: src/app/servicios/envios-lowcost/page.tsx
```typescript
import { OptimizedHeader } from "@/components/homenew/optimized-header"
import { LowcostHero } from "@/components/lowcost/lowcost-hero"
import { LowcostContent } from "@/components/lowcost/lowcost-content"
import { PricingComparison } from "@/components/lowcost/pricing-comparison"
import { LowcostBenefits } from "@/components/lowcost/lowcost-benefits"
import { HowLowcostWorks } from "@/components/lowcost/how-lowcost-works"
import { LowcostCta } from "@/components/lowcost/lowcost-cta"
import { CarruselRedes } from "@/components/homenew/carrusel-redes"
import { Footer } from "@/components/homenew/footer"
import type { Metadata } from "next"
import prisma from "@/lib/prisma";
import { ServiceTypeEnum } from '../../../../generated/prisma/client/client';
import type { PriceRangeClient } from "@/components/lowcost/pricing-comparison";
export const metadata: Metadata = {
  title: "Envíos LowCost en Mar del Plata | Distribución de Paquetería",
  description: "Envíos masivos programados para comercios en Mar del Plata. La tarifa más económica en distribución local de paquetería con logística inteligente.",
  alternates: { canonical: 'https://www.enviosdosruedas.com/servicios/envios-lowcost' },
  openGraph: {
    title: "Envíos LowCost en Mar del Plata | Distribución de Paquetería",
    description: "Envíos masivos programados para comercios en Mar del Plata. La tarifa más económica en distribución local de paquetería con logística inteligente.",
    url: 'https://www.enviosdosruedas.com/servicios/envios-lowcost',
    images: [{ url: '/og-image.jpg' }],
  },
}
export const revalidate = 0;
async function getPriceRanges(): Promise<PriceRangeClient[]> {
  try {
    const priceRanges = await prisma.priceRange.findMany({
      where: {
        serviceType: ServiceTypeEnum.LOW_COST,
        isActive: true,
      },
      orderBy: {
        distanciaMinKm: 'asc',
      },
    });
    return priceRanges.map(pr => ({
      ...pr,
      distanciaMinKm: pr.distanciaMinKm.toNumber(),
      distanciaMaxKm: pr.distanciaMaxKm.toNumber(),
      precioRango: pr.precioRango.toNumber(),
    }));
  } catch (error) {
    console.error("Error fetching low-cost price ranges:", error);
    return [];
  }
}
export default async function EnviosLowCostPage() {
  const priceRanges = await getPriceRanges();
  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <OptimizedHeader />
      <main>
        <LowcostHero />
        <LowcostContent />
        <PricingComparison priceRanges={priceRanges} />
        <LowcostBenefits />
        <HowLowcostWorks />
        <LowcostCta />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  )
}
```

## File: src/components/contact/contact-info.tsx
```typescript
"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Home, Mail, Share2 as Facebook, Camera as Instagram } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import type React from 'react';
import { cn } from "@/lib/utils"
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.4,
      ease: "easeOut" as any,
    },
  }),
};
interface ContactMethod {
  icon: React.ElementType | null;
  title: string;
  description: string;
  actionText: string;
  href?: string;
  onClick?: () => void;
  colorClasses: string;
  iconBg: string;
  iconColor: string;
}
export function ContactInfo() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5492236602699"
    const message = "Hola, me gustaría obtener información sobre sus servicios de envío."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }
  const contactMethods: ContactMethod[] = [
    {
      icon: Mail,
      title: "Email",
      description: "Para consultas detalladas o corporativas.",
      actionText: "Enviar Email",
      href: "mailto:matiascejas@enviosdosruedas.com",
      colorClasses: "border-secondary text-secondary hover:bg-secondary hover:text-primary",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
    },
    {
      icon: Facebook,
      title: "Facebook",
      description: "Síguenos para novedades y promociones.",
      actionText: "Ir a Facebook",
      href: "https://facebook.com/enviosdosruedas",
      colorClasses: "border-primary text-primary hover:bg-primary hover:text-[#0a0d16]",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Mira nuestro día a día y ofertas visuales.",
      actionText: "Ir a Instagram",
      href: "https://instagram.com/enviosdosruedas",
      colorClasses: "border-white text-white hover:bg-white hover:text-black",
      iconBg: "bg-white/10",
      iconColor: "text-white",
    },
  ];
  return (
    <section className="py-12 md:py-16 px-4 bg-transparent">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <Card className="mb-8 sm:mb-10 shadow-2xl border border-white/10 backdrop-blur-md bg-[#0a0d16]/60 hover:border-primary/30 transition-all duration-500 rounded-none">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                    <Home className="w-7 h-7 sm:w-8 sm:h-8 text-primary mr-2 sm:mr-3" />
                    <h2 className="text-headline-lg-mobile sm:text-headline-lg md:text-display-md font-bold text-primary font-display uppercase tracking-wider mb-2">Envios DosRuedas</h2>
                </div>
                <p className="text-label-md text-gray-400 mb-4 sm:mb-6 uppercase">Mensajería y Delivery</p>
                <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 gap-2 sm:gap-3">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  <span className="text-headline-lg-mobile sm:text-headline-lg md:text-display-md font-bold text-white font-display tracking-wider">223-660-2699</span>
                </div>
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-[#25D366] hover:bg-[#25D366]/90 text-slate-900 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-bold font-bebas tracking-wider rounded-none shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105 uppercase text-lg h-auto"
                >
                  <Image src="/icon/icon-whatsapp.svg" alt="WhatsApp Icon" width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Contactar por WhatsApp
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          {}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={method.title}
                  custom={index + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                >
                  <Card className="hover:shadow-2xl hover:-translate-y-1.5 h-full flex flex-col border border-white/10 bg-[#0a0d16]/60 backdrop-blur-md hover:border-primary/30 rounded-none transition-all duration-500">
                    <CardContent className="p-6 text-center flex flex-col items-center flex-grow">
                      <div className={cn("w-14 h-14 sm:w-16 sm:h-16 rounded-none flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300", method.iconBg)}>
                        {IconComponent && <IconComponent className={cn("w-7 h-7 sm:w-8 sm:h-8", method.iconColor)} />}
                      </div>
                      <h3 className="text-headline-lg font-bold text-white mb-2 uppercase">{method.title}</h3>
                      <p className="text-body-md text-gray-400 mb-6 flex-grow">{method.description}</p>
                      <Button
                        onClick={method.onClick}
                        asChild={!!method.href}
                        variant="outline"
                        size="sm"
                        className={cn("mt-auto transition-all duration-300 w-full text-sm font-bebas font-bold tracking-wider rounded-none uppercase py-2.5", method.colorClasses)}
                      >
                        {method.href ? (
                          <a href={method.href} target={method.href.startsWith("mailto:") ? "_self" : "_blank"} rel="noopener noreferrer">
                            {method.actionText}
                          </a>
                        ) : (
                          <span>{method.actionText}</span>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
```

## File: src/components/envios-flex/envios-flex-content.tsx
```typescript
"use client"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
export function EnviosFlexContent() {
  const features = [
    {
      title: "Reputación Garantizada",
      description: "Cumplimos con los estrictos horarios de MercadoLibre para que tu medidor de reputación siempre esté en verde.",
    },
    {
      title: "Corte 15:00 hs",
      description: "Garantizamos Cobertura MDP y Envíos Same-Day Mar del Plata recibiendo pedidos hasta las 15:00 hs.",
    },
    {
      title: "Seguimiento App",
      description: "Notificaciones en tiempo real y confirmación de entrega digital para cada paquete.",
    },
  ]
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as any, stiffness: 100 } },
  };
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFF159]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF159]/10 border border-[#FFF159]/20 text-[#FFF159] text-label-sm font-bold tracking-widest mb-6 uppercase">
              MERCADOLIBRE EXPERTS
            </div>
            <h2 className="font-display text-display-lg md:text-[60px] font-black leading-[1] mb-8 uppercase text-foreground tracking-tighter">
              DOMINÁ TUS VENTAS <br />
              <span className="text-[#FFF159] italic">CON ENVÍOS FLEX</span>
            </h2>
            <p className="text-gray-400 text-body-lg mb-10 leading-relaxed font-sans max-w-xl">
              Somos el aliado estratégico para vendedores de MercadoLibre con Cobertura MDP total. Optimizamos tus Envíos Same-Day Mar del Plata para que vos solo te preocupes por vender más.
            </p>
            {}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  custom={index}
                  variants={itemVariants}
                >
                  <div className="w-6 h-6 bg-[#FFF159]/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 border border-[#FFF159]/30">
                    <Check className="w-3.5 h-3.5 text-[#FFF159]" />
                  </div>
                  <div>
                    <h3 className="text-headline-lg-mobile font-bold text-foreground mb-2 font-display uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-gray-400 text-body-md leading-relaxed font-sans">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {}
          <motion.div
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            variants={itemVariants}
          >
            <div className="text-center lg:text-right select-none opacity-20">
              <div className="space-y-2">
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-foreground font-display tracking-tighter leading-none">
                  FLEX
                </div>
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-[#FFF159] font-display tracking-tighter leading-none">
                  SAME-DAY
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

## File: src/components/express/express-pricing-ranges.tsx
```typescript
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRightCircle, Calculator, AlertTriangle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PriceRange } from '../../../generated/prisma/client/client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export type PriceRangeClient = Omit<PriceRange, 'distanciaMinKm' | 'distanciaMaxKm' | 'precioRango'> & {
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
  nombreZona?: string;
};
interface ExpressPricingRangesProps {
  priceRanges: PriceRangeClient[];
}
export function ExpressPricingRanges({ priceRanges }: ExpressPricingRangesProps) {
  const displayedPriceRanges = priceRanges.slice(0, 4);
  const staticData = [
    {
      description: "Ideal para entregas inmediatas en el centro",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
    },
    {
      description: "Cobertura extendida con rapidez",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
    },
    {
      description: "Llegamos a donde otros no",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
    },
    {
      description: "Máxima cobertura urbana",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
    },
  ];
  return (
    <section className="py-32 px-4 bg-background relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-display-lg md:text-[60px] font-black italic mb-6 uppercase text-foreground tracking-tighter">
              TARIFAS 2026 <span className="text-primary">ENVÍOS EXPRESS</span>
            </h2>
            <div className="w-32 h-1.5 bg-primary mx-auto mb-8" />
            <p className="text-gray-400 text-body-lg max-w-2xl mx-auto font-sans">
              Consultá los precios actualizados para nuestro servicio premium con rango horario a elección.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {displayedPriceRanges.map((range, index) => (
            <motion.div
              key={range.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative bg-[#0a0d16]/60 border-white/10 hover:border-primary/50 transition-all duration-300 rounded-3xl overflow-hidden h-full flex flex-col group shadow-xl">
                <Badge className="absolute top-0 right-0 bg-primary text-slate-900 border-none py-1 px-4 rounded-none text-xxs font-bold uppercase tracking-widest">
                  Tarifa 2026
                </Badge>
                <CardHeader className="text-center pt-16 pb-8">
                  <div className="w-16 h-16 bg-slate-800 rounded-none flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors border border-slate-700">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-headline-lg font-bold text-foreground uppercase tracking-tight">
                    {range.nombreZona || `Zona ${index + 1}`}
                  </h3>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest mt-2">
                    {index === 0 ? "Radio céntrico" : index === 1 ? "Periferia cercana" : index === 2 ? "Zonas alejadas" : "Límites de ciudad"}
                  </p>
                  <div className="text-5xl font-black text-foreground mt-8 font-display italic tracking-tighter">
                    ${range.precioRango.toLocaleString('es-AR')}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pb-12 px-8">
                  <p className="text-gray-400 mb-10 text-center text-body-md font-sans leading-relaxed">
                    {staticData[index]?.description || "Servicio premium garantizado"}
                  </p>
                  <ul className="space-y-5 font-sans">
                    {(staticData[index]?.features || ["Elegís rango horario", "Seguimiento real"]).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-24 space-y-12">
          {}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#0a0d16]/60 border border-white/10 rounded-3xl overflow-hidden p-8 md:p-16 shadow-2xl relative">
               <div className="grid lg:grid-cols-3 gap-12 items-center">
                  <div className="lg:col-span-2">
                    <div className="inline-flex items-center gap-2 px-4 py-1 bg-secondary text-black text-xxs font-bold tracking-widest mb-6 uppercase">
                      COTIZACIÓN DINÁMICA
                    </div>
                    <h3 className="font-display text-display-md font-black text-foreground uppercase tracking-tighter mb-6 italic">
                      ZONA 5: <span className="text-secondary">$1.000 / KM</span>
                    </h3>
                    <p className="text-gray-400 font-sans text-body-lg leading-relaxed max-w-3xl">
                      Para envíos de larga distancia fuera del ejido urbano o una cotización precisa con mapa, utilizá nuestro cotizador inteligente de alta precisión.
                    </p>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                     <Button
                      asChild
                      size="lg"
                      className="bg-secondary hover:bg-yellow-400 text-black font-display font-bold px-12 py-8 rounded-xl transition-all uppercase tracking-tight h-auto text-label-md shadow-lg"
                    >
                      <Link href="/cotizar/express">
                        <Calculator className="w-6 h-6 mr-3" />
                        IR AL COTIZADOR
                      </Link>
                    </Button>
                  </div>
               </div>
            </div>
          </motion.div>
          {}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
               <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
               </div>
               <h4 className="font-display font-bold text-foreground text-headline-lg uppercase tracking-tight">Condiciones del Servicio Express</h4>
            </div>
            <Accordion type="single" collapsible className="w-full bg-[#0a0d16]/60 border border-white/10 rounded-xl overflow-hidden">
              <AccordionItem value="item-1" className="border-white/10 px-6">
                <AccordionTrigger className="text-foreground hover:no-underline font-sans uppercase text-sm font-bold tracking-wider">
                  Tiempos y Tolerancia
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 font-sans leading-relaxed pb-6 text-body-md">
                  Contamos con una tolerancia de 10 minutos en puerta. Es fundamental que el receptor esté disponible para asegurar la eficiencia del servicio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-white/10 px-6">
                <AccordionTrigger className="text-foreground hover:no-underline font-sans uppercase text-sm font-bold tracking-wider">
                  Recargos por Clima
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 font-sans leading-relaxed pb-6 text-body-md">
                  En días de lluvia, se aplica un recargo del 50% sobre el valor del envío para garantizar la seguridad de nuestros repartidores y la protección de tu carga.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-white/10 px-6">
                <AccordionTrigger className="text-foreground hover:no-underline font-sans uppercase text-sm font-bold tracking-wider">
                  Bultos y Pesos
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 font-sans leading-relaxed pb-6 text-body-md">
                  El servicio estándar incluye un bulto de hasta 5kg/40cm. Cada bulto excedente tiene un costo adicional de $1.800.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-white/10 px-6 last:border-0">
                <AccordionTrigger className="text-foreground hover:no-underline font-sans uppercase text-sm font-bold tracking-wider">
                  Anticipación Requerida
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 font-sans leading-relaxed pb-6 text-body-md">
                  Para coordinar un envío express con éxito, solicitamos una anticipación mínima de 2 horas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

## File: package.json
```json
{
	"name": "nextn",
	"version": "0.1.0",
	"private": true,
	"type": "module",
	"scripts": {
		"dev": "next dev --turbopack",
		"build": "next build",
		"start": "next start",
		"lint": "eslint",
		"genkit:dev": "genkit start -- tsx src/ai/dev.ts",
		"genkit:watch": "genkit start -- tsx --watch src/ai/dev.ts",
		"format": "pnpm dlx @biomejs/biome format --write",
		"postinstall": "prisma generate",
		"db:push": "prisma db push",
		"db:seed": "pnpm dlx tsx prisma/seed.ts",
		"db:export": "pnpm dlx tsx prisma/script/bajartodo.ts",
		"db:import": "pnpm dlx tsx prisma/script/subirtodo.ts",
		"clean": "rm -rf .next node_modules bun.lockb pnpm-lock.yaml",
		"reinstall": "pnpm run clean && pnpm install",
		"build:clean": "pnpm run clean && pnpm run build",
		"typecheck": "tsc --noEmit",
		"test:e2e": "playwright test",
		"test:e2e:ui": "playwright test --ui",
		"test:e2e:debug": "playwright test --debug",
		"test:e2e:report": "playwright show-report"
	},
	"dependencies": {
		"@genkit-ai/google-genai": "^1.37.0",
		"@hookform/resolvers": "^4.1.3",
		"@paper-design/shaders-react": "^0.0.76",
		"@prisma/adapter-pg": "^7.8.0",
		"@prisma/client": "^7.8.0",
		"@prisma/extension-accelerate": "*",
		"@radix-ui/react-accordion": "^1.2.14",
		"@radix-ui/react-alert-dialog": "^1.1.17",
		"@radix-ui/react-aspect-ratio": "*",
		"@radix-ui/react-avatar": "^1.2.0",
		"@radix-ui/react-checkbox": "^1.3.5",
		"@radix-ui/react-collapsible": "^1.1.14",
		"@radix-ui/react-context-menu": "*",
		"@radix-ui/react-dialog": "^1.1.17",
		"@radix-ui/react-dropdown-menu": "^2.1.18",
		"@radix-ui/react-hover-card": "*",
		"@radix-ui/react-label": "^2.1.10",
		"@radix-ui/react-menubar": "^1.1.18",
		"@radix-ui/react-navigation-menu": "*",
		"@radix-ui/react-popover": "^1.1.17",
		"@radix-ui/react-progress": "^1.1.10",
		"@radix-ui/react-radio-group": "^1.4.1",
		"@radix-ui/react-scroll-area": "^1.2.12",
		"@radix-ui/react-select": "^2.3.1",
		"@radix-ui/react-separator": "^1.1.10",
		"@radix-ui/react-slider": "^1.4.1",
		"@radix-ui/react-slot": "^1.3.0",
		"@radix-ui/react-switch": "^1.3.1",
		"@radix-ui/react-tabs": "^1.1.15",
		"@radix-ui/react-toast": "^1.2.17",
		"@radix-ui/react-toggle": "*",
		"@radix-ui/react-toggle-group": "*",
		"@radix-ui/react-tooltip": "^1.2.10",
		"class-variance-authority": "^0.7.1",
		"clsx": "^2.1.1",
		"cmdk": "*",
		"date-fns": "^3.6.0",
		"dotenv": "^16.6.1",
		"embla-carousel-react": "^8.6.0",
		"firebase": "^11.10.0",
		"framer-motion": "^12.40.0",
		"genkit": "^1.37.0",
		"input-otp": "*",
		"leaflet": "*",
		"lucide-react": "^0.475.0",
		"motion": "^12.40.0",
		"next": "15.5.9",
		"next-themes": "*",
		"patch-package": "^8.0.1",
		"pg": "^8.22.0",
		"react": "^19.2.7",
		"react-day-picker": "^9.14.0",
		"react-dom": "^19.2.7",
		"react-hook-form": "^7.80.0",
		"react-leaflet": "*",
		"react-resizable-panels": "*",
		"react-zxing": "*",
		"recharts": "^2.15.4",
		"sonner": "*",
		"tailwind-merge": "^3.6.0",
		"tailwindcss-animate": "^1.0.7",
		"three": "*",
		"vaul": "*",
		"zod": "^3.25.76"
	},
	"devDependencies": {
		"@next/eslint-plugin-next": "^16.2.9",
		"@playwright/test": "^1.50.0",
		"@types/leaflet": "*",
		"@types/node": "^20.19.43",
		"@types/pg": "^8.20.0",
		"@types/react": "^19.2.17",
		"@types/react-dom": "^19.2.3",
		"@types/three": "*",
		"eslint": "^10.5.0",
		"eslint-config-next": "15.5.9",
		"genkit-cli": "^1.37.0",
		"postcss": "^8.5.15",
		"prisma": "^7.8.0",
		"tailwindcss": "^3.4.19",
		"typescript": "^5.9.3"
	}
}
```

## File: src/app/servicios/envios-express/page.tsx
```typescript
import type { Metadata } from "next";
import { OptimizedHeader } from "@/components/homenew/optimized-header";
import { CarruselRedes } from "@/components/homenew/carrusel-redes";
import { Footer } from "@/components/homenew/footer";
import { ExpressPageClient } from "@/components/express/express-page-client";
import prisma from "@/lib/prisma";
import { ServiceTypeEnum } from '../../../../generated/prisma/client/client';
import type { PriceRangeClient } from "@/components/express/express-pricing-ranges";
export const metadata: Metadata = {
  title: "Envíos Express y Cadetería en Mar del Plata | Entrega en 2hs",
  description: "Mensajería urbana instantánea y cadetería en moto en Mar del Plata. Entregas urgentes en menos de 2 horas con seguimiento en tiempo real y seguridad.",
  alternates: { canonical: 'https://www.enviosdosruedas.com/servicios/envios-express' },
  openGraph: {
    title: "Envíos Express y Cadetería en Mar del Plata | Entrega en 2hs",
    description: "Mensajería urbana instantánea y cadetería en moto en Mar del Plata. Entregas urgentes en menos de 2 horas con seguimiento en tiempo real y seguridad.",
    url: 'https://www.enviosdosruedas.com/servicios/envios-express',
    images: [{ url: '/og-image.jpg' }],
  },
};
export const revalidate = 0;
async function getPriceRanges(): Promise<PriceRangeClient[]> {
  try {
    const priceRanges = await prisma.priceRange.findMany({
      where: {
        serviceType: ServiceTypeEnum.EXPRESS,
        isActive: true,
      },
      orderBy: {
        distanciaMinKm: 'asc',
      },
    });
    return priceRanges.map(pr => ({
      ...pr,
      distanciaMinKm: pr.distanciaMinKm.toNumber(),
      distanciaMaxKm: pr.distanciaMaxKm.toNumber(),
      precioRango: pr.precioRango.toNumber(),
    }));
  } catch (error) {
    console.error("Error fetching price ranges:", error);
    return [];
  }
}
export default async function EnviosExpressPage() {
  const priceRanges = await getPriceRanges();
  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <OptimizedHeader />
      <main>
        <ExpressPageClient priceRanges={priceRanges} />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  );
}
```

## File: src/app/servicios/enviosflex/page.tsx
```typescript
import { OptimizedHeader } from "@/components/homenew/optimized-header"
import { EnviosFlexHero } from "@/components/envios-flex/envios-flex-hero"
import { EnviosFlexContent } from "@/components/envios-flex/envios-flex-content"
import { MercadoLibreBenefits } from "@/components/envios-flex/mercadolibre-benefits"
import { FlexPricingRanges } from "@/components/envios-flex/flex-pricing-ranges"
import { HowItWorks } from "@/components/envios-flex/how-it-works"
import { Requirements } from "@/components/envios-flex/requirements"
import { EnviosFlexCta } from "@/components/envios-flex/envios-flex-cta"
import { CarruselRedes } from "@/components/homenew/carrusel-redes"
import { Footer } from "@/components/homenew/footer"
import type { Metadata } from "next"
import prisma from "@/lib/prisma";
import { ServiceTypeEnum } from '../../../../generated/prisma/client/client';
import type { PriceRangeClient } from "@/components/envios-flex/flex-pricing-ranges";
export const metadata: Metadata = {
  title: "Mercado Libre Flex Mar del Plata | Envíos en el Mismo Día",
  description: "Logística certificada para Mercado Libre Flex en Mar del Plata. Asegurá tus entregas Same-Day y mejorá tu reputación con el líder en última milla.",
  alternates: { canonical: 'https://www.enviosdosruedas.com/servicios/enviosflex' },
  openGraph: {
    title: "Mercado Libre Flex Mar del Plata | Envíos en el Mismo Día",
    description: "Logística certificada para Mercado Libre Flex en Mar del Plata. Asegurá tus entregas Same-Day y mejorá tu reputación con el líder en última milla.",
    url: 'https://www.enviosdosruedas.com/servicios/enviosflex',
    images: [{ url: '/og-image.jpg' }],
  },
}
export const revalidate = 0;
async function getPriceRanges(): Promise<PriceRangeClient[]> {
  try {
    const priceRanges = await prisma.priceRange.findMany({
      where: {
        serviceType: ServiceTypeEnum.LOW_COST,
        isActive: true,
      },
      orderBy: {
        distanciaMinKm: 'asc',
      },
    });
    return priceRanges.map(pr => ({
      ...pr,
      distanciaMinKm: pr.distanciaMinKm.toNumber(),
      distanciaMaxKm: pr.distanciaMaxKm.toNumber(),
      precioRango: pr.precioRango.toNumber(),
    }));
  } catch (error) {
    console.error("Failed to fetch price ranges, falling back to empty array:", error);
    return [];
  }
}
export default async function EnviosFlexPage() {
  const priceRanges = await getPriceRanges();
  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <OptimizedHeader />
      <main>
        <EnviosFlexHero />
        <EnviosFlexContent />
        <MercadoLibreBenefits />
        <FlexPricingRanges priceRanges={priceRanges} />
        <HowItWorks />
        <Requirements />
        <EnviosFlexCta />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  )
}
```

## File: src/app/servicios/plan-emprendedores/page.tsx
```typescript
import { OptimizedHeader } from "@/components/homenew/optimized-header"
import { EntrepreneurHero } from "@/components/entrepreneur/entrepreneur-hero"
import { PlanInformation } from "@/components/entrepreneur/plan-information"
import { EntrepreneurBenefits } from "@/components/entrepreneur/entrepreneur-benefits"
import { EntrepreneurPricingRanges } from "@/components/entrepreneur/entrepreneur-pricing-ranges"
import { EntrepreneurCta } from "@/components/entrepreneur/entrepreneur-cta"
import { CarruselRedes } from "@/components/homenew/carrusel-redes"
import { Footer } from "@/components/homenew/footer"
import type { Metadata } from "next"
import prisma from "@/lib/prisma";
import { ServiceTypeEnum } from '../../../../generated/prisma/client/client';
import type { PriceRangeClient } from "@/components/entrepreneur/entrepreneur-pricing-ranges";
export const metadata: Metadata = {
  title: "Fulfillment y Logística 3PL para Emprendedores en Mar del Plata",
  description: "Soluciones de almacenamiento, picking y fulfillment en Mar del Plata. Logística 3PL estratégica para marcas de Tiendanube, Shopify y ventas online.",
  alternates: { canonical: 'https://www.enviosdosruedas.com/servicios/plan-emprendedores' },
  openGraph: {
    title: "Fulfillment y Logística 3PL para Emprendedores en Mar del Plata",
    description: "Soluciones de almacenamiento, picking y fulfillment en Mar del Plata. Logística 3PL estratégica para marcas de Tiendanube, Shopify y ventas online.",
    url: 'https://www.enviosdosruedas.com/servicios/plan-emprendedores',
    images: [{ url: '/og-image.jpg' }],
  },
}
export const revalidate = 0;
async function getPriceRanges(): Promise<PriceRangeClient[]> {
  const priceRanges = await prisma.priceRange.findMany({
    where: {
      serviceType: ServiceTypeEnum.LOW_COST,
      isActive: true,
    },
    orderBy: {
      distanciaMinKm: 'asc',
    },
  });
  return priceRanges.map(pr => ({
    ...pr,
    distanciaMinKm: pr.distanciaMinKm.toNumber(),
    distanciaMaxKm: pr.distanciaMaxKm.toNumber(),
    precioRango: pr.precioRango.toNumber(),
  }));
}
export default async function EntrepreneurPlanPage() {
  const priceRanges = await getPriceRanges();
  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <OptimizedHeader />
      <main>
        <EntrepreneurHero />
        <PlanInformation />
        <EntrepreneurBenefits />
        <EntrepreneurPricingRanges priceRanges={priceRanges} />
        <EntrepreneurCta />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  )
}
```

## File: src/components/express/express-content.tsx
```typescript
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { WhatsAppButton } from "./whatsapp-button"
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
  return (
    <section className="py-32 px-4 bg-background relative overflow-hidden border-t border-slate-900">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-primary text-slate-900 text-label-sm font-bold tracking-widest mb-8 uppercase">
              SOLUCIONES PREMIUM
            </div>
            <h2 className="font-display text-display-lg md:text-[60px] font-black leading-[1] mb-10 uppercase text-foreground tracking-tighter">
              ENTREGAS RÁPIDAS Y <br />
              <span className="text-primary italic">EFICIENTES</span>
            </h2>
            <p className="text-gray-400 text-body-lg mb-12 leading-relaxed font-sans max-w-xl">
              Nuestro servicio Express ofrece cobertura total en Mar del Plata, llegando a barrios clave como Güemes, Chauvín, Los Troncos y la zona del Puerto con rapidez absoluta. Es la solución premium para alta criticidad horaria donde vos tenés el control total.
            </p>
            {}
            <div className="space-y-8 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start"
                >
                  <div className="w-8 h-8 bg-slate-900 border border-slate-800 flex items-center justify-center mr-6 flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-headline-lg-mobile font-bold text-foreground mb-2 font-sans uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-gray-400 text-body-md leading-relaxed font-sans">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-yellow-400 text-black font-display font-bold px-10 py-6 rounded-xl transition-all uppercase tracking-tight h-auto text-label-md shadow-lg"
              >
                <Link href="/cotizar/express">Cotizá tu Envío</Link>
              </Button>
              <WhatsAppButton />
            </div>
          </div>
          {}
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="text-center lg:text-right select-none opacity-10">
              <div className="space-y-4">
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-foreground font-display tracking-tighter leading-none">
                  ENVIOS
                </div>
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-primary font-display tracking-tighter leading-none">
                  DOS RUEDAS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

## File: src/app/page.tsx
```typescript
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mensajería y Logística E-commerce en Mar del Plata | Envíos DosRuedas",
  description: "Especialistas en logística e-commerce y última milla en Mar del Plata. Envíos en el día, Flex y soluciones 3PL para potenciar tu negocio local.",
  alternates: { canonical: 'https://www.enviosdosruedas.com/' },
  openGraph: {
    title: "Mensajería y Logística E-commerce en Mar del Plata | Envíos DosRuedas",
    description: "Especialistas en logística e-commerce y última milla en Mar del Plata. Envíos en el día, Flex y soluciones 3PL para potenciar tu negocio local.",
    url: 'https://www.enviosdosruedas.com/',
    images: [{ url: '/og-image.jpg' }],
  },
};
import dynamic from "next/dynamic"
import { OptimizedHeader } from "@/components/homenew/optimized-header"
import HeroAnimado from "@/components/homenew/hero-animado"
const VisionSection = dynamic(() => import("@/components/homenew/vision-section").then(mod => mod.VisionSection), {
  ssr: true,
  loading: () => <div className="min-h-[400px] bg-background" />
})
const ServicesOverview = dynamic(() => import("@/components/homenew/services-overview").then(mod => mod.ServicesOverview), {
  ssr: true,
  loading: () => <div className="min-h-[400px] bg-background" />
})
const CtaSection = dynamic(() => import("@/components/homenew/cta-section").then(mod => mod.CtaSection), {
  ssr: true
})
const EmprendedoresHome = dynamic(() => import("@/components/homenew/emprendedores-home").then(mod => mod.EmprendedoresHome), {
  ssr: true
})
const SliderServicios = dynamic(() => import("@/components/homenew/slider-servicios"), {
  ssr: true
})
const CarruselRedes = dynamic(() => import("@/components/homenew/carrusel-redes").then(mod => mod.CarruselRedes), {
  ssr: true
})
const Footer = dynamic(() => import("@/components/homenew/footer").then(mod => mod.Footer), {
  ssr: true
})
export default function HomePage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground selection:bg-primary/30 flex flex-col">
      <OptimizedHeader />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-background via-slate-950/20 to-slate-950">
          {}
          <HeroAnimado />
          {}
          <VisionSection />
        </div>
        <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-background">
          <ServicesOverview />
          <CtaSection />
        </div>
        <div className="bg-gradient-to-b from-background via-slate-950 to-background">
          <EmprendedoresHome />
          <SliderServicios />
          <CarruselRedes />
        </div>
      </main>
      <Footer />
    </div>
  )
}
```

## File: tailwind.config.ts
```typescript
import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          blue: "#0635A6",
          yellow: "#FFEC00",
          white: "#FFFFFF",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        none: "0px",
        xs: "0px",
        sm: "0px",
        DEFAULT: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "9999px",
      },
      spacing: {
        unit: "8px",
        gutter: "24px",
        "margin-mobile": "16px",
        "margin-desktop": "48px",
        "container-max": "1280px",
        base: "4px",
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "32px",
        xl: "64px",
      },
      boxShadow: {
        industrial: "4px 4px 0px 0px hsl(var(--primary))",
        "industrial-secondary": "4px 4px 0px 0px hsl(var(--secondary))",
        crate: "4px 4px 0px 0px rgba(0,0,0,0.15)",
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "h-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "h-scroll": "h-scroll 45s linear infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-anton)", "sans-serif"],
        anton: ["var(--font-anton)", "sans-serif"],
        bebas: ["var(--font-bebas)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      transitionTimingFunction: {
        stitch: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
export default config
```
