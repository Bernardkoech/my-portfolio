import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Add your custom styling for the Footer component

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
          <h3>BKM</h3>

            <p>Software Engineer</p>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contacts">Contact</Link>
          </div>
          <div className="social-icons">
            <a href="https://linkedin.com/in/bernard-koech032" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Bernardkoech" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            {/* Add more social media links/icons as needed */}
          </div>
        </div>
        <p className="footer-text">© {new Date().getFullYear()} Bernard Koech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
