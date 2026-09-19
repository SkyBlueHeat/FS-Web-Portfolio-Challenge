import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../data/translations.json';

const Education = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const labels = {
    en: {
      focus: 'Focus Areas',
    },
    tr: {
      focus: 'Odak Alanları',
    },
    de: {
      focus: 'Schwerpunkte',
    },
  };

  const educationData = {
    en: [
      {
        id: 'ufuk',
        institution: 'Ufuk University',
        degree: 'Associate Degree in Computer Programming',
        dates: '2017 – 2020',
        location: 'Ankara, Turkey',
        focus: [
          'Programming Fundamentals',
          'Problem Solving',
          'Web Technologies',
          'Database Concepts',
          'Software Development Fundamentals',
          'Algorithms',
          'Logical Reasoning',
        ],
        role: t.education.ufukRoleText,
      },
      {
        id: 'workintech',
        institution: 'Workintech',
        degree: 'Full-Stack Software Development Program',
        dates: '2024 – 2025',
        location: 'Istanbul, Turkey',
        focus: [
          'React',
          'TypeScript',
          'JavaScript',
          'REST APIs',
          'Git/GitHub',
          'Testing',
          'Full-Stack Development',
          'Component-Based Development',
          'API-Driven Interfaces',
        ],
        role: t.education.workintechRoleText,
      },
    ],

    tr: [
      {
        id: 'ufuk',
        institution: 'Ufuk Üniversitesi',
        degree: 'Bilgisayar Programlama Önlisans Derecesi',
        dates: '2017 – 2020',
        location: 'Ankara, Türkiye',
        focus: [
          'Programlama Temelleri',
          'Problem Çözme',
          'Web Teknolojileri',
          'Veritabanı Kavramları',
          'Yazılım Geliştirme Temelleri',
          'Algoritmalar',
          'Mantıksal Akıl Yürütme',
        ],
        role: t.education.ufukRoleText,
      },
      {
        id: 'workintech',
        institution: 'Workintech',
        degree: 'Full-Stack Yazılım Geliştirme Programı',
        dates: '2024 – 2025',
        location: 'İstanbul, Türkiye',
        focus: [
          'React',
          'TypeScript',
          'JavaScript',
          "REST API'ler",
          'Git/GitHub',
          'Test',
          'Full-Stack Geliştirme',
          'Bileşen Tabanlı Geliştirme',
          'API Odaklı Arayüzler',
        ],
        role: t.education.workintechRoleText,
      },
    ],

    de: [
      {
        id: 'ufuk',
        institution: 'Ufuk Universität',
        degree: 'Associate Degree in Computer Programming',
        dates: '2017 – 2020',
        location: 'Ankara, Türkei',
        focus: [
          'Programmiergrundlagen',
          'Problemlösung',
          'Web-Technologien',
          'Datenbankkonzepte',
          'Grundlagen der Softwareentwicklung',
          'Algorithmen',
          'Logisches Denken',
        ],
        role: t.education.ufukRoleText,
      },
      {
        id: 'workintech',
        institution: 'Workintech',
        degree: 'Full-Stack-Softwareentwicklungsprogramm',
        dates: '2024 – 2025',
        location: 'Istanbul, Türkei',
        focus: [
          'React',
          'TypeScript',
          'JavaScript',
          'REST-APIs',
          'Git/GitHub',
          'Testing',
          'Full-Stack-Entwicklung',
          'Komponentenbasierte Entwicklung',
          'API-basierte Benutzeroberflächen',
        ],
        role: t.education.workintechRoleText,
      },
    ],
  };

  const education = educationData[language] || educationData.en;
  const currentLabels = labels[language] || labels.en;

  return (
    <section
      id="education"
      className="bg-gray-50 py-16 dark:bg-gray-800 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {t.education.title}
          </h2>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
            {t.education.subtitle}
          </p>
        </div>

        {/* Education Cards */}
        <div className="mx-auto max-w-4xl space-y-8 lg:space-y-10">
          {education.map((edu) => (
            <article
              key={edu.id}
              className="
                rounded-2xl
                border border-gray-200
                bg-white
                p-6
                shadow-sm
                dark:border-gray-700
                dark:bg-gray-700
                sm:p-8
                lg:p-10
              "
            >
              {/* Institution */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {edu.institution}
                </h3>

                <p className="mt-1 text-lg font-semibold text-blue-800 dark:text-blue-400">
                  {edu.degree}
                </p>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                  {edu.dates}
                  <span
                    className="mx-2 text-gray-300 dark:text-gray-600"
                    aria-hidden="true"
                  >
                    •
                  </span>
                  {edu.location}
                </p>
              </div>

              {/* Focus Areas */}
              <div className="mb-6">
                <h4 className="mb-3 text-base font-semibold text-gray-900 dark:text-white">
                  {currentLabels.focus}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {edu.focus.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        bg-blue-50
                        px-3 py-1.5
                        text-sm font-medium
                        text-blue-800
                        dark:bg-blue-900/40
                        dark:text-blue-200
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Role in Journey */}
              <div className="rounded-xl bg-blue-50 p-5 dark:bg-blue-900/25 sm:p-6">
                <h4 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
                  {t.education.roleInJourney}
                </h4>

                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  {edu.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Continuous Learning */}
        <div
          className="
            mx-auto mt-10
            max-w-4xl
            rounded-2xl
            border border-gray-200
            bg-white
            p-6
            shadow-sm
            dark:border-gray-700
            dark:bg-gray-700
            sm:p-8
            lg:mt-12
          "
        >
          <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
            {t.education.continuousLearning}
          </h3>

          <p className="leading-relaxed text-gray-600 dark:text-gray-300">
            {t.education.continuousLearningText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;