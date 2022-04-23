import { Box, Button, ButtonGroup, Icon, Input, Stack } from '@mui/material';
import type { NextPage } from 'next';
import Slider from '../components/Slider/Slider';
import SearchIcon from '@mui/icons-material/Search';

const Home: NextPage = () => {
	return (
		<>
			<Slider />
			<Stack justifyContent="space-evenly" direction="row" mt={8} width="70vw" mx="auto">
				<ButtonGroup>
					<Button
						style={{
							backgroundColor: '#107F42',
						}}
						variant="contained"
					>
						SKANUJ
					</Button>
					<Button
						style={{
							backgroundColor: '#107F42',
						}}
						variant="contained"
					>
						WGRAJ
					</Button>
				</ButtonGroup>
				<Stack direction="row">
					<Box mx={2} width={150}>
						<Input placeholder="Wyszukaj" type="text" />
					</Box>
					<SearchIcon />
				</Stack>
			</Stack>
		</>
	);
};

export default Home;
