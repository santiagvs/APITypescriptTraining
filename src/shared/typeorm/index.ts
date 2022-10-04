import { Role } from '@roles/entities/Role'
import { User } from '@users/entities/User'
import { DataSource } from 'typeorm'
import { CreateRolesTable1664463205974 } from './migrations/1664463205974-CreateRolesTable'
import { CreateUsersTable1664903968892 } from './migrations/1664903968892-CreateUsersTable'
import { AddRoleIdToUsersTable1664904989396 } from './migrations/1664904989396-AddRoleIdToUsersTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role, User],
  migrations: [
    CreateRolesTable1664463205974,
    CreateUsersTable1664903968892,
    AddRoleIdToUsersTable1664904989396,
  ],
})
