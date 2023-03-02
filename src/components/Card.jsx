import React from 'react';
import Image from '../assets/katie-zaferes.png'
import Image_star from '../assets/star.png'
function Card(){
    return(
        <div className="card">
            <img src={Image} className="card--image"/>
            <div className="card--stats">
                <img src={Image_star} className="card--star"/>
                <span className="card--title">5.0</span>
                <span className="grey">(6) </span>
                <span className="grey">USA</span>
            </div>
            <p>Life lesson with Katie Zaferes</p>
            <p><span className='bold'>From $136</span> / person</p>
        </div>
    )
};

export default Card;