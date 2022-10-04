import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { CreateRoleController } from '@roles/useCases/createRole/createRoleController'
import { DeleteRoleController } from '@roles/useCases/deleteRole/deleteRoleController'
import { ListRolesController } from '@roles/useCases/listRoles/ListRolesController'
import { ShowRoleController } from '@roles/useCases/showRole/showRoleController'
import { UpdateRoleController } from '@roles/useCases/updateRole/updateRoleController'
import { container } from 'tsyringe'

container.registerSingleton<IRolesRepository>(
  'RolesRepository',
  RolesRepository,
)

container.registerSingleton('CreateRoleController', CreateRoleController)
container.registerSingleton('ListRolesController', ListRolesController)
container.registerSingleton('ShowRoleController', ShowRoleController)
container.registerSingleton('UpdateRoleController', UpdateRoleController)
container.registerSingleton('DeleteRoleController', DeleteRoleController)
