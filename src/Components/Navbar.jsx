import React from 'react';
import './Navbar.css';
import ARC from '../assets/ARC.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={ARC} alt="ARC" className="navbar-logo" />
    <div className="navbar-links">
        <a href="#story" className="nav-link">Our Story</a>
        <a href="#projects" className="nav-link">Projects</a>
        <div className="get-in-touch-border">
             <a href="#get in touch" className="nav-link2">Get in touch</a>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
