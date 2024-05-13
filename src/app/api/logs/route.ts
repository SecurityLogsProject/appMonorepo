import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

const postHandler = async (req: Request) => {
    if (req.method === 'POST') {
        const { id, content } = await req.json()
        if (!id || !content) throw new Error('Params missing!')
        console.log(`Adding logs for machine with id ${id}`)
        const machine = await prisma.machine.update({
            where: {
                id: id,
            },
            data: {
                logs: {
                    create: {
                        content: content,
                    },
                },
            },
        })
        return Response.json({ message: 'ok' })
    } else {
        return new Response('There was an error while saving logs', {
            status: 400,
        })
    }
}

export { postHandler as POST }
