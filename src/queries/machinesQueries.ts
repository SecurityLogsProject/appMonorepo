import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createMachine = async () => {
    return prisma.daemon.create({
        data: {
            id: 'ASD',
            userId: 'ASD',
            name: 'ASD',
        },
    })
}
