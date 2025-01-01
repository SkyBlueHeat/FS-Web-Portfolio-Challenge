import React, { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';
import en from '../data/en.json';
import tr from '../data/tr.json';

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const translations = language === "en" ? en : tr;

  return (
    <div className={`bg-white ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <header className={`py-4 md:py-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <div className={`flex items-center justify-center w-16 h-16 bg-blue-200 text-blue-800 font-bold text-2xl rounded-full ${theme === 'dark' ? 'bg-blue-800 text-white' : ''}`}>
                <span className="transform rotate-12">B</span>
              </div>
            </div>

            <div className="flex lg:hidden">
              <button type="button" className={`text-gray-900 ${theme === 'dark' ? 'text-white' : ''}`}>
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            <div className={`hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10 ${theme === 'dark' ? 'text-white ' : 'text-gray-900 '}`}>
              <a href="#" title="" className={`text-base font-medium transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2`}>
                {translations.skills}
              </a>

              <a href="#" title="" className={`text-base font-medium transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2`}>
                {translations.projects}
              </a>

              <a href="#" title="" className={`px-7 py-2 text-base font-bold leading-7 ${theme === 'dark' ? 'text-blue-800 bg-gray-600 border-blue-800 text-sky-500 border-blue-800' : 'text-blue-800 bg-white border border-blue-800 '} rounded-lg hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900`} role="button">
                {translations.hireMe}
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className={`pt-12 pb-12 sm:pb-16 lg:pt-8 ${theme === 'dark' ? 'bg-gray-800' : ''}`}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="h-0.5 bg-blue-800 w-32"></div>
            <p className={`ml-4 text-blue-800 text-lg font-medium ${theme === 'dark' ? 'text-white' : ''}`}>Bora Aydın</p>
          </div>
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            <div>
              <div className="text-center lg:text-left">
                <h1 className={`text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {translations.creative}
                </h1>
                <p className={`mt-2 text-lg sm:mt-8 font-inter ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {translations.bora}
                </p>

                <div className="flex space-x-4 mt-6">
  <div>
    <button className={`flex items-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} border border-blue-900 rounded-lg shadow-md px-6 py-2 text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'} hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}>
      <img className="w-4 mr-2" src="src/assets/github-mark.png" alt="" />
      <span className={theme === 'dark' ? 'text-white' : 'text-blue-900'}>{translations.hireMe}</span>
    </button>
  </div>

  <div>
    <button className={`flex items-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} border border-blue-900 rounded-lg shadow-md px-6 py-2 text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'} hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}>
      <img className="w-4 mr-2" src="src/assets/github-mark.png" alt="" />
      <span className={theme === 'dark' ? 'text-white' : 'text-blue-900'}>Github</span>
    </button>
  </div>

  <div>
    <button className={`flex items-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} border border-blue-900 rounded-lg shadow-md px-6 py-2 text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'} hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}>
      <img className="w-4 mr-2" src="src/assets/LI-In-Bug.png" alt="" />
      <span className={theme === 'dark' ? 'text-white' : 'text-blue-900'}>Linkedin</span>
    </button>
  </div>
</div>

              </div>
            </div>

            <div>
              <img className="sm:size-5/6 sm:mr-14 size-6/12 ml-auto rounded-3xl" src="src\assets\WhatsApp Görsel 2025-01-01 saat 00.13.10_71dca5ff.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
