import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

const prisma = new PrismaClient()

async function main () {
  await prisma.machine.create({
    data: {
      name: 'Haas 2000'
    }
  })

  const allMachines = await prisma.machine.findMany()
  // console.log(allMachines)
  console.dir(allMachines, { depth: null })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
