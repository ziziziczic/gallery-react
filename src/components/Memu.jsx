import React from 'react';
import {Button,Box} from '@mui/material'

const menus = ['항공','숙소','투어&액티비티','여행준비','해외여행알리미']

const Memu = (props) => {
    return(
        <Box>
            {
                menus.map((item,index)=>{
                    return <Button>{item}</Button>
                })
            }
        </Box>
    );
}

export default Memu;