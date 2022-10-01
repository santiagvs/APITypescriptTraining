import { RolesRepository } from '@roles/repositories/RolesRepository'
import { DeleteRoleController } from './deleteRoleController'
import { DeleteRoleUseCase } from './deleteRoleUseCase'

const rolesRepository = RolesRepository.getInstance()
const deleteRoleUseCase = new DeleteRoleUseCase(rolesRepository)
export const deleteRoleController = new DeleteRoleController(deleteRoleUseCase)
