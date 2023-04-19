import { SnackRepository } from '@/repositories/snack-repository'
import { UsersRepository } from '@/repositories/users-repository'

interface CreateSnackUseCaseRequest {
  name: string
  description: string
  isDiet: boolean
  when_was_the_meal: Date
  userId: string
}

export class CreateSnackUseCase {
  constructor(
    private snackRepository: SnackRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({
    name,
    description,
    isDiet,
    when_was_the_meal,
    userId,
  }: CreateSnackUseCaseRequest) {
    // const user = await this.usersRepository.findById(userId)

    // if (!user) {
    //   throw new Error('User not exists')
    // }

    const snack = await this.snackRepository.create({
      name,
      description,
      isDiet,
      when_was_the_meal,
      user_id: userId,
    })

    return { snack }
  }
}
