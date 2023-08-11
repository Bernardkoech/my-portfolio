import React, { useState, useEffect } from 'react';
import "./About3.css";
import { Link } from "react-router-dom";

const About3 = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const handleIntersect = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setAnimate(true);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(document.querySelector('.about-section3'));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`about-section3 ${animate ? 'animate' : ''}`}>
      <div className='content-container3'>
      <div className={`image-container3 ${animate ? 'animate' : ''}`}>
          <div className={`image3 ${animate ? 'animate' : ''}`}>
            <img src='https://media.istockphoto.com/id/1291797612/vector/cute-stickman-pointing-on-blank.jpg?s=612x612&w=0&k=20&c=4QZreWrkK5_YBjPmrQWUYtSDE_ywdpB7A-QLGKR-T0Y=' alt="Profile" />
          </div>
        </div>
        <div className='content3'>
          <div className={`text3 ${animate ? 'animate' : ''}`}>
            <div className={`about-headline3 ${animate ? 'animate' : ''}`}>about.</div>
            <p className={`about-subheadline3 ${animate ? 'animate' : ''}`}>
              Hi there! I'm Bernard Koech, a passionate and dedicated Software Engineer.
              Ever since I discovered the world of coding, I've been on an exciting journey
              to turn my creative ideas into functional and user-friendly websites. I
              recently graduated from a coding bootcamp where I honed my skills in
              front-end and back-end development.
            </p>
            <Link to="/projects"><button className={`project-button3 ${animate ? 'animate' : ''}`}>Projects</button></Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About3;
