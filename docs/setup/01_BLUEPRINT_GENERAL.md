
# Blueprint General del Proyecto: Envios DosRuedas

Este documento sirve como guía para la implementación inicial del proyecto, centrándose en la configuración general y el módulo de administración.

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
│   │   ├── (main)/           # Rutas públicas (home, contacto, etc.)
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
│   │   ├── navigation.ts     # Archivos de configuración de la navegación
│   │   └── utils.ts          # Funciones de utilidad
│   └── types/
│       └── supabase.ts       # Tipos autogenerados de Supabase
└── supabase/
    └── ...                   # Migraciones y configuración de Supabase
```

## 3. Pautas Generales de Implementación

- **Server Components por Defecto**: Priorizar el uso de React Server Components (RSC) para el fetching de datos y la lógica del lado del servidor.
- **Client Components para Interactividad**: Usar la directiva `"use client";` solo en componentes que requieran interactividad (hooks, manejo de eventos).
- **Server Actions**: Utilizar Server Actions para todas las mutaciones de datos (crear, actualizar, eliminar) desde formularios.
- **Estilo**: Usar clases de Tailwind CSS y componentes de `shadcn/ui`.
- **Autenticación**:
    - **Admin**: Se implementará un sistema simple basado en cookies y un middleware para proteger las rutas `/admin/*`.
    - **Cliente y Repartidor**: El acceso se basará en la selección de un perfil o la búsqueda por un identificador (teléfono), no en un sistema de login tradicional.

---

## 4. Módulo de Administración

Este módulo contiene el panel de control principal para la gestión de la aplicación.

### 4.1. Archivos y Estructura

- **Middleware (Protección de Rutas)**: `src/middleware.ts`
- **Login de Administrador**:
    - Página: `src/app/admin/login/page.tsx`
    - Lógica de Cliente: `src/components/admin/LoginClientForm.tsx`
    - Acción de Servidor: `src/app/admin/login/actions.ts`
- **Dashboard Principal**:
    - Página: `src/app/admin/page.tsx`
    - Componente: `src/components/admin/AdminDashboard.tsx`
- **Layout y Navegación**:
    - Header: `src/components/layout/AdminHeader.tsx`
    - Configuración de Navegación: `src/lib/navigation-admin.ts`

### 4.2. Código Fuente Detallado

**`src/middleware.ts`**
```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const adminToken = request.cookies.get('admin-auth-token');
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    if (!adminToken) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
```

**`src/app/admin/login/actions.ts`**
```typescript
'use server';
import { cookies } from 'next/headers';

// ... (Definir la interfaz LoginFormState)

const ADMIN_USER = 'EnviosAdmin';
const ADMIN_PASS = 'Vendetta_3317_10';

export async function login(prevState: any, formData: FormData): Promise<any> {
  const username = formData.get('username');
  const password = formData.get('password');

  if (username !== ADMIN_USER || password !== ADMIN_PASS) {
    return { error: "Credenciales incorrectas.", timestamp: Date.now() };
  }

  (await cookies()).set('admin-auth-token', 'secret-token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 día
    path: '/',
  });

  return { success: true, timestamp: Date.now() };
}
```

**`src/app/admin/login/page.tsx`**
```typescript
import { LoginClientForm } from "@/components/admin/LoginClientForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Acceso de Administrador",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <LoginClientForm />
    </div>
  );
}
```

**`src/app/admin/page.tsx`**
```typescript
import { AdminHeader } from "@/components/layout/AdminHeader";
import { Footer } from "@/components/homenew/footer";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Panel de Administración",
  robots: { index: false, follow: false },
};

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <AdminHeader />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-2 font-display">Panel de Administración</h1>
            <p className="text-lg text-muted-foreground font-sans">Gestiona todos los aspectos de la aplicación.</p>
        </div>
        <AdminDashboard />
      </main>
      <Footer />
    </div>
  );
}
```
