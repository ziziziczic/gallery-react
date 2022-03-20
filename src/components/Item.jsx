import React from 'react';
import {makeStyles}from '@mui/styles'

const useStyles = makeStyles({
    imgContainer : {
        width:'100%',
        height: '100%',
        overflow: 'hidden',

        '&:hover' :{
            '& img' :{
                transform : 'scale(1.1)',
            },
        },
    },
    title : {
        fontSize : '20px',
        fontWeight : 700,
    },
    author :{

    },
    price : {
        color : 'red',
    }
})

const Item = (props) => {
    const classes = useStyles();
    const {title,author,price,src} = props.hotdeal;
    return(
    <>
        <div className={classes.imgContainer}>
            <img src={src} alt='hot deal item'></img>
        </div>
        <p className={classes.title}>제목 : {title}</p>
        <p className={classes.author}>작가 : {author}</p>
        <p className={classes.price}>가격 : {price}</p>
    </>);
};

export default Item;