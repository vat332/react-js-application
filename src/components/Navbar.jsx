import React from "react";
import Logo from "../assets/react.svg"
function Navbar() {
  return (
    <nav className="nav">
      <img src={Logo} className="logo-img"/>
      <ul className="nav-items">
        <li>O nas!</li>
        <li>Cennik</li>
        <li>Menu</li>
      </ul>
    </nav>
  );
}

export default Navbar;
