import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MainHeader from '../components/MainHeader/MainHeader';
import 'swiper/css/bundle';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<MainHeader />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
