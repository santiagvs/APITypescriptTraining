import { Role } from '@roles/entities/Role'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/errors/AppError'

type CreateRoleDTO = {
  name: string
}

export class CreateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute({ name }: CreateRoleDTO): Role {
    const roleAlreadyExists = this.rolesRepository.findByName(name)

    if (roleAlreadyExists) {
      throw new AppError('A role with this name already exists.')
    }

    return this.rolesRepository.create({ name })
  }
}
