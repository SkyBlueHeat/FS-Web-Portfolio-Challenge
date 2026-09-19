import React, { useContext } from 'react';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../data/translations.json';

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-20">
        <div className="grid max-w-7xl grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          <div>
            <div className="mb-6">
              <div className="flex items-center">
                <div className="h-0.5 bg-blue-800 w-16"></div>
                <p className="ml-4 text-blue-800 text-base font-medium tracking-wide uppercase dark:text-blue-400">
                  {t.hero.name}
                </p>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl text-gray-900 dark:text-white mb-6">
              {t.hero.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t.hero.description}
            </p>
            
            <div className="mb-8">
              <p className="text-base text-gray-500 dark:text-gray-400 mb-2">
                {t.hero.location}
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                {t.hero.experience}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-blue-800 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition-colors text-center"
              >
                {t.hero.viewProjects}
              </a>
              <a 
                href="/Bora_Aydin_J1_Resume.pdf" 
                download="Bora_Aydin_J1_Resume.pdf"
                className="px-8 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md text-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-center"
              >
                {t.hero.downloadResume}
              </a>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/SkyBlueHeat" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/bora-aydn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 rounded-3xl transform rotate-3"></div>
            <img 
              className="relative w-full max-w-md mx-auto lg:max-w-lg rounded-3xl shadow-2xl" 
              src="/Hero-img.jpg" 
              alt="Bora Aydin - Software Developer" 
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#projects" 
            className="inline-flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Scroll to projects"
          >
            <span className="mr-2 text-sm">{t.hero.viewProjects}</span>
            <FaArrowDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;