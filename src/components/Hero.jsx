import React from 'react';
import PhotoGrid from '/assets/photo-grid.png';

function Hero(){
    return(
        <section className="hero">
            <img src={PhotoGrid} className="hero--image"/>
            <h1 className="hero--title">Online Experiences</h1>
            <p className='hero--content'>Join unique interactive activities led by one-of-a-kind-host-all without leaving home.</p>
        </section>
    )
};

export default Hero;