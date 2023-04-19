import { makeDeleteSnackUseCase } from '@/use-cases/factories/make-delete-snack-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function deleteSnack(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const deleteSnackParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const snackUseCase = makeDeleteSnackUseCase()

  const { id } = deleteSnackParamsSchema.parse(request.params)

  await snackUseCase.execute({
    id,
  })

  return reply.status(200).send()
}
