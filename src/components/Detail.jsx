import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
    let {id} = useParams();

return (<div>
        <div>
            <img src={`../${props.items[id].src}`} alt='hot deal'></img>
        </div>
        <p>제목 : {props.items[id].title}</p>
        <p>작가 : {props.items[id].author}</p>
        <p>가격 : {props.items[id].price}</p>
    </div>);
};

export default Detail;