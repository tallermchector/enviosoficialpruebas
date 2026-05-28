
# Módulo de Administración

Este módulo contiene el panel de control principal para la gestión de la aplicación.

## 1. Archivos y Estructura

### a. Login de Administrador

- **Ruta**: `/admin/login`
- **Componente Principal**: `src/app/admin/login/page.tsx`
- **Lógica de Cliente**: `src/components/admin/LoginClientForm.tsx` (Maneja el estado del formulario).
- **Acción de Servidor**: `src/app/admin/login/actions.ts` (Valida las credenciales y establece la cookie de sesión).

### b. Dashboard Principal

- **Ruta**: `/admin`
- **Componente Principal**: `src/app/admin/page.tsx`
- **Componente de Dashboard**: `src/components/admin/AdminDashboard.tsx` (Muestra las tarjetas de navegación).

### c. Layout y Navegación

- **Middleware**: `src/middleware.ts` (Protege todas las rutas `/admin/*` y redirige a `/admin/login` si no hay token).
- **Header**: `src/components/layout/AdminHeader.tsx` (Barra de navegación superior para el panel de admin).
- **Configuración de Navegación**: `src/lib/navigation-admin.ts` (Define los ítems y grupos del menú de administración).

## 2. Código Fuente Detallado

### `src/middleware.ts`

```typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const adminToken = request.cookies.get('admin-auth-token');
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin')) {
    if (pathname !== '/admin/login') {
      if (!adminToken) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
```

### `src/app/admin/login/actions.ts`

```typescript
// src/app/admin/login/actions.ts
'use server';

import type { z } from 'zod';
import { cookies } from 'next/headers';

const loginSchema = {
  username: "",
  password: "",
};


export interface LoginFormState {
  error?: string;
  fieldErrors?: Partial<Record<keyof typeof loginSchema, string[]>>;
  success?: boolean;
  timestamp?: number;
}

const ADMIN_USER = 'EnviosAdmin';
const ADMIN_PASS = 'Vendetta_3317_10';

export async function login(
  prevState: LoginFormState,
  formData: FormData
): Promise<LoginFormState> {
  const username = formData.get('username');
  const password = formData.get('password');

  if (username !== ADMIN_USER || password !== ADMIN_PASS) {
      return {
          error: "Nombre de usuario o contraseña incorrectos.",
          timestamp: Date.now(),
      }
  }

  (await cookies()).set('admin-auth-token', 'your-secret-session-token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 day
    path: '/',
  });
  
  return { success: true, timestamp: Date.now() };
}

export async function logout() {
  (await cookies()).delete('admin-auth-token');
}
```

### `src/app/admin/login/page.tsx`

```typescript
// src/app/admin/login/page.tsx
import { LoginClientForm } from "@/components/admin/LoginClientForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Acceso de Administrador",
  description: "Inicia sesión para acceder al panel de administración de Envios DosRuedas.",
   robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <LoginClientForm />
    </div>
  );
}
```

### `src/app/admin/page.tsx`

```typescript
// src/app/admin/page.tsx
import { AdminHeader } from "@/components/layout/AdminHeader";
import { Footer } from "@/components/homenew/footer";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Panel de Administración",
  description: "Panel de control central para la administración de Envios DosRuedas.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <AdminHeader />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-2 font-display">Panel de Administración</h1>
            <p className="text-lg text-muted-foreground font-sans">Gestiona todos los aspectos de la aplicación desde aquí.</p>
        </div>
        <AdminDashboard />
      </main>
      <Footer />
    </div>
  );
}
```

### `src/lib/navigation-admin.ts`

```typescript
// src/lib/navigation-admin.ts
import {
  LayoutDashboard, Ticket, Users, Settings, Bike, UserSearch
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AdminNavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  description: string;
  color: string;
  bgColor: string;
}

export interface AdminNavGroup {
    label: string;
    icon: LucideIcon;
    description: string;
    items: AdminNavItem[];
}

export const adminNavItems: (AdminNavItem | AdminNavGroup)[] = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: LayoutDashboard,
    description: "Vista general del panel de administración.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
  },
  {
    label: "Gestión",
    icon: Settings,
    description: "Administra los componentes clave del negocio.",
    items: [
        {
            href: "/admin/clientes",
            label: "Clientes",
            icon: Users,
            description: "Administra la base de datos de clientes.",
            color: "text-cyan-500",
            bgColor: "bg-cyan-50",
        },
        {
            href: "/admin/clientes/portal",
            label: "Portal Cliente",
            icon: UserSearch,
            description: "Busca un cliente y ve su historial de envíos.",
            color: "text-sky-500",
            bgColor: "bg-sky-50",
        },
        {
            href: "/admin/repartidores",
            label: "Repartidores",
            icon: Bike,
            description: "Gestiona la flota y las hojas de ruta.",
            color: "text-fuchsia-500",
            bgColor: "bg-fuchsia-50",
        },
    ],
  },
  {
    href: "/admin/etiquetas",
    label: "Etiquetas",
    icon: Ticket,
    description: "Crea y administra etiquetas de envío.",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
];
```
