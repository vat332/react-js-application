import React from 'react';
import Image_star from '/assets/star.png'

function Card(props){
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={`/assets/${props.item.coverImg}`} className="card--image"/>
            <div className="card--stats">
                <img src={Image_star} className="card--star"/>
                <span className="card--title">{props.item.stats.rating}</span>
                <span className="grey">({props.item.stats.reviewCount})</span>
                <span className="grey">{props.item.country}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className='bold'>From ${props.item.price}</span> / person</p>
        </div>
    )
};

export default Card;