import { makeFindSnackByUserIdUseCase } from '@/use-cases/factories/make-find-snack-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findSnack(request: FastifyRequest, reply: FastifyReply) {
  const findSnackParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const snackUseCase = makeFindSnackByUserIdUseCase()

  const { id } = findSnackParamsSchema.parse(request.params)

  const snack = await snackUseCase.execute({
    id,
  })

  return reply.status(200).send(snack)
}
