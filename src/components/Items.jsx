import React from 'react';
import {Swiper , SwiperSlide} from 'swiper/react/swiper-react'
import { makeStyles } from '@mui/styles';

import Item from './Item';

const useStyles =makeStyles({
    root : {
        width : '1200px',
        margin : '0 auto',
    }
});

const Items = (props) => {
    const classes = useStyles();
    return (
        <Swiper 
            className={classes.root}
            slidesPerView={3}
            spaceBetween={30}>
            {
                props.items.map((item,index)=>{
                    return <SwiperSlide>
                        <Item hotdeal = {item} key={item.title}></Item>
                    </SwiperSlide>
                })
            }
        </Swiper>
    );
}

export default Items;