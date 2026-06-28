# Envios DosRuedas - Aplicación de Logística y Delivery (Envios DosRuedas)

![Banner de Envios DosRuedas](/public/bannerenvios.webp)

**Envios DosRuedas** es una plataforma web completa de gestión logística de última milla diseñada para optimizar la eficiencia operativa y la mensajería en la ciudad de Mar del Plata, Argentina. La aplicación proporciona una experiencia digital de vanguardia para clientes finales (empleando el voseo argentino: _hablá_, _cotizá_, _tenés_).

---

## 🎯 Propósito del Proyecto y Metas del Negocio

El sistema busca digitalizar la experiencia del cliente para el ciclo de vida de la mensajería y delivery de última milla. Sus objetivos fundamentales son:

1. **Cotización Dinámica Instantánea**: Proveer estimaciones automáticas basadas en rangos de distancia real mapeados por coordenadas geográficas.
2. **Consistencia de Marca Avanzada**: Consolidar la identidad visual futurista e industrial de la marca a través de tokens de diseño semánticos aplicados rigurosamente mediante Tailwind y el Stitch Design System.

---

## 🌐 Páginas Públicas Oficiales

La estructura del portal se define estrictamente bajo el siguiente alcance funcional de 13 rutas:

- **Página Principal / Home (`src/app/page.tsx`)**:
  Implementa una estructura de carga optimizada dividida por la línea de pliegue. Renderiza de forma crítica el componente `HeroAnimado` above the fold, seguido por `VisionSection`, `ServicesOverview`, `CtaSection`, `EmprendedoresHome`, `SliderServicios`, `CarruselRedes` y `Footer`. Operando sobre un tema de fondo oscuro `#050810` con acentos de selección `#3b82f6` (`blue-500/30`).
- **Contacto (`src/app/contacto/page.tsx`)**:
  Página centralizada para canales de comunicación, empleando WhatsApp, teléfono y atención personalizada para logística y mensajería en Mar del Plata.
- **Sobre Nosotros (`src/app/nosotros/sobre-nosotros/page.tsx`)**:
  _"Conoce la historia de Envios DosRuedas, tu aliado confiable en mensajería y delivery en Mar del Plata. 4.9 estrellas en Google Reviews. Compromiso, rapidez y confiabilidad."_
- **Preguntas Frecuentes (`src/app/nosotros/preguntas-frecuentes/page.tsx`)**:
  Centro de soporte para dudas comunes sobre coberturas, horarios y operación, implementado con optimización SEO mediante JSON-LD (Schema FAQ).
- **Nuestras Redes (`src/app/nosotros/nuestras-redes/page.tsx`)**:
  Portal de comunidad para emprendedores locales. Agrupa flujos sociales (Instagram/Facebook) y el registro a la newsletter.
- **Envíos Express (`src/app/servicios/envios-express/page.tsx`)**:
  _"La solución premium para operaciones de alta criticidad horaria. Vos tenés el control total: elegí el rango exacto de entrega con certeza absoluta."_
- **Envíos LowCost (`src/app/servicios/envios-lowcost/page.tsx`)**:
  _"Variabilizá tus costos logísticos con nuestro servicio de ruteo masivo inteligente. La mejor tarifa de Mar del Plata sin sacrificar seguridad."_
- **Envíos Flex MercadoLibre (`src/app/servicios/enviosflex/page.tsx`)**:
  _"Somos expertos en la logística de MercadoLibre. Optimizamos tus entregas Same-Day para que tu medidor siempre esté en verde y vos solo te enfoques en vender."_
- **Plan Emprendedores (`src/app/servicios/plan-emprendedores/page.tsx`)**:
  _"Tercerización integral con integración vertical. Transformá tu estructura de gasto fijo en soluciones escalables que acompañan el crecimiento de tu negocio."_ (Logística 3PL y Cuentas Corrientes para E-Commerce).
- **Términos y Condiciones (`src/app/terminos-y-condiciones/page.tsx`)**:
  Información legal y operativa que rige la provisión de los servicios.
- **Política de Privacidad (`src/app/politica-de-privacidad/page.tsx`)**:
  Información detallada sobre la recopilación y manejo de los datos de clientes.
- **Cotizador de Envíos Express (`src/app/cotizar/express/page.tsx`)**:
  _"Calcula el precio de tus envíos express en Mar del Plata de forma rápida y sencilla. Ingresa origen y destino para obtener tu cotización al instante."_
- **Cotizador LowCost (`src/app/cotizar/lowcost/page.tsx`)**:
  Herramienta de presupuestación especializada para distribución por volumen y ruteo masivo.

Cualquier otra ruta existente en el repositorio (ej. paneles de administración, aplicaciones de repartidores o dashboards internos) se considera obsoleta, fuera del alcance funcional y susceptible a eliminación.

---

## 🛠️ Stack Tecnológico Activo

El stack tecnológico ha sido perfilado para soportar estrictamente las interfaces de las páginas analizadas:

- **Framework**: [Next.js](https://nextjs.org/) (con App Router, React 19)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/) (modo estricto)
- **Base de Datos y ORM**: [PostgreSQL](https://www.postgresql.org/) gestionado con [Prisma ORM v7](https://www.prisma.io/) (Consultas solo lectura de cotizaciones)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Componentes UI**: [Shadcn/ui](https://ui.shadcn.com/) y [Radix UI](https://www.radix-ui.com/)
- **Animación e Interacción**: [Framer Motion](https://www.framer.com/motion/) y [@paper-design/shaders-react](https://github.com/) para fondos de canvas dinámicos.
- **Iconografía**: [Lucide React](https://lucide.dev/)

---

## 🚀 Cómo Empezar

Sigue estos pasos para levantar el proyecto en un entorno de desarrollo local.

### 1. Prerrequisitos

- Node.js (v18 o superior)
- Bun (o npm/pnpm)
- Una base de datos PostgreSQL activa

### 2. Instalar Dependencias

```bash
pnpm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:

```env
# URL de conexión a tu base de datos PostgreSQL
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/envios_dos_ruedas"
```

### 4. Sincronizar la Base de Datos

Este comando leerá tu `schema.prisma` y creará las tablas correspondientes.

```bash
pnpm prisma db push
```

### 5. Ejecutar el Proyecto

```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`.
