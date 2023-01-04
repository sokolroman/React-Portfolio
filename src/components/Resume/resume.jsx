import React from 'react';
import './resume.css';

function Resume() {
  return (
    <div className="resume">
      <h2>Skills</h2>
      <a href="../../assets/Romans_Resume.pdf" className="resume-link">
        Download Resume
      </a>
      <ul className="resume-skills">
        <li className="resume-skill">HTML</li>
        <li className="resume-skill">CSS</li>
        <li className="resume-skill">Bootstrap</li>
        <li className="resume-skill">JavaScript</li>
        <li className="resume-skill">jQuery</li>
        <li className="resume-skill">Express</li>
        <li className="resume-skill">React</li>
        <li className="resume-skill">Node</li>
        <li className="resume-skill">MySQL</li>
        <li className="resume-skill">MongoDB</li>
        <li className="resume-skill">React</li>
        <li className="resume-skill">MERN</li>
      </ul>
    </div>
  );
}

export default Resume;
