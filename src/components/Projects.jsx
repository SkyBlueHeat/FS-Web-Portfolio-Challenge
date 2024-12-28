import React from 'react';
import projects from '../data/projects.json';

const Projects = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {projects.map((project) => (
          <div key={project.id} className="p-4 bg-gray-100 rounded">
            <h3 className="font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
