import React, { useContext } from 'react';
import projects from '../data/projects.json';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import en from '../data/en.json';
import tr from '../data/tr.json';
import img from '../../public/Project-Portfolio.jpg';
const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const translations = language === "en" ? en : tr;

  return (
    <div className={`mb-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
    <div className={`container mx-auto px-4 py-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{translations.projects}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className={`rounded-lg shadow-md overflow-hidden ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
            <img src="/Project-Portfolio.jpg" alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className={`text-2xl font-semibold mb-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-800'}`}>{project.title}</h3>
              <p className={`text-base mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{translations.projectsTitle}</p>
              <div className="flex space-x-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-500 text-white px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="https://github.com/SkyBlueHeat/FS-Web-Portfolio-Challenge" className="text-blue-500 hover:underline">Github</a>
              <a href="https://fs-web-portfolio-challenge.vercel.app/" className={`text-gray-500 hover:underline ml-4 float-right ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                {translations.projectsViewLink}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;
