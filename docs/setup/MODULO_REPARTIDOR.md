
# Módulo de Repartidor

Este módulo proporciona un portal para que los repartidores gestionen sus entregas, vean sus hojas de ruta y registren el estado de cada envío.

## 1. Archivos y Estructura

- **Ruta Principal**: `/repartidor`
- **Página de Selección de Perfil**: `src/app/repartidor/page.tsx` (Muestra una lista de repartidores activos para "iniciar sesión").
- **Dashboard del Repartidor**: `src/app/repartidor/[id]/page.tsx` (Página principal con resumen y acciones rápidas).
- **Hoja de Ruta**: `src/app/repartidor/[id]/ruta/page.tsx` (Muestra la lista de entregas de la jornada actual).
- **Asignación de Etiquetas**: `src/app/repartidor/[id]/asignar/page.tsx` (Permite al repartidor escanear o seleccionar etiquetas para añadirlas a su ruta).
- **Página de Entrega Exitosa**: `src/app/repartidor/entrega/[etiquetaId]/page.tsx` (Formulario para capturar firma y datos del receptor).
- **Página de Entrega Fallida**: `src/app/repartidor/no-entregada/[etiquetaId]/page.tsx` (Formulario para registrar una incidencia).
- **Acciones de Servidor**:
    - `src/app/admin/repartidores/actions.ts`: Contiene la lógica para `assignEtiquetaByOrderNumber`.
    - `src/app/repartidor/entrega/actions.ts`: Contiene `saveEntrega` para guardar la prueba de entrega.
    - `src/app/repartidor/no-entregada/actions.ts`: Contiene `saveIncidenciaAction` para registrar entregas fallidas.
- **Componentes de UI**:
    - `src/components/repartidor/dashboard/RepartidorDashboardLayout.tsx`: Layout principal con sidebar y header para el portal.
    - `src/components/repartidor/AssignEtiqueta.tsx`: Orquesta los métodos de asignación (escáner, lista, manual).
    - `src/components/repartidor/BarcodeScanner.tsx`: Componente de cliente que utiliza `html5-qrcode` para escanear códigos.
    - `src/components/repartidor/ruta/DesktopEtiquetasTable.tsx` y `MobileEtiquetaCard.tsx`: Muestran la lista de entregas.
    - `src/components/repartidor/entrega/SignatureForm.tsx`: Formulario con canvas para la firma.
    - `src/components/repartidor/no-entregada/NoEntregadaForm.tsx`: Formulario para reportar incidencias.

## 2. Lógica Clave

- **Jornadas de Reparto (Tabla `Reparto`)**: Cuando un repartidor se asigna su primera etiqueta del día, se debe crear un nuevo registro en la tabla `Reparto`. Todas las etiquetas posteriores de ese día se asociarán a ese `repartoId`.
- **Asignación de Etiquetas**: La acción `assignEtiquetaByOrderNumber` es central. Busca la etiqueta, encuentra o crea la jornada de reparto del día, y actualiza la etiqueta con el `repartidorId` y `repartoId`.
- **Prueba de Entrega**: La acción `saveEntrega` maneja la subida de la imagen de la firma a Supabase Storage y luego crea un registro en la tabla `Entrega` con la URL de la imagen y los datos del receptor.
- **Registro de Incidencias**: Similar a la prueba de entrega, `saveIncidenciaAction` sube una foto a Storage y guarda los detalles en la tabla `Incidencia`.
- **Actualización de Estado**: Tanto `saveEntrega` como `saveIncidenciaAction` deben actualizar el `status` de la `Etiqueta` correspondiente a "ENTREGADA" o "NO_ENTREGADA" y crear una entrada en `HistorialEtiqueta`.

## 3. Código Fuente Detallado

### `src/app/admin/repartidores/actions.ts` (Fragmento de Asignación)

```typescript
// src/app/admin/repartidores/actions.ts

export async function assignEtiquetaByOrderNumber(
    repartidorId: number,
    orderNumber: string
): Promise<{...}> {
    // 1. Buscar la etiqueta por orderNumber.
    // 2. Verificar que no esté ya asignada a otro repartidor o a un reparto.
    // 3. Buscar un 'Reparto' activo para hoy y ese repartidor.
    // 4. Si no existe, crear un nuevo 'Reparto' para hoy.
    // 5. Actualizar la 'Etiqueta' con repartidorId, repartoId y cambiar el estado a 'RECOLECTADO'.
    // 6. Revalidar las rutas necesarias.
}
```

### `src/app/repartidor/entrega/actions.ts`

```typescript
// src/app/repartidor/entrega/actions.ts
'use server';

// ... importaciones y schema

export async function saveEntrega(formData: FormData): Promise<EntregaFormState> {
  // ... validación de datos
  
  // 1. Subir la imagen de la firma (formData.get('firma')) a Supabase Storage.
  const { data: storageData, error: storageError } = await supabase.storage
    .from('firmas')
    .upload(filePath, firma);

  // ... manejo de errores
  const { data: { publicUrl } } = supabase.storage.from('firmas').getPublicUrl(storageData.path);
  
  // 2. Insertar en la tabla 'Entrega' los datos del receptor y la firmaUrl.
  
  // 3. Actualizar el estado de la 'Etiqueta' a 'ENTREGADA'.
  
  // 4. Insertar un nuevo registro en 'HistorialEtiqueta'.
  
  // 5. Revalidar rutas.
}
```

### `src/components/repartidor/BarcodeScanner.tsx`

```typescript
// src/components/repartidor/BarcodeScanner.tsx
'use client';
import { Html5Qrcode, Html5QrcodeScanType } from 'html5-qrcode';
// ... otras importaciones

export function BarcodeScanner({ onScan }: { onScan: (barcode: string) => void }) {
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    // Lógica para inicializar Html5Qrcode
    const html5QrCode = new Html5Qrcode(qrcodeRegionId, false);
    
    // Configuración (fps, qrbox, etc.)
    
    // Iniciar el escáner
    html5QrCode.start(
      { facingMode: "environment" },
      config,
      onScanSuccess, // Llama a onScan(decodedText)
      onScanFailure
    ).catch(err => {
      // Manejar errores de cámara
    });

    // Función de limpieza para detener la cámara al desmontar
    return () => {
      if (scannerRef.current?.isScanning) {
        scannerRef.current.stop();
      }
    };
  }, [onScan]);

  return (
    <div id="html5qr-code-full-region" />
  );
}
```
