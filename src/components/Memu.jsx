import React from 'react';
import {Button,Stack,Skeleton} from '@mui/material'
import {Link} from 'react-router-dom';
// import {makeStyles} from '@mui/material'

const menus = ['Best','Modern','KoreanPainting','Primium','Online']

const direc = {
    // md : 'column',
    sm : 'row',
}
// const useStyles = makeStyles({
//     btnStyle : {
//         color : '#fff',
//     }
// });

const btnStyle = {
    color : '#000',
}

const menuStyle = {
    borderBottom : 1,
    borderColor : '#fff',
    display : 'flex',
    justifyContent : 'center',
    padding : 1,
    fontWeight : 'bold',
}
const Memu = (props) => {
    // const classes = useStyles();

    return(props.loading ?//
        <Stack direction={direc} spacing={2}>
            {
                menus.map((item,index)=>{
                    return <Skeleton variant="rectangular" width={100} height={30}></Skeleton>
                })
            }
        </Stack> ://
        <Stack direction={direc} spacing={2} sx={menuStyle}>
            {
                menus.map((item,index)=>{
                    return <Link to={`/${item}`}>
                            <Button sx={btnStyle} key={index}>{item}</Button>
                        </Link>
                })
            }
        </Stack>
    );
}

export default Memu;