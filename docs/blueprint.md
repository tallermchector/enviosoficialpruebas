# Blueprint de Implementación y Arquitectura - Envios DosRuedas

Este documento funciona como un mapa topológico de la aplicación. Detalla la estructura de enrutamiento bajo Next.js App Router, el flujo de datos conectados con Prisma ORM, y la arquitectura sugerida para ser ingerida por herramientas como Google Stitch AI, garantizando consistencia técnica y de diseño.

## 1. Arquitectura de Navegación y Rutas (App Router)

La aplicación implementa una estructura de enrutamiento robusta enfocada en tres actores principales: el Cliente Final, el Repartidor y el Administrador.

*   **Páginas Públicas (Cliente):**
    *   `/`: Landing page principal (LCP crítico on-top, animaciones en diferido).
    *   `/servicios/envios-express`: Landing específica para envíos urgentes.
    *   `/servicios/envios-lowcost`: Landing específica para ruteos masivos.
    *   `/servicios/enviosflex`: Landing especializada en Mercado Libre Same-Day.
    *   `/servicios/plan-emprendedores`: Propuesta 3PL e-commerce.
    *   `/cotizar/express`: Calculadora dinámica (con mapas interactivos Leaflet).
    *   `/cotizar/lowcost`: Calculadora para envíos programados.
    *   `/seguimiento`: Portal de seguimiento de envíos interactivo.
    *   `/nosotros/*`: Historia, equipo, y preguntas frecuentes.
    *   `/contacto`: Formulario y mapas de contacto.
*   **Páginas Operativas:**
    *   `/repartidor`: Selección y login básico de repartidor.
    *   `/repartidor/[id]`: Dashboard específico con Hoja de Ruta interactiva (Optimizado para legibilidad exterior y escaneo rápido).
*   **Páginas Administrativas (`/admin/*`):**
    *   `/admin/login`: Puerta de acceso a la intranet.
    *   `/admin/ordenes`: Gestión central del modelo `Order`.
    *   `/admin/clientes`: Gestión de la cartera (CRUD sobre el modelo `Client`).
    *   `/admin/cotizaciones`: Ajustes tarifarios en tiempo real (CRUD sobre el modelo `PriceRange`).
    *   `/admin/etiquetas`: Emisión de rotulaciones de envío e impresión A4 estricta.
    *   `/admin/repartidores`: Alta y seguimiento (CRUD sobre `Repartidor`).
    *   `/admin/add-post`, `/admin/crea-imagenes`, `/admin/prompts`: Herramientas auxiliares operativas e IA.

## 2. Flujo de Datos y Conexión de Componentes (Frontend a Prisma)

Los componentes React (principalmente Server Components o Server Actions) deben mapearse rigurosamente a las entidades de negocio.

### 2.1 Modelo: `Client` (Clientes Frecuentes)
*   **Mapeo Frontend**: `/admin/clientes`, `/ordenes`
*   **Función**: Alamacenamiento de direcciones recurrentes, coordenadas (`addressLat`, `addressLng`) para autocompletado en nuevas órdenes, y gestión del estado de cuenta.

### 2.2 Modelo: `Order` (Órdenes de Envío)
*   **Mapeo Frontend**: `/cotizar/express`, `/seguimiento`, `/admin/ordenes`, `/repartidor/[id]`
*   **Función**: Es el núcleo de la aplicación.
    *   *Creación*: Las calculadoras estiman el precio utilizando `originLat/Lng` y `destinationLat/Lng`, para luego insertar la orden con estado `PENDIENTE`.
    *   *Seguimiento*: La página de seguimiento lee el estado transicional (`PENDIENTE` -> `EN_CURSO` -> `ENTREGADO`).
    *   *Operación*: En `/repartidor/[id]` el repartidor actualiza el estado transicional.

### 2.3 Modelo: `PriceRange` (Motor de Precios)
*   **Mapeo Frontend**: Componentes en `/src/components/calculator/` y administrado en `/admin/cotizaciones`.
*   **Función**: La calculadora en el cliente invoca la API (o Server Action), que calcula la distancia y consulta esta tabla (`distanciaMinKm` y `distanciaMaxKm`) según el `ServiceTypeEnum` (EXPRESS o LOW_COST) para retornar una tarifa precisa.

### 2.4 Modelos: `Etiqueta` y `Repartidor`
*   **Mapeo Frontend**: `/admin/etiquetas`, `/admin/etiquetas/[id]`, `/repartidor/[id]`.
*   **Función**: La `Etiqueta` representa el "paquete físico". Se asocia al `Repartidor` y refleja estados como `IMPRESA`, `EN_CAMINO`. La vista de etiquetas tiene reglas CSS de `@media print` para asegurar salida PDF tamaño A4 perfecta.

### 2.5 Modelo: `SocialPost`
*   **Mapeo Frontend**: Componentes de Social Feed y `/admin/add-post`.
*   **Función**: Gestionar el historial de interacciones sociales y feeds incrustados.

## 3. Estructura de Carpetas Sugerida para Mapeo IA (Stitch AI)

Para que herramientas como Google Stitch AI generen y actualicen la interfaz gráfica sin comprometer la lógica, la estructura debe dividirse claramente.

### 3.1 Vistas y Páginas (App Router)
*   `src/app/`
    *   Contiene **exclusivamente** el enrutamiento y la inyección de datos (Server Components).
    *   Aquí deben ocurrir las llamadas a `prisma` usando bloques `try...catch` para evitar fallos catastróficos si la BD está offline temporalmente (ej. Modo de previsualización UI).
    *   La directiva `export const revalidate = 0` debe usarse en rutas operativas para asegurar datos frescos.

### 3.2 Componentes Modulares (Client/Server UI)
*   `src/components/`
    *   **ui/**: Componentes atómicos (shadcn/ui), definidos por los tokens de diseño (Botones, Inputs, Cards).
    *   **homenew/**, **calculator/**, **admin/**, etc: Componentes de Feature.
    *   *Regla Stitch*: Los componentes en estas carpetas deben ser "puros" o recibir los datos vía `props` desde la capa `src/app/`. Deben implementar estrictamente `dark mode` (usando `dark:`) y las variables HSL definidas en `globals.css`.

### 3.3 Server Actions y Lógica de Negocio
*   `src/app/actions.ts` y subrutas `actions.ts`:
    *   Contienen toda la lógica de mutación de la base de datos (Post/Put/Delete) para que los componentes React de `src/components` puedan invocar form-submissions de manera asíncrona pero type-safe.

### 3.4 Sistema de Diseño y Configuración Global
*   `tailwind.config.ts`, `globals.css`, y `DESIGN.md`:
    *   El centro de verdad del diseño. Stitch AI debe leer primero `DESIGN.md` para entender las intenciones de la marca antes de regenerar un componente en `src/components/`.