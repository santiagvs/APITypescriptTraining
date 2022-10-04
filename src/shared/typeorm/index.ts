import { Role } from '@roles/entities/Role'
import { DataSource } from 'typeorm'
import { CreateRolesTable1664463205974 } from './migrations/1664463205974-CreateRolesTable'
import { CreateUsersTable1664903968892 } from './migrations/1664903968892-CreateUsersTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1664463205974, CreateUsersTable1664903968892],
})
