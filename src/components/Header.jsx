import React from 'react';
import Logo from '/images/troll-face.png';
function Header() {
  return (
    <header className='header'>
      <img src={Logo} className='header--image'></img>
      <h2 className='header--title'>Header component!</h2>
      <h4 className='header--project'>React Course - Project 3</h4>
    </header>
  );
}

export default Header;
