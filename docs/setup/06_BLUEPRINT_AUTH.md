# Blueprint de Implementación: Módulo de Autenticación de Usuarios

Este documento guía la implementación de un sistema de login y registro de usuarios, manteniendo la coherencia visual y arquitectónica del proyecto.

## 1. Stack Tecnológico y Pautas

- **Framework**: Next.js (con App Router).
- **Lenguaje**: TypeScript.
- **UI**: React, componentes de `shadcn/ui`.
- **Estilos**: Tailwind CSS, usando los colores del tema (`primary`, `secondary`, `background`).
- **Backend**: **Supabase** para la base de datos de usuarios.
- **Autenticación**: Basada en **Server Actions** y cookies seguras (`httpOnly`).

## 2. Base de Datos (Supabase)

Se requiere una nueva tabla `Users` en la base de datos PostgreSQL.

**Tabla: `Users`**
- **Propósito**: Almacenar las credenciales y datos básicos de los usuarios registrados.
- **Columnas**:
    - `id` (uuid, PK, default: `gen_random_uuid()`)
    - `name` (text, not null)
    - `email` (text, not null, unique)
    - `password` (text, not null) - **Importante**: Almacenar siempre el hash de la contraseña, nunca el texto plano. Usar una librería como `bcrypt`.
    - `createdAt` (timestampz, default: `now()`)

## 3. Estructura de Archivos y Rutas

-   `/src/app/login/page.tsx`: Página pública para el formulario de inicio de sesión.
-   `/src/app/registro/page.tsx`: Página pública para el formulario de registro.
-   `/src/app/perfil/page.tsx`: Página protegida de ejemplo para el perfil del usuario.
-   `/src/components/auth/LoginForm.tsx`: Componente de cliente con el formulario de login.
-   `/src/components/auth/RegisterForm.tsx`: Componente de cliente con el formulario de registro.
-   `/src/lib/auth/actions.ts`: Server Actions para `login` y `register`.
-   `/src/lib/auth/session.ts`: Funciones para gestionar la sesión (crear/validar token).
-   `/src/middleware.ts`: Middleware para proteger rutas que requieren autenticación.

## 4. Flujo de Implementación

### Paso 1: Páginas y Componentes de Formulario

**`src/app/login/page.tsx`**
- Un Server Component que renderiza `<LoginForm />` en un layout centrado.
- Debe tener un diseño similar a `/admin/login`, con el logo y los títulos correspondientes.

**`src/components/auth/LoginForm.tsx` (`'use client'`)**
- Utiliza `useActionState` para manejar la lógica del formulario.
- Contiene campos para `email` y `password`.
- Muestra mensajes de error del servidor y de validación del cliente.
- Incluye un enlace a la página de registro.

**`src/app/registro/page.tsx`**
- Server Component que renderiza `<RegisterForm />`.

**`src/components/auth/RegisterForm.tsx` (`'use client'`)**
- Utiliza `useActionState`.
- Contiene campos para `name`, `email`, `password` y `confirmPassword`.
- Incluye validación del lado del cliente para asegurar que las contraseñas coinciden.
- Enlace a la página de login.

### Paso 2: Lógica de Autenticación (Server Actions)

**`src/lib/auth/actions.ts` (`'use server'`)**

- **`login(formData)`**:
    1. Valida los datos `email` y `password` con Zod.
    2. Busca en la tabla `Users` un usuario con el email proporcionado.
    3. Si el usuario no existe, devuelve un error de credenciales.
    4. Compara el hash de la contraseña de la base de datos con la contraseña proporcionada usando `bcrypt.compare`.
    5. Si la contraseña es incorrecta, devuelve un error.
    6. Si las credenciales son válidas, crea un token de sesión (JWT) y lo establece en una cookie `httpOnly`.
    7. Redirige al usuario a su página de perfil (`/perfil`).

- **`register(formData)`**:
    1. Valida los datos `name`, `email` y `password` con Zod.
    2. Verifica si ya existe un usuario con ese email. Si es así, devuelve un error.
    3. Genera un hash de la contraseña usando `bcrypt.hash`.
    4. Inserta el nuevo usuario en la tabla `Users` con la contraseña hasheada.
    5. Si el registro es exitoso, redirige al usuario a la página de login con un mensaje de éxito.

### Paso 3: Middleware para Proteger Rutas

**`src/middleware.ts`**
- El middleware debe ser actualizado para proteger nuevas rutas como `/perfil`.
- Lógica:
    1. Verifica la existencia y validez de la cookie de sesión (ej. `auth-token`).
    2. Si el usuario intenta acceder a una ruta protegida (ej. `/perfil`) y no tiene un token válido, lo redirige a `/login`.
    3. Si el usuario está autenticado e intenta acceder a `/login` o `/registro`, lo redirige a `/perfil`.

Este blueprint proporciona una guía completa para construir un sistema de autenticación robusto, seguro y visualmente integrado con el resto de la aplicación.