import React, { useEffect, useRef } from 'react';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGem,
  FaCode,
  FaDatabase,
} from 'react-icons/fa';
import './SkillProgress.css';

const skills = [
  { name: 'HTML', level: 90, icon: <FaHtml5 /> },
  { name: 'CSS', level: 80, icon: <FaCss3 /> },
  { name: 'JavaScript', level: 70, icon: <FaJs /> },
  { name: 'React', level: 60, icon: <FaReact /> },
  { name: 'Ruby', level: 50, icon: <FaGem /> },
  { name: 'Ruby on Rails', level: 50, icon: <FaCode /> },
  { name: 'PostgreSQL', level: 50, icon: <FaDatabase /> },
];

const SkillProgress = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // When 50% of the element is visible
    };

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const skillIndex = entry.target.getAttribute('data-skill-index');
            const progressElement = entry.target.querySelector('.progress');
            const skill = skills[skillIndex];

            progressElement.style.width = `${skill.level}%`;
            progressElement.style.transition = `width ${1 +
              skill.level / 50}s ease-in-out`;

            observer.unobserve(entry.target);
          }
        });
      },
      observerOptions
    );

    skillRefs.current.forEach((skillRef, index) => {
      observer.observe(skillRef);
    });
  }, []);

  return (
    <div className="skill-progress">
      {skills.map((skill, index) => (
        <div
          className="skill-item"
          key={index}
          ref={element => (skillRefs.current[index] = element)}
          data-skill-index={index}
        >
          <div className="skill-icon">{skill.icon}</div>
          <div className="skill-details">
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillProgress;
