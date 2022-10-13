import { AppError } from '@shared/errors/AppError'
import { dataSource } from '@shared/typeorm'
import { RefreshToken } from '@users/entities/RefreshToken'
import { Repository } from 'typeorm'
import {
  CreateRefreshTokenDTO,
  IRefreshTokenRespository,
} from './IRefreshTokenRepository'

export class RefreshTokenRespository implements IRefreshTokenRespository {
  private repository: Repository<RefreshToken>

  constructor() {
    this.repository = dataSource.getRepository(RefreshToken)
  }

  create({
    expires,
    token,
    user_id,
    valid,
  }: CreateRefreshTokenDTO): Promise<RefreshToken> {
    const refreshToken = this.repository.create({
      expires,
      token,
      user_id,
      valid,
    })

    return this.repository.save(refreshToken)
  }

  async findByToken(token: string): Promise<RefreshToken> {
    return this.repository.findOneBy({ token })
  }

  async invalidate(refresh_token: RefreshToken): Promise<void> {
    const refreshToken = await this.findByToken(refresh_token.token)
    if (!refresh_token) {
      throw new AppError('Refresh token not found', 404)
    }
    refreshToken.valid = false
    await this.repository.save(refreshToken)
  }
}
