import { RolesRepository } from '@roles/repositories/RolesRepository'
import { CreateRoleController } from './createRoleController'
import { CreateRoleUseCase } from './createRoleUseCase'

const rolesRepository = RolesRepository.getInstance()
const createRoleUseCase = new CreateRoleUseCase(rolesRepository)
export const createRolesController = new CreateRoleController(createRoleUseCase)