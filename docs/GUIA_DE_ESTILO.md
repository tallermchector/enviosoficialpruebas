# Guía de Estilo Gráfico del Proyecto

Este documento establece las pautas de diseño y estilo visual para asegurar la coherencia en toda la aplicación "Envios DosRuedas".

## 1. Stack Tecnológico de UI

-   **Framework de Estilos**: **Tailwind CSS**. Se debe utilizar para todo el estilizado, prefiriendo clases de utilidad sobre CSS personalizado.
-   **Sistema de Componentes**: **shadcn/ui**. Es la librería de componentes base. Se debe priorizar su uso para elementos comunes como botones, tarjetas, diálogos, etc.
-   **Iconografía**: **lucide-react**. Todos los iconos deben provenir de esta librería para mantener un estilo visual consistente.

## 2. Paleta de Colores

La paleta de colores se define mediante variables CSS en `src/app/globals.css`. Utiliza siempre las clases de Tailwind que consumen estas variables (ej. `bg-primary`, `text-secondary`, `border-border`).

### Colores Principales (Tema Claro)

-   **Primary**: `hsl(221.2 83.2% 53.3%)` - El azul principal de la marca.
    -   Foreground: `hsl(210 40% 98%)` (Texto sobre primario)
-   **Secondary**: `hsl(45 93% 47%)` - El amarillo/naranja de acento.
    -   Foreground: `hsl(26 83% 14%)` (Texto sobre secundario)
-   **Background**: `hsl(0 0% 100%)` - Fondo principal de la aplicación.
-   **Foreground**: `hsl(222.2 84% 4.9%)` - Texto principal sobre el fondo.
-   **Card**: `hsl(0 0% 100%)` - Fondo para componentes tipo tarjeta.
-   **Accent**: `hsl(210 40% 96.1%)` - Color para indicar selección o foco sutil.
-   **Destructive**: `hsl(0 84.2% 60.2%)` - Color para acciones peligrosas o de error (rojo).
-   **Border**: `hsl(214.3 31.8% 91.4%)` - Color para bordes.
-   **Input**: `hsl(214.3 31.8% 91.4%)` - Borde para campos de formulario.
-   **Ring**: `hsl(222.2 84% 4.9%)` - Color para el anillo de foco.

*(Nota: El tema oscuro tiene su propio conjunto de variables definidas en el mismo archivo `globals.css`)*.

## 3. Tipografía

El proyecto utiliza dos fuentes principales definidas a través de variables CSS:

-   **`font-display`**: **Orbitron**. Se debe usar para títulos principales, cabeceras de sección y elementos de alto impacto visual.
-   **`font-sans`**: **Roboto**. Es la fuente por defecto para el cuerpo del texto, párrafos, descripciones y la mayoría de los elementos de la interfaz.

## 4. Componentes y Diseño

-   **Consistencia**: Utiliza los componentes de `shadcn/ui` (`Button`, `Card`, `Input`, `Dialog`, etc.) siempre que sea posible para mantener la coherencia en la interacción y el estilo.
-   **Bordes Redondeados**: Aplica bordes redondeados a los elementos interactivos y contenedores. Las variables de radio de `tailwind.config.ts` son:
    -   `lg`: `0.75rem`
    -   `md`: `calc(var(--radius) - 2px)`
    -   `sm`: `calc(var(--radius) - 4px)`
-   **Sombras**: Utiliza sombras (`shadow-md`, `shadow-lg`, `shadow-xl`) para dar profundidad y jerarquía a los elementos, especialmente a las tarjetas (`Card`).
-   **Espaciado**: Utiliza las clases de espaciado de Tailwind (`p-`, `m-`, `space-y-`, `gap-`) de manera consistente para mantener un ritmo visual agradable.
