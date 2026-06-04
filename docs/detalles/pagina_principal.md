# Prompt de Especificación y Contenidos de la Página Principal (e:\proyectos\01EnviosDosRueda\src\app\page.tsx)

Este documento contiene el prompt detallado y la especificación técnica/funcional de los componentes que integran la página principal de **Envíos DosRuedas**. Está diseñado para que cualquier agente de IA o desarrollador pueda replicar o refactorizar la Landing Page respetando el copywriting original, la jerarquía de secciones, los enlaces y los recursos gráficos.

***

## 🚀 PROMPT DE CONSTRUCCIÓN Y REPLICACIÓN DE LA PÁGINA PRINCIPAL

```markdown
Actúa como un Senior Frontend Engineer con experiencia en Next.js, React 19 y Tailwind CSS. Tu objetivo es reconstruir la estructura y los contenidos de la página principal (Landing Page) para la plataforma logística **Envíos DosRuedas** en Mar del Plata.

La página principal debe componerse de las siguientes secciones estructuradas y con carga optimizada (Lazy Loading para las secciones "Below the Fold"):

---

### 📦 ESPECIFICACIONES DE SECCIÓN POR SECCIÓN

#### 1. Cabecera Optimizada (`OptimizedHeader`)
- **Logo**: Imagen `/LogoEnviosDosRuedas.webp` con animación al hacer hover (giro de 6 grados y escala de 1.10).
- **Texto de Marca**: "Envíos Dosruedas" y el slogan inferior: "tu solución confiable" en minúsculas.
- **Navegación Desktop**:
  - Enlaces de navegación con transiciones.
  - "Inicio" (icono Home), menú desplegable de "Nosotros" (Sobre Nosotros, Preguntas Frecuentes, Nuestras Redes), menú desplegable de "Servicios" (Envíos Express, Envíos LowCost, Envíos Flex, E-Commerce & 3PL), y enlace a "Contacto" (icono Mail).
- **Acción Derecha**: Enlace telefónico visible en pantallas grandes (`tel:+5492236602699`) con icono de teléfono animado y texto "+54 223 660-2699".
- **Botón Destacado**: "Cotizar Envío" (icono de Calculadora) con comportamiento responsivo.

#### 2. Sección Principal / Hero (`HeroAnimado`)
- **Animaciones de Entrada**: Entrada progresiva con retraso (fade-in-up, duration-1000) en el badge, título, descripción y botones.
- **Badge Superior**: "Tu Solución Confiable" con indicador de pulso y fondo translúcido.
- **Título Principal**:
    - Texto: "Mensajería y Logística E-Commerce en Mar del Plata"
    - Estilo: Todo en mayúsculas, itálica en desktop.
- **Descripción**: "Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata. Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío."
- **Botones de Acción**:
  - **CTA Primario**: "Solicitar Servicio" con icono `ArrowRight` que se desplaza a la derecha en hover. Enlace: `/cotizar/express`.
  - **CTA Secundario**: "Ver Servicios" con icono de `Play`, rodeado de un círculo translúcido que escala en hover. Enlace: `/servicios/envios-express`.
- **Badges de Confianza Inferiores**:
  - "100% SEGURO" (icono `ShieldCheck`)
  - "ULTRA RÁPIDO" (icono `Zap`)
  - "COBERTURA TOTAL" (icono `Globe`)
- **Elementos Visuales Flotantes (`HeroVisuals`)**: Tarjetas holográficas flotantes con estados simulados: "EN TRÁNSITO", "VERIFICADO", mapa de fondo (`/hero/mapa_background.jpeg`) y cajas de entrega tridimensionales difuminadas.

#### 3. Visión Estratégica (`VisionSection`)
- **Etiqueta Superior**: "Partner Logístico Especializado" con un punto pulsante.
- **Título**: "Nuestra Visión Logística".
- **Bajada**: "Transformamos tus costos fijos en solutions flexibles que acompañan el crecimiento de tu negocio."
- **Grilla de Características**:
  - **Entregas a Tiempo**: Icono `Zap`. Texto descriptivo: "Puntualidad garantizada en cada envío".
  - **Envíos Seguros**: Icono `ShieldCheck`. Texto descriptivo: "Protección total de tus paquetes".
- **Métricas de Impacto**:
  - **+5.000** - "Confianza local comprobada"
  - **7 Años** - "Innovación constante en última milla"
  - **Flota Exclusiva** - "Motocicletas dedicadas para máxima agilidad urbana"
- **Contenedor Visual**: Marco con imagen de mapa, luz de acento y tarjeta flotante con el texto "Conocé más sobre nosotros" y botón de reproducción que redirige a `/nosotros/sobre-nosotros`.

#### 4. Resumen de Servicios (`ServicesOverview`)
- **Estructura**: Grilla interactiva de 4 columnas en desktop.
- **Título**: "Soluciones Logísticas"
- **Bajada**: "Infraestructura moderna para negocios que no se detienen. Inteligencia aplicada a cada kilómetro."
- **Tarjetas de Servicio**:
  - **Envíos Express**: Icono `Zap`. Texto: "Prioridad absoluta y certeza total. Diseñado para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación." Botón: "Solicitar Express" (icono `ChevronRight`). Badge: "ALTA PRIORIDAD".
  - **Envíos LowCost**: Icono `Clock`. Texto: "Rentabilidad y ruteo masivo. Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y garantizamos entrega en el día." Botón: "Ahorrá con LowCost".
  - **Envíos Flex (MercadoLibre)**: Icono `Package`. Texto: "Potenciá tu reputación al máximo. Somos expertos en MercadoLibre. Cumplimos tus acuerdos de nivel de servicio (SLAs) Same-Day para que tu termómetro esté en verde." Botón: "Activar Envíos Flex".
  - **E-Commerce & 3PL**: Icono `Truck`. Texto: "Tercerización y cuentas corrientes. Más que un envío, somos tu depósito. Soluciones escalables para PyMEs con facturación mensual centralizada." Botón: "Hablar con un asesor".

#### 5. Llamado a la Acción / Conversión (`CtaSection`)
- **Estilo**: Contenedor envolvente con bordes y degradados internos. Fondo de textura abstracta (`/hero/abstracto_background.jpeg`) con baja opacidad.
- **Badge**: "¡Empezá Ahora!" con icono `Zap`.
- **Título**: "¿Listo para escalar la logística de tu E-Commerce?"
- **Descripción**: "Olvidate de la gestión de paquetes y enfocate en vender más. Dejá la distribución urbana en manos de expertos."
- **Botones**:
  - WhatsApp: "Contactanos por WhatsApp" (redirige a enlace directo con mensaje personalizado: "Hola Envios DosRuedas, vengo desde la web").
  - Tarifas: "Ver Tarifas 2026" (icono `Calculator`).
- **Pilares Inferiores**: "Confianza local comprobada", "Innovación constante en última milla", "Motocicletas dedicadas para máxima agilidad urbana" (con iconos circulares).

#### 6. Soluciones Corporativas y PyME (`EmprendedoresHome`)
- **Badge**: "Soluciones Corporativas y PyME" (icono `Building2` animado).
- **Título**: "Potencia tu Logística con DosRuedas"
- **Bajada**: "Transformamos la última milla de tu empresa con una flota ágil y especializada de alta precisión."
- **Estadísticas Rápidas**: "500+ Empresas" y "24/7 Operativa".
- **Tarjetas de Solución (Grilla de 3 columnas, imágenes de stock con opacidad reducida e iconos flotantes)**:
  - **Soluciones Corporativas**: Características: Cuenta Corriente Flexible, Facturación simplificada, Gestión multi-usuario, Reportes de impacto. Enlace: `/servicios/plan-emprendedores`.
  - **Envíos Flex MercadoLibre**: Características: Cumplimiento de SLAs, Mejora tu reputación, Tarifas competitivas, Soporte Flex dedicado. Enlace: `/servicios/enviosflex`.
  - **Logística E-Commerce**: Características: Integración tecnológica, Rutas optimizadas, Flota especializada, Seguimiento en tiempo real. Enlace: `/servicios/plan-emprendedores`.

#### 7. Slider de Capacidades Dinámicas (`SliderServicios`)
- **Título**: "SOLUCIONES A MEDIDA" (Etiqueta superior: "CAPACIDADES DINÁMICAS").
- **Bajada**: "Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real."
- **Capacidades**: Carrusel interactivo que muestra las cuatro tarjetas principales con iconos circulares, detalles técnicos alternados y accesos directos de navegación con Chevron.

#### 8. Carrusel de Redes Sociales (`CarruselRedes`)
- **Título**: "SIGUE NUESTRO MOVIMIENTO" (Etiqueta: "CONECTA CON NOSOTROS" con icono de `Heart`).
- **Enlaces Rápidos**: Botones horizontales de Instagram, Facebook y WhatsApp con descripciones de actividad ("Novedades diarias", "Comunidad activa", "Atención inmediata").
- **Carrusel Infinito**: Bloques de imágenes infinitas con efecto scroll continuo horizontal de publicaciones reales (`/redes/fac1.webp`, `/redes/ig1.webp`, `/redes/ig3.webp`, `/redes/ig4.webp`, `/redes/fac2.webp`), revelando un botón "VER POST" y el icono correspondiente al pasar el mouse por encima.

#### 9. Pie de Página (`Footer`)
- **Columna de Marca**: Logo, título "Envios DosRuedas", slogan "tu solución confiable" y descripción resumida. Enlaces de redes sociales.
- **Columnas de Navegación**:
  - Nosotros: Sobre Nosotros, Preguntas Frecuentes, Nuestras Redes.
  - Servicios: Envíos Express, Envíos LowCost, Envíos Flex (MeLi), E-Commerce & 3PL.
- **Información de Contacto**: Ubicación (Mar del Plata, Argentina), Teléfono (223-660-2699), Email (matiascejas@enviosdosruedas.com).
- **Banners de Confianza**: SEGURIDAD CERTIFICADA (`ShieldCheck`), VELOCIDAD MÁXIMA (`Zap`), COBERTURA DISTRITAL (`Globe`), STATUS ONLINE (`ArrowUpRight`).
- **Copyright & Legales**: "© 2026 Envios DosRuedas. Todos los derechos reservados." y enlaces a "Privacidad" y "Términos".
```
