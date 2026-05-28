# Blueprint del Proyecto: Envios DosRuedas

Este documento sirve como guía y punto de partida para el desarrollo de la aplicación web de Envios DosRuedas.

## 1. Visión General del Proyecto

**Objetivo:** Crear una plataforma web moderna, rápida y confiable para "Envios DosRuedas", que permita a los usuarios cotizar envíos, conocer los servicios y contactar a la empresa, mientras que provee un panel de administración interno para la gestión de la logística.

**Público Objetivo:**
*   Emprendedores y dueños de e-commerce.
*   Restaurantes y locales gastronómicos.
*   Empresas con necesidades de mensajería corporativa.
*   Clientes particulares que necesitan envíos locales.

**Pilares Clave:**
*   **Confianza y Profesionalismo:** El diseño y la comunicación deben transmitir seguridad.
*   **Eficiencia y Rapidez:** La experiencia de usuario debe ser fluida, desde la cotización hasta el contacto.
*   **Claridad:** La información sobre servicios y tarifas debe ser fácil de encontrar y entender.

## 2. Página Principal (Homepage - `src/app/page.tsx`)

La página principal es la carta de presentación de la empresa. Su objetivo es captar la atención del visitante, comunicar la propuesta de valor y guiarlo hacia las acciones clave (cotizar, ver servicios, contactar).

### **Estructura de la Homepage:**

1.  **Header (`OptimizedHeader`):**
    *   Navegación principal clara y accesible.
    *   Logo visible.
    *   Botón de "Cotizar Envío" destacado.

2.  **Sección Hero (`HeroAnimado`):**
    *   **Propósito:** Captar la atención inmediatamente con un titular potente y un visual atractivo.
    *   **Contenido:**
        *   Titular claro y conciso: "Servicio de mensajería y delivery".
        *   Nombre de la marca destacado: "Envios Dosruedas".
        *   Subtítulo que resume la propuesta de valor.
        *   Visual atractivo y dinámico (`RotatingCard`) que muestra la marca.
        *   Llamadas a la acción (CTAs) principales: "Solicitar Servicio" y "Ver Servicios".

3.  **Sección de Visión (`VisionSection`):**
    *   **Propósito:** Generar confianza mostrando la experiencia y el compromiso de la empresa.
    *   **Contenido:**
        *   Estadísticas clave (Clientes, Puntualidad, etc.).
        *   Un carrusel visual que muestre imágenes relacionadas con el negocio para dar un toque humano y profesional.

4.  **Resumen de Servicios (`ServicesOverview`):**
    *   **Propósito:** Presentar los servicios principales de forma visual y concisa.
    *   **Contenido:**
        *   Tarjetas para los 3 servicios clave: Express, Low Cost y Moto Fija.
        *   Cada tarjeta debe tener un ícono representativo, un título claro, una breve descripción y un enlace a la página del servicio.

5.  **Llamada a la Acción Principal (`CtaSection`):**
    *   **Propósito:** Incitar al usuario a realizar una acción clave (cotizar o contactar) en un punto intermedio de la página.
    *   **Contenido:**
        *   Un titular persuasivo.
        *   Botones claros para "Solicitar Cotización" y "Contactanos".

6.  **Sección para Emprendedores (`EmprendedoresHome`):**
    *   **Propósito:** Dirigirse a un segmento clave del público objetivo.
    *   **Contenido:**
        *   Destacar los servicios especiales para negocios y emprendedores (Plan Emprendedores, Flex, Moto Fija).
        *   Visuales atractivos y un CTA que invite a conocer más.

7.  **Carrusel de Servicios Adicionales (`SliderServicios`):**
    *   **Propósito:** Mostrar de forma dinámica otros servicios importantes.
    *   **Contenido:** Un slider interactivo y visualmente atractivo que presente los planes y servicios para negocios.

8.  **Carrusel de Redes Sociales (`CarruselRedes`):**
    *   **Propósito:** Fomentar la comunidad y mostrar la presencia de la marca en redes sociales.
    *   **Contenido:** Un carrusel dinámico que invite a seguir la marca en sus diferentes perfiles.

9.  **Footer (`Footer`):**
    *   Información de contacto, enlaces de navegación, derechos de autor y enlaces a políticas de privacidad.

## 3. Guía de Estilo Visual (Style Guidelines)

La consistencia visual es clave para construir una marca profesional y confiable.

### **Paleta de Colores:**

*   **Primario (`primary`):** Azul oscuro (`#1E40AF`). Utilizado para fondos principales, elementos de navegación y textos importantes. Transmite confianza y profesionalismo.
*   **Secundario / Acento (`secondary`):** Amarillo/Naranja vibrante (`#FBBF24`). Usado para botones de llamada a la acción (CTAs), íconos y elementos que necesitan destacarse. Aporta energía y visibilidad.
*   **Fondo (`background`):** Blanco o un gris muy claro. Proporciona un lienzo limpio que facilita la legibilidad.
*   **Texto (`foreground`):** Un color oscuro (casi negro) sobre fondos claros para un contraste óptimo.

### **Tipografía:**

*   **Fuente para Titulares (`font-display`):** `Orbitron`. Se utiliza para los titulares principales (`h1`, `h2`) para dar un toque moderno y tecnológico que se alinea con la eficiencia del servicio.
*   **Fuente para Cuerpo y UI (`font-sans`):** `Roboto`. Se usa para párrafos, descripciones, etiquetas de botones y otros elementos de la interfaz, garantizando una excelente legibilidad y una apariencia limpia y profesional.
*   **Justificación:** El texto estará alineado a la izquierda por defecto para facilitar la lectura, excepto en componentes de la UI que requieran centrado (ej. sección Hero).

### **Iconografía:**

*   **Estilo:** Utilizar la librería `lucide-react` para asegurar un estilo de iconos limpio, moderno y consistente.
*   **Uso:** Los iconos deben ser representativos de la función que acompañan (ej. un camión para "Servicios", una calculadora para "Cotizar"). Deben ser claros y fácilmente reconocibles.

### **Componentes y Espaciado:**

*   **Tarjetas (`Card`):** Usar bordes redondeados (`rounded-lg`) y una sombra sutil (`shadow-lg` o `shadow-xl` en hover) para dar profundidad y un aspecto moderno.
*   **Botones (`Button`):** Deben tener estados claros para `hover` y `focus`. Los CTAs principales usarán el color secundario para destacar.
*   **Espaciado:** Utilizar un sistema de espaciado consistente basado en TailwindCSS (ej. `p-4`, `p-6`, `gap-8`) para mantener una apariencia ordenada y equilibrada en toda la aplicación.
*   **Imágenes:** Todas las imágenes deben ser de alta calidad y estar optimizadas para la web. Utilizar el componente `next/image` para el lazy loading y la optimización automática. Para imágenes de fondo (ej. en la sección Hero), asegurarse de que haya suficiente contraste con el texto superpuesto, utilizando una superposición de color si es necesario.
