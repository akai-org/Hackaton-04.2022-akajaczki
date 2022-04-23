import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { prisma } from '@/prisma';

const handler = nc<NextApiRequest, NextApiResponse>()
	.get(async (req, res) => {
		const result = await prisma.products.findMany({});

		res.json(result);
	})
	.post(async (req, res) => {
		const { name, barcode, harmfulness, categoriesId, createdAt, updatedAt } = req.body;

		const result = await prisma.products.create({ data: { name, barcode, harmfulness, categoriesId } });

		res.json(result);
	});

export default handler;
