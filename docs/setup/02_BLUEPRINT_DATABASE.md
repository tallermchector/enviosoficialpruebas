
# Blueprint de la Base de Datos (Supabase - PostgreSQL)

Este documento describe la estructura de la base de datos PostgreSQL para la aplicación "Envios DosRuedas".

## 1. Diagrama de Relaciones (Simplificado)

-   `Client` (1) -> (N) `client_destinos`
-   `Client` (1) -> (N) `Etiqueta` (como remitente)
-   `Repartidor` (1) -> (N) `Reparto`
-   `Reparto` (1) -> (N) `Etiqueta`
-   `Etiqueta` (1) -> (N) `HistorialEtiqueta`
-   `Etiqueta` (1) -> (1) `Entrega` (Prueba de entrega exitosa)
-   `Etiqueta` (1) -> (N) `Incidencia` (Registro de entrega fallida)

## 2. Enums (Tipos Personalizados)

Antes de crear las tablas, crea los siguientes tipos `ENUM`:

-   `ServiceTypeEnum`: ('EXPRESS', 'LOW_COST', 'PUNTO_DE_RETIRO')
-   `EtiquetaStatus`: ('PENDIENTE', 'IMPRESA', 'RECOLECTADO', 'EN_CAMINO', 'ENTREGADA', 'NO_ENTREGADA')

## 3. Tablas Principales

### a. `Client`
-   **Propósito**: Almacena la información de los clientes.
-   **Columnas**:
    -   `id` (bigint, PK, autoincremental)
    -   `name` (text, not null)
    -   `lastName` (text)
    -   `phone` (text, unique)
    -   `email` (text, unique)
    -   `address` (text, not null)
    -   `addressLat` (numeric)
    -   `addressLng` (numeric)
    -   `isActive` (boolean, default: true)
    -   `createdAt`, `updatedAt` (timestampz, default: now())

### b. `Repartidor`
-   **Propósito**: Contiene la información de los repartidores.
-   **Columnas**:
    -   `id` (bigint, PK, autoincremental)
    -   `name` (text, not null)
    -   `phone` (text, not null, unique)
    -   `vehicleType` (text, not null)
    -   `licensePlate` (text, not null, unique)
    -   `isActive` (boolean, default: true)
    -   `createdAt`, `updatedAt` (timestampz, default: now())

### c. `Reparto` (Jornada de Trabajo)
-   **Propósito**: Agrupa las etiquetas de un repartidor para un día específico.
-   **Columnas**:
    -   `id` (bigint, PK, autoincremental)
    -   `repartidorId` (bigint, FK a `Repartidor.id`)
    -   `fecha` (date, not null, default: `now()`)
    -   `estado` (text, default: 'PENDIENTE')
    -   `kilometros_totales` (numeric)
    -   `createdAt`, `updatedAt` (timestampz, default: now())
-   **Constraint**: `UNIQUE(repartidorId, fecha)`

### d. `Etiqueta` (Envíos)
-   **Propósito**: Tabla central para cada envío.
-   **Columnas**:
    -   `id` (bigint, PK, autoincremental)
    -   `orderNumber` (text, unique)
    -   `tipoEnvio` (enum: `ServiceTypeEnum`)
    -   `status` (enum: `EtiquetaStatus`)
    -   `remitenteNombre`, `remitenteTelefono`, `remitenteDireccion`, `remitenteNotas` (text)
    -   `destinatarioNombre`, `destinatarioDireccion`, `destinatarioTelefono`, `destinatarioNotas` (text)
    -   `destinatarioLat`, `destinatarioLng` (numeric)
    -   `montoACobrar` (numeric)
    -   `repartidorId` (bigint, FK a `Repartidor.id`)
    -   `repartoId` (bigint, FK a `Reparto.id`)
    -   `deliveryStartTime`, `deliveryEndTime` (time)
    -   `createdAt`, `updatedAt` (timestampz, default: now())

### e. `HistorialEtiqueta`
-   **Propósito**: Registra cada cambio de estado de una `Etiqueta`.
-   **Columnas**:
    -   `id` (bigint, PK, autoincremental)
    -   `etiquetaId` (bigint, FK a `Etiqueta.id`)
    -   `status` (enum: `EtiquetaStatus`)
    -   `descripcion` (text)
    -   `fecha_actualizacion` (timestampz, default: now())

### f. `Entrega`
-   **Propósito**: Prueba de entrega exitosa.
-   **Columnas**:
    -   `id` (bigint, PK, autoincremental)
    -   `etiquetaId` (bigint, unique, FK a `Etiqueta.id`)
    -   `receptorNombre`, `receptorDni` (text, not null)
    -   `firmaUrl` (text) - URL a la imagen de la firma.
    -   `createdAt` (timestampz, default: now())

### g. `Incidencia`
-   **Propósito**: Registro de entrega fallida.
-   **Columnas**:
    -   `id` (bigint, PK, autoincremental)
    -   `etiquetaId` (bigint, FK a `Etiqueta.id`)
    -   `motivo` (text, not null)
    -   `observaciones` (text)
    -   `fotoUrl` (text) - URL a la imagen de prueba.
    -   `createdAt` (timestampz, default: now())

## 4. Tablas Secundarias

### h. `client_destinos` (Libreta de Direcciones)
-   **Propósito**: Almacena destinatarios frecuentes para un cliente.
-   **Columnas**:
    -   `id` (bigint, PK, autoincremental)
    -   `client_id` (bigint, FK a `Client.id`)
    -   `name`, `phone`, `address`, `notes` (text)
    -   `addressLat`, `addressLng` (numeric)
-   **Constraint**: `UNIQUE(client_id, name, address)`

### i. `PriceRange` (Tarifas)
-   **Propósito**: Define tarifas por distancia y tipo de servicio.
-   **Columnas**:
    -   `id` (bigint, PK, autoincremental)
    -   `serviceType` (enum: `ServiceTypeEnum`)
    -   `distanciaMinKm`, `distanciaMaxKm` (numeric)
    -   `precioRango` (numeric)
    -   `isActive` (boolean, default: true)
-   **Constraint**: `UNIQUE(serviceType, distanciaMinKm, distanciaMaxKm)`

## 5. RLS (Row Level Security)

-   **Acción**: Activa RLS para todas las tablas (`ALTER TABLE ... ENABLE ROW LEVEL SECURITY;`). Las políticas específicas se definirán posteriormente según los roles de usuario.
