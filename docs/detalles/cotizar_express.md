# /src/app/cotizar/express/page.tsx

## SEO Metadata
- **Title:** Cotizador de Mensajería Express Online | Mar del Plata
- **Description:** Calculá en tiempo real el costo de tu envío express en Mar del Plata. Cotizador online de cadetería en moto para entregas rápidas y seguras.

## UI Components & Text Content

### CalculatorHero
- **PreTitle:** Cotizador Express
- **Title:** Cotizador de Envíos Express
- **Description:** Calcula el costo de tu envío prioritario al instante. Alta precisión y elección de rango horario.

### ExpressCalculator (Interactive)
- **Heading:** Calculá tu Envío Express
- **Description:** Ingresá las direcciones de origen y destino para obtener una cotización instantánea.
- **Labels:** Dirección de Origen, Dirección de Destino.
- **Button:** Calcular Ruta y Precio Express.
- **Results:**
    - Distancia
    - Tiempo Estimado
    - Precio Estimado

### MapFeatures
- **Features:** Visualización de ruta en tiempo real, Estimación de tráfico.

### PricingInfo
- **Note:** El precio Express incluye prioridad máxima y entrega en menos de 2 horas.

### CalculatorTips
- **Tips:** Verificá que haya alguien para recibir, El horario de entrega es flexible.

### CalculatorContact
- **Heading:** ¿Envío muy voluminoso?
- **Button:** Consultar por WhatsApp.

## Business & Calculation Logic
- **Source:** `src/app/ordenes/actions.ts`
- **Function:** `quoteShipment`
- **Parameters:** `serviceType: ServiceTypeEnum.EXPRESS`
- **Pricing Logic:**
```typescript
    if (distanceKm <= 10.00) {
      // Fetch standard range from database
      const priceRangeRecord = await prisma.priceRange.findFirst({
          where: {
            distanciaMinKm: { lte: new Prisma.Decimal(distanceKm.toFixed(2)) },
            distanciaMaxKm: { gte: new Prisma.Decimal(distanceKm.toFixed(2)) },
            serviceType: ServiceTypeEnum.EXPRESS,
            isActive: true,
          },
      });
      price = priceRangeRecord ? priceRangeRecord.precioRango.toNumber() : null;
    } else {
      // Distance > 10 km: calculate base + extra per-km rate
      const basePrice = 15300; // Default base for EXPRESS in code, but seed says 8200 for 7-10km
      // According to actions.ts, it tries to fetch baseRangeRecord (7-10km)
      // If found, basePrice = 8200. extraPricePerKm = 1000.
      const extraPricePerKm = 1000;
      const extraKm = Math.max(0, distanceKm - 10.00);
      price = basePrice + extraKm * extraPricePerKm;
      price = Math.round(price * 100) / 100;
    }
```
- **Values from `prisma/seed.ts` (EXPRESS):**
    - 0-3km: $3700
    - 3-5km: $4600
    - 5-7km: $6100
    - 7-10km: $8200
    - >10km: $8200 + $1000/km
