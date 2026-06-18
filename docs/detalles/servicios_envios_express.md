# /src/app/servicios/envios-express/page.tsx

## SEO Metadata
- **Title:** Envíos Express y Cadetería en Mar del Plata | Entrega en 2hs
- **Description:** Mensajería urbana instantánea y cadetería en moto en Mar del Plata. Entregas urgentes en menos de 2 horas con seguimiento en tiempo real y seguridad.

## UI Components & Text Content

### ExpressHero
- **PreTitle:** ALTA PRIORIDAD
- **Title:** ENVÍOS EXPRESS: ENTREGA EN 2HS
- **Description:** Mensajería urbana instantánea para tus envíos más críticos. Vos elegís el rango de entrega y nosotros garantizamos la puntualidad absoluta.
- **CTAs:** SOLICITAR ENVÍO EXPRESS, VER TARIFAS

### ExpressContent
- **Heading:** VELOCIDAD Y PRECISIÓN
- **Body:** Nuestro servicio Express está diseñado para operaciones de alta criticidad horaria.
- **Features:**
    - Prioridad Absoluta: Tu envío es el primero en la hoja de ruta.
    - Rango Horario Flexible: Vos decidís cuándo se retira y entrega.
    - Confirmación Inmediata: Recibí avisos en tiempo real del estado.

### ExpressPricingRanges
- **Heading:** TARIFAS EXPRESS
- **Content:** (Displays price ranges fetched from database for ServiceType EXPRESS)

### ExpressBenefits
- **Benefits:** Puntualidad Extrema, Seguridad Garantizada, Soporte Dedicado.

### UrgentScenarios
- **Scenarios:** Documentos legales, Repuestos críticos, Regalos de último momento, Olvidos urgentes.

## Business & Calculation Logic
- **Source:** `src/app/ordenes/actions.ts`
- **Logic:** Uses the `EXPRESS` service type pricing.
- **Ranges (from `prisma/seed.ts`):**
    - 0.00 - 2.99 km: $3700.00
    - 3.00 - 4.99 km: $4600.00
    - 5.00 - 6.99 km: $6100.00
    - 7.00 - 9.99 km: $8200.00
    - 10.00+ km: Base ($8200) + $1000.00 per extra km.
