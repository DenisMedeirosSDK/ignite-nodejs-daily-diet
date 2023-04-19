import { Prisma, Snack } from '@prisma/client'

export interface SnackRepository {
  create(data: Prisma.SnackUncheckedCreateInput): Promise<Snack>
  findById(id: string): Promise<Snack | null>
  delete(id: string): Promise<Snack | null>
  update(id: string, data: Prisma.SnackUncheckedCreateInput): Promise<Snack>
  listByUserId(userId: string): Promise<Snack[] | null>
  find(id: string): Promise<Snack | null>
}
