import "dotenv/config";

export default {
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "pnpm dlx tsx prisma/seed.ts",
  },
  datasource: {
    // Lee directamente de las variables de entorno de tu archivo .env
    url: process.env.DIRECT_URL || process.env.DATABASE_URL || "",
  },
};
