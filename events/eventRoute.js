import express from 'express'
import * as repository from './eventRepository.js'
import exceptionHandler from '../prisma/prismaExceptionHandler.js'

const router = express.Router()

router.get('/', (req, res) => {
  repository.findAllEvents()
    .then((events) => {
      res.json(events)
    })
    .catch((error) => {
      exceptionHandler(error, res)
    })
})

router.post('/', (req, res) => {
  const event = req.body
  repository.createNewEvent(event)
    .then((newEvent) => {
      res.json(newEvent)
    })
    .catch((error) => {
      exceptionHandler(error, res)
    })
})

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  repository.findEventById(id)
    .then((event) => {
      if (event) {
        res.json(event)
      } else {
        res.status(404).json({ cause: 'Event was not found' })
      }
    })
    .catch((error) => {
      exceptionHandler(error, res)
    })
})

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  repository.deleteEventById(id)
    .then((deletedEvent) => {
      res.json(deletedEvent)
    })
    .catch((error) => {
      exceptionHandler(error, res)
    })
})

export default router
