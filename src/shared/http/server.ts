import 'dotenv/config'
import 'reflect-metadata'
import { app } from './app'
import { dataSource } from '../typeorm'

dataSource.initialize().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}! 🍻`)
  })
})
