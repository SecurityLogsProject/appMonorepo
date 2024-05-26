import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from '@/utils/authOptions'
import { getServerSession } from "next-auth/next"

const createLangchainClient = async () => {
    const model = new ChatGroq({
        apiKey: process.env.GROQ_API_KEY,
    });

    const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a helpful assistant"],
    ["human", "{input}"],
    ]);

    const chain = prompt.pipe(model);

    const response = await chain.invoke({
    input: "Hello",
    });

    console.log("response", response);
}

const postHandler = async (
    req: NextApiRequest, res: NextApiResponse
)  => {
    const session = await getServerSession(authOptions)
    if (!session) return new Response("Please authenticate", { statusCode: 401})
    return  Response.json({message: 'ok'})
}

export {postHandler as POST, postHandler as GET}
