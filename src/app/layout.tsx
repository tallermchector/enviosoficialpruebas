import type { Metadata } from "next";
import { Hanken_Grotesk, Sora } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppReviewButton } from "@/components/seo/WhatsAppReviewButton";
import "./globals.css";


const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans-fallback",
  display: 'swap',
})

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-display-fallback",
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'Envíos DosRuedas | Tu solución confiable',
  description: 'Servicio confiable de mensajería y delivery en moto. Envíos express y low-cost para e-commerce, pymes y Mercado Libre Flex en Mar del Plata. Cotizá online.',
  keywords: 'mensajeria mar del plata, delivery mar del plata, envios en moto, cadeteria mar del plata, envios flex, envios low cost, mensajeria express, envios dos ruedas',
  alternates: {
    canonical: 'https://www.enviosdosruedas.com',
  },
  openGraph: {
    title: 'Mensajería y Logística E-Commerce en Mar del Plata | Envíos DosRuedas',
    description: 'Envíos express, low-cost, para emprendedores y Mercado Libre Flex. Cotiza online en Mar del Plata.',
    url: 'https://www.enviosdosruedas.com',
    images: [
      {
        url: 'https://www.enviosdosruedas.com/icons/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Logo de Envios DosRuedas',
      },
    ],
    type: 'website',
    locale: 'es_AR',
  },
  manifest: "/manifest.json",
  icons: {
    apple: "/icons/apple-touch-icon.png",
  },
};


export const viewport = {
  themeColor: "#1E40AF",
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'EnviosDosRuedas',
    image: 'https://www.enviosdosruedas.com/icons/icon-512x512.png',
    url: 'https://www.enviosdosruedas.com',
    telephone: '+542236602699',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Friuli 1972',
      addressLocality: 'Mar del Plata',
      postalCode: 'B7600',
      addressCountry: 'AR',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${hankenGrotesk.variable} ${sora.variable} font-sans antialiased`}
      >
        {children}
        <WhatsAppReviewButton />
        <Toaster />
      </body>
    </html>
  );
}
