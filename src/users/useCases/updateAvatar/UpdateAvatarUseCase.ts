import { inject, injectable } from 'tsyringe'
import path from 'node:path'
import { IUsersRepository } from '@users/repositories/IUsersRepository'
import { User } from '@users/entities/User'
import { AppError } from '@shared/errors/AppError'
import uploadConfig from '@config/upload'
import fs from 'node:fs'

type UpdateAvatarDTO = {
  userId: string
  avatarFilename: string
}

@injectable()
export class UpdateAvatarUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  async execute({ userId, avatarFilename }: UpdateAvatarDTO): Promise<User> {
    const user = await this.usersRepository.findById(userId)
    if (!user) {
      throw new AppError('Only authenticated users can change avatar', 401)
    }
    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar)
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath)
      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath)
      }
    }

    user.avatar = avatarFilename
    return this.usersRepository.save(user)
  }
}
