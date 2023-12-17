import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <p>Amrit Adhikari</p>
      </div>
      <ul className="NavLinks">
        <li><Link to="/" className='NavLink'>Home</Link></li>
        <li><Link to="/about" className='NavLink'>About</Link></li>
        <li><Link to="/projects" className='NavLink'>Projects</Link></li>
        <li><Link to="/contact" className='NavLink'>Contact</Link></li>
        <li><Link to="/skills" className='NavLink'>Skills</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
