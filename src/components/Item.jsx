import React from 'react';
import {makeStyles}from '@mui/styles'
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
    root :{
        '&:hover' : {
            '& img' :{
                transform : 'scale(1.1)',
            },
            '& $title , & $author, & $price' : {
                background : '#eee',
            }
        },
    },
    imgContainer : {
        width:'100%',
        height: '100%',
        overflow: 'hidden',
        '& img' : {
            width: '100%',
            height: '100%',
            transition : 'transform 0.2',
        }
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
    const {id,title,author,price,src} = props.hotdeal;
    return(
        <Link to={`/detail/${id}`}>
            <div className={classes.root}>
                <div className={classes.imgContainer}>
                    <img src={src} alt='hot deal item'></img>
                </div>
                <p className={classes.title}>제목 : {title}</p>
                <p className={classes.author}>작가 : {author}</p>
                <p className={classes.price}>가격 : {price}</p>
            </div>
        </Link>
    );
};

export default Item;