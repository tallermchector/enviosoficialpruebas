
# Blueprint de Implementación: Módulo de Administración

Este documento detalla la implementación del panel de administración (`/admin`), el centro de control para la gestión de la aplicación.

## 1. Autenticación y Seguridad

-   **Middleware (`src/middleware.ts`)**:
    -   **Propósito**: Proteger todas las rutas bajo `/admin/*`.
    -   **Lógica**:
        1.  Verificar la existencia de una cookie de autenticación (ej. `admin-auth-token`).
        2.  Si el usuario intenta acceder a una ruta de admin (que no sea `/admin/login`) y no tiene el token, redirigirlo a `/admin/login`.
        3.  Si el token existe, permitir el acceso.
-   **Página de Login (`/admin/login/page.tsx`)**:
    -   Contiene el formulario de inicio de sesión.
    -   Utiliza un **Client Component** (`LoginClientForm`) para manejar el estado del formulario.
-   **Acción de Login (`src/app/admin/login/actions.ts`)**:
    -   Es una **Server Action**.
    -   Recibe el usuario y la contraseña del formulario.
    -   Valida las credenciales contra valores hardcodeados (para simplicidad) o contra la base de datos.
    -   Si las credenciales son correctas, establece la cookie de sesión (`admin-auth-token`).
    -   Si son incorrectas, devuelve un mensaje de error.
-   **Acción de Logout**:
    -   Una Server Action que elimina la cookie de sesión y redirige al login.

## 2. Estructura de Archivos y Rutas

-   **Layout de Administración**: Todas las páginas de admin deben usar un layout consistente que incluya el `AdminHeader`.
-   **Dashboard (`/admin/page.tsx`)**:
    -   Punto de entrada al panel.
    -   Muestra una grilla de tarjetas de navegación que enlazan a las diferentes secciones de gestión.
    -   **Componente**: `AdminDashboard`, que renderiza los ítems definidos en `src/lib/navigation-admin.ts`.
-   **Gestión de Clientes (`/admin/clientes`)**:
    -   Página principal (`page.tsx`) para listar y crear clientes.
        -   **Componentes**: `ClientsTable` y `CreateClientForm`.
    -   Página de edición (`[id]/page.tsx`) para modificar un cliente existente.
        -   **Componente**: `EditClientForm`.
    -   Acciones (`actions.ts`) para `create`, `update`, y `toggle status` de clientes, incluyendo la lógica de geocodificación de direcciones.
-   **Gestión de Repartidores (`/admin/repartidores`)**:
    -   Estructura similar a la de Clientes, con una página para listar/crear y un formulario para editar.
    -   **Componentes**: `RepartidoresTable`, `RepartidorForm`.
    -   Acciones para `create`, `update`, `delete` de repartidores.
-   **Gestión de Etiquetas (`/admin/etiquetas`)**:
    -   Página principal (`page.tsx`) que renderiza un componente cliente (`EtiquetasClientPage`) para manejar la interactividad.
    -   **Componentes**:
        -   `EtiquetasToolbar`: Para filtros por estado, fecha y búsqueda.
        -   `EtiquetasTable`: Para listar las etiquetas con opciones de edición, impresión y cambio de estado.
    -   Página de creación/edición (`[id]/page.tsx`): Contiene el formulario `EtiquetaForm`.
    -   **Componente de Impresión (`EtiquetaPrintLayout`)**: Un componente con estilos específicos para `@media print`, que se renderiza en una sección `print-only` de la página.
-   **Portal de Cliente (Admin View) (`/admin/clientes/portal`)**:
    -   Permite al administrador buscar un cliente por teléfono y ver su perfil completo y su historial de envíos, reutilizando los componentes del portal de cliente.
