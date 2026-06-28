# PLAN DE LIMPIEZA DE RUTAS

## Objetivos del Plan
Este documento es un reporte técnico generado tras una auditoría exhaustiva del directorio `src/app/`. Su objetivo es identificar y sugerir para eliminación definitiva todas aquellas rutas, carpetas y componentes huérfanos que NO pertenecen a las 13 páginas que conforman el alcance oficial y funcional de la aplicación pública.

## Justificación General
El proyecto ha sido refactorizado para enfocarse exclusivamente en la experiencia del cliente final y la cotización de servicios de mensajería, consolidando una aplicación pública de alto rendimiento. Las rutas listadas a continuación pertenecen a flujos de trabajo internos, herramientas administrativas, paneles de repartidores, pruebas conceptuales (prototipos) o características depreciadas. Mantener este código muerto en el repositorio principal incrementa los tiempos de compilación, complica la superficie de mantenimiento, introduce posibles vulnerabilidades y genera ruido en la navegación del proyecto. 

Por lo tanto, se sugiere su eliminación definitiva del espacio de trabajo.

## Rutas y Archivos Fuera de Alcance Sugeridos para Eliminación

A continuación se listan los directorios y archivos huérfanos encontrados dentro de `src/app/`:

### 1. Panel de Administración y Herramientas Internas
Todo el directorio `src/app/admin/` y sus subrutas están fuera del alcance de la aplicación cliente.
- `src/app/admin/` (y todos los archivos `page.tsx`, `actions.ts` dentro de este directorio)
- `src/app/admin/etiquetas/`
- `src/app/admin/crea-imagenes/` (y subcarpetas `hero`, `servicios`, `ui-optimizer`, `generales`, `optimas`)
- `src/app/admin/add-post/`
- `src/app/admin/clientes/`
- `src/app/admin/ordenes/`
- `src/app/admin/prompts/`
- `src/app/admin/repartidores/`
- `src/app/admin/login/`
- `src/app/admin/cotizaciones/`

### 2. Flujo de Repartidores
El sistema de gestión operativo en calle ha sido depreciado en este alcance.
- `src/app/repartidor/`
- `src/app/repartidor/[id]/`

### 3. Gestión y Seguimiento de Órdenes del Cliente
Las vistas dinámicas de cuentas de usuario y tracking activo quedan fuera del scope enfocado en cotización y landing.
- `src/app/ordenes/` (incluyendo `loading.tsx` y `actions.ts`)
- `src/app/seguimiento/` (incluyendo `loading.tsx` y `actions.ts`)
- `src/app/onboarding/`

### 4. Entornos de Prueba y Prototipado
Directorios de experimentación visual que no pertenecen al código de producción final.
- `src/app/prototypes/`
- `src/app/demo-shader/`

## Conclusión y Próximos Pasos
Se recomienda ejecutar un script de borrado recursivo sobre los directorios listados (`rm -rf`) y posteriormente limpiar las dependencias, componentes de UI e importaciones que pudieran haber quedado huérfanas en las carpetas `src/components/`, `src/lib/`, etc., garantizando un entorno de desarrollo prístino y enfocado en el cliente final.
