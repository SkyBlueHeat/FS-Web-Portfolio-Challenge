import React, { useContext, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';
import en from '../data/en.json';
import tr from '../data/tr.json';


const Header = ({ translations, theme, toggleMenu }) => (
  <header className={`py-4 md:py-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
    <div className="container px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
          <div className={`flex items-center justify-center w-16 h-16 bg-blue-200 text-blue-800 font-bold text-2xl rounded-full ${theme === 'dark' ? 'bg-blue-800 text-white' : ''}`}>
            <span className="transform rotate-12">B</span>
          </div>
        </div>

        <div className="flex lg:hidden">
          <button type="button" className={`text-gray-900 ${theme === 'dark' ? 'text-white' : ''}`} onClick={toggleMenu}>
            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <nav className={`hidden lg:flex lg:items-center lg:space-x-8 xl:space-x-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {['skills', 'projects', 'hireMe'].map((key) => (
            <a
              key={key}
              href="#"
              className={`text-base font-medium transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 ${key === 'hireMe' ? 'px-7 py-2 font-bold leading-7 rounded-lg' : ''} ${theme === 'dark' ? key === 'hireMe' ? 'text-blue-800 bg-gray-600 border-blue-800' : '' : key === 'hireMe' ? 'text-blue-800 bg-white border border-blue-800' : ''}`}
            >
              {translations[key]}
            </a>
          ))}
        </nav>
      </div>
    </div>
  </header>
);

const MobileMenu = ({ isMenuOpen, translations, theme }) => (
  isMenuOpen && (
    <div className={`flex gap-7 justify-end lg:hidden bg-slate-500 p-10 ${theme === 'dark' ? 'text-sky-500 bg-gray-800' : 'text-black'}`}>
      {['skills', 'projects', 'hireMe'].map((key) => (
        <a
          key={key}
          href="#"
          className={`block text-base font-medium hover:text-opacity-50 ${theme === 'dark' ? 'text-sky-500' : 'text-black'}`}
        >
          {translations[key]}
        </a>
      ))}
    </div>
  )
);

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-slate-800 p-8 rounded-lg max-w-md w-full relative">
        <h2 className="text-2xl font-bold mb-4">Hire Me</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium  text-gray-100">Name</label>
            <input type="text" className="mt-1 p-2 w-full bg-slate-600 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-100">Email</label>
            <input type="email" className="mt-1 p-2 w-full bg-slate-600 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-100">Message</label>
            <textarea className="mt-1 p-2 w-full border bg-slate-600 rounded-md" rows="4" required></textarea>
          </div>
          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};


const HeroSection = ({ translations, theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
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
              <h2 className={`text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj mt-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {translations.minimalism}
              </h2>
              <p className={`mt-4 text-lg sm:mt-8 font-inter ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {translations.bora}
              </p>
              
              <div className="mt-8 flex justify-center lg:justify-start gap-4">
                <button onClick={openModal} className={`px-8 py-3 rounded-md text-lg font-medium ${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-800 text-white'}`}>
                  {translations.hireMe}
                </button>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`px-8 py-3 rounded-md text-lg font-medium flex items-center gap-2 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}>
                  <FaGithub /> GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`px-8 py-3 rounded-md text-lg font-medium flex items-center gap-2 ${theme === 'dark' ? 'bg-blue-700 text-white' : 'bg-blue-200 text-blue-800'}`}>
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div>
            <img className="w-full max-w-md mx-auto lg:max-w-lg rounded-3xl" src="/Hero-img.jpg" alt="Hero" />
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};





const Hero = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const translations = language === "en" ? en : tr;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <div className={`bg-white ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <Header translations={translations} theme={theme} toggleMenu={toggleMenu} />
      <MobileMenu isMenuOpen={isMenuOpen} translations={translations} theme={theme} />
      <HeroSection translations={translations} theme={theme} />
    </div>
  );
};

export default Hero;
