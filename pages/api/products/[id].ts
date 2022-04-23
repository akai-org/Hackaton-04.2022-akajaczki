import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { prisma } from '@/prisma';

const handler = nc<NextApiRequest, NextApiResponse>()
	.get(async (req, res) => {
		const { id } = req.query;
		const result = await prisma.products.findFirst({ where: { id: Number(id) } });
		res.json(result);
	})
	.put(async (req, res) => {
		const { id } = req.query;
		const { name, barcode, harmfulness, categoriesId } = req.body;
		const result = await prisma.products.update({
			where: { id: Number(id) },
			data: { name, barcode, harmfulness, categoriesId },
		});
		res.json(result);
	})
	.delete(async (req, res) => {
		const { id } = req.query;
		const result = await prisma.products.delete({
			where: { id: Number(id) },
		});
		res.json(result);
	});

export default handler;
