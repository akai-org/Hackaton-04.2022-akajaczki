import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { prisma } from '@/prisma';

const handler = nc<NextApiRequest, NextApiResponse>()
    .get(async (req, res) => {
        const { id } = req.query;
        const result = await prisma.products.findMany({
            where: { categoriesId: Number(id) },
            take: 5,
            orderBy: [
                {
                    harmfulness: "asc"
                }
            ]
        });
        res.json(result);
    });

export default handler;
