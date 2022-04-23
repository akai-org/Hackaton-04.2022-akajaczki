import { Box, Button, ButtonGroup, Icon, Input, Stack } from '@mui/material';
import type { NextPage } from 'next';
import Slider from '../components/Slider/Slider';
import SearchIcon from '@mui/icons-material/Search';

const Home: NextPage = () => {
	return (
		<>
			<Box width="100%" sx={{ backgroundImage: `url('/las.png')`, backgroundSize: 'cover' }} py={15} bgcolor="blue">
				<Slider />
			</Box>
			<Stack justifyContent="center" direction="column" mt={8} maxWidth="40vw" mx="auto">
				<Stack direction="row" mx="auto">
					<Box mx={3} my={2}>
						<Button
							style={{
								backgroundColor: '#107F42',
							}}
							variant="contained"
						>
							SKANUJ
						</Button>
					</Box>
					<Box my={2}>
						<Button
							style={{
								backgroundColor: '#107F42',
							}}
							variant="contained"
						>
							WGRAJ
						</Button>
					</Box>
				</Stack>
				<Stack direction="row" mx="auto">
					<Box mx={2} width={150}>
						<Input placeholder="Wyszukaj" type="text" />
					</Box>
					<SearchIcon cursor="pointer" />
				</Stack>
			</Stack>
		</>
	);
};

export default Home;
