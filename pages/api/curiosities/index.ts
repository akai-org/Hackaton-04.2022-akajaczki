import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { prisma } from '@/prisma';

const handler = nc<NextApiRequest, NextApiResponse>()
	.get(async (req, res) => {
		const productsCount = await prisma.curiosities.count();
		const skip = Math.floor(Math.random() * productsCount);
		const cur = await prisma.curiosities.findMany({
			take: 5,
			skip: skip,
		});

        const productsCount = await prisma.curiosities.count();
        const skip = Math.floor(Math.random() * productsCount);
        const cur = await prisma.curiosities.findMany({
            take: 1,
            skip: skip,
        });


		const result = await prisma.curiosities.create({ data: { text } });

		res.json(result);
	});

export default handler;
