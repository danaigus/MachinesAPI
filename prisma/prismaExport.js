import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

// Prisma instance to be shared between the application
const prisma = new PrismaClient()

export default prisma
