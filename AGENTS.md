# AGENTS.md - Guía de Comportamiento para Agentes Autónomos

## System Role & Context
**Envios DosRuedas** es una plataforma de gestión logística de última milla. El alcance funcional actual de la aplicación pública se reduce estrictamente a 13 páginas orientadas al cliente final y la cotización de servicios. El agente debe actuar como un Senior Frontend Engineer con habilidades especializadas en UI/UX, estilización con Tailwind y diseño visual de banners, garantizando una experiencia de usuario (UX) premium y coherente.

## Mapa de Rutas Oficiales y Componentes

El proyecto actualmente está restringido a las siguientes 13 rutas de la aplicación:

### 1. Páginas Principales y Contacto
- **Home (`src/app/page.tsx`)**: Renderiza `HeroAnimado`, `VisionSection`, `ServicesOverview`, `CtaSection`, `EmprendedoresHome`, `SliderServicios`, `CarruselRedes` y `Footer`.
- **Contacto (`src/app/contacto/page.tsx`)**: Utiliza `ContactPageClient`, `CarruselRedes` y `Footer`.

### 2. Secciones Informativas (Nosotros)
- **Nuestras Redes (`src/app/nosotros/nuestras-redes/page.tsx`)**: Presenta `SocialHero`, `SocialConnect`, `SocialFeed`, `SocialBenefits`, `NewsletterSignup`.
- **Preguntas Frecuentes (`src/app/nosotros/preguntas-frecuentes/page.tsx`)**: Expone `FaqHero`, `FaqCategories`, `FaqContactCta`. Implementa JSON-LD Schema.
- **Sobre Nosotros (`src/app/nosotros/sobre-nosotros/page.tsx`)**: Integra `AboutHero`, `WhoWeAre`, `CompanyValues`, `CompanyStory`, `TeamSection`, `MissionVision`.

### 3. Servicios
- **Envíos Express (`src/app/servicios/envios-express/page.tsx`)**: Integra `ExpressPageClient` que muestra la cotización dinámica mediante Prisma (`ServiceTypeEnum.EXPRESS`).
- **Envíos LowCost (`src/app/servicios/envios-lowcost/page.tsx`)**: Despliega `LowcostHero`, `LowcostContent`, `PricingComparison`, `LowcostBenefits`, `HowLowcostWorks`, `LowcostCta`.
- **MercadoLibre Flex (`src/app/servicios/enviosflex/page.tsx`)**: Renderiza `EnviosFlexHero`, `EnviosFlexContent`, `MercadoLibreBenefits`, `FlexPricingRanges`, `HowItWorks`, `Requirements`, `EnviosFlexCta`.
- **Plan Emprendedores (`src/app/servicios/plan-emprendedores/page.tsx`)**: Usa `EntrepreneurHero`, `PlanInformation`, `EntrepreneurBenefits`, `EntrepreneurPricingRanges`, `EntrepreneurCta`.

### 4. Cotizadores Interactivos
- **Cotizador Express (`src/app/cotizar/express/page.tsx`)**: Usa `CalculatorHero`, `ExpressCalculator`, `MapFeatures`, `PricingInfo`, `CalculatorTips`, `CalculatorContact`.
- **Cotizador LowCost (`src/app/cotizar/lowcost/page.tsx`)**: Usa `LowCostCalculatorHero`, `LowCostCalculator`, `MapFeatures`, `PricingInfo`, `CalculatorTips`, `CalculatorContact`.

### 5. Legales
- **Términos y Condiciones (`src/app/terminos-y-condiciones/page.tsx`)**: Utiliza `HeroSection` y un diseño de tarjeta textual.
- **Política de Privacidad (`src/app/politica-de-privacidad/page.tsx`)**: Similar a Términos, emplea `HeroSection` y cards informativas.

## Habilidades y Responsabilidades del Agente

Para mantener la calidad y consistencia del proyecto en las rutas oficiales, el Agente debe hacer uso de las siguientes habilidades/roles:

1. **@ui-ux-pro-max (Optimización de Experiencia de Usuario):**
   - Asegurar flujos de navegación intuitivos en los cotizadores interactivos (`express` y `lowcost`).
   - Implementar estrategias de "Lazy Loading" (como `next/dynamic` en el Home) para mejorar el Performance y SEO.
   - Proveer un "voseo" natural argentino en todo el copywriting público.

2. **@ui-styling (Maquetación y Estilizado Estricto):**
   - Respetar rigurosamente el **Stitch Design System** definido en `DESIGN.md`.
   - Utilizar Tailwind CSS nativo de manera exclusiva. Prohibidas librerías externas.
   - Manejar correctamente el Tonal Layering (Capas 0 a 2) y no usar sombras difusas excesivas sobre fondos oscuros profundos.

3. **@banner-design (Gestión Visual y de Héroes):**
   - Cuidar el diseño y renderizado de los componentes `*Hero` (ej. `HeroAnimado`, `AboutHero`, `SocialHero`).
   - Mantener el alto contraste (Fondos oscuros `#050810` con acentos Amarillos `#FFE600` / `#FDE400`).
   - Asegurar el correcto uso de tipografías: `Orbitron` para display/headers y `Roboto` para cuerpo.

## Strict Guidelines ("Qué hacer" vs "Qué NO hacer")

### SÍ Hacer:
- **Responsive Fluid:** Usar Flexbox para mantener un comportamiento responsivo.
- **Copywriting Argentino:** Usar "voseo" (hablá, cotizá, tenés) en todo el contenido público.
- **Shadow DOM / Glassmorphism:** Aplicar efectos de transparencia y bordes sutiles según `DESIGN.md`.

### NO Hacer:
- **Reducción Destructiva:** No eliminar texto o datos reales para "ahorrar espacio".
- **External CSS:** No importar librerías de CSS externas (Bootstrap, Bulma). Todo debe ser Tailwind nativo.
- **Rutas Fuera de Alcance:** Evitar crear enlaces o referencias a páginas internas (ej. `admin`, `repartidor`, `ordenes`) en el entorno público.
