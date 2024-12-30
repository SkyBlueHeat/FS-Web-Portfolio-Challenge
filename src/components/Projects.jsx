import React, { useContext } from 'react';
import projects from '../data/projects.json';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import en from '../data/en.json';
import tr from '../data/tr.json';

const Projects = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);
    const translations = language === "en" ? en : tr;

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8">{translations.projects}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2 text-blue-800">{project.title}</h3>
                            <p className="text-gray-700 text-base mb-4">{translations.projectsTitle}</p>
                            <div className="flex space-x-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="bg-blue-500 text-white px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href={project.githubLink} className="text-blue-500 hover:underline">Github</a>
                            <a href={project.viewLink} className="text-gray-500 hover:underline ml-4 float-right">{translations.projectsViewLink}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;