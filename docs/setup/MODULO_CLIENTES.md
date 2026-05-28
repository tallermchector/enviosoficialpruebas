
# Módulo de Clientes

Este módulo se encarga del alta, baja, modificación y consulta de clientes. Incluye tanto la gestión interna desde el panel de admin como un portal de consulta para los propios clientes.

## 1. Archivos y Estructura

### a. Gestión de Clientes (Admin)

- **Ruta Principal**: `/admin/clientes`
- **Página de Listado y Creación**: `src/app/admin/clientes/page.tsx`
- **Página de Edición**: `src/app/admin/clientes/[id]/page.tsx`
- **Acciones de Servidor**: `src/app/admin/clientes/actions.ts` (Contiene `createClientAction`, `updateClientAction`, `toggleClientStatus`, y `geocodeAddress`).
- **Componentes de UI**:
    - `src/components/admin/clientes/ClientsTable.tsx` (Tabla para listar clientes).
    - `src/components/admin/clientes/CreateClientForm.tsx` (Formulario de creación).
    - `src/components/admin/clientes/EditClientForm.tsx` (Formulario de edición).

### b. Portal de Consulta de Clientes (Admin)

- **Ruta**: `/admin/clientes/portal`
- **Página Principal**: `src/app/admin/clientes/portal/page.tsx`
- **Componentes de UI**:
    - `src/components/admin/clientes/portal/ClientPortal.tsx` (Componente principal que orquesta la búsqueda y visualización).
    - `src/components/admin/clientes/portal/ClientPortalSearchForm.tsx` (Formulario de búsqueda).
    - `src/components/admin/clientes/portal/ClientProfileCard.tsx` (Tarjeta con los datos del cliente).
    - `src/components/admin/clientes/portal/ClientEtiquetasTable.tsx` (Tabla para mostrar los envíos del cliente).

## 2. Lógica Clave

- **Geocodificación**: La acción `geocodeAddress` en `actions.ts` es crucial. Utiliza la API de Google Maps para convertir una dirección en coordenadas (latitud/longitud), que se guardan en la base de datos.
- **Acciones `upsert`**: Las acciones de crear y actualizar (`createClientAction`, `updateClientAction`) utilizan una función interna `upsertClient` para evitar la duplicación de código.
- **Manejo de Estado**: Los formularios utilizan `useActionState` para manejar el estado del formulario del lado del cliente, mostrando errores de validación y mensajes de éxito/error del servidor.

## 3. Código Fuente Detallado

### `src/app/admin/clientes/actions.ts`

```typescript
// src/app/admin/clientes/actions.ts
'use server';

import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import type { Database } from '@/types/supabase';

type Client = Database['public']['Tables']['Client']['Row'];

// ... (incluir la lógica de geocodificación de la versión original)

const clientSchema = z.object({
  id: z.coerce.number().int().optional(),
  name: z.string().min(2, 'El nombre es requerido.'),
  // ... resto de los campos del schema
  address: z.string().min(5, 'La dirección es requerida.'),
  addressLat: z.coerce.number().optional().nullable(),
  addressLng: z.coerce.number().optional().nullable(),
});

// ... (incluir el resto de las acciones: upsertClient, createClientAction, updateClientAction, toggleClientStatus, getClientProfile)
```

### `src/app/admin/clientes/page.tsx` (Listado y Creación)

```typescript
// src/app/admin/clientes/page.tsx
import { createClient } from "@/lib/supabase/server";
// ... otras importaciones

async function getClients(): Promise<Client[]> {
    const supabase = await createClient();
    const { data: clients, error } = await supabase
        .from('Client')
        .select('*')
        .order('createdAt', { ascending: false });

    if (error) {
        console.error("Error fetching clients:", error);
        return [];
    }
    
    return clients;
}

export default async function AdminClientesPage() {
  const clients = await getClients();

  return (
    // ... JSX para la estructura de la página con CreateClientForm y ClientsTable
  );
}
```

### `src/app/admin/clientes/[id]/page.tsx` (Edición)

```typescript
// src/app/admin/clientes/[id]/page.tsx
import { createClient } from "@/lib/supabase/server";
// ... otras importaciones

async function getClient(id: string): Promise<Client | null> {
  const supabase = await createClient();
  const numericId = parseInt(id, 10);
  // ... lógica para obtener un cliente por ID
  return client;
}

export default async function EditClientPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const client = await getClient(params.id);

  if (!client) {
      notFound();
  }

  return (
    // ... JSX con el componente EditClientForm
  );
}
```
