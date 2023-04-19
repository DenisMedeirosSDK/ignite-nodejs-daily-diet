import { PrismaSnackRepository } from '@/repositories/prisma/prisma-snack-repository'
import { DeleteSnackUseCase } from '../delete-snack'

export function makeDeleteSnackUseCase() {
  const snackRepository = new PrismaSnackRepository()
  const useCase = new DeleteSnackUseCase(snackRepository)

  return useCase
}
