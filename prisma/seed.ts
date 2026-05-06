import "dotenv/config";
import prisma from "../src/lib/prisma.js";

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
      { id: 1, serviceType: "EXPRESS", distanciaMinKm: 0.00, distanciaMaxKm: 2.99, precioRango: 3000.00, isActive: true, createdAt: new Date("2025-06-21T05:44:15.923Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 2, serviceType: "EXPRESS", distanciaMinKm: 3.00, distanciaMaxKm: 4.99, precioRango: 3700.00, isActive: true, createdAt: new Date("2025-06-21T05:44:16.198Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 3, serviceType: "EXPRESS", distanciaMinKm: 5.00, distanciaMaxKm: 5.99, precioRango: 4500.00, isActive: true, createdAt: new Date("2025-06-21T05:44:16.394Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 4, serviceType: "EXPRESS", distanciaMinKm: 6.00, distanciaMaxKm: 6.99, precioRango: 5400.00, isActive: true, createdAt: new Date("2025-06-21T05:44:16.586Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 5, serviceType: "EXPRESS", distanciaMinKm: 7.00, distanciaMaxKm: 7.99, precioRango: 6200.00, isActive: true, createdAt: new Date("2025-06-21T05:44:16.767Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 6, serviceType: "EXPRESS", distanciaMinKm: 8.00, distanciaMaxKm: 8.99, precioRango: 7000.00, isActive: true, createdAt: new Date("2025-06-21T05:44:16.948Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 7, serviceType: "EXPRESS", distanciaMinKm: 9.00, distanciaMaxKm: 10.00, precioRango: 7800.00, isActive: true, createdAt: new Date("2025-06-21T05:44:17.136Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 8, serviceType: "EXPRESS", distanciaMinKm: 10.01, distanciaMaxKm: 11.00, precioRango: 8700.00, isActive: true, createdAt: new Date("2025-06-21T05:44:17.326Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 9, serviceType: "EXPRESS", distanciaMinKm: 11.01, distanciaMaxKm: 12.00, precioRango: 9500.00, isActive: true, createdAt: new Date("2025-06-21T05:44:17.510Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 10, serviceType: "EXPRESS", distanciaMinKm: 12.01, distanciaMaxKm: 13.00, precioRango: 10300.00, isActive: true, createdAt: new Date("2025-06-21T05:44:17.709Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 11, serviceType: "EXPRESS", distanciaMinKm: 13.01, distanciaMaxKm: 14.00, precioRango: 11100.00, isActive: true, createdAt: new Date("2025-06-21T05:44:17.882Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 12, serviceType: "EXPRESS", distanciaMinKm: 14.01, distanciaMaxKm: 15.00, precioRango: 11900.00, isActive: true, createdAt: new Date("2025-06-21T05:44:18.077Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 13, serviceType: "EXPRESS", distanciaMinKm: 15.01, distanciaMaxKm: 16.00, precioRango: 12700.00, isActive: true, createdAt: new Date("2025-06-21T05:44:18.261Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 14, serviceType: "EXPRESS", distanciaMinKm: 16.01, distanciaMaxKm: 17.00, precioRango: 13500.00, isActive: true, createdAt: new Date("2025-06-21T05:44:18.441Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 15, serviceType: "EXPRESS", distanciaMinKm: 17.01, distanciaMaxKm: 18.00, precioRango: 14300.00, isActive: true, createdAt: new Date("2025-06-21T05:44:18.619Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 16, serviceType: "EXPRESS", distanciaMinKm: 18.01, distanciaMaxKm: 19.00, precioRango: 15100.00, isActive: true, createdAt: new Date("2025-06-21T05:44:18.794Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 17, serviceType: "EXPRESS", distanciaMinKm: 19.01, distanciaMaxKm: 20.00, precioRango: 15900.00, isActive: true, createdAt: new Date("2025-06-21T05:44:18.975Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 18, serviceType: "LOW_COST", distanciaMinKm: 0.00, distanciaMaxKm: 2.99, precioRango: 2150.00, isActive: true, createdAt: new Date("2025-06-21T05:44:19.166Z"), updatedAt: new Date("2025-06-21T06:23:23.368Z") },
      { id: 19, serviceType: "LOW_COST", distanciaMinKm: 3.00, distanciaMaxKm: 4.99, precioRango: 2900.00, isActive: true, createdAt: new Date("2025-06-21T05:44:19.341Z"), updatedAt: new Date("2025-06-21T06:23:23.550Z") },
      { id: 20, serviceType: "LOW_COST", distanciaMinKm: 5.00, distanciaMaxKm: 8.99, precioRango: 4000.00, isActive: true, createdAt: new Date("2025-06-21T05:44:19.519Z"), updatedAt: new Date("2025-06-21T06:23:23.724Z") },
      { id: 21, serviceType: "LOW_COST", distanciaMinKm: 9.00, distanciaMaxKm: 12.99, precioRango: 5800.00, isActive: true, createdAt: new Date("2025-06-21T05:44:19.702Z"), updatedAt: new Date("2025-06-21T06:23:23.903Z") },
      { id: 22, serviceType: "LOW_COST", distanciaMinKm: 13.01, distanciaMaxKm: 20.00, precioRango: 8200.00, isActive: true, createdAt: new Date("2025-06-21T05:44:19.882Z"), updatedAt: new Date("2025-06-21T06:23:24.074Z") },
    ];

    // Para tablas con IDs específicos, es mejor hacerlo de forma secuencial o en una sola transacción
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
        content: "En cada envío, nos das tu confianza. Con cada entrega, te demostramos por qué vale la pena. 🤝\n\nEn Envíos Dos Ruedas, la responsabilidad es nuestro motor. Por eso, hemos diseñado un servicio transparente donde siempre tenés el control.\n\n¿Cómo lo logramos?\n📍 SEGUIMIENTO EN TIEMPO REAL: Desde que sale de tus manos hasta que llega a su destino, sabrás exactamente dónde está tu paquete. ¡Sin sorpresas!\n\nY con opciones claras que se adaptan a vos:\n⏰ Envío Express: ¿Necesitás coordinar un horario? Pedilo antes de las 15hs y lo entregamos hoy mismo.\n💸 Envío LowCost: ¿Priorizás el precio? Solicitalo antes de las 13hs y también llega en el día.\n📦 Envío Flex para MercadoLibre: ¡Tu mejor socio! Confirmá tu venta antes de las 15hs y nosotros nos encargamos de que llegue a tu cliente hoy.\n\nTrabajamos de Lunes a Viernes de 9 a 18hs y Sábados de 10 a 15hs.\n\nDejá de preocuparte. Empezá a confiar.\nAgendá nuestro WhatsApp: 📲 223 6602 6699\nConocé más en: www.enviosdosruedas.com\n.\n.\n.\n.\n.\n \n\n#MarDelPlata #MDQ #Mensajeria #CadeteriaMDQ #EnviosMarDelPlata #DeliveryMDQ #MotoMensajeria #EnviosFlex #MercadoLibreMDQ #LaFeliz #EmprendedoresMarDelPlata #ComerciosMDQ #LogisticaMDQ #EnviosEnElDia #ServicioDeMensajeria #EnviosDeConfianza #SeguimientoDeEnvios",
        createdAt: new Date("2025-06-21T06:16:03.501Z"),
        imageHint: "",
        imageUrl: "/redes/ig3.webp",
        likes: 20,
        platform: "instagram",
        postUrl: "https://www.instagram.com/enviosdosruedas/p/DK12WIDslKW/",
        shares: 0,
        timestamp: new Date("2025-06-21T06:16:02.648Z"),
        updatedAt: new Date("2025-06-21T06:16:03.501Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://www.instagram.com/enviosdosruedas/",
      },
      {
        id: 15,
        comments: 10,
        content: "En Envíos DosRuedas, nuestro servicio se construye sobre tres pilares fundamentales:\n\n🔹 Responsabilidad: Cada envío es tratado con la máxima seriedad y cuidado.\n🔹 Eficiencia: Optimizamos cada ruta para garantizar la rapidez que usted necesita.\n🔹 Confianza: Y hoy, reforzamos este pilar de una manera sin precedentes.\n\nNos enorgullece ser la PRIMERA mensajería en Mar del Plata en ofrecer seguimiento de envio📍, brindando una transparencia total y verificable.\n\nSomos la solucion a tus envios\n📲 WhatsApp: 2236602699\n🌐 Sitio Web: www.enviosdosruedas.com",
        createdAt: new Date("2025-06-21T06:30:06.755Z"),
        imageHint: "",
        imageUrl: "/redes/ig1.webp",
        likes: 20,
        platform: "instagram",
        postUrl: "https://www.instagram.com/enviosdosruedas/p/DJhlS5xOrTb/",
        shares: 2,
        timestamp: new Date("2025-06-21T06:30:06.365Z"),
        updatedAt: new Date("2025-06-21T06:30:06.755Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://www.instagram.com/enviosdosruedas/",
      },
      {
        id: 17,
        comments: 0,
        content: "Para vos, que vendés en Mar del Plata y hacés envíos... 👇\n\nSoles usar las apps para tus envíos? Pero no te generan confianza?\n\nConocemos perfecto esa sensación que te hunde el pecho...\n\nLa app te notifica \"ENTREGADO\" ✅, y casi al instante, te llega el mensaje de tu cliente: \"Disculpame, pero acá no llegó nada\" ❌\n\nEsa impotencia. Esa frustración de no tener a quién reclamarle, de hablar con un robot y sentir que tu trabajo y tu dinero quedan en el aire. Es el mayor miedo de todo el que vende online.\n\nBueno, ahora imaginate esto por un segundo:\n\nImaginate despachar cada uno de tus paquetes con la certeza absoluta de que esa pesadilla con vos no va a ocurrir. Nunca.\n\nEsa certeza es el servicio que hemos construido en Envios Dos Ruedas.\n\nNo es una promesa vacía, es un hecho probado y nuestra mayor garantía: en 5 años de historia, tenemos CERO reclamos por \"entregas fantasma\". Ni uno solo.\n\n¿Cómo lo logramos?\n\n🤝 Con un equipo que da la cara. No somos anónimos. Somos un equipo local, preparado y que se hace responsable. La confianza es nuestra base.\n🗣️ Con comunicación real. Si tenés una duda, hablás con una persona. Siempre. Nuestro WhatsApp está para solucionar, no para generar tickets.\n⚙️ Con un sistema organizado. Incluimos seguimiento de envío, pero lo más importante es que nuestro proceso está diseñado para que \"Entregado\" signifique una sola cosa: tu cliente feliz con el producto en la mano.\nEn definitiva, esto es lo que significa para nosotros ser la solución a tus envíos.\n\nSi querés operar con este nivel de seguridad y tranquilidad, estamos para ayudarte.\n\nMandanos un WhatsApp y te contamos todo sobre nuestro servicio, sin vueltas. ¡Te merecés trabajar así!\n\n223 660-2699 📱(Comunicación exclusiva por mensaje de WhatsApp)\n\n🌐 www.enviosdosruedas.com\n\n#MarDelPlata #MensajeriaMDQ #mdq #mdp #Envios #delivery #Mensajeria #LaFeliz #Servicios #Emprendedores #Argentina #Logistica #Paqueteria #Comercios #MarDelPlataHoy #DeliveryMDQ #EnviosMarDelPlata #mensajeriamardelplata\n#motoenvios #enviosmardelplata #mardelplata #pymes #negocioslocales #ventaonline #EnviosEnMotoMarDelPlata #EnviosParaEmprendedores #EnviosDosRuedas Ver menos\n— en Mar del Plata, Argentina.\nComentarios\n",
        createdAt: new Date("2025-06-21T06:51:20.369Z"),
        imageHint: "",
        imageUrl: "/redes/fac1.webp",
        likes: 0,
        platform: "facebook",
        postUrl: "https://www.facebook.com/enviosdosruedas/posts/pfbid0a1i4tygsZQjwp9bsvS9xSHApJqMe5JkeoJbqx12Qvas18nSojtGhj6U9cFn3m5hDl",
        shares: 0,
        timestamp: new Date("2025-06-21T06:51:19.635Z"),
        updatedAt: new Date("2025-06-21T06:51:20.369Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://facebook.com/enviosdosruedas",
      },
      {
        id: 19,
        comments: 2,
        content: "📦 MENSAJERÍA ENVÍOS DOSRUEDAS 🚀\n~ ¡Somos la solución para tus envíos en Mar del Plata! ~\n\nTe ofrecemos un servicio confiable y de calidad para que tus envíos lleguen en tiempo y forma.\n👉 Confianza y responsabilidad son nuestros pilares.\n\n¡Vos solo encargate de vender, nosotros nos ocupamos del resto!\n\n🌐 Cotizá el valor de tu Envío Express o LowCost en nuestra web:\nhttps://enviosdosruedas.com\n\n¿Cómo solicitar un envío?\n1️⃣ 📲 Escribinos por WhatsApp al 2236602699 (Solo mensajes).\n2️⃣ ℹ️ Detallanos:\nTipo de envío: Express o LowCost.\nTamaño del paquete.\nDirección de retiro y entrega.\n3️⃣ 💸 Te cotizamos al instante y pedimos información adicional:\nHorarios.\nTeléfono de contacto.\nMonto a cobrar o pagar (si aplica).\n4️⃣ 🆗 Confirmás y listo:\n¡Un cadete estará realizando tu envío en el horario pactado!\n\nAsí de fácil y rápido. 😃\n\n🚴♂️ Envíos DosRuedas\n📲 2236602699\n\n#Mensajeriamardelplata #enviosmardelplata\n#MotoEnvios #MensajeriaMDQ #MandadosMarDelPlata #DeliveryMDQ #EnviosParaEmprendedores #PaqueteriaMarDelPlata #MensajeriaDeConfianza #delivery  #envioslowcost #Enviosexpress #envios",
        createdAt: new Date("2025-06-21T07:01:59.431Z"),
        imageHint: "",
        imageUrl: "/redes/ig4.webp",
        likes: 14,
        platform: "instagram",
        postUrl: "https://www.instagram.com/enviosdosruedas/p/DEaAGAmRMKj/",
        shares: 2,
        timestamp: new Date("2025-06-21T07:01:58.906Z"),
        updatedAt: new Date("2025-06-21T07:01:59.431Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://instagram.com/enviosdosruedas",
      },
      {
        id: 21,
        comments: 10,
        content: "📦 MENSAJERÍA ENVÍOS DOSRUEDAS 🚀\n~ ¡Somos la solución para tus envíos en Mar del Plata! ~\nTe ofrecemos un servicio confiable y de calidad para que tus envíos lleguen en tiempo y forma.\n👉 Confianza y responsabilidad son nuestros pilares.\n¡Vos solo encargate de vender, nosotros nos ocupamos del resto!",
        createdAt: new Date("2025-06-21T07:07:40.207Z"),
        imageHint: "",
        imageUrl: "/redes/fac2.webp",
        likes: 12,
        platform: "facebook",
        postUrl: "https://www.facebook.com/enviosdosruedas/posts/pfbid03WPv5ZE93ZNwL5PMRwuTpJxGaGSBzLigJqDSyzATNcSkRT3xBMZz7GKbhPv1mC53l",
        shares: 0,
        timestamp: new Date("2025-06-21T07:07:40.127Z"),
        updatedAt: new Date("2025-06-21T07:07:40.207Z"),
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
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
