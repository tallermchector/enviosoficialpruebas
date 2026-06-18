# /src/app/servicios/envios-lowcost/page.tsx

## SEO Metadata
- **Title:** Envíos LowCost en Mar del Plata | Distribución de Paquetería
- **Description:** Envíos masivos programados para comercios en Mar del Plata. La tarifa más económica en distribución local de paquetería con logística inteligente.

## UI Components & Text Content

### LowcostHero
- **PreTitle:** TARIFA OPTIMIZADA
- **Title:** ENVÍOS LOWCOST: MÁXIMA RENTABILIDAD
- **Description:** Variabilizá tus costos logísticos con nuestro servicio de ruteo masivo inteligente. La mejor tarifa de Mar del Plata sin sacrificar seguridad.
- **CTAs:** COTIZAR ENVÍO LOWCOST, VER TARIFAS OPTIMIZADAS

### LowcostContent
- **Heading:** ENVÍOS LOWCOST: MÁXIMA EFICIENCIA
- **Body:** Nuestro servicio LowCost está diseñado para el ruteo diario masivo. Optimizamos nuestras rutas para ofrecer la tarifa más competitiva.
- **Features:**
    - Eficiencia en Ruteo: Ruteo diario masivo optimizado. NO se elige rango horario.
    - Corte y Entrega: Pedidos antes de las 13:00 hs se entregan antes de las 19:00 hs.
    - Tarifa Económica: La mejor tarifa de Mar del Plata para envíos masivos.

### PricingComparison
- **Heading:** COMPARATIVA DE TARIFAS
- **Content:** (Displays price ranges fetched from database for ServiceType LOW_COST)

### LowcostBenefits
- **Benefits:** Escalabilidad, Reducción de Costos, Trazabilidad, Logística Inversa.

### HowLowcostWorks
- **Steps:** Carga de pedidos (antes de las 13hs), Recolección centralizada, Ruteo inteligente, Entrega en el día.

## Business & Calculation Logic
- **Source:** `src/app/ordenes/actions.ts`
- **Logic:** Uses the `LOW_COST` service type pricing.
- **Ranges (from `prisma/seed.ts`):**
    - 0.00 - 2.99 km: $3000.00
    - 3.00 - 4.99 km: $4000.00
    - 5.00 - 6.99 km: $5300.00
    - 7.00 - 9.99 km: $7000.00
    - 10.00+ km: Base ($7000) + $700.00 per extra km.
