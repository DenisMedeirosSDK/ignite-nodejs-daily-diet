import { SnackRepository } from '@/repositories/snack-repository'

interface DeleteSnackUseCaseRequest {
  id: string
}

export class DeleteSnackUseCase {
  constructor(private snackRepository: SnackRepository) {}

  async execute({ id }: DeleteSnackUseCaseRequest) {
    const snackExists = await this.snackRepository.findById(id)

    if (!snackExists) {
      throw new Error('snack not found')
    }

    await this.snackRepository.delete(id)
  }
}
