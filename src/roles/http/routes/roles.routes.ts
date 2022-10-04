import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import { CreateRoleController } from '@roles/useCases/createRole/createRoleController'
import { ListRolesController } from '@roles/useCases/listRoles/ListRolesController'
import { ShowRoleController } from '@roles/useCases/showRole/showRoleController'
import { UpdateRoleController } from '@roles/useCases/updateRole/updateRoleController'
import { DeleteRoleController } from '@roles/useCases/deleteRole/deleteRoleController'
import { container } from 'tsyringe'

const rolesRouter = Router()
const createRolesController = container.resolve(CreateRoleController)
const listRolesController = container.resolve(ListRolesController)
const showRoleController = container.resolve(ShowRoleController)
const updateRoleController = container.resolve(UpdateRoleController)
const deleteRoleController = container.resolve(DeleteRoleController)

rolesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (req, res) => {
    return createRolesController.handle(req, res)
  },
)

rolesRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
      limit: Joi.number(),
    }),
  }),
  (req, res) => {
    return listRolesController.handle(req, res)
  },
)

rolesRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (req, res) => {
    return showRoleController.handle(req, res)
  },
)

rolesRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (req, res) => {
    return updateRoleController.handle(req, res)
  },
)

rolesRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (req, res) => {
    return deleteRoleController.handle(req, res)
  },
)

export { rolesRouter }
