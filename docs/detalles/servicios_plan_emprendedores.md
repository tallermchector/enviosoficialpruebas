# /src/app/servicios/plan-emprendedores/page.tsx

## SEO Metadata
- **Title:** Fulfillment y Logística 3PL para Emprendedores en Mar del Plata
- **Description:** Soluciones de almacenamiento, picking y fulfillment en Mar del Plata. Logística 3PL estratégica para marcas de Tiendanube, Shopify y ventas online.

## UI Components & Text Content

### EntrepreneurHero
- **PreTitle:** E-COMMERCE 3PL
- **Title:** ALMACENAMIENTO Y FULFILLMENT PARA PyMEs
- **Description:** Solución integral de almacenamiento y fulfillment para PyMEs en Mar del Plata. Contamos con depósitos propios en la ciudad.
- **CTAs:** SOLICITAR PLAN CORPORATIVO, AGENDAR ASESORÍA 3PL

### PlanInformation
- **Heading:** LOGÍSTICA INTEGRAL 3PL
- **Body:** Almacenamos, preparamos y enviamos tus productos.
- **Services:** Almacenamiento, Picking & Packing, Fulfillment, Gestión de Stock.

### EntrepreneurBenefits
- **Benefits:** Escalabilidad, Profesionalismo, Reducción de Costos Fijos, Foco en Ventas.

### EntrepreneurPricingRanges
- **Heading:** TARIFAS DE DISTRIBUCIÓN
- **Content:** Uses the LOW_COST pricing structure for the delivery part of the fulfillment service.

## Business & Calculation Logic
- **Source:** `src/app/ordenes/actions.ts`
- **Logic:** Delivery costs follow the `LOW_COST` service type pricing. Fulfillment costs are typically quoted per client.
- **Ranges (from `prisma/seed.ts`):**
    - 0.00 - 2.99 km: $3000.00
    - 3.00 - 4.99 km: $4000.00
    - 5.00 - 6.99 km: $5300.00
    - 7.00 - 9.99 km: $7000.00
    - 10.00+ km: Base ($7000) + $700.00 per extra km.
