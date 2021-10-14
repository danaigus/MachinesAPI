import prisma from '../prisma/prismaExport.js'

export async function findAllStatus () {
  const status = await prisma.status.findMany()
  return status
}

export async function findStatusByCode (code) {
  const status = await prisma.status.findUnique({
    where: { code: code }
  })
  return status
}

export async function createNewStatus (status) {
  const newStatus = await prisma.status.create({
    data: {
      code: status.code,
      name: status.name
    }
  })
  return newStatus
}

export async function updateStatus (oldCode, status) {
  const updatedStatus = await prisma.status.update({
    where: { code: oldCode},
    data: {
      code: status.code,
      name: status.name
    }
  })
  return updatedStatus
}

export async function deleteStatusByCode (code) {
  const status = await prisma.status.delete({
    where: { code: code }
  })
  return status
}
