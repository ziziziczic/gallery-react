import React from 'react';
// import Swiper core and required modules
import { Navigation , Autoplay} from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css'

import { makeStyles } from '@mui/styles';

import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'

const useStyles = makeStyles({
    root :{
        width:'1200px',
        margin: '0 auto',
    }
});

const Banner = (props) => {
    const classes = useStyles();

    return <Swiper className={classes.root} 
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}>
                    <SwiperSlide><img src={banner1} alt="banner"></img></SwiperSlide>
                    <SwiperSlide><img src={banner2} alt="banner"></img></SwiperSlide>
                    <SwiperSlide><img src={banner3} alt="banner"></img></SwiperSlide>
            </Swiper>
};

export default Banner;