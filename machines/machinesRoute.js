import express from 'express'
import * as repository from './machinesRepository.js'
import exceptionHandler from '../prisma/prismaExceptionHandler.js'

const router = express.Router()

router.get('/', (req, res) => {
  repository.findAllMachines()
    .then((machines) => {
      res.json(machines)
    })
    .catch((error) => {
      exceptionHandler(error, res)
    })
})

router.post('/', (req, res) => {
  const { name } = req.body
  repository.createNewMachine(name)
    .then((machine) => {
      res.json(machine)
    })
    .catch((error) => {
      exceptionHandler(error, res)
    })
})

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  repository.findMachineById(id)
    .then((machine) => {
      if (machine) {
        res.json(machine)
      } else {
        res.status(404).json({ cause: 'Machine was not found' })
      }
    })
    .catch((error) => {
      exceptionHandler(error, res)
    })
})

router.put('/:id', (req, res) => {
  const machine = req.body
  machine.id = parseInt(req.params.id)
  repository.updateMachine(machine)
    .then((updatedMachine) => {
      res.json(updatedMachine)
    })
    .catch((error) => {
      exceptionHandler(error, res)
    })
})

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  repository.deleteMachineById(id)
    .then((deletedMachine) => {
      res.json(deletedMachine)
    })
    .catch((error) => {
      exceptionHandler(error, res)
    })
})

export default router
