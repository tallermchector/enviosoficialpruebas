# Informe Técnico para Migración y Optimización

## 1. Stack Tecnológico Actual

*   **Framework**: **Next.js 15.5.6** con **App Router**.
*   **Lenguaje**: **TypeScript**.
*   **Librerías de UI**: **React** con componentes de **shadcn/ui**.
*   **Estilos**: **Tailwind CSS**.
*   **Gestión de Estado**: Principalmente **React Hooks** (`useState`, `useEffect`) y **Server Actions** con `useActionState` para gestionar el estado de los formularios. No se utiliza una librería de estado global como Redux o Zustand.
*   **Generative AI**: **Genkit** para la implementación de flujos de IA.

## 2. Estructura del Proyecto

El proyecto sigue una estructura moderna basada en el App Router de Next.js, con una clara separación de responsabilidades.

```
/
├── public/               # Archivos estáticos (imágenes, fuentes)
├── src/
│   ├── app/              # Rutas de la aplicación (App Router)
│   │   ├── (admin)/      # Rutas del panel de administración (protegidas)
│   │   ├── (main)/       # Rutas públicas principales
│   │   ├── api/          # Rutas de API
│   │   └── ...           # Páginas de servicios, contacto, etc.
│   ├── components/       # Componentes de React reutilizables
│   │   ├── admin/        # Componentes específicos del panel de admin
│   │   ├── homenew/      # Componentes de la nueva home
│   │   └── ui/           # Componentes base de ShadCN UI
│   ├── lib/              # Utilidades, hooks y configuraciones
│   │   ├── context/      # Contexto para flujos de IA
│   │   └── supabase/     # Clientes de Supabase (servidor y cliente)
│   ├── ai/               # Lógica de IA con Genkit
│   │   ├── flows/        # Flujos de Genkit
│   │   └── genkit.ts     # Configuración de Genkit
│   └── types/            # Definiciones de tipos (ej. supabase.ts)
├── supabase/             # Configuración y migraciones de Supabase
└── ...                   # Archivos de configuración (next.config.ts, tsconfig.json, etc.)
```

## 3. Dependencias Clave

*   **Core**: `next`, `react`, `typescript`.
*   **UI/Estilos**: `tailwindcss`, `shadcn-ui`, `lucide-react`, `framer-motion`.
*   **Backend (BaaS)**: `@supabase/ssr`, `@supabase/supabase-js`.
*   **IA**: `genkit`, `@genkit-ai/googleai`, `@genkit-ai/next`.
*   **Formularios**: `react-hook-form`, `zod`.
*   **Mapas**: `leaflet`, `react-leaflet`, `@react-google-maps/api`.

## 4. Flujo de Datos

*   **Peticiones al Backend**: Las interacciones con la base de datos de Supabase se realizan principalmente a través de **Server Actions** de Next.js, definidas en archivos `actions.ts`.
*   **Gestión de Estado**:
    *   **Estado Local**: Se maneja con `useState` y `useEffect` en los componentes de cliente.
    *   **Estado de Formularios**: Se gestiona con `react-hook-form` y `useActionState`, permitiendo una integración nativa con las Server Actions para validación y manejo de respuestas.
    *   **Estado Global**: No hay una librería de estado global implementada. El estado se pasa a través de props o se obtiene directamente en Server Components.

## 5. Autenticación y Backend

*   **Backend**: **Supabase** actúa como el Backend as a Service (BaaS).
    *   **Base de Datos**: PostgreSQL de Supabase.
    *   **Storage**: Supabase Storage se utiliza para almacenar archivos como las firmas de entrega.
*   **Autenticación**:
    *   **Panel de Administración**: Se utiliza un sistema de **autenticación personalizado** basado en cookies (`admin-auth-token`), gestionado a través de un **Middleware** (`src/middleware.ts`) que protege las rutas `/admin/*`.
    *   **Portal de Clientes/Repartidores**: Se basa en la identificación a través de un número de teléfono o ID, sin un sistema de sesión con contraseña tradicional. El perfil del cliente se guarda en `localStorage` para persistir la "sesión".

## 6. Funcionalidades Críticas

*   **Panel de Administración**: Completo CRUD para Clientes, Repartidores, Etiquetas (Envíos) y Tarifas.
*   **Portal de Cliente**: Permite a los clientes ver su historial de envíos, crear nuevas etiquetas y gestionar sus datos de perfil y destinatarios.
*   **Portal de Repartidor**: Permite a los repartidores ver y gestionar sus jornadas de reparto, hoja de ruta, y registrar el estado de las entregas (incluyendo prueba con firma y foto).
*   **Generación de Prompts con IA**: Herramientas internas en el panel de admin para generar prompts contextualizados para la creación de imágenes y la replicación de componentes/páginas.
*   **Cotizador de Envíos**: Calculadora de precios basada en la distancia (geolocalización) y el tipo de servicio.
