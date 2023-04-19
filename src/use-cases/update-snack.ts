import { SnackRepository } from '@/repositories/snack-repository'
import { UsersRepository } from '@/repositories/users-repository'

interface UpdateSnackUseCaseRequest {
  id: string
  name: string
  description: string
  isDiet: boolean
  when_was_the_meal: Date
  userId: string
}

export class UpdateSnackUseCase {
  constructor(
    private snackRepository: SnackRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({
    id,
    name,
    description,
    isDiet,
    when_was_the_meal,
    userId,
  }: UpdateSnackUseCaseRequest) {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new Error('User not exists')
    }

    const snack = await this.snackRepository.find(id)

    if (userId !== snack?.user_id) {
      throw new Error('Invalid update')
    }

    const updateSnack = await this.snackRepository.update(id, {
      name,
      description,
      isDiet,
      when_was_the_meal,
      user_id: userId,
    })

    return { snack: updateSnack }
  }
}
