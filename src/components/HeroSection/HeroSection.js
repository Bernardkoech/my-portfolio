import React from 'react';
import "./HeroSection.css";
import {Link} from "react-router-dom";

const HeroSection = () => {
  return (
    <div className='hero-section2'>
      <div className='hero-contentcontainer'>
        <div className='hero-content'>
          <div className='text'>
            <h1 className='headline'>Hi, I'm Bernard,</h1>
            <p className='sub-headline'>
              a Software Engineer based in Kenya, designing and building web applications that suit business and personal needs.
            </p>
            <Link to="/contacts"><button className='contact-button'>Let's talk</button></Link>
          </div>
        </div>
        <div className='image-container'>
          <div className='image'>
            <img src='https://t4.ftcdn.net/jpg/03/99/06/33/360_F_399063383_reW3ARCLX9j9vA8XlATtZ6wlFBO41Xii.jpg' alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
