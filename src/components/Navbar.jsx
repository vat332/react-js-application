import React from 'react';
import Logo from '../assets/airbnb-logo.png';

function Navbar(){
    return(
        <nav className="navbar">
            <img src={Logo} className="navbar--image"/>
        </nav>
    )
};

export default Navbar;