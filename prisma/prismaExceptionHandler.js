import Prisma from '@prisma/client'

export default function exceptionHandler (error, res) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2025':
        res.status(404).json(error.meta)
        break
      case 'P2002':
        res.status(422).json({ cause: 'Code already on use'})
        break
      default:
        res.status(500).json({ cause: 'Internal server error'})
        console.log('code: ' + error.code + '\nmeta:', error.meta)
        break
    }
  } else {
    console.log(error)
    res.status(400).json({ cause: 'Bad request' })
  }
}
