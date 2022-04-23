import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MainHeader from '../components/MainHeader/MainHeader';
import 'swiper/css/bundle';
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<MainHeader />
			<CssBaseline />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
