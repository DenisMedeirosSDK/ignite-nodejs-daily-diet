import { makeCreateSnackUseCase } from '@/use-cases/factories/make-create-snack-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createSnackBodySchema = z.object({
    name: z.string(),
    description: z.string(),
    isDiet: z.boolean(),
    when_was_the_meal: z.string().datetime(),
  })

  const snackUseCase = makeCreateSnackUseCase()

  const { name, description, isDiet, when_was_the_meal } =
    createSnackBodySchema.parse(request.body)

  await snackUseCase.execute({
    name,
    description,
    isDiet,
    when_was_the_meal: new Date(when_was_the_meal),
    userId: request.user.sub,
  })

  return reply.status(201).send()
}
