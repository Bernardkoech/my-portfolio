import React, { useState } from 'react';
import "./Navbar.css";
import { FaUser, FaCode, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeNav = () => {
    setIsOpen(false);
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>

      <Link to="/" className="logo-link">
        <h3 className="logo">BKM</h3>
      </Link>
      <div className={`nav-toggle ${isOpen ? "open" : ""}`} onClick={toggleNav}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/about" onClick={closeNav}><FaUser /> About</Link></li>
        <li><Link to="/projects" onClick={closeNav}><FaCode /> Projects</Link></li>
        <li><Link to="/contacts" onClick={closeNav}><FaEnvelope /> Contact Me</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;
