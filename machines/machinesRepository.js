import prisma from '../prisma/prismaExport.js'

export async function findAllMachines () {
  const machines = await prisma.machine.findMany()
  return machines
}

export async function findMachineById (id) {
  const machine = await prisma.machine.findUnique({
    where: { id: id }
  })
  return machine
}

export async function createNewMachine (name) {
  const machine = await prisma.machine.create({
    data: { name }
  })
  return machine
}

export async function updateMachine (machine) {
  const updatedMachine = await prisma.machine.update({
    where: { id: machine.id},
    data: {
      name: machine.name
    }
  })
  return updatedMachine
}

export async function deleteMachineById (id) {
  const machine = await prisma.machine.delete({
    where: { id: id }
  })
  return machine
}
