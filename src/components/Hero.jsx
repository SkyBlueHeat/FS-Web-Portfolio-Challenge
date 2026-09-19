import React, { useContext } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
} from 'react-icons/fa';

import { LanguageContext } from '../context/LanguageContext';
import translations from '../data/translations.json';

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const labels = {
    en: {
      github: 'GitHub profile',
      linkedin: 'LinkedIn profile',
      scrollToProjects: 'Scroll to projects',
      portraitAlt: 'Bora Aydin',
    },

    tr: {
      github: 'GitHub profili',
      linkedin: 'LinkedIn profili',
      scrollToProjects: 'Projelere git',
      portraitAlt: 'Bora Aydin',
    },

    de: {
      github: 'GitHub-Profil',
      linkedin: 'LinkedIn-Profil',
      scrollToProjects: 'Zu den Projekten',
      portraitAlt: 'Bora Aydin',
    },
  };

  const currentLabels = labels[language] || labels.en;

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/SkyBlueHeat',
      icon: FaGithub,
      ariaLabel: currentLabels.github,
      hoverClass: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/bora-aydn',
      icon: FaLinkedin,
      ariaLabel: currentLabels.linkedin,
      hoverClass: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
  ];

  return (
    <section
      id="home"
      className="
        flex
        min-h-[calc(100vh-4rem)]
        items-center
        overflow-hidden
        bg-white
        dark:bg-gray-900
        lg:min-h-[calc(100vh-5rem)]
      "
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-16
          "
        >
          {/* Content */}
          <div className="max-w-2xl">

            {/* Name */}
            <div className="mb-6 flex items-center">
              <div
                className="h-0.5 w-12 bg-blue-800 dark:bg-blue-400 sm:w-16"
                aria-hidden="true"
              />

              <p
                className="
                  ml-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wider
                  text-blue-800
                  dark:text-blue-400
                  sm:text-base
                "
              >
                {t.hero.name}
              </p>
            </div>

            {/* Main Title */}
            <h1
              className="
                mb-6
                text-4xl
                font-bold
                leading-[1.1]
                tracking-tight
                text-gray-900
                dark:text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              {t.hero.title}
            </h1>

            {/* Description */}
            <p
              className="
                mb-7
                max-w-xl
                text-lg
                leading-relaxed
                text-gray-600
                dark:text-gray-300
                sm:text-xl
              "
            >
              {t.hero.description}
            </p>

            {/* Location / Opportunities / Experience */}
            <div
              className="
                mb-8
                border-l-2
                border-gray-200
                pl-4
                dark:border-gray-700
              "
            >
              {/* Location */}
              <p className="mb-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                {t.hero.location}
              </p>

              {/* Job Availability */}
              <p className="mb-2 text-sm font-medium leading-relaxed text-blue-800 dark:text-blue-400 sm:text-base">
                {t.hero.opportunities}
              </p>

              {/* Experience */}
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {t.hero.experience}
              </p>
            </div>

            {/* Primary Actions */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#projects"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-lg
                  bg-blue-800
                  px-6
                  py-3
                  text-base
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-blue-700
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500
                  focus-visible:ring-offset-2
                  dark:focus-visible:ring-offset-gray-900
                  sm:px-7
                "
              >
                {t.hero.viewProjects}
              </a>

              <a
                href="/Bora_Aydin_J1_Resume.pdf"
                download="Bora_Aydin_J1_Resume.pdf"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-gray-200
                  bg-gray-100
                  px-6
                  py-3
                  text-base
                  font-semibold
                  text-gray-900
                  transition-colors
                  hover:bg-gray-200
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-gray-400
                  focus-visible:ring-offset-2
                  dark:border-gray-700
                  dark:bg-gray-800
                  dark:text-white
                  dark:hover:bg-gray-700
                  dark:focus-visible:ring-offset-gray-900
                  sm:px-7
                "
              >
                {t.hero.downloadResume}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className={`
                      rounded-lg
                      p-2
                      text-gray-500
                      transition-colors
                      hover:bg-gray-100
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-blue-500
                      dark:text-gray-400
                      dark:hover:bg-gray-800
                      ${social.hoverClass}
                    `}
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div
              className="
                absolute
                inset-0
                rotate-3
                rounded-3xl
                bg-gradient-to-br
                from-blue-100
                to-blue-50
                dark:from-blue-900/50
                dark:to-blue-800/30
              "
              aria-hidden="true"
            />

            <img
              src="/Hero-img.jpg"
              alt={currentLabels.portraitAlt}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="
                relative
                aspect-[4/5]
                w-full
                rounded-3xl
                object-cover
                shadow-xl
              "
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 text-center lg:mt-16">
          <a
            href="#projects"
            aria-label={currentLabels.scrollToProjects}
            className="
              inline-flex
              items-center
              rounded-lg
              px-3
              py-2
              text-sm
              font-medium
              text-gray-400
              transition-colors
              hover:text-gray-700
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
              dark:text-gray-500
              dark:hover:text-gray-300
            "
          >
            <span className="mr-2">
              {t.hero.viewProjects}
            </span>

            <FaArrowDown
              className="animate-bounce"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;