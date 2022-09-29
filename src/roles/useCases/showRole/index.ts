import { RolesRepository } from '@roles/repositories/RolesRepository'
import { ShowRoleController } from './showRoleController'
import { ShowRoleUseCase } from './showRoleUseCase'

const rolesRepository = RolesRepository.getInstance()
const showRoleUseCase = new ShowRoleUseCase(rolesRepository)
export const showRoleController = new ShowRoleController(showRoleUseCase)
