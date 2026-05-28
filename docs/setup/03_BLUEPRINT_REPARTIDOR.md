
# Blueprint de Implementación: Módulo de Repartidor

Este documento guía la creación del portal de repartidores, una interfaz dedicada para la gestión de sus entregas.

## 1. Autenticación y Acceso

-   **Sistema de "Login"**: No se utiliza un sistema de usuario/contraseña tradicional.
-   **Página de Selección (`/repartidor`)**:
    -   Muestra una lista de todos los `Repartidor` activos obtenidos de la base de datos.
    -   Cada repartidor en la lista es un enlace a su dashboard personal (ej. `/repartidor/[id]`).

## 2. Estructura de Archivos y Rutas

-   **Layout Principal (`/repartidor/[id]/layout.tsx` - si es necesario)**: Un layout que envuelva las páginas del repartidor, incluyendo una barra lateral de navegación y un header.
    -   **Componentes**: `RepartidorDashboardLayout`, `Sidebar`, `Header`, `BottomNav`.
-   **Dashboard (`/repartidor/[id]/page.tsx`)**:
    -   Página principal del repartidor. Muestra un resumen de su jornada actual (estadísticas, progreso) y acciones rápidas.
    -   **Componentes**: `QuickActions`, `RecentActivity`, `DailyProgress`, `WeatherWidget`.
-   **Asignación de Etiquetas (`/repartidor/[id]/asignar/page.tsx`)**:
    -   Permite al repartidor agregarse etiquetas a su jornada actual.
    -   **Componentes**: `AssignEtiqueta`, que a su vez orquesta:
        -   `BarcodeScanner`: Para escanear códigos de barra/QR.
        -   `EtiquetaSelector`: Para elegir de una lista de etiquetas disponibles.
        -   Un campo de texto para ingreso manual del número de orden.
-   **Hoja de Ruta (`/repartidor/[id]/ruta/page.tsx`)**:
    -   Muestra la lista de entregas para la jornada actual (un `Reparto`).
    -   Permite al repartidor iniciar viajes y marcar entregas.
    -   **Componentes**: `RepartidorRutaDashboard`, `HojaDeRutaRepartidor`.
-   **Gestión de Entrega (`/repartidor/entrega/[etiquetaId]/page.tsx`)**:
    -   Formulario para registrar una entrega **exitosa**.
    -   **Componentes**: `SignatureForm` para capturar nombre, DNI y firma del receptor.
-   **Gestión de Incidencia (`/repartidor/no-entregada/[etiquetaId]/page.tsx`)**:
    -   Formulario para registrar una entrega **fallida**.
    -   **Componentes**: `NoEntregadaForm` para seleccionar motivo, agregar observaciones y tomar una foto de prueba.

## 3. Lógica de Negocio y Acciones del Servidor

-   **Creación de Jornada (`Reparto`)**: Al asignarse la primera `Etiqueta` del día, se debe crear un registro en la tabla `Reparto` para ese `repartidorId` y la fecha actual. Las etiquetas posteriores del mismo día se asocian al `repartoId` existente.
-   **Asignación de Etiqueta (`assignEtiquetaByOrderNumber`)**:
    1.  Busca la `Etiqueta` por su `orderNumber`.
    2.  Valida que no esté ya asignada.
    3.  Encuentra o crea el `Reparto` del día.
    4.  Actualiza la `Etiqueta` con el `repartidorId` y `repartoId`, y cambia su `status` a 'RECOLECTADO'.
    5.  Crea un nuevo registro en `HistorialEtiqueta`.
-   **Prueba de Entrega (`saveEntrega`)**:
    1.  Sube la imagen de la firma a Supabase Storage (bucket: `firmas-entregas`).
    2.  Crea un registro en la tabla `Entrega` con los datos del receptor y la URL de la firma.
    3.  Actualiza el `status` de la `Etiqueta` a 'ENTREGADA'.
    4.  Crea un nuevo registro en `HistorialEtiqueta`.
-   **Registro de Incidencia (`saveIncidenciaAction`)**:
    1.  Sube la foto de prueba a Supabase Storage (bucket: `incidencias`).
    2.  Crea un registro en la tabla `Incidencia` con el motivo, observaciones y la URL de la foto.
    3.  Actualiza el `status` de la `Etiqueta` a 'NO_ENTREGADA'.
    4.  Crea un nuevo registro en `HistorialEtiqueta`.
