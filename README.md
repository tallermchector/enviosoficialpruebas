# Envios DosRuedas - Aplicación de Logística y Delivery (Dos Ruedas Pro)

![Banner de Envios DosRuedas](/public/bannerenvios.webp)

**Dos Ruedas Pro / Envios DosRuedas** es una plataforma web completa de gestión logística de última milla diseñada para optimizar la eficiencia operativa y la mensajería en la ciudad de Mar del Plata, Argentina. La aplicación proporciona una experiencia digital de vanguardia tanto para clientes finales (empleando el voseo argentino: *hablá*, *cotizá*, *tenés*) como para administradores y repartidores en tránsito.

---

## 🎯 Propósito del Proyecto y Metas del Negocio

El sistema busca digitalizar completamente el ciclo de vida de la mensajería y delivery de última milla. Sus objetivos fundamentales son:
1. **Cotización Dinámica Instantánea**: Proveer estimaciones automáticas basadas en rangos de distancia real mapeados por coordenadas geográficas.
2. **Maquetación Impresa A4 Perfecta**: Exportación de etiquetas y propuestas operativas en formato PDF A4 de alta fidelidad, asegurando que el contenido impreso coincida exactamente con lo visualizado en pantalla mediante un riguroso control de overflow.
3. **Optimización de Flujo de Repartidores**: Agilizar las operaciones de campo mediante escaneo móvil en tiempo real e itinerarios interactivos.
4. **Consistencia de Marca Avanzada**: Consolidar la identidad visual futurista e industrial de la marca a través de tokens de diseño semánticos aplicados rigurosamente mediante Tailwind y el Stitch Design System.

---

## 🌐 Páginas Públicas y Clientes

La estructura del portal para clientes se define estrictamente bajo las siguientes descripciones extraídas directamente de sus respectivas rutas públicas:

*   **Página Principal / Home (`src/app/page.tsx`)**:
    Implementa una estructura de carga optimizada dividida por la línea de pliegue. Renderiza de forma crítica el componente `HeroAnimado` above the fold, seguido por `VisionSection`, `ServicesOverview`, `CtaSection`, `EmprendedoresHome`, `SliderServicios`, `CarruselRedes` y `Footer`. Operando sobre un tema de fondo oscuro `#050810` con acentos de selección `#3b82f6` (`blue-500/30`).
*   **Envíos Express (`src/app/servicios/envios-express/page.tsx`)**:
    *"La solución premium para operaciones de alta criticidad horaria. Vos tenés el control total: elegí el rango exacto de entrega con certeza absoluta."*
*   **Envíos LowCost (`src/app/servicios/envios-lowcost/page.tsx`)**:
    *"Variabilizá tus costos logísticos con nuestro servicio de ruteo masivo inteligente. La mejor tarifa de Mar del Plata sin sacrificar seguridad."*
*   **Envíos Flex MercadoLibre (`src/app/servicios/enviosflex/page.tsx`)**:
    *"Somos expertos en la logística de MercadoLibre. Optimizamos tus entregas Same-Day para que tu medidor siempre esté en verde y vos solo te enfoques en vender."*
*   **Plan Emprendedores (`src/app/servicios/plan-emprendedores/page.tsx`)**:
    *"Tercerización integral con integración vertical. Transformá tu estructura de gasto fijo en soluciones escalables que acompañan el crecimiento de tu negocio."* (Logística 3PL y Cuentas Corrientes para E-Commerce).
*   **Cotizador de Envíos (`src/app/cotizar/express/page.tsx`)**:
    *"Calcula el precio de tus envíos express en Mar del Plata de forma rápida y sencilla. Ingresa origen y destino para obtener tu cotización al instante."*
*   **Sobre Nosotros (`src/app/nosotros/sobre-nosotros/page.tsx`)**:
    *"Conoce la historia de Envios DosRuedas, tu aliado confiable en mensajería y delivery en Mar del Plata. 4.9 estrellas en Google Reviews. Compromiso, rapidez y confiabilidad."*
*   **Contacto (`src/app/contacto/page.tsx`)**:
    *"Contáctanos para servicios de mensajería y delivery en Mar del Plata. Respuesta rápida y atención personalizada. WhatsApp, teléfono y email disponibles."*

---

## 📂 Archivos Críticos y Estructuras Clave

El core técnico del backend y el frontend reside en los siguientes archivos y rutas primarias:

### 🧬 Base de Datos y Modelado: `prisma/schema.prisma`
*   `Client`: Registra clientes operativos, sus datos de contacto unívocos y coordenadas geográficas (`Decimal(10, 8)` / `Decimal(11, 8)`).
*   `Order`: Almacena el detalle del remitente, destinatario, estados del pedido (`PENDIENTE`, `EN_CURSO`, `ENTREGADO`, `CANCELADO`), kilometraje, duración provista por la API de Maps y el costo final.
*   `PriceRange`: Define la matriz de precios dinámica para servicios `EXPRESS` y `LOW_COST` según bandas de distancia (`distanciaMinKm` a `distanciaMaxKm`).
*   `Etiqueta`: Administra la información de impresión y el estado de la hoja de ruta (`PENDIENTE`, `IMPRESA`, `EN_CAMINO`, `ENTREGADA`, `NO_ENTREGADA`), vinculado con la cámara de escaneo del repartidor.

### 🎨 Estilo y Maquetación: `src/app/globals.css`
*   Define las variables CSS nativas para el sistema de diseño en HSL (soporta modo claro y oscuro dinámico).
*   **Reglas de Impresión A4**: Control estricto de impresión bajo `@media print` fijando el tamaño a `A4`, márgenes de `10mm`, directivas `break-inside: avoid` y layouts fluidos elásticos para evitar desbordes físicos en las etiquetas de envío.

### 🔧 Integración del Sistema de Diseño: `tailwind.config.ts`
*   Extiende los tokens del **Stitch Design System** en Next.js.
*   Configura las fuentes corporativas: `sans` para el cuerpo (Roboto) y `display` para el aire futurista de los títulos (Orbitron).
*   Integra las animaciones distintivas de la UI: `float` (movimiento vertical suave), `spin-slow` (rotaciones ambientales) y `h-scroll` (scroll de carrusel infinito).

### 🤖 Flujos de Inteligencia: `src/ai/flows/`
*   `optimize-delivery-routes.ts`: Orquestador principal en Genkit. Resuelve geolocalizaciones en Google Maps, agrupa entregas por zonas geográficas de Mar del Plata y las ordena temporalmente para optimizar el recorrido físico del repartidor.

### 🚦 Operaciones de Servidor: `src/app/actions.ts`
*   Contiene los Server Actions encargados de las mutaciones de datos del sistema, garantizando transacciones seguras en el backend Next.js y type safety estricto.

---

## 🛠️ Stack Tecnológico

*   **Framework**: [Next.js](https://nextjs.org/) (con App Router)
*   **Lenguaje**: [TypeScript](https://www.typescriptlang.org/) (en modo estricto)
*   **Base de Datos**: [PostgreSQL](https://www.postgresql.org/)
*   **ORM**: [Prisma ORM v7](https://www.prisma.io/)
*   **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
*   **Componentes UI**: [Shadcn/ui](https://ui.shadcn.com/)
*   **Formularios**: [React Hook Form](https://react-hook-form.com/) con validaciones [Zod](https://zod.dev/)
*   **Geolocalización**: [Google Maps Platform](https://maps.google.com)
*   **Inteligencia Artificial**: [Google Genkit](https://firebase.google.com/docs/genkit)
*   **Escaneo de Códigos**: [react-zxing](https://github.com/continuation-ftw/react-zxing)

---

## 🚀 Cómo Empezar

Sigue estos pasos para levantar el proyecto en un entorno de desarrollo local.

### 1. Prerrequisitos
*   Node.js (v18 o superior)
*   Bun (o npm/pnpm)
*   Una base de datos PostgreSQL activa

### 2. Instalar Dependencias
```bash
bun install
```

### 3. Configurar Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
```env
# URL de conexión a tu base de datos PostgreSQL
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/envios_dos_ruedas"

# API Key de Google Maps para la geolocalización y mapas
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="tu_google_maps_api_key_aqui"

# API Key para Genkit (si usas las funcionalidades de IA)
GEMINI_API_KEY="tu_gemini_api_key_aqui"
```

### 4. Sincronizar la Base de Datos
Este comando leerá tu `schema.prisma` y creará las tablas correspondientes en tu base de datos.
```bash
bunx prisma db push
```

### 5. Ejecutar el Proyecto
```bash
bun run dev
```
La aplicación estará disponible en `http://localhost:3000`.

---

## 🔐 Acceso al Panel de Administración

Para acceder al panel de administración, utiliza las siguientes credenciales en la página `/admin/login`:

*   **Usuario**: `EnviosAdmin`
*   **Contraseña**: `Vendetta_3317_10`

*Nota: Estas credenciales están codificadas en `src/app/admin/login/actions.ts` y deben ser cambiadas por un sistema de autenticación de producción al desplegar.*
