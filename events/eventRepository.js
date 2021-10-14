import prisma from '../prisma/prismaExport.js'

export async function findAllEvents () {
  const events = await prisma.event.findMany()
  return events
}

export async function findEventById (id) {
  const event = await prisma.event.findUnique({
    where: { id: id }
  })
  return event
}

export async function createNewEvent (event) {
  const newEvent = await prisma.event.create({
    data: {
      machineId: event.machineId,
      statusCode: event.statusCode
    }
  })
  return newEvent
}

export async function deleteEventById (id) {
  const event = await prisma.event.delete({
    where: { id: id }
  })
  return event
}
