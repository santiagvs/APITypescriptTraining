import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateProfileUseCase } from './UpdateProfileUseCase'

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(UpdateProfileUseCase)
    const { userId, name, email, password, oldPassword } = request.body
    const user = await createUserUseCase.execute({
      userId,
      name,
      email,
      password,
      oldPassword,
    })

    return response.json(instanceToInstance(user))
  }
}
