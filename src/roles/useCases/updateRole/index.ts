import { RolesRepository } from '@roles/repositories/RolesRepository'
import { UpdateRoleController } from './updateRoleController'
import { UpdateRoleUseCase } from './updateRoleUseCase'

const rolesRepository = RolesRepository.getInstance()
const updateRoleUseCase = new UpdateRoleUseCase(rolesRepository)
export const updateRoleController = new UpdateRoleController(updateRoleUseCase)
