import React from 'react';
import './project.css';

function Project(props) {
  return (
    <div className="project">
      <h3 className="project-title">{props.title}</h3>
      <img src={props.image} alt={props.title} className="project-image" />
      <div className="project-links">
        <a href={props.githubLink} className="project-link">
          View GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default Project;
