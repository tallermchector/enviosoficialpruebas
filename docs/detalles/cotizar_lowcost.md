# /src/app/cotizar/lowcost/page.tsx

## SEO Metadata
- **Title:** Presupuesto Logístico E-commerce | Envíos en Mar del Plata
- **Description:** Solicitá tu presupuesto para envíos por volumen en Mar del Plata. Cotizá tu logística e-commerce con las mejores tarifas del mercado local hoy.

## UI Components & Text Content

### LowCostCalculatorHero
- **PreTitle:** Cotizador Low Cost
- **Title:** Cotizador de Envíos LowCost
- **Description:** Eficiencia y rentabilidad. Calcula tu envío de ruteo diario masivo con entrega garantizada en el día.

### LowCostCalculator (Interactive)
- **Heading:** Calculá tu Envío Low Cost
- **Description:** Ingresá las direcciones de origen y destino para obtener una cotización para envíos programados.
- **Labels:** Dirección de Origen, Dirección de Destino.
- **Button:** Calcular Ruta y Precio Low Cost.
- **Results:**
    - Distancia
    - Tiempo Estimado
    - Precio Estimado

### MapFeatures
- **Features:** Visualización de ruta optimizada, Puntos de retiro y entrega.

### PricingInfo
- **Note:** Las tarifas están sujetas a cambios según el volumen y bultos adicionales.

### CalculatorTips
- **Tips:** Asegurate de ingresar la dirección exacta, Revisá el horario de corte (13hs).

### CalculatorContact
- **Heading:** ¿Necesitás una cuenta corporativa?
- **Button:** Hablar con un Asesor.

## Business & Calculation Logic
- **Source:** `src/app/ordenes/actions.ts`
- **Function:** `quoteShipment`
- **Parameters:** `serviceType: ServiceTypeEnum.LOW_COST`
- **Pricing Logic:**
```typescript
    if (distanceKm <= 10.00) {
      // Fetch standard range from database
      const priceRangeRecord = await prisma.priceRange.findFirst({
          where: {
            distanciaMinKm: { lte: new Prisma.Decimal(distanceKm.toFixed(2)) },
            distanciaMaxKm: { gte: new Prisma.Decimal(distanceKm.toFixed(2)) },
            serviceType: ServiceTypeEnum.LOW_COST,
            isActive: true,
          },
      });
      price = priceRangeRecord ? priceRangeRecord.precioRango.toNumber() : null;
    } else {
      // Distance > 10 km: calculate base + extra per-km rate
      const basePrice = 7000; // Base for LOW_COST
      const extraPricePerKm = 700; // Extra per km for LOW_COST
      const extraKm = Math.max(0, distanceKm - 10.00);
      price = basePrice + extraKm * extraPricePerKm;
      price = Math.round(price * 100) / 100;
    }
```
- **Values from `prisma/seed.ts` (LOW_COST):**
    - 0-3km: $3000
    - 3-5km: $4000
    - 5-7km: $5300
    - 7-10km: $7000
    - >10km: $7000 + $700/km
