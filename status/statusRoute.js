import express from 'express'
import * as repository from './statusRepository.js'
import exceptionHandler from '../prisma/prismaExceptionHandler.js'

const router = express.Router()

router.get('/', (req, res) => {
  repository.findAllStatus()
    .then((status) => {
      res.json(status)
    })
    .catch((error) => {
      exceptionHandler(error, res)
    })
})

router.post('/', (req, res) => {
  const status = {}
  status.name = req.body.name
  if (req.body.code) {
    status.code = parseInt(req.body.code)
  }
  repository.createNewStatus(status)
    .then((newStatus) => {
      res.json(newStatus)
    })
    .catch((error) => {
      exceptionHandler(error, res)
    })
})

router.get('/:code', (req, res) => {
  const code = parseInt(req.params.code)
  repository.findStatusByCode(code)
    .then((status) => {
      if (status) {
        res.json(status)
      } else {
        res.status(404).json({ cause: 'Status was not found' })
      }
    })
    .catch((error) => {
      exceptionHandler(error, res)
    })
})

router.put('/:code', (req, res) => {
  if (isNaN(req.body.code)) {
    res.status(400).json({ cause: 'Bad request'})
    return
  }
  const status = {}
  status.name = req.body.name
  status.code = parseInt(req.body.code)
  const oldCode = parseInt(req.params.code)
  repository.updateStatus(oldCode, status)
    .then((updatedStatus) => {
      res.json(updatedStatus)
    })
    .catch((error) => {
      exceptionHandler(error, res)
    })
})

router.delete('/:code', (req, res) => {
  const code = parseInt(req.params.code)
  repository.deleteStatusByCode(code)
    .then((deletedStatus) => {
      res.json(deletedStatus)
    })
    .catch((error) => {
      exceptionHandler(error, res)
    })
})

export default router
