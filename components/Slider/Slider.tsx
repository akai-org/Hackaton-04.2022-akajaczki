import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

const Slider = () => {
	const [quotes, setQuotes] = useState([{ text: '' }]);
	const getData = async () => {
		const response = await fetch('/api/curiosities', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		console.log(data);
		setQuotes(data);
		return data;
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<Box color="black" mx="auto" borderRadius={3} py={5} px={2} width="80vw">
			<Swiper pagination={true} modules={[Pagination]} className="mySwiper" loop={true} slidesPerView={1}>
				{quotes.map((quote) => (
					<Box>
						<SwiperSlide>{quote.text}</SwiperSlide>
					</Box>
				))}
			</Swiper>
		</Box>
	);
};

export default Slider;
