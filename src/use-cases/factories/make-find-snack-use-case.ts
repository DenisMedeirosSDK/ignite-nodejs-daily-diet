import { PrismaSnackRepository } from '@/repositories/prisma/prisma-snack-repository'
import { FindSnackUseCase } from '../find-snack'

export function makeFindSnackByUserIdUseCase() {
  const snackRepository = new PrismaSnackRepository()
  const useCase = new FindSnackUseCase(snackRepository)

  return useCase
}
