import { makeListSnackByUserIdUseCase } from '@/use-cases/factories/make-list-snack-by-userId-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function listByUserIdSnack(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const snackUseCase = makeListSnackByUserIdUseCase()

  const snack = await snackUseCase.execute({
    userId: request.user.sub,
  })

  return reply.status(200).send(snack)
}
