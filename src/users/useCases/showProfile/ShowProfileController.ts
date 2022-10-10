import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ShowProfileUseCase } from './ShowProfileUseCase'

export class ShowProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showProfileUseCase = container.resolve(ShowProfileUseCase)
    const { user_id } = request.body
    const user = await showProfileUseCase.execute({
      user_id,
    })

    return response.json(instanceToInstance(user))
  }
}