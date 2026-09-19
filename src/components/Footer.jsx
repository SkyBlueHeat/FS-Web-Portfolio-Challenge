import React, { useContext, useEffect, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from 'react-icons/fa';

import { LanguageContext } from '../context/LanguageContext';
import translations from '../data/translations.json';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  const labels = {
    en: {
      contactTitle: 'Let’s Connect',
      contactText:
        'Open to full-time software development roles, J-1 Trainee opportunities, and conversations about software engineering projects or collaboration.',
      builtWith: 'Built with React, TypeScript, and Tailwind CSS.',
      scrollToTop: 'Scroll to top',
      github: 'GitHub profile',
      linkedin: 'LinkedIn profile',
      j1: 'U.S. Opportunities',
    },

    tr: {
      contactTitle: 'İletişime Geçelim',
      contactText:
        'Tam zamanlı yazılım geliştirme pozisyonlarına, J-1 Trainee fırsatlarına ve yazılım projeleri veya işbirlikleri hakkında görüşmelere açığım.',
      builtWith: 'React, TypeScript ve Tailwind CSS ile geliştirildi.',
      scrollToTop: 'Sayfanın başına dön',
      github: 'GitHub profili',
      linkedin: 'LinkedIn profili',
      j1: 'ABD Fırsatları',
    },

    de: {
      contactTitle: 'Kontakt aufnehmen',
      contactText:
        'Offen für Vollzeitstellen in der Softwareentwicklung, J-1-Trainee-Möglichkeiten sowie Gespräche über Softwareprojekte und Zusammenarbeit.',
      builtWith: 'Entwickelt mit React, TypeScript und Tailwind CSS.',
      scrollToTop: 'Nach oben scrollen',
      github: 'GitHub-Profil',
      linkedin: 'LinkedIn-Profil',
      j1: 'Möglichkeiten in den USA',
    },
  };

  const currentLabels = labels[language] || labels.en;

  const quickLinks = [
    {
      name: t.nav.education,
      href: '#education',
    },
    {
      name: t.nav.journey,
      href: '#journey',
    },
    {
      name: t.nav.experience,
      href: '#experience',
    },
    {
      name: t.nav.projects,
      href: '#projects',
    },
    {
      name: t.nav.skills,
      href: '#skills',
    },
    {
      name: t.nav.caseStudies,
      href: '#engineering',
    },
    {
      name: currentLabels.j1,
      href: '#j1',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/SkyBlueHeat',
      icon: FaGithub,
      ariaLabel: currentLabels.github,
      hoverClass: 'hover:text-white dark:hover:text-gray-200',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/bora-aydn',
      icon: FaLinkedin,
      ariaLabel: currentLabels.linkedin,
      hoverClass: 'hover:text-blue-400 dark:hover:text-blue-400',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTopButton(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      id="contact"
      className="bg-gray-900 py-14 text-white dark:bg-black lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-3 lg:gap-12">

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              {currentLabels.contactTitle}
            </h3>

            <p className="mb-6 max-w-md leading-relaxed text-gray-400">
              {currentLabels.contactText}
            </p>

            <a
              href="mailto:br.aydin@hotmail.com"
              className="
                mb-5
                block
                w-fit
                text-base font-medium
                text-blue-400
                transition-colors
                hover:text-blue-300
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-gray-900
                sm:text-lg
              "
            >
              br.aydin@hotmail.com
            </a>

            <a
              href="/Bora_Aydin_J1_Resume.pdf"
              download="Bora_Aydin_J1_Resume.pdf"
              className="
                inline-flex
                items-center
                rounded-lg
                bg-blue-700
                px-4 py-2.5
                text-sm font-medium
                text-white
                transition-colors
                hover:bg-blue-600
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-gray-900
              "
            >
              {t.hero.downloadResume}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              {t.footer.quickLinks}
            </h3>

            <nav aria-label={t.footer.quickLinks}>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="
                        inline-block
                        text-gray-400
                        transition-colors
                        hover:text-white
                        focus:outline-none
                        focus-visible:text-white
                      "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              {t.footer.connect}
            </h3>

            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      rounded-lg
                      p-2
                      text-gray-400
                      transition-colors
                      hover:bg-gray-800
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-blue-400
                      ${social.hoverClass}
                    `}
                    aria-label={social.ariaLabel}
                  >
                    <Icon size={26} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            mt-12
            border-t border-gray-800
            pt-7
            text-center
          "
        >
          <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
            © {new Date().getFullYear()} Bora Aydin.{' '}
            {currentLabels.builtWith}
          </p>
        </div>
      </div>

      {/* Scroll To Top */}
      {showScrollToTopButton && (
        <button
          type="button"
          onClick={scrollToTop}
          className="
            fixed
            bottom-5 right-5
            z-40
            flex h-11 w-11
            items-center justify-center
            rounded-full
            bg-blue-700
            text-white
            shadow-lg
            transition-all
            hover:-translate-y-0.5
            hover:bg-blue-600
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-400
            focus-visible:ring-offset-2
            focus-visible:ring-offset-gray-900
            sm:bottom-8 sm:right-8
          "
          aria-label={currentLabels.scrollToTop}
        >
          <FaArrowUp
            size={18}
            aria-hidden="true"
          />
        </button>
      )}
    </footer>
  );
};

export default Footer;