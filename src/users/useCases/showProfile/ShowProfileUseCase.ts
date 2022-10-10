import { inject, injectable } from 'tsyringe'
import { AppError } from '@shared/errors/AppError'
import { IUsersRepository } from '@users/repositories/IUsersRepository'
import { User } from '@users/entities/User'

type ShowProfileParams = {
  user_id: string
}

@injectable()
export class ShowProfileUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  async execute({ user_id }: ShowProfileParams): Promise<User> {
    const user = await this.usersRepository.findById(user_id)
    if (!user) {
      throw new AppError('User not found', 404)
    }

    return user
  }
}
