import { Box, Button, TextField, Stack, Divider, CircularProgress, IconButton } from '@mui/material';
import type { NextPage } from 'next';
import Slider from '../components/Slider/Slider';
import { Table } from '../components/Table';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import Image from 'next/image';
import { useItemData } from '../services';
import logo from '../public/logo.png';
import { FaDownload, FaCamera } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
	const [barCode, setBarCode] = useState('');
	const router = useRouter();
	const { c } = router.query;
	const { isLoading, data, error, isSuccess } = useItemData(c);

	const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setBarCode(event.target.value);
	};

	const iconHandler = () => {
		router.push(`/?c=${barCode}`, undefined, { scroll: false });
	};

	return (
		<Stack py={15} alignItems="center">
			<Stack
				direction="row"
				bgcolor="primary.main"
				height={60}
				py={0.7}
				px={5}
				position="fixed"
				top={0}
				width="100%"
				zIndex={100}
			>
				<Image src={logo} alt="logo" height={50} width={100} />
				<Box pt={1} color="white" fontWeight="bold" fontSize="25px">
					Carbon Footprint Scaner
				</Box>
			</Stack>

			<Slider />

			<Stack
				justifyContent="center"
				mt={8}
				mx="auto"
				boxShadow={3}
				borderRadius={2}
				p={4}
				sx={{ backdropFilter: 'blur(2px)' }}
				mb={3}
			>
				<Stack direction="row" mx="auto" gap={5}>
					<Button
						style={{
							backgroundColor: 'primary',
						}}
						variant="contained"
					>
						SKANUJ &nbsp;
						<FaCamera />
					</Button>
					<Button
						style={{
							backgroundColor: 'primary',
						}}
						variant="contained"
					>
						WGRAJ &nbsp;
						<FaDownload />
					</Button>
				</Stack>
				<Divider sx={{ my: 3 }} />
				<Stack mx="auto">
					<TextField
						placeholder="Wyszukaj"
						onChange={inputHandler}
						type="text"
						sx={{ backgroundColor: 'white', borderRadius: '50' }}
						InputProps={{
							endAdornment: (
								<IconButton onClick={iconHandler}>
									<SearchIcon cursor="pointer" />
								</IconButton>
							),
						}}
					/>
				</Stack>
			</Stack>
			<Stack position="fixed" bottom={10} right={10}>
				<Image src="https://akai.org.pl/favicon.ico" width={50} height={50} alt="logo akai" />
			</Stack>
			{isLoading && <CircularProgress />}
			{error?.message}
			{!isSuccess ? null : !data ? <div>Produkt nie istnieje</div> : <Table data={data} />}
		</Stack>
	);
};

export default Home;
