import React from 'react';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-white min-h-screen flex items-center">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-20">
        <div className="grid max-w-7xl grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          <div>
            <div className="mb-6">
              <div className="flex items-center">
                <div className="h-0.5 bg-blue-800 w-16"></div>
                <p className="ml-4 text-blue-800 text-base font-medium tracking-wide uppercase">
                  Bora Aydin
                </p>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl text-gray-900 mb-6">
              Frontend / Full-Stack Software Developer
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Building reliable product experiences with React, TypeScript, APIs, automated testing, and performance in mind.
            </p>
            
            <div className="mb-8">
              <p className="text-base text-gray-500 mb-2">
                Based in Ankara, Turkey · Open to U.S. relocation · J-1 Trainee Candidate
              </p>
              <p className="text-sm text-gray-400">
                Professional software development experience + independent end-to-end product development
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-blue-800 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition-colors text-center"
              >
                View Projects
              </a>
              <a 
                href="#" 
                className="px-8 py-3 bg-gray-100 text-gray-900 rounded-md text-lg font-medium hover:bg-gray-200 transition-colors text-center"
              >
                Download Resume
              </a>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/SkyBlueHeat" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/bora-aydn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-3xl transform rotate-3"></div>
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
            className="inline-flex items-center text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Scroll to projects"
          >
            <span className="mr-2 text-sm">View Projects</span>
            <FaArrowDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;