import { DataSource } from 'typeorm'
import { CreateRolesTable1664463205974 } from './migrations/1664463205974-CreateRolesTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1664463205974],
})