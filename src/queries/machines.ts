import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
const prisma = new PrismaClient()

export const createMachine = async (machineName: string) => {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
        throw Error('no logged user!')
    }

    if (!machineName) {
        throw Error('no machine name provided!')
    }

    return prisma.machine.create({
        data: {
            userEmail: session?.user?.email,
            name: machineName,
        },
    })
}

export const listMachines = async () => {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
        throw Error('no logged user!')
    }

    return prisma.machine.findMany({
        where: {
            user: {
                email: session.user.email,
            },
        },
    })
}

export const getMachine = async (name: string) => {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
        throw Error('no logged user!')
    }

    return prisma.machine.findFirstOrThrow({
        where: {
            name: name,
            user: {
                email: session.user.email,
            },
        },
    })
}
