import { SnackRepository } from '@/repositories/snack-repository'
import { UsersRepository } from '@/repositories/users-repository'

interface ListSnackUseCaseRequest {
  userId: string
}

export class ListSnackUseCase {
  constructor(
    private snackRepository: SnackRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({ userId }: ListSnackUseCaseRequest) {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new Error('User not found')
    }

    const snack = await this.snackRepository.listByUserId(userId)

    return { snack }
  }
}
