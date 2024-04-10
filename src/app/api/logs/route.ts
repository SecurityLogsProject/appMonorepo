import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const logsData = req.body
        try {
            const createdLogs = await prisma.machine.create({
                data: logsData,
            })
            res.status(201).json(createdLogs)
        } catch (error) {
            console.error('Error creating logs:', error)
            res.status(500).json({ error: 'Failed to create logs' })
        }
    } else {
        res.status(401).json({ error: 'Method not allowed' })
    }
}
