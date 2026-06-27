------------------------------
## Brand Book: ENVÍOS DOSRUEDAS## Identidad de Marca y Guía de Estilo
------------------------------
## 1. Introducción
ENVÍOS DOSRUEDAS es la solución líder y de confianza en servicios de motomensajería y logística de última milla para e-commerce en Mar del Plata. Nuestra marca proyecta una estructura organizada, velocidad urbana y máxima seguridad en el traslado, combinando tecnología de seguimiento con el realismo y la calidez humana del comercio local.
------------------------------
## 2. Paleta de Colores
Nuestra identidad visual se construye sobre un esquema de contraste agresivo y alta visibilidad en la vía pública, diseñado para actuar como un ancla visual en el entorno urbano de MDP.

| Color | Nombre | Hex | RGB | Uso Estratégico |
|---|---|---|---|---|
| Egyptian Blue | #0636A5 | (6, 54, 165) | Color dominante (60-70%). Transmite autoridad, respaldo institucional y seguridad. | |
| Sunbeam Yellow | #FFEC01 | (255, 236, 1) | Color de acento e impacto. Dirige la atención a CTAs, alertas y elementos de marca en movimiento. | |
| White | #FFFFFF | (255, 255, 255) | Soporte y contraste. Garantiza la máxima legibilidad y limpieza visual en fondos y textos. | |

------------------------------
## 3. Jerarquía Tipográfica Estricta
El sistema tipográfico está configurado para ser leído de forma instantánea a alta velocidad (en banners digitales y cajas de motos en movimiento), asegurando un acabado profesional, nítido y realista, alejado de estéticas futuristas o de ciencia ficción.

* Títulos Principales (H1 - H4): Anton
* Regla de Aplicación: Se renderiza SIEMPRE EN MAYÚSCULAS.
   * Uso: Slogans de alto impacto, títulos de banners, textos gigantes de fondo y branding en laterales de cajas de motos.
* Subtítulos y Botones (CTA): Bebas Neue
* Regla de Aplicación: Enfoque condensado y de lectura directa.
   * Uso: Subtítulos secundarios, etiquetas de botones de acción y datos clave destacados.
* Cuerpos de Texto y Etiquetas: Inter
* Regla de Aplicación: Tipografía técnica, limpia y de alta legibilidad en pantallas.
   * Uso: Bloques de texto en la web, descripciones cortas en posts, direcciones, placeholders y números de contacto.

------------------------------
## 4. Frases Fuerza (Slogans de Alto Impacto)
Mensajes comerciales directos diseñados bajo la estructura tipográfica de la marca para captar al e-commerce local de Mar del Plata:

   1. "TU SOLUCIÓN CONFIABLE." (Slogan Principal - Enfoque Referencia)
   2. "TUS VENTAS EN LAS MEJORES MANOS."
   3. "CONECTAMOS TU NEGOCIO CON TODA LA CIUDAD."
   4. "LOGÍSTICA HUMANA Y EFICIENTE PARA MAR DEL PLATA."
   5. "ENTREGAS RÁPIDAS. CLIENTES FELICES."

------------------------------
## 5. Directrices de Composición para Banners y Redes Sociales
Para replicar el éxito visual del formato digital sin depender de fondos fotográficos continuos, cada pieza gráfica debe estructurarse bajo los siguientes tres pilares visuales:

   1. Fondo Geométrico Sólido: Base en Egyptian Blue (#0636A5). Se permite el uso de líneas de cuadrícula finas o bloques rectangulares superpuestos en variaciones sutiles del mismo azul para simular profundidad física real sin saturar.
   2. Texto Ancla Vertical: Ubicar la palabra "ENVÍOS" o "MDP" en el lateral izquierdo en tipografía Anton (Mayúsculas), a gran escala y con baja opacidad (estilo marca de agua física), reforzando el realismo tipográfico.
   3. Elemento Central Realista: Incorporar un render tridimensional detallado de la caja de reparto o el equipamiento de la moto ploteado en Sunbeam Yellow (#FFEC01). Este objeto debe proyectar sombras físicas y difusas sobre el fondo azul para romper la bidimensionalidad de la pantalla de manera natural.

------------------------------
## 6. Aplicación Técnica (CSS Variables Actualizadas)
Estructura de código limpia y adaptada para el desarrollo web de la plataforma, incluyendo el sistema completo de tres fuentes tipográficas:

:root {
    /* Paleta Cromática Exacta */
    --color-egyptian-blue: #0636A5;
    --color-sunbeam-yellow: #FFEC01;
    --color-white: #FFFFFF;

    /* Jerarquía Tipográfica Estricta */
    --font-title: 'Anton', sans-serif;       /* Forzar text-transform: uppercase en CSS */
    --font-subtitle: 'Bebas Neue', sans-serif;
    --font-body: 'Inter', sans-serif;
}
/* Regla de Oro para Títulos */
h1, h2, h3, h4, .text-impact {
    font-family: var(--font-title);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
/* Regla para Botones de Acción Directa */
.cta-button {
    font-family: var(--font-subtitle);
    background-color: var(--color-sunbeam-yellow);
    color: var(--color-egyptian-blue);
}

------------------------------
