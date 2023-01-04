import React from 'react';
import Project from './Project/project';
import './portfolio.css';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Weather Dashboard',
      image: 'https://user-images.githubusercontent.com/72160963/208315334-285354a6-e711-478b-9155-3f07909c60fb.jpg',
      githubLink: 'https://github.com/sokolroman/WTTR-DASH',
    },
    {
      id: 2,
      title: 'Emoloyee Tracker',
      image: 'https://github.com/sokolroman/Employee-Tracker/raw/main/s1.png',
      githubLink: 'https://github.com/sokolroman/Employee-Tracker',
    },
    {
      id: 3,
      title: 'Team Profile Generator',
      image: 'https://github.com/sokolroman/TEAM-PROFILE-GEN/raw/main/Screen%20Shot%202022-10-21%20at%2012.28.08.png',
      githubLink: 'https://github.com/sokolroman/TEAM-PROFILE-GEN',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      image: 'https://user-images.githubusercontent.com/72160963/208315334-285354a6-e711-478b-9155-3f07909c60fb.jpg',
      githubLink: 'https://github.com/sokolroman/WTTR-DASH',
    },
    {
      id: 5,
      title: 'Emoloyee Tracker',
      image: 'https://github.com/sokolroman/Employee-Tracker/raw/main/s1.png',
      githubLink: 'https://github.com/sokolroman/Employee-Tracker',
    },
    {
      id: 6,
      title: 'Team Profile Generator',
      image: 'https://github.com/sokolroman/TEAM-PROFILE-GEN/raw/main/Screen%20Shot%202022-10-21%20at%2012.28.08.png',
      githubLink: 'https://github.com/sokolroman/TEAM-PROFILE-GEN',
    },
    // Add more projects here
  ];

  return (
    <div className="portfolio">
      {projects.map((project) => (
        <Project
          key={project.id}
          id={project.id}
          title={project.title}
          image={project.image}
          deployedLink={project.deployedLink}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
}

export default Portfolio;
