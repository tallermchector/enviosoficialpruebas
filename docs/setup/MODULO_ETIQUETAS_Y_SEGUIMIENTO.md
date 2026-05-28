
# Módulo de Etiquetas y Seguimiento

Este módulo abarca la creación y gestión de "etiquetas" (envíos) desde el panel de administración, y el portal público donde los clientes pueden hacer seguimiento de sus envíos.

## 1. Archivos y Estructura

### a. Gestión de Etiquetas (Admin)

- **Ruta Principal**: `/admin/etiquetas`
- **Página de Listado**: `src/app/admin/etiquetas/page.tsx` (Renderiza `EtiquetasClientPage`).
- **Página de Creación/Edición**: `src/app/admin/etiquetas/[id]/page.tsx` (Usa `EtiquetaClientPage` para manejar la lógica).
- **Acciones de Servidor**: `src/app/admin/etiquetas/actions.ts` (Contiene `upsertEtiqueta`, `updateEtiquetaStatus`, `updateEtiquetasStatus`).
- **Componentes de UI**:
    - `src/components/admin/etiquetas/EtiquetasClientPage.tsx` (Maneja filtros, selección e impresión).
    - `src/components/admin/etiquetas/EtiquetasToolbar.tsx` (Barra de herramientas con filtros).
    - `src/components/admin/etiquetas/EtiquetasTable.tsx` (Tabla de etiquetas).
    - `src/components/admin/etiquetas/EtiquetaForm.tsx` (Formulario de creación/edición).
    - `src/components/admin/etiquetas/EtiquetaPrintLayout.tsx` (Diseño para impresión).

### b. Portal de Seguimiento de Clientes

- **Ruta de Búsqueda**: `/seguimiento`
- **Componente Principal**: `src/app/seguimiento/page.tsx` (Componente cliente que maneja el "login" por teléfono y muestra el portal).
- **Ruta de Detalle de Envío**: `/seguimiento/[id]`
- **Página de Detalle**: `src/app/seguimiento/[id]/page.tsx` (Muestra el estado, mapa e historial de un envío).
- **Acciones de Servidor**: `src/app/seguimiento/actions.ts` (Contiene `getOrderTrackingDetails` y `getClientShipmentProfile`).
- **Componentes de UI**:
    - `src/components/client/ClientPortal.tsx` (Dashboard principal del cliente).
    - `src/components/tracking/PortalHeader.tsx` (Header para el portal de cliente).
    - `src/components/tracking/interactive-tracking-map.tsx` (Mapa interactivo).
    - `src/components/tracking/order-status.tsx`, `updates-timeline.tsx`, `driver-info.tsx`, etc. (Componentes de visualización de datos).

## 2. Lógica Clave

- **Impresión de Etiquetas**: `EtiquetasClientPage` maneja la selección de etiquetas. Cuando se imprime, utiliza el componente `EtiquetaPrintLayout` y las media queries de CSS (`@media print`) para formatear la salida. Después de imprimir, una acción de servidor actualiza el estado de las etiquetas a "Impresa".
- **Login sin Contraseña**: El portal de `/seguimiento` no usa un sistema de login tradicional. Busca al cliente por número de teléfono y guarda los datos en `localStorage` para simular una sesión.
- **Historial de Estados**: Cada vez que el estado de una etiqueta cambia (ej. de "Pendiente" a "En Camino"), se debe crear un nuevo registro en la tabla `HistorialEtiqueta` para poder reconstruir la línea de tiempo del envío. La acción `getOrderTrackingDetails` consulta esta tabla.

## 3. Código Fuente Detallado

### `src/app/admin/etiquetas/actions.ts`

```typescript
// src/app/admin/etiquetas/actions.ts
'use server';

// ... importaciones
const EtiquetaFormSchema = z.object({
  // ... definición del esquema del formulario
});

export async function upsertEtiqueta(
  prevState: EtiquetaFormState,
  formData: FormData
): Promise<EtiquetaFormState> {
    // ... lógica de validación
    
    // ... lógica de geocodificación
    
    // ... lógica de inserción/actualización en la tabla 'Etiqueta'
    
    if (resultEtiqueta) {
      // Crear registro en la tabla 'HistorialEtiqueta'
      await supabase.from('HistorialEtiqueta').insert({
        etiquetaId: resultEtiqueta.id,
        status: resultEtiqueta.status,
        descripcion: id ? 'Etiqueta actualizada' : 'Etiqueta creada',
      });
    }

    revalidatePath('/admin/etiquetas');
    revalidatePath(`/seguimiento/${resultEtiqueta?.id}`);

    // ... retornar estado
}

export async function updateEtiquetasStatus(ids: number[], status: EtiquetaStatus): Promise<{...}> {
  // ... lógica para actualizar estado en lote
  
  // Crear registros en 'HistorialEtiqueta' para cada ID
  const historyEntries = ids.map(id => ({...}));
  await supabase.from('HistorialEtiqueta').insert(historyEntries);
  
  revalidatePath('/admin/etiquetas');
  // ...
}
```

### `src/app/seguimiento/actions.ts`

```typescript
// src/app/seguimiento/actions.ts
'use server';
// ... importaciones

export async function getOrderTrackingDetails(etiquetaId: string): Promise<{...}> {
    // ... lógica para obtener la etiqueta por ID
    
    // Obtener la prueba de entrega si existe
    const { data: proofOfDelivery, error: proofError } = await supabase
        .from('Entrega')
        .select('*')
        .eq('etiquetaId', etiqueta.id)
        .single();
    
    // Obtener el historial completo de la tabla 'HistorialEtiqueta'
    const { data: historial, error: historialError } = await supabase
        .from('HistorialEtiqueta')
        .select('*')
        .eq('etiquetaId', etiqueta.id)
        .order('fecha_actualizacion', { ascending: false });

    // ... lógica para formatear los datos y retornarlos
}
```

### `src/app/seguimiento/[id]/page.tsx`

```typescript
// src/app/seguimiento/[id]/page.tsx
"use client";

// ... importaciones de hooks y componentes

export default function TrackingDetailPage() {
  const params = useParams();
  const etiquetaId = Array.isArray(params.id) ? params.id[0] : params.id;
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  // ... estados de carga y error

  useEffect(() => {
    if (etiquetaId) {
      const fetchTrackingData = async () => {
        // ... llamar a la server action getOrderTrackingDetails
      };
      fetchTrackingData();
    }
  }, [etiquetaId]);

  // ... JSX para mostrar los componentes de seguimiento (mapa, timeline, etc.)
}
```
