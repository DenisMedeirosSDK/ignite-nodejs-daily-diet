import { SnackRepository } from '@/repositories/snack-repository'

interface FindSnackUseCaseRequest {
  id: string
}

export class FindSnackUseCase {
  constructor(private snackRepository: SnackRepository) {}

  async execute({ id }: FindSnackUseCaseRequest) {
    const snack = await this.snackRepository.find(id)

    return { snack }
  }
}
