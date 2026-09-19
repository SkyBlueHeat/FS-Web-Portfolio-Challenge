import React, { useState, useContext } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaMoon, FaSun, FaGlobe } from 'react-icons/fa';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';
import translations from '../data/translations.json';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const t = translations[language];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: t.nav.education, href: '#education' },
    { name: t.nav.journey, href: '#journey' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.caseStudies, href: '#engineering' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'tr', label: 'TR' },
    { code: 'de', label: 'DE' }
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-800 text-white font-bold text-xl rounded-lg">
                <span className="transform rotate-12">B</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white">Bora Aydin</span>
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Language Selector */}
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => toggleLanguage('en')}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'en' 
                    ? 'bg-blue-800 text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => toggleLanguage('tr')}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'tr' 
                    ? 'bg-blue-800 text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                TR
              </button>
              <button
                onClick={() => toggleLanguage('de')}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'de' 
                    ? 'bg-blue-800 text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                DE
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            <div className="flex items-center space-x-4 ml-4">
              <a
                href="https://github.com/SkyBlueHeat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/bora-aydn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Selector */}
            <button
              onClick={() => {
                const currentIndex = languages.findIndex(lang => lang.code === language);
                const nextIndex = (currentIndex + 1) % languages.length;
                toggleLanguage(languages[nextIndex].code);
              }}
              className="text-gray-600 dark:text-gray-300 p-2"
              aria-label="Change language"
            >
              <FaGlobe size={20} />
            </button>

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 p-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              <a
                href="https://github.com/SkyBlueHeat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/bora-aydn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;