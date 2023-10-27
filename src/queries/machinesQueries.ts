import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
const prisma = new PrismaClient()

export const createDaemon = async (daemonName: string) => {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
        throw Error('no logged user!')
    }

    if (!daemonName) {
        throw Error('no daemon name provided!')
    }

    return prisma.daemon.create({
        data: {
            userEmail: session?.user?.email,
            name: daemonName,
        },
    })
}
