
# Guía General del Proyecto: Envios DosRuedas

Este documento proporciona una visión general del stack tecnológico, la estructura del proyecto y las pautas generales para la construcción de la aplicación "Envios DosRuedas".

## 1. Stack Tecnológico

La aplicación se construirá utilizando las siguientes tecnologías:

- **Framework**: Next.js (con App Router)
- **Lenguaje**: TypeScript
- **UI**: React
- **Estilos**: Tailwind CSS
- **Componentes UI**: shadcn/ui
- **Base de Datos (BaaS)**: Supabase
- **IA Generativa**: Genkit (Firebase)

## 2. Estructura de Directorios Principal

El proyecto debe seguir una estructura clara y modular.

```
/
├── src/
│   ├── app/
│   │   ├── (admin)/          # Rutas protegidas del panel de administración
│   │   ├── (main)/           # Rutas públicas (home, contacto, etc. - NO SE IMPLEMENTARÁN)
│   │   ├── repartidor/       # Portal de repartidores
│   │   ├── seguimiento/      # Portal de clientes
│   │   ├── api/              # Rutas de API (si son necesarias)
│   │   └── layout.tsx        # Layout principal
│   ├── components/
│   │   ├── admin/            # Componentes para el panel de admin
│   │   ├── client/           # Componentes para el portal de cliente
│   │   ├── repartidor/       # Componentes para el portal de repartidor
│   │   └── ui/               # Componentes de ShadCN
│   ├── lib/
│   │   ├── supabase/         # Configuración del cliente de Supabase
│   │   ├── navigation*.ts    # Archivos de configuración de la navegación
│   │   └── utils.ts          # Funciones de utilidad
│   └── types/
│       └── supabase.ts       # Tipos autogenerados de Supabase
└── supabase/
    └── ...                   # Migraciones y configuración de Supabase
```

## 3. Pautas Generales de Implementación

- **Server Components por Defecto**: Priorizar el uso de React Server Components (RSC) para el fetching de datos y la lógica del lado del servidor.
- **Client Components para Interactividad**: Usar la directiva `"use client";` solo en componentes que requieran interactividad (hooks, manejo de eventos).
- **Server Actions**: Utilizar Server Actions para todas las mutaciones de datos (crear, actualizar, eliminar) desde formularios. Esto centraliza la lógica en el servidor y mejora la seguridad.
- **Estilo**: Usar clases de Tailwind CSS para el estilizado y aprovechar los componentes de `shadcn/ui` para construir la interfaz.
- **Autenticación**:
    - **Admin**: Se implementará un sistema simple basado en cookies y un middleware para proteger las rutas `/admin/*`.
    - **Cliente y Repartidor**: El acceso se basará en la selección de un perfil o la búsqueda por un identificador (teléfono), no en un sistema de login tradicional con contraseña.

A continuación, se detallan los módulos específicos a implementar.
