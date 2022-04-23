import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { prisma } from '@/prisma';

const handler = nc<NextApiRequest, NextApiResponse>()
	//get selected
	.get(async (req, res) => {
		const { barcode } = req.query;
		const result = await prisma.products.findUnique({ where: { barcode: String(barcode) } });
		res.json(result);
	})
	//update product
	.put(async (req, res) => {
		const { barcode } = req.query;
		const { name, harmfulness, categoriesId, co_usage, water_usage, box_usage } = req.body;
		const result = await prisma.products.update({
			where: { barcode: String(barcode) },
			data: { name, harmfulness, categoriesId, co_usage, water_usage, box_usage },
		});
		res.json(result);
	})
	//delete product
	.delete(async (req, res) => {
		const { barcode } = req.query;
		const result = await prisma.products.delete({
			where: { barcode: String(barcode) },
		});
		res.json(result);
	});

export default handler;
