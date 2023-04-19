import { PrismaSnackRepository } from '@/repositories/prisma/prisma-snack-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { UpdateSnackUseCase } from '../update-snack'

export function makeUpdateSnackUseCase() {
  const snackRepository = new PrismaSnackRepository()
  const usersRepository = new PrismaUsersRepository()
  const useCase = new UpdateSnackUseCase(snackRepository, usersRepository)

  return useCase
}
