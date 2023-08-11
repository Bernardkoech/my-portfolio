import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; // Add your custom styling for the Projects component

const Projects = ({ projects }) => {
  return (
    <div className="projects">
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id} className="project-card">
        <div className="project-card-content">
          <img src={project.image} alt={project.name} />
          <h1 className="project-name">{project.name}</h1>
        </div>

        </Link>


      ))}
    </div>
  );
};

export default Projects;
