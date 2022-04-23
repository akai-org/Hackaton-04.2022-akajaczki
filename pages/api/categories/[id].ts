import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { prisma } from '@/prisma';

const handler = nc<NextApiRequest, NextApiResponse>().delete(async (req, res) => {
	const { id } = req.query;

	const result = await prisma.categories.delete({ where: { id: Number(id) } });

	res.json(result);
});

export default handler;
