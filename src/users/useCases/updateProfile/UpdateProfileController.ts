import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateProfileUseCase } from './UpdateProfileUseCase'

export class UpdateProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateProfileUseCase = container.resolve(UpdateProfileUseCase)
    const userId = request.user.id
    const { name, email, password, oldPassword } = request.body
    const user = await updateProfileUseCase.execute({
      userId,
      name,
      email,
      password,
      oldPassword,
    })

    return response.json(instanceToInstance(user))
  }
}
