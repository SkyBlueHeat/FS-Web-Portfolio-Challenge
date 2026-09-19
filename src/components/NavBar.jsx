import React, { useState, useContext } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaGlobe,
} from 'react-icons/fa';

import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';
import translations from '../data/translations.json';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { language, toggleLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const t = translations[language];

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
    { code: 'de', label: 'DE' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const cycleLanguage = () => {
    const currentIndex = languages.findIndex(
      (lang) => lang.code === language
    );

    const nextIndex = (currentIndex + 1) % languages.length;

    toggleLanguage(languages[nextIndex].code);
  };

  return (
    <nav
      className="
        sticky top-0 z-50
        border-b border-gray-200 dark:border-gray-800
        bg-white/95 dark:bg-gray-900/95
        backdrop-blur-md
      "
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">

          {/* Brand */}
          <div className="flex-shrink-0">
            <a
              href="#"
              onClick={closeMenu}
              className="
                flex items-center
                rounded-lg
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-600
                focus-visible:ring-offset-2
                dark:focus-visible:ring-offset-gray-900
              "
              aria-label="Bora Aydin - Home"
            >
              <div
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-lg
                  bg-blue-800
                  text-lg font-bold text-white
                  shadow-sm
                "
              >
                <span className="rotate-12">B</span>
              </div>

              {/* Hide name unless screen is very wide */}
              <span
                className="
                  ml-3 hidden
                  whitespace-nowrap
                  text-lg font-bold
                  text-gray-900 dark:text-white
                  2xl:block
                "
              >
                Bora Aydin
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 xl:flex 2xl:gap-2">

            {/* Navigation Links */}
            <div className="flex items-center gap-0.5 2xl:gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    whitespace-nowrap
                    rounded-md
                    px-2 py-2
                    text-sm font-medium
                    text-gray-600
                    transition-colors
                    hover:bg-gray-100
                    hover:text-gray-900
                    dark:text-gray-300
                    dark:hover:bg-gray-800
                    dark:hover:text-white
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-600
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Divider */}
            <div
              className="mx-1 h-6 w-px bg-gray-200 dark:bg-gray-700"
              aria-hidden="true"
            />

            {/* Desktop Language Selector */}
            <div
              className="flex items-center gap-1"
              aria-label="Language selector"
            >
              {languages.map((lang) => {
                const isActive = language === lang.code;

                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => toggleLanguage(lang.code)}
                    aria-pressed={isActive}
                    aria-label={`Switch language to ${lang.label}`}
                    className={`
                      rounded-md
                      px-2 py-1.5
                      text-xs font-semibold
                      transition-colors
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-blue-600
                      ${
                        isActive
                          ? 'bg-blue-800 text-white'
                          : `
                            text-gray-600
                            hover:bg-gray-100
                            hover:text-gray-900
                            dark:text-gray-300
                            dark:hover:bg-gray-800
                            dark:hover:text-white
                          `
                      }
                    `}
                  >
                    {lang.label}
                  </button>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="
                rounded-md
                p-2
                text-gray-600
                transition-colors
                hover:bg-gray-100
                hover:text-gray-900
                dark:text-gray-300
                dark:hover:bg-gray-800
                dark:hover:text-white
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-600
              "
              aria-label={
                theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            >
              {theme === 'dark' ? (
                <FaSun size={18} />
              ) : (
                <FaMoon size={18} />
              )}
            </button>

            {/* Social Links */}
            <div className="flex items-center gap-1">
              <a
                href="https://github.com/SkyBlueHeat"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-md
                  p-2
                  text-gray-400
                  transition-colors
                  hover:bg-gray-100
                  hover:text-gray-700
                  dark:text-gray-500
                  dark:hover:bg-gray-800
                  dark:hover:text-gray-200
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-600
                "
                aria-label="GitHub profile"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://linkedin.com/in/bora-aydn"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-md
                  p-2
                  text-gray-400
                  transition-colors
                  hover:bg-gray-100
                  hover:text-blue-600
                  dark:text-gray-500
                  dark:hover:bg-gray-800
                  dark:hover:text-blue-400
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-600
                "
                aria-label="LinkedIn profile"
              >
                <FaLinkedin size={19} />
              </a>
            </div>
          </div>

          {/* Tablet / Mobile Controls */}
          <div className="flex items-center gap-1 xl:hidden">

            {/* Mobile Language Switcher */}
            <button
              type="button"
              onClick={cycleLanguage}
              className="
                flex items-center gap-1.5
                rounded-md
                px-2 py-2
                text-gray-600
                transition-colors
                hover:bg-gray-100
                hover:text-gray-900
                dark:text-gray-300
                dark:hover:bg-gray-800
                dark:hover:text-white
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-600
              "
              aria-label={`Current language: ${language.toUpperCase()}. Change language`}
            >
              <FaGlobe size={17} />

              <span className="text-xs font-semibold uppercase">
                {language}
              </span>
            </button>

            {/* Mobile Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="
                rounded-md
                p-2
                text-gray-600
                transition-colors
                hover:bg-gray-100
                hover:text-gray-900
                dark:text-gray-300
                dark:hover:bg-gray-800
                dark:hover:text-white
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-600
              "
              aria-label={
                theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            >
              {theme === 'dark' ? (
                <FaSun size={19} />
              ) : (
                <FaMoon size={19} />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={toggleMenu}
              className="
                rounded-md
                p-2
                text-gray-600
                transition-colors
                hover:bg-gray-100
                hover:text-gray-900
                dark:text-gray-300
                dark:hover:bg-gray-800
                dark:hover:text-white
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-600
              "
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? (
                <FaTimes size={23} />
              ) : (
                <FaBars size={23} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="
            border-t border-gray-200
            bg-white
            dark:border-gray-800
            dark:bg-gray-900
            xl:hidden
          "
        >
          <div className="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6">

            {/* Mobile Nav Links */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    block
                    rounded-lg
                    px-3 py-2.5
                    text-base font-medium
                    text-gray-600
                    transition-colors
                    hover:bg-gray-100
                    hover:text-gray-900
                    dark:text-gray-300
                    dark:hover:bg-gray-800
                    dark:hover:text-white
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Language Selection */}
            <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-800">
              <div className="mb-2 flex items-center gap-2 px-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                <FaGlobe size={15} />
                <span>Language</span>
              </div>

              <div className="flex gap-2 px-3">
                {languages.map((lang) => {
                  const isActive = language === lang.code;

                  return (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        toggleLanguage(lang.code);
                        closeMenu();
                      }}
                      aria-pressed={isActive}
                      className={`
                        rounded-md
                        px-3 py-1.5
                        text-sm font-semibold
                        transition-colors
                        ${
                          isActive
                            ? 'bg-blue-800 text-white'
                            : `
                              bg-gray-100
                              text-gray-600
                              hover:bg-gray-200
                              dark:bg-gray-800
                              dark:text-gray-300
                              dark:hover:bg-gray-700
                            `
                        }
                      `}
                    >
                      {lang.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Social Links */}
            <div
              className="
                mt-4
                flex items-center gap-2
                border-t border-gray-200
                px-3 pt-4
                dark:border-gray-800
              "
            >
              <a
                href="https://github.com/SkyBlueHeat"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-md
                  p-2
                  text-gray-500
                  transition-colors
                  hover:bg-gray-100
                  hover:text-gray-900
                  dark:text-gray-400
                  dark:hover:bg-gray-800
                  dark:hover:text-white
                "
                aria-label="GitHub profile"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/bora-aydn"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-md
                  p-2
                  text-gray-500
                  transition-colors
                  hover:bg-gray-100
                  hover:text-blue-600
                  dark:text-gray-400
                  dark:hover:bg-gray-800
                  dark:hover:text-blue-400
                "
                aria-label="LinkedIn profile"
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