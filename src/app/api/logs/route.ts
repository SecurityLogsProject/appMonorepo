import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

const postHandler = async (
    req: Request,
)  => {
    console.log("TEST")
    if (req.method === 'POST') {
        const {machineId,content} = await req.json();
        if (!machineId || !content) throw new Error('Params missing!')
        console.log(`Adding logs for machine with id ${machineId}`);
        const machine = await prisma.machine.update({
            where: {
                id: machineId,
            },
            data: {
                logs: {
                    create: {
                        content: content,
                    }
                }
            }
        })


        console.log(machine)
        return  Response.json({message: 'ok'})
    } else {
        return new Response('There was an error while saving logs', {
            status: 400
        });
    }
}

export {postHandler as POST}