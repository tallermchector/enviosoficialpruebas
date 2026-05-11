# Auditoría Técnica - Envíos DosRuedas

**Arquitecto:** Jules (Senior Software Architect)
**Stack Real:** Next.js 16.2+ (App Router, RSC), TypeScript (Strict), PostgreSQL + Prisma v7, pnpm.

---

### 1. Renderizado de Elementos Críticos (LCP) en el Client-Side

- **Gravedad:** Alta
- **Hallazgo:** El componente `HeroAnimado.tsx` utiliza la directiva `'use client'` para toda su estructura. Esto incluye el H1 y el CTA principal, que son elementos críticos para el _Largest Contentful Paint_ (LCP). Al depender de Framer Motion para el renderizado inicial, el usuario percibe una pantalla en blanco o un "flash" mientras se descarga y ejecuta el bundle de JS.
- **Refactor Propuesto:**

```tsx
// src/components/homenew/hero-server.tsx (RSC)
import { HeroInteractive } from "./hero-interactive";

export default function HeroServer() {
  return (
    <section className="relative min-h-[100dvh] flex items-center ... bg-[#050810]">
      {/* El contenido estático se sirve como HTML puro */}
      <div className="max-w-7xl mx-auto z-10">
        <h1 className="text-7xl font-black uppercase text-white">
          Servicio de <span className="text-primary">mensajería</span>
        </h1>
        {/* Solo la lógica de interacción compleja es Client Component */}
        <HeroInteractive />
      </div>
    </section>
  );
}
```

- **Justificación:** Al mover el texto y la estructura base a un Server Component (RSC), el HTML se genera en el servidor. Esto mejora drásticamente el FCP/LCP y el SEO.

---

### 2. Estrategia de Data Fetching y Type Safety (Prisma v7)

- **Gravedad:** Media
- **Hallazgo:** Si bien se ha implementado `revalidate = 3600` en rutas como `envios-express`, el manejo de tipos de Prisma debe seguir las convenciones de la v7 (importaciones relativas desde `generated/prisma/client`). Además, se debe asegurar que las mutaciones de datos utilicen Server Actions para mantener la integridad en el lado del servidor.
- **Refactor Propuesto:**

```tsx
// src/app/actions/prices.ts (Server Action)
'use server'
import prisma from "@/lib/prisma";
import { ServiceTypeEnum } from '../../../generated/prisma/client';

export async function getUpdatedPrices(type: ServiceTypeEnum) {
  return await prisma.priceRange.findMany({
    where: { serviceType: type, isActive: true },
    orderBy: { distanciaMinKm: 'asc' }
  });
}

// src/app/servicios/envios-express/page.tsx
export const revalidate = 3600; // Correcto, mantener ISR

export default async function Page() {
  const priceRanges = await prisma.priceRange.findMany({ ... });
  // ... rest of component
}
```

- **Justificación:** Centralizar la lógica en Server Actions y respetar las rutas de importación de Prisma v7 garantiza la estabilidad del sistema y facilita futuras migraciones o escalado de la base de datos PostgreSQL.

---

### 3. Arquitectura del Layout y Hidratación Innecesaria

- **Gravedad:** Media
- **Hallazgo:** El `OptimizedHeader` y `Footer` están marcados como `'use client'` en su totalidad. Esto provoca que todo el árbol de navegación, incluyendo links y logos, se hidrate en el cliente, aumentando el TBT (Total Blocking Time).
- **Refactor Propuesto:**
  Separar los componentes en una estructura "Híbrida":

1. **Header (RSC):** Renderiza la estructura base, logo y links principales.
2. **MobileMenu (Client):** Un componente "Leaf" que solo maneja el estado del Sheet lateral.
3. **ActiveLink (Client):** Un wrapper pequeño para aplicar clases activas basadas en `usePathname`.

- **Justificación:** Minimiza el bundle de JS enviado al navegador y mejora la interactividad inicial (FID).

---

### 4. Optimización de Animaciones (Framer Motion vs CSS)

- **Gravedad:** Baja
- **Hallazgo:** Se detecta un uso intensivo de `framer-motion` para animaciones de entrada simples (fade-in, slide-up) que podrían resolverse con las utilidades de `tailwindcss-animate`.
- **Refactor Propuesto:**

```tsx
// En lugar de <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
<div className="opacity-0 animate-in fade-in duration-700 slide-in-from-bottom-10 fill-mode-forwards">
  {/* Contenido */}
</div>
```

- **Justificación:** Reducir la carga de JS en componentes que no requieren animaciones orquestadas complejas mejora el rendimiento en dispositivos de gama baja.

---

### Resumen de Auditoría

| Métrica           | Estado Actual            | Meta Stack Consensuado    |
| :---------------- | :----------------------- | :------------------------ |
| **Arquitectura**  | Client-Centric           | RSC-First (Hybrid)        |
| **Base de Datos** | Prisma v7 (PostgreSQL)   | Prisma v7 (Type-Safe)     |
| **Rendimiento**   | Dependiente de Hydration | Streaming & Static HTML   |
| **Runtime**       | Node/pnpm                | Node/pnpm (Optimizado)    |

