import { Products } from '@prisma/client';
import { Box, Button, TextField, Stack, Divider, CircularProgress, Card } from '@mui/material';
import { setHarmfulness } from 'utils/harmfulnessSetter';
import WaterIcon from '@mui/icons-material/Water';
import Co2Icon from '@mui/icons-material/Co2';
import { MdRecycling } from 'react-icons/md';
import Image from 'next/image';
import { useSuggestProducts } from '../services';
import Link from 'next/link';

export const Table = ({ data }: { data: Products }) => {
	const { id, name, barcode, harmfulness, categoriesId, co_usage, water_usage, box_usage, createdAt, updatedAt } = data;

	const { data: suggestProducts } = useSuggestProducts(categoriesId);

	return (
		<Stack boxShadow={3} borderRadius={2} p={2} width={500} mb={3} mt={5} gap={1}>
			<Stack overflow="hidden" width={200} mx="auto">
				<Image
					src={`https://source.unsplash.com/random/200x200?drink&id=${id}`}
					width={200}
					height={200}
					alt="product"
				/>
			</Stack>
			<Stack textAlign="center" fontSize="25px">
				{name}
			</Stack>
			<Stack textAlign="center" fontSize="16px">
				(Kod Kreskowy: {barcode})
			</Stack>

			<Stack fontSize={25}>{setHarmfulness(harmfulness)}</Stack>
			<Stack direction="row">
				<Co2Icon />
				<Stack ml={2}>Emisja CO2: {co_usage}</Stack>
			</Stack>
			<Stack direction="row">
				<WaterIcon />
				<Stack ml={2}>Zużycie wody: {water_usage}</Stack>
			</Stack>
			<Stack direction="row">
				<MdRecycling size={23} />
				<Stack ml={2}>Recykling opakowań: {box_usage}</Stack>
			</Stack>
			<Stack mt={5} textAlign="center" direction="row" mx="auto">
				Podobne produkty w kategorii&nbsp;<b>Napoje</b>
			</Stack>
			<Stack direction="row" gap={1}>
				{suggestProducts &&
					suggestProducts
						.filter((v) => v.barcode !== barcode)
						.map((product) => (
							<Link href={`/?c=${product.barcode}`} passHref key={product.id} scroll={false}>
								<Card
									sx={{
										flex: 1,
										display: 'flex',
										flexDirection: 'column',
										p: 1,
										textDecoration: 'none',
										textAlign: 'center',
									}}
									component="a"
								>
									<Box>
										<Image
											src="https://source.unsplash.com/random/400x400?food,drink"
											alt="product"
											width="300"
											height="300"
										/>
									</Box>
									<Box fontSize={18} minHeight={60}>
										{product.name}
									</Box>
									<Box fontSize={13}>{setHarmfulness(product.harmfulness)}</Box>
								</Card>
							</Link>
						))}
			</Stack>
		</Stack>
	);
};
