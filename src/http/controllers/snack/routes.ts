import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'
import { create } from './create'
import { deleteSnack } from './delete'
import { findSnack } from './find'
import { listByUserIdSnack } from './list-by-user-id'
import { userMetrics } from './metrics'
import { update } from './update'

export async function snackRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)
  app.post('/snack', create)
  app.delete('/snack/:id', deleteSnack)
  app.patch('/snack/:id', update)
  app.get('/snack', listByUserIdSnack)
  app.get('/snack/:id', findSnack)
  app.get('/snack/me', userMetrics)
}
