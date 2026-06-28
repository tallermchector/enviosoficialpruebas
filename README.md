# Envíos DosRuedas

![Banner de Envios DosRuedas](/public/bannerenvios.webp)

Gestioná la logística de tus envíos en Mar del Plata, Argentina. Esta plataforma brinda una interfaz urbana para coordinar entregas en el mismo día.

---

## Propósito del proyecto

Esta aplicación automatiza la logística y el ruteo de envíos. Podés alcanzar estas metas clave:
- **Cotización dinámica**: calculá precios al instante según coordenadas
- **Consistencia de marca**: aplicá colores y tipografías consistentes mediante el sistema de diseño

---

## Páginas públicas oficiales

El portal organiza las rutas activas para clientes:
- **Página principal (`src/app/page.tsx`)**: carga la estructura de la landing page
- **Contacto (`src/app/contacto/page.tsx`)**: muestra canales de comunicación y números de atención
- **Sobre nosotros (`src/app/nosotros/sobre-nosotros/page.tsx`)**: muestra historia y opiniones locales
- **Preguntas frecuentes (`src/app/nosotros/preguntas-frecuentes/page.tsx`)**: responde consultas comunes de logística
- **Nuestras redes (`src/app/nosotros/nuestras-redes/page.tsx`)**: conecta emprendedores locales
- **Envíos express (`src/app/servicios/envios-express/page.tsx`)**: detalla opciones de entrega horaria crítica
- **Envíos lowcost (`src/app/servicios/envios-lowcost/page.tsx`)**: detalla opciones de distribución masiva
- **Envíos flex MercadoLibre (`src/app/servicios/enviosflex/page.tsx`)**: detalla envíos en el día para e-commerce
- **Plan emprendedores (`src/app/servicios/plan-emprendedores/page.tsx`)**: explica cuentas corrientes logísticas (3PL)
- **Propiedades MDP (`src/app/propiedades/page.tsx`)**: muestra opciones inmobiliarias seleccionadas
- **Términos y condiciones (`src/app/terminos-y-condiciones/page.tsx`)**: muestra términos legales de servicios
- **Política de privacidad (`src/app/politica-de-privacidad/page.tsx`)**: detalla el manejo y protección de datos
- **Cotizador express (`src/app/cotizar/express/page.tsx`)**: cotiza servicios de envío express
- **Cotizador lowcost (`src/app/cotizar/lowcost/page.tsx`)**: cotiza servicios de distribución por volumen

---

## Stack tecnológico activo

El repositorio utiliza estas herramientas:
- **Framework**: Next.js 16 (App Router, React 19)
- **Lenguaje**: TypeScript (modo estricto)
- **Base de datos**: Prisma ORM v7 (conector PostgreSQL)
- **Estilizado**: Tailwind CSS v4
- **Componentes**: Shadcn/ui (Radix UI)
- **Animaciones**: Framer Motion

---

## Cómo empezar

Seguí estos pasos para levantar el servidor local:

### 1. Instalar dependencias

Ejecutá este comando en el directorio raíz:
```bash
pnpm install
```

### 2. Configurar variables de entorno

Creá un archivo `.env` en la raíz del proyecto:
```env
DATABASE_URL="postgresql://usuario:contrasea@localhost:5432/envios_dos_ruedas"
```

### 3. Sincronizar la base de datos

Sincronizá el esquema de base de datos:
```bash
pnpm prisma db push
```

### 4. Ejecutar el proyecto

Iniciá el servidor local:
```bash
pnpm dev
```
El servidor local corre en `http://localhost:3000`.
