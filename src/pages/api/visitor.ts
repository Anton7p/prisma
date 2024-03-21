import type {NextApiRequest, NextApiResponse} from 'next'
import prisma from '../../lib/prisma'

export default async function handle(req: NextApiRequest,
                              res: NextApiResponse,) {
    const visit = await prisma.visit.findUnique({where: {id: 1}});
    return res.json(visit ? visit.count : 0)
}

