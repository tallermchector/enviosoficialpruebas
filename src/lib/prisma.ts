import { PrismaClient } from '../../generated/prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)

const prismaClientSingleton = () => {
  return new PrismaClient({ adapter }).$extends(withAccelerate())
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma
}
