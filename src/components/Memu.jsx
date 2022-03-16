import React from 'react';
import {Button,Stack} from '@mui/material'

const menus = ['항공','숙소','투어&액티비티','여행준비','해외여행알리미']

const direc = {
    // md : 'column',
    sm : 'row',
}

const Memu = (props) => {
    return(
        <Stack direction={direc} spacing={2}>
            {
                menus.map((item,index)=>{
                    return <Button>{item}</Button>
                })
            }
        </Stack>
    );
}

export default Memu;