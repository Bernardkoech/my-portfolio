import React from 'react';
import './About.css'; // Add your custom styling for the About component
import About3 from '../About3/About3';

const About = () => {
  return (
    <div>
      <About3 />

      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              Hey there! I'm Bernard Koech, a passionate software engineer from Nakuru, Kenya. I recently graduated from Moringa school, where I honed my coding skills and learned to develop efficient and scalable applications.
            </p>
            <p>
              As a dedicated learner, I'm always excited to explore new technologies and tools. My primary focus has been on React and Ruby on Rails during my bootcamp journey.
            </p>
            <p>
              During my time at Moringa school, I had the opportunity to work on various projects that challenged me and helped me grow as a developer. One of my favorite projects was Tuinue wasichana, where I used React and Ruby on Rails to build an app where users can view charities and donate to them.
            </p>
            <p>
            Apart from coding, I love animating, working out, playing chess, and training in martial arts. I'm a firm believer in lifelong learning and am currently exploring more online courses to further enhance my skills.
            </p>
            <p>
              I'm enthusiastic about contributing to the tech community through open-source projects and collaborating with other developers. I'm driven by the belief that technology can make a positive impact on the world, and I'm excited to be a part of this journey.
            </p>
            <p>
              If you're interested in connecting or discussing potential opportunities, feel free to reach out.
            </p>

            {/* Downloadable resume link */}
            <div className="resume-link">
              <a href={require('./resume.pdf')} download>
                Download My Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
