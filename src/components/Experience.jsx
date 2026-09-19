import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../data/translations.json';

const Experience = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const experienceData = {
    en: [
      {
        id: 'arma',
        company: 'ARMA Group Holding',
        role: 'Full-Stack Engineer',
        period: 'Feb 2022 – Aug 2022',
        responsibilities: [
          'Built reusable Vue.js components for production interfaces',
          'Developed responsive production frontend interfaces',
          'Integrated frontend interfaces with Node.js REST services',
          'Collaborated with backend engineers and QA teams',
          'Worked on API contracts and integration specifications',
          'Investigated and resolved edge cases and cross-browser issues',
          'Supported release readiness and quality assurance processes',
        ],
        technologies: [
          'Vue.js',
          'JavaScript',
          'Node.js',
          'REST APIs',
          'CSS',
          'HTML',
        ],
      },
      {
        id: 'cers',
        company: 'CERS Software',
        role: 'Frontend Developer',
        period: 'Jul 2021 – Dec 2021',
        responsibilities: [
          'Converted Adobe XD designs into responsive production interfaces',
          'Implemented semantic HTML, CSS, and JavaScript',
          'Created reusable UI patterns and component libraries',
          'Optimized frontend assets for performance',
          'Solved cross-browser compatibility and viewport issues',
          'Participated in QA cycles and user testing',
        ],
        technologies: [
          'HTML',
          'CSS',
          'JavaScript',
          'Adobe XD',
          'Responsive Design',
        ],
      },
    ],

    tr: [
      {
        id: 'arma',
        company: 'ARMA Group Holding',
        role: 'Full-Stack Geliştirici',
        period: 'Şub 2022 – Ağu 2022',
        responsibilities: [
          'Üretim arayüzleri için yeniden kullanılabilir Vue.js bileşenleri geliştirdim',
          'Responsive üretim arayüzleri geliştirdim',
          'Frontend arayüzlerini Node.js REST servisleriyle entegre ettim',
          'Backend geliştiricileri ve QA ekipleriyle birlikte çalıştım',
          'API sözleşmeleri ve entegrasyon gereksinimleri üzerinde çalıştım',
          'Kenar durumlarını ve tarayıcılar arası uyumluluk sorunlarını araştırıp çözdüm',
          'Yayın hazırlığı ve kalite güvence süreçlerini destekledim',
        ],
        technologies: [
          'Vue.js',
          'JavaScript',
          'Node.js',
          "REST API'ler",
          'CSS',
          'HTML',
        ],
      },
      {
        id: 'cers',
        company: 'CERS Software',
        role: 'Frontend Geliştirici',
        period: 'Tem 2021 – Ara 2021',
        responsibilities: [
          'Adobe XD tasarımlarını responsive üretim arayüzlerine dönüştürdüm',
          'Semantik HTML, CSS ve JavaScript uyguladım',
          'Yeniden kullanılabilir UI yapıları ve bileşen kalıpları geliştirdim',
          'Frontend varlıklarını performans için optimize ettim',
          'Tarayıcılar arası uyumluluk ve viewport sorunlarını çözdüm',
          'QA süreçlerine ve kullanıcı testlerine katıldım',
        ],
        technologies: [
          'HTML',
          'CSS',
          'JavaScript',
          'Adobe XD',
          'Responsive Design',
        ],
      },
    ],

    de: [
      {
        id: 'arma',
        company: 'ARMA Group Holding',
        role: 'Full-Stack-Entwickler',
        period: 'Feb. 2022 – Aug. 2022',
        responsibilities: [
          'Wiederverwendbare Vue.js-Komponenten für produktive Benutzeroberflächen entwickelt',
          'Responsive Frontend-Oberflächen für Produktionsanwendungen entwickelt',
          'Frontend-Oberflächen mit Node.js-basierten REST-Services integriert',
          'Mit Backend-Entwicklern und QA-Teams zusammengearbeitet',
          'An API-Verträgen und Integrationsanforderungen gearbeitet',
          'Edge Cases und browserübergreifende Probleme untersucht und gelöst',
          'Release-Vorbereitung und Qualitätssicherungsprozesse unterstützt',
        ],
        technologies: [
          'Vue.js',
          'JavaScript',
          'Node.js',
          'REST-APIs',
          'CSS',
          'HTML',
        ],
      },
      {
        id: 'cers',
        company: 'CERS Software',
        role: 'Frontend-Entwickler',
        period: 'Juli 2021 – Dez. 2021',
        responsibilities: [
          'Adobe-XD-Designs in responsive produktive Benutzeroberflächen umgesetzt',
          'Semantisches HTML, CSS und JavaScript implementiert',
          'Wiederverwendbare UI-Strukturen und Komponenten entwickelt',
          'Frontend-Ressourcen hinsichtlich der Performance optimiert',
          'Browserübergreifende Kompatibilitäts- und Viewport-Probleme gelöst',
          'An QA-Prozessen und Nutzertests teilgenommen',
        ],
        technologies: [
          'HTML',
          'CSS',
          'JavaScript',
          'Adobe XD',
          'Responsive Design',
        ],
      },
    ],
  };

  const experiences = experienceData[language] || experienceData.en;

  return (
    <section
      id="experience"
      className="bg-white py-16 dark:bg-gray-900 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {t.experience.title}
          </h2>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Experience List */}
        <div className="mx-auto max-w-4xl space-y-10">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="
                rounded-r-2xl
                border border-gray-200
                border-l-4 border-l-blue-800
                bg-gray-50
                p-6
                shadow-sm
                dark:border-gray-700
                dark:border-l-blue-400
                dark:bg-gray-800
                sm:p-8
              "
            >
              {/* Header */}
              <header className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {experience.role}
                </h3>

                <p className="mt-1 text-lg font-semibold text-blue-800 dark:text-blue-400 sm:text-xl">
                  {experience.company}
                </p>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                  {experience.period}
                </p>
              </header>

              {/* Responsibilities */}
              <div className="mb-7">
                <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {t.experience.responsibilities}
                </h4>

                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="mt-1 text-blue-600 dark:text-blue-400"
                        aria-hidden="true"
                      >
                        •
                      </span>

                      <span className="leading-relaxed text-gray-600 dark:text-gray-300">
                        {responsibility}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
                <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  {t.experience.technologies}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border border-gray-200
                        bg-white
                        px-3 py-1.5
                        text-sm font-medium
                        text-gray-700
                        dark:border-gray-600
                        dark:bg-gray-700
                        dark:text-gray-200
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;