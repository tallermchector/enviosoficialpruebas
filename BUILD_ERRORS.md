# Informe de Errores de Build (Next.js)

Al intentar validar el proyecto corriendo `SKIP_PRISMA_CHECK=true CI=true pnpm run build`, se encontró el siguiente error:

```
Error occurred prerendering page "/_not-found". Read more: https://nextjs.org/docs/messages/prerender-error
Error: Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server". Or maybe you meant to call this function rather than return it.
  {$$typeof: ..., render: function, displayName: ...}
                          ^^^^^^^^
    at stringify (<anonymous>) {
  digest: '4115571473'
}
Export encountered an error on /_not-found/page: /_not-found, exiting the build.
⨯ Next.js build worker exited with code: 1 and signal: null
```

## Análisis:
Este error ocurre porque en algún lugar de un componente Server (o uno que se renderiza estáticamente por defecto) se está pasando una función directamente como prop a un componente Client (marcado con `'use client'`). En Next.js App Router, las funciones pasadas desde Server a Client Components deben ser Server Actions marcadas explícitamente con `"use server"`.

Este problema fue observado inicialmente al pre-renderizar `/_not-found` (que internamente está importando Layouts o componentes compartidos). El componente `Footer` y `CarruselRedes` (que a su vez renderizan iconos o funciones complejas) pueden estar relacionados, ya que están incluidos globalmente y hemos intentado añadirles directivas `"use client"` pero el error persiste.

## Recomendación:
1. Revisar los props que se le pasan a los componentes clientes en `app/not-found.tsx` y layouts superiores (`app/layout.tsx`).
2. Aislar el paso de iconos estáticos y funciones en objetos iterables (ej. `[...].map`) dentro de los Client Components, asegurándose de que toda función pasada (ej. handlers de click) resida únicamente en el Client Component, o esté explícitamente como "use server" si viene de arriba.
