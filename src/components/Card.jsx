import React from 'react';
import Image_star from '/assets/star.png'

function Card(props){
    console.log(props)
    return(
        <div className="card">
        <img src={`/assets/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src={Image_star} className="card--star"/>
                <span className="card--title">{props.rating}</span>
                <span className="grey">({props.reviewCount})</span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
};

export default Card;