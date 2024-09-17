import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
          exact="true">
          <img src="/src/assets/images/space-station.png" alt="Home" /> Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <img src="/src/assets/images/spaceman.png" alt="About Me" /> About Me
        </NavLink>
        <NavLink 
          to="/portfolio" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <img src="/src/assets/images/start-up.png" alt="Portfolio" /> Portfolio
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <img src="/src/assets/images/phone.png" alt="Contact" /> Contact
        </NavLink>
        <NavLink 
          to="/resume" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <img src="/src/assets/images/space-trash.png" alt="Resume" /> Resume
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
