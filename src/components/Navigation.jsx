import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../assets/images/space-station.png";
import aboutIcon from "../assets/images/spaceman.png";
import portfolioIcon from "../assets/images/start-up.png";
import contactIcon from "../assets/images/phone.png";
import resumeIcon from "../assets/images/space-trash.png";

function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <img src={homeIcon} alt="Home Icon" className="nav-icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <img src={aboutIcon} alt="About Icon" className="nav-icon" />
            About Me
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <img src={portfolioIcon} alt="Portfolio Icon" className="nav-icon" />
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <img src={contactIcon} alt="Contact Icon" className="nav-icon" />
            Contact
          </Link>
        </li>
        <li>
          <Link to="/resume">
            <img src={resumeIcon} alt="Resume Icon" className="nav-icon" />
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
