import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { prisma } from '@/prisma';

const handler = nc<NextApiRequest, NextApiResponse>()
	.get(async (req, res) => {
		const result = await prisma.categories.findMany({});

		res.json(result);
	})
	.post(async (req, res) => {
		const { name } = req.body;

		const result = await prisma.categories.create({ data: { name } });

		res.json(result);
	});

export default handler;
