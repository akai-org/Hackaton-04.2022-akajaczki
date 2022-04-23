import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import { Box } from '@mui/material';

const Slider = () => {
	return (
		<Box mt={2} height={200}>
			<Swiper pagination={true} modules={[Pagination]} className="mySwiper" loop={true} slidesPerView={1}>
				<Box>
					<SwiperSlide>Slide 1</SwiperSlide>
				</Box>
				<Box>
					<SwiperSlide>Slide 2</SwiperSlide>
				</Box>
				<Box>
					<SwiperSlide>Slide 3</SwiperSlide>
				</Box>
			</Swiper>
		</Box>
	);
};

export default Slider;
