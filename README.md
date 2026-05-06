# Envios DosRuedas - Aplicación de Logística y Delivery

![Banner de Envios DosRuedas](/public/bannerenvios.webp)

**Envios DosRuedas** es una aplicación web completa y moderna para una empresa de mensajería y delivery. Construida con Next.js y el App Router, esta plataforma ofrece una experiencia de usuario fluida tanto para clientes como para administradores y repartidores.

---

## ✨ Características Principales

La aplicación se divide en tres portales principales: el sitio público para clientes, un panel de administración y un portal para repartidores.

### 🌐 Portal Público y Clientes

-   **Página de Inicio Dinámica**: Presentación atractiva de los servicios y la visión de la empresa.
-   **Descripción de Servicios**: Páginas detalladas para cada tipo de servicio (Express, Low-Cost, Moto Fija, Plan Emprendedores, etc.).
-   **Cotizador de Envíos**: Herramienta interactiva con integración de Google Maps para calcular el costo de los envíos Express y Low-Cost.
-   **Generación de Órdenes**: Formulario avanzado para que los clientes (o personal interno) puedan crear nuevas órdenes de envío, buscando o registrando clientes sobre la marcha.
-   **Seguimiento de Pedidos**: Interfaz para que los clientes puedan rastrear el estado y la ubicación de sus envíos en tiempo real (simulado).
-   **Panel de Repartidor**: Portal para que los repartidores puedan ver y gestionar su hoja de ruta diaria.
-   **Contenido Informativo**: Secciones "Sobre Nosotros", "Preguntas Frecuentes" y "Nuestras Redes" con un feed de publicaciones sociales.

### 🚀 Panel de Administración (`/admin`)

-   **Dashboard Central**: Vista general con acceso rápido a todas las secciones de gestión.
-   **Gestión de Clientes**: Sistema completo para crear, visualizar, editar y cambiar el estado de los clientes, con geolocalización de direcciones.
-   **Gestión de Órdenes**: Visualización y eliminación de todas las órdenes generadas en el sistema.
-   **Gestión de Tarifas**: Tablas editables para administrar los rangos de precios de los servicios Express y Low-Cost.
-   **Gestión de Repartidores**: Administración de la flota de repartidores y visualización de sus hojas de ruta diarias.
-   **Creación de Etiquetas**: Formulario para generar e imprimir etiquetas de envío estandarizadas.
-   **Gestión de Contenido Social**: Formulario para añadir nuevas publicaciones al feed de la página "Nuestras Redes".
-   **Herramienta de IA**: Generador de "prompts" para crear imágenes consistentes con la marca utilizando modelos de IA.

### 🏍️ Portal de Repartidores (`/repartidor`)

-   **Selección de Perfil**: Página de inicio para que cada repartidor seleccione su perfil.
-   **Dashboard Personalizado**: Vista centrada en las tareas del repartidor.
-   **Asignación de Entregas por Escáner**: Funcionalidad para **escanear códigos de barras** con la cámara del móvil, asignando automáticamente la etiqueta a su hoja de ruta y actualizando su estado a "En Camino".
-   **Hoja de Ruta Interactiva**: Listado de las entregas del día, con la capacidad de filtrar y cambiar el estado de cada una a "Entregada" o "No Entregada".

---

## 🛠️ Stack Tecnológico

-   **Framework**: [Next.js](https://nextjs.org/) (con App Router)
-   **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
-   **Base de Datos**: [PostgreSQL](https://www.postgresql.org/)
-   **ORM**: [Prisma](https://www.prisma.io/) con Accelerate
-   **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
-   **Componentes UI**: [Shadcn/ui](https://ui.shadcn.com/)
-   **Formularios**: [React Hook Form](https://react-hook-form.com/) con [Zod](https://zod.dev/) para validación.
-   **Mapas**: [Google Maps Platform](https://maps.google.com)
-   **Inteligencia Artificial**: [Google Genkit](https://firebase.google.com/docs/genkit)
-   **Escaneo de Códigos de Barras**: [react-zxing](https://github.com/continuation-ftw/react-zxing)

---

## 🚀 Cómo Empezar

Sigue estos pasos para levantar el proyecto en un entorno de desarrollo local.

### 1. Prerrequisitos

-   Node.js (v18 o superior)
-   Bun (o npm/yarn)
-   Una base de datos PostgreSQL.

### 3. Instalar Dependencias

Se recomienda usar `bun` para una instalación más rápida.

```bash
bun install
```

### 4. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:

```env
# URL de conexión a tu base de datos PostgreSQL
# Ejemplo: postgresql://user:password@host:port/database
DATABASE_URL="tu_database_url_aqui"

# API Key de Google Maps para la geolocalización y mapas
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="tu_google_maps_api_key_aqui"

# API Key para Genkit (si usas las funcionalidades de IA)
GEMINI_API_KEY="tu_gemini_api_key_aqui"
```

### 5. Sincronizar la Base de Datos

Este comando leerá tu `schema.prisma` y creará las tablas correspondientes en tu base de datos.

```bash
bunx prisma db push
```

### 6. Ejecutar el Proyecto

```bash
bun run dev
```

La aplicación estará disponible en `http://localhost:3000`.

---

## 📂 Estructura del Proyecto

El proyecto sigue la estructura del App Router de Next.js.

-   `src/app/`: Contiene todas las rutas de la aplicación.
    -   `src/app/api/`: Rutas de API (si fueran necesarias).
    -   `src/app/admin/`: Rutas protegidas del panel de administración.
    -   `src/app/repartidor/`: Rutas del portal de repartidores.
-   `src/components/`: Componentes de React reutilizables.
    -   `src/components/ui/`: Componentes base de Shadcn/ui.
    -   `src/components/admin/`: Componentes específicos del panel de administración.
    -   `src/components/repartidor/`: Componentes del portal de repartidores.
-   `src/lib/`: Funciones de utilidad, configuración de Prisma y navegación.
-   `src/app/actions.ts`: Server Actions para formularios y mutaciones de datos.
-   `prisma/`:
    -   `schema.prisma`: Define el esquema de la base de datos.
-   `public/`: Archivos estáticos como imágenes y logos.

---

## 🔐 Acceso al Panel de Administración

Para acceder al panel de administración, utiliza las siguientes credenciales en la página `/admin/login`:

-   **Usuario**: `EnviosAdmin`
-   **Contraseña**: `Vendetta_3317_10`

*Nota: Estas credenciales están hardcodeadas en `src/app/admin/login/actions.ts` y deben ser cambiadas por un sistema de autenticación real en un entorno de producción.*
