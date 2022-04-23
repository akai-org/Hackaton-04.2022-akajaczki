import { Box, CircularProgress, Stack, Card } from '@mui/material';
import { useCuriosities } from '../../services';

const Slider = () => {
	const { data, isLoading } = useCuriosities();

	return (
		<Stack mx="auto" p={4} width="80vw" textAlign="center" boxShadow={3} borderRadius={2}>
			{isLoading || !data ? (
				<div>
					<CircularProgress />
				</div>
			) : (
				<Box>{data.text}</Box>
			)}
		</Stack>
	);
};

export default Slider;
