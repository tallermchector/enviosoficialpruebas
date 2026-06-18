# /src/app/nosotros/preguntas-frecuentes/page.tsx

## SEO Metadata
- **Title:** Preguntas Frecuentes | Soporte y Cobertura en Mar del Plata
- **Description:** Resolvé tus dudas sobre horarios, zonas de cobertura en Mar del Plata y métodos de pago. Todo lo que necesitás saber para tus envíos DosRuedas.

## UI Components & Text Content

### FaqHero
- **Title:** Preguntas Frecuentes
- **Description:** Todo lo que necesitás saber sobre nuestra operativa, tarifas y SLAs de entrega. Transparencia total.

### FaqCategories
- **Categories:** Servicios Generales, Precios y Pagos, Proceso de Envío.
- **Key Questions:**
    - **Cobertura:** Cubrimos todo Mar del Plata (no cubrimos zonas aledañas).
    - **Seguimiento:** Gestión vía WhatsApp. Notificación tras entrega.
    - **Límites de Carga:** Máximo 5 kg o 40x40x30 cm por bulto.
    - **Horarios:** Lun-Vie 8-18 hs, Sáb 9-15 hs.
    - **Precios:** Se calculan según distancia y adicionales (bulto, lluvia, demora).
    - **Pagos:** Efectivo o transferencia. Factura C disponible.

### FaqContactCta
- **Heading:** ¿Aún tenés dudas?
- **Button:** Contactar Soporte (WhatsApp)

## Business & Calculation Logic
- **Source:** `src/app/ordenes/actions.ts`
- **Logic:** Mentioned pricing logic based on distance and surcharges (rain, waiting time, etc.), though the exact formula is in the actions file.
