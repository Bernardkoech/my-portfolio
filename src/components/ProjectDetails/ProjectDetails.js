import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css'; // Add your custom styling for the ProjectDetails component

const ProjectDetails = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return <div className="project-details">Project not found.</div>;
  }

  return (
    <div className="project-details">
      <div className="project-details-content">
        <img src={project.image} alt={project.name} className="project-details-image" />
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <a href={project.website} target="_blank" rel="noopener noreferrer">
          <button className="project-details-button">Visit Website</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
