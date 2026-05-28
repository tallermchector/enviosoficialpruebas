
# Blueprint de Implementación: Módulo de Clientes

Este documento describe la creación del portal de clientes (`/seguimiento`) y la gestión de sus datos asociados.

## 1. Autenticación y Acceso

-   **Sistema de "Login" sin Contraseña**: El acceso se basa en el número de teléfono del cliente.
-   **Página de Búsqueda (`/seguimiento/page.tsx`)**:
    -   Es un **Client Component**.
    -   Presenta un campo para que el usuario ingrese su número de teléfono.
    -   Al buscar, llama a la Server Action `getClientShipmentProfile`.
-   **Manejo de Sesión**:
    -   Si la búsqueda es exitosa, los datos del cliente y su historial de envíos se guardan en `localStorage` para simular una sesión.
    -   Si el usuario vuelve a la página, se intentará cargar el perfil desde `localStorage` antes de mostrar el formulario de búsqueda.
    -   Debe existir una función de "logout" que limpie el `localStorage` y devuelva al usuario al formulario de búsqueda.

## 2. Estructura de Archivos y Rutas

-   **Portal Principal del Cliente (`/seguimiento/page.tsx`)**:
    -   Orquesta la lógica de login/logout y el renderizado condicional.
    -   Si el cliente está "logueado", renderiza el componente `ClientPortal`.
    -   Si no, muestra el formulario de búsqueda de teléfono.
-   **Componente `ClientPortal`**:
    -   Muestra el dashboard del cliente.
    -   Contiene un `PortalHeader` con el nombre del cliente y enlaces de navegación del portal.
    -   Utiliza `EtiquetasToolbar` para permitir al cliente filtrar sus envíos.
    -   Renderiza `ClientEtiquetasTable` para mostrar la lista de sus envíos.
-   **Detalle del Envío (`/seguimiento/[id]/page.tsx`)**:
    -   Página pública que muestra el estado detallado de un envío específico.
    -   **Componentes**: `InteractiveTrackingMap`, `OrderStatus`, `UpdatesTimeline`, `DriverInfo` (si aplica), `ProofOfDelivery` (si está entregado).
-   **Gestión de Destinatarios (`/seguimiento/destinatarios/page.tsx`)**:
    -   Página para que el cliente administre su libreta de direcciones.
    -   **Componentes**: `DestinatariosPage`, que a su vez usa `DestinatariosTable` y `DestinatarioForm` dentro de un diálogo modal.
-   **Crear Etiqueta desde el Portal (`/seguimiento/etiqueta/nueva/page.tsx`)**:
    -   Permite a un cliente "logueado" crear un nuevo envío.
    -   El formulario `EtiquetaForm` se precarga con los datos del remitente (el cliente actual).
-   **Crear Etiquetas en Lote (`/seguimiento/etiquetaslote/page.tsx`)**:
    -   Permite al cliente seleccionar múltiples destinatarios de su libreta de direcciones y generar varias etiquetas a la vez.

## 3. Lógica de Negocio y Acciones del Servidor

-   **`getClientShipmentProfile(phone)`**:
    1.  Busca en la tabla `Client` un cliente cuyo `phone` coincida.
    2.  Si lo encuentra, busca en la tabla `Etiqueta` todos los envíos donde el `remitenteTelefono` o `destinatarioTelefono` coincida con el teléfono del cliente.
    3.  Devuelve el perfil del cliente y su lista de etiquetas asociadas.
-   **`getOrderTrackingDetails(etiquetaId)`**:
    1.  Busca la `Etiqueta` por su `id`.
    2.  Obtiene los datos del `Repartidor` asociado (si existe).
    3.  Obtiene todos los registros de la tabla `HistorialEtiqueta` para esa etiqueta, ordenados por fecha.
    4.  Obtiene la prueba de entrega de la tabla `Entrega` (si existe).
    5.  Formatea y devuelve todos los datos necesarios para la página de seguimiento.
-   **Acciones de Destinatarios (`upsertDestinatario`, `deleteDestinatario`)**:
    -   Gestionan el CRUD para la tabla `client_destinos`, asegurándose de que cada operación esté asociada al `client_id` correcto.
    -   `upsertDestinatario` debe incluir una llamada a `geocodeAddress` para guardar las coordenadas del destinatario.
