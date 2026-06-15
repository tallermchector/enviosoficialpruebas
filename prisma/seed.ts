import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from root
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;

import { PrismaClient } from "../generated/prisma/client/index.js";

const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Iniciando el proceso de seeding...");

  try {
    // 1. Limpieza de datos
    console.log("Limpiando tablas PriceRange y SocialPost...");
    await prisma.priceRange.deleteMany({});
    await prisma.socialPost.deleteMany({});

    // 2. Datos para PriceRange
    console.log("Insertando datos en PriceRange...");
    const priceRangeData = [
      { id: 1, serviceType: "EXPRESS", distanciaMinKm: 0.00, distanciaMaxKm: 2.99, precioRango: 3700.00, isActive: true, createdAt: new Date("2026-06-05T04:09:54.371Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
      { id: 2, serviceType: "EXPRESS", distanciaMinKm: 3.00, distanciaMaxKm: 4.99, precioRango: 4600.00, isActive: true, createdAt: new Date("2026-06-05T04:10:54.005Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
      { id: 3, serviceType: "EXPRESS", distanciaMinKm: 5.00, distanciaMaxKm: 6.99, precioRango: 6100.00, isActive: true, createdAt: new Date("2026-06-05T04:11:19.839Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
      { id: 4, serviceType: "EXPRESS", distanciaMinKm: 7.00, distanciaMaxKm: 9.99, precioRango: 8200.00, isActive: true, createdAt: new Date("2026-06-05T04:11:46.278Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
      { id: 5, serviceType: "EXPRESS", distanciaMinKm: 10.00, distanciaMaxKm: 9999.00, precioRango: 1000.00, isActive: true, createdAt: new Date("2026-06-05T04:14:07.352Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
      { id: 6, serviceType: "LOW_COST", distanciaMinKm: 0.00, distanciaMaxKm: 2.99, precioRango: 3000.00, isActive: true, createdAt: new Date("2026-06-05T04:15:01.568Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
      { id: 7, serviceType: "LOW_COST", distanciaMinKm: 3.00, distanciaMaxKm: 4.99, precioRango: 4000.00, isActive: true, createdAt: new Date("2026-06-05T04:15:27.461Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
      { id: 8, serviceType: "LOW_COST", distanciaMinKm: 5.00, distanciaMaxKm: 6.99, precioRango: 5300.00, isActive: true, createdAt: new Date("2026-06-05T04:15:55.207Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
      { id: 9, serviceType: "LOW_COST", distanciaMinKm: 7.00, distanciaMaxKm: 9.99, precioRango: 7000.00, isActive: true, createdAt: new Date("2026-06-05T04:16:14.314Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
      { id: 10, serviceType: "LOW_COST", distanciaMinKm: 10.00, distanciaMaxKm: 9999.00, precioRango: 700.00, isActive: true, createdAt: new Date("2026-06-05T04:16:36.317Z"), updatedAt: new Date("1970-01-01T00:00:00.000Z") },
    ];

    for (const data of priceRangeData) {
      await prisma.priceRange.create({ data: data as any });
    }
    console.log(`-> ${priceRangeData.length} rangos de precios insertados.`);

    // 3. Datos para SocialPost
    console.log("Insertando datos en SocialPost...");
    const socialPostData = [
      {
        id: 7,
        comments: 10,
        content: "En cada envío, nos das tu confianza. Con cada entrega, te demostramos por qué vale la pena. 🤝 En Envíos Dos Ruedas, la responsabilidad es nuestro motor...",
        imageHint: "",
        imageUrl: "/redes/ig3.webp",
        likes: 20,
        platform: "instagram",
        postUrl: "https://www.instagram.com/enviosdosruedas/p/DK12WIDslKW/",
        shares: 0,
        timestamp: new Date("2025-06-21T06:16:02.648Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://www.instagram.com/enviosdosruedas/",
      },
      {
        id: 15,
        comments: 10,
        content: "En Envíos DosRuedas, nuestro servicio se construye sobre tres pilares fundamentales: Responsabilidad, Eficiencia y Confianza...",
        imageHint: "",
        imageUrl: "/redes/ig1.webp",
        likes: 20,
        platform: "instagram",
        postUrl: "https://www.instagram.com/enviosdosruedas/p/DJhlS5xOrTb/",
        shares: 2,
        timestamp: new Date("2025-06-21T06:30:06.365Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://www.instagram.com/enviosdosruedas/",
      },
      {
        id: 17,
        comments: 0,
        content: 'Para vos, que vendés en Mar del Plata y hacés envíos... ¿Soles usar las apps para tus envíos? Pero no te generan confianza?',
        imageHint: "",
        imageUrl: "/redes/fac1.webp",
        likes: 0,
        platform: "facebook",
        postUrl: "https://www.facebook.com/enviosdosruedas/posts/pfbid0a1i4tygsZQjwp9bsvS9xSHApJqMe5JkeoJbqx12Qvas18nSojtGhj6U9cFn3m5hDl",
        shares: 0,
        timestamp: new Date("2025-06-21T06:51:19.635Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://facebook.com/enviosdosruedas",
      },
      {
        id: 19,
        comments: 2,
        content: "📦 MENSAJERÍA ENVÍOS DOSRUEDAS 🚀 ~ ¡Somos la solución para tus envíos en Mar del Plata! ~ Te ofrecemos un servicio confiable...",
        imageHint: "",
        imageUrl: "/redes/ig4.webp",
        likes: 14,
        platform: "instagram",
        postUrl: "https://www.instagram.com/enviosdosruedas/p/DEaAGAmRMKj/",
        shares: 2,
        timestamp: new Date("2025-06-21T07:01:58.906Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://instagram.com/enviosdosruedas",
      },
      {
        id: 21,
        comments: 10,
        content: "📦 MENSAJERÍA ENVÍOS DOSRUEDAS 🚀 ~ ¡Somos la solución para tus envíos en Mar del Plata! ~ Confianza y responsabilidad son nuestros pilares.",
        imageHint: "",
        imageUrl: "/redes/fac2.webp",
        likes: 12,
        platform: "facebook",
        postUrl: "https://www.facebook.com/enviosdosruedas/posts/pfbid03WPv5ZE93ZNwL5PMRwuTpJxGaGSBzLigJqDSyzATNcSkRT3xBMZz7GKbhPv1mC53l",
        shares: 0,
        timestamp: new Date("2025-06-21T07:07:40.127Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://facebook.com/enviosdosruedas",
      },
    ];

    for (const post of socialPostData) {
      await prisma.socialPost.create({ data: post as any });
    }
    console.log(`-> ${socialPostData.length} publicaciones sociales insertadas.`);

    console.log("\n¡Seeding completado exitosamente!");
  } catch (error) {
    console.error("Error durante el seeding:", error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
