# /src/app/servicios/enviosflex/page.tsx

## SEO Metadata
- **Title:** Mercado Libre Flex Mar del Plata | Envíos en el Mismo Día
- **Description:** Logística certificada para Mercado Libre Flex en Mar del Plata. Asegurá tus entregas Same-Day y mejorá tu reputación con el líder en última milla.

## UI Components & Text Content

### EnviosFlexHero
- **PreTitle:** BENEFICIO EMPRENDEDORES
- **Title:** ENVÍOS FLEX MERCADOLIBRE: POTENCIÁ TU REPUTACIÓN
- **Description:** Somos expertos en la logística de MercadoLibre. Optimizamos tus entregas Same-Day para que tu medidor siempre esté en verde.
- **CTAs:** ACTIVAR ENVÍOS FLEX, CONTACTAR ASESOR FLEX

### EnviosFlexContent
- **Heading:** LÍDERES EN MERCADOLIBRE FLEX
- **Body:** Ayudamos a vendedores de MercadoLibre a cumplir con sus promesas de entrega.

### MercadoLibreBenefits
- **Benefits:** Medidor en Verde, Mayor Exposición, Entregas Garantizadas, Soporte Post-Venta.

### FlexPricingRanges
- **Heading:** TARIFAS FLEX
- **Content:** Uses the LOW_COST pricing structure.

### HowItWorks
- **Steps:** Etiquetado Flex, Retiro por local/depósito, Entrega prioritaria Same-Day, Notificación en tiempo real.

### Requirements
- **Requirements:** Cuenta en MercadoLibre, Local/Depósito en Mar del Plata, Volumen mínimo de ventas.

## Business & Calculation Logic
- **Source:** `src/app/ordenes/actions.ts`
- **Logic:** Uses the `LOW_COST` service type pricing structure.
- **Ranges (from `prisma/seed.ts`):**
    - 0.00 - 2.99 km: $3000.00
    - 3.00 - 4.99 km: $4000.00
    - 5.00 - 6.99 km: $5300.00
    - 7.00 - 9.99 km: $7000.00
    - 10.00+ km: Base ($7000) + $700.00 per extra km.
