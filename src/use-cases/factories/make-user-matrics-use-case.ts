import { PrismaSnackRepository } from '@/repositories/prisma/prisma-snack-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { UserMetricsUseCase } from '../user-metrics'

export function makeUserMetricsUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const snackRepository = new PrismaSnackRepository()
  const useCase = new UserMetricsUseCase(snackRepository, usersRepository)

  return useCase
}
