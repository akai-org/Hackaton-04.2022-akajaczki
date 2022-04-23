import { Box } from '@mui/material';
import Image from 'next/image';
import logo from '../../public/logo.png';

const MainHeader = () => {
	return (
		<Box bgcolor="rgb(16, 127, 66)" lineHeight="60px" height={60} py={0.7} px={5}>
			<Image width={50} height={50} src={logo} />
		</Box>
	);
};

export default MainHeader;
