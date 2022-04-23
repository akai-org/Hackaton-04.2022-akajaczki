import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { prisma } from '@/prisma';

const handler = nc<NextApiRequest, NextApiResponse>()
	//get selected
	.get(async (req, res) => {
		const { id } = req.query;
		const result = await prisma.products.findFirst({ where: { id: Number(id) } });
		res.json(result);
	})
	//update product
	.put(async (req, res) => {
		const { id } = req.query;
		const { name, barcode, harmfulness, categoriesId, co_usage, water_usage, box_usage } = req.body;
		// @ts-ignore
		const result = await prisma.products.update({
			where: { id: Number(id) },
			data: { name, barcode, harmfulness, categoriesId, co_usage, water_usage, box_usage },
		});
		res.json(result);
	})
	//delete product
	.delete(async (req, res) => {
		const { id } = req.query;
		const result = await prisma.products.delete({
			where: { id: Number(id) },
		});
		res.json(result);
	});

export default handler;
