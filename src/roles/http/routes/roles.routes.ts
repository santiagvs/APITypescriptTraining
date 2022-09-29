import { RolesRepository } from '@roles/repositories/RolesRepository'
import { Router } from 'express'

const rolesRouter = Router()
const rolesRepository = new RolesRepository()

rolesRouter.post('/', (req, res) => {
  const { name } = req.body
  const roleAlreadyExists = rolesRepository.findByName(name)

  if (roleAlreadyExists) {
    return res.status(400).json({
      error: 'A role with this name already exists.',
    })
  }

  const role = rolesRepository.create({ name })

  return res.status(201).json(role)
})

rolesRouter.get('/', (req, res) => {
  const roles = rolesRepository.findAll()

  return res.json(roles)
})

export { rolesRouter }
