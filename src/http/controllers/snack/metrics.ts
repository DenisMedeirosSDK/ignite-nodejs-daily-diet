import { makeUserMetricsUseCase } from '@/use-cases/factories/make-user-matrics-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function userMetrics(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const snackUseCase = makeUserMetricsUseCase()

  const metrics = await snackUseCase.execute({
    userId: request.user.sub,
  })

  return reply.status(200).send(metrics)
}
