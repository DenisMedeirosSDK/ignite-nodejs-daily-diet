import { PrismaSnackRepository } from '@/repositories/prisma/prisma-snack-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { ListSnackUseCase } from '../list-snack'

export function makeListSnackByUserIdUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const snackRepository = new PrismaSnackRepository()
  const useCase = new ListSnackUseCase(snackRepository, usersRepository)

  return useCase
}
