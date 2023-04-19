import { SnackRepository } from '@/repositories/snack-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { Snack } from '@prisma/client'

interface UserMetricsUseCaseRequest {
  userId: string
}

export class UserMetricsUseCase {
  constructor(
    private snackRepository: SnackRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({ userId }: UserMetricsUseCaseRequest) {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new Error('User not found')
    }

    const snack = await this.snackRepository.listByUserId(userId)

    const countSnack = snack?.length

    const countSnackDiet = snack?.filter((item) => item.isDiet)?.length
    const countSnackNotDiet = snack?.filter((item) => !item.isDiet)?.length

    const days: { [date: string]: { meals: Snack[]; dietCount: number } } = {}

    snack?.forEach((snack) => {
      const date = snack.when_was_the_meal.toISOString().substring(0, 10)

      if (!days[date]) {
        days[date] = { meals: [], dietCount: 0 }
      }

      days[date].meals.push(snack)

      if (snack.isDiet) {
        days[date].dietCount++
      }
    })

    let maxDietCount = 0

    Object.values(days).forEach((day) => {
      let currentCount = 0

      for (let i = 0; i < day.meals.length; i++) {
        if (day.meals[i].isDiet) {
          currentCount++
        } else {
          if (currentCount > maxDietCount) {
            maxDietCount = currentCount
          }
          currentCount = 0
        }
      }

      if (currentCount > maxDietCount) {
        maxDietCount = currentCount
      }
    })

    return {
      countSnack,
      countSnackDiet,
      countSnackNotDiet,
      maxDietCount,
    }
  }
}
