import { prisma } from '@/lib/prisma'
import { Prisma, Snack } from '@prisma/client'
import { SnackRepository } from '../snack-repository'

export class PrismaSnackRepository implements SnackRepository {
  async find(id: string): Promise<Snack | null> {
    const snack = await prisma.snack.findFirst({
      where: {
        id,
      },
    })

    return snack
  }

  async listByUserId(userId: string): Promise<Snack[] | null> {
    const snack = await prisma.snack.findMany({
      where: {
        user_id: userId,
      },
    })

    return snack
  }

  async update(
    id: string,
    data: Prisma.SnackUncheckedCreateInput,
  ): Promise<Snack> {
    const snack = await prisma.snack.update({
      where: {
        id,
      },
      data,
    })

    return snack
  }

  async findById(id: string): Promise<Snack | null> {
    const snack = await prisma.snack.findUnique({
      where: {
        id,
      },
    })

    return snack
  }

  async delete(id: string): Promise<Snack | null> {
    const snack = await prisma.snack.delete({
      where: {
        id,
      },
    })

    return snack
  }

  async create(data: Prisma.SnackUncheckedCreateInput): Promise<Snack> {
    const snack = prisma.snack.create({
      data,
    })

    return snack
  }
}
