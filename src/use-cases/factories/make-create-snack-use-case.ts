import { PrismaSnackRepository } from '@/repositories/prisma/prisma-snack-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { CreateSnackUseCase } from '../create-snack'

export function makeCreateSnackUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const snackRepository = new PrismaSnackRepository()
  const createSnackUseCase = new CreateSnackUseCase(
    snackRepository,
    usersRepository,
  )

  return createSnackUseCase
}
