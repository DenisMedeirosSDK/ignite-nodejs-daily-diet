import { makeUpdateSnackUseCase } from '@/use-cases/factories/make-update-snack-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { string, z } from 'zod'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const editSnackParamsSchema = z.object({
    id: string().uuid(),
  })
  const createSnackBodySchema = z.object({
    name: z.string(),
    description: z.string(),
    isDiet: z.boolean(),
    when_was_the_meal: z.string().datetime(),
  })

  const snackUseCase = makeUpdateSnackUseCase()

  const { name, description, isDiet, when_was_the_meal } =
    createSnackBodySchema.parse(request.body)

  const { id } = editSnackParamsSchema.parse(request.params)

  await snackUseCase.execute({
    id,
    name,
    description,
    isDiet,
    when_was_the_meal: new Date(when_was_the_meal),
    userId: request.user.sub,
  })

  return reply.status(201).send()
}
