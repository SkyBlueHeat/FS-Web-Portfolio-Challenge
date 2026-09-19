import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../data/translations.json';

const Education = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const education = [
    {
      institution: language === 'en' ? 'Ufuk University' : language === 'tr' ? 'Ufuk Üniversitesi' : 'Ufuk Universität',
      degree: language === 'en' ? 'Associate Degree in Computer Programming' : language === 'tr' ? 'Bilgisayar Programlama Önlisans Derecesi' : 'Associate Degree in Computer Programming',
      dates: '2017 – 2020',
      location: language === 'en' ? 'Ankara, Turkey' : language === 'tr' ? 'Ankara, Türkiye' : 'Ankara, Türkei',
      focus: language === 'en' ? [
        'Programming Fundamentals',
        'Problem Solving',
        'Web Technologies',
        'Database Concepts',
        'Software Development Fundamentals',
        'Algorithms',
        'Logical Reasoning'
      ] : language === 'tr' ? [
        'Programlama Temelleri',
        'Problem Çözme',
        'Web Teknolojileri',
        'Veritabanı Kavramları',
        'Yazılım Geliştirme Temelleri',
        'Algoritmalar',
        'Mantıksal Akıl Yürütme'
      ] : [
        'Programmiergrundlagen',
        'Problemlösung',
        'Web-Technologien',
        'Datenbankkonzepte',
        'Software-Entwicklungsgrundlagen',
        'Algorithmen',
        'Logisches Denken'
      ],
      role: t.education.ufukRoleText
    },
    {
      institution: 'Workintech',
      degree: language === 'en' ? 'Full-Stack Software Development Program' : language === 'tr' ? 'Full-Stack Yazılım Geliştirme Programı' : 'Full-Stack Software-Entwicklungsprogramm',
      dates: '2024 – 2025',
      location: language === 'en' ? 'Istanbul, Turkey' : language === 'tr' ? 'İstanbul, Türkiye' : 'Istanbul, Türkei',
      focus: language === 'en' ? [
        'React',
        'TypeScript',
        'JavaScript',
        'REST APIs',
        'Git/GitHub',
        'Testing',
        'Full-Stack Development',
        'Component-based Development',
        'API-driven Interfaces'
      ] : language === 'tr' ? [
        'React',
        'TypeScript',
        'JavaScript',
        'REST API\'ler',
        'Git/GitHub',
        'Test',
        'Full-Stack Geliştirme',
        'Bileşen Tabanlı Geliştirme',
        'API Sürümlü Arayüzler'
      ] : [
        'React',
        'TypeScript',
        'JavaScript',
        'REST-APIs',
        'Git/GitHub',
        'Testing',
        'Full-Stack-Entwicklung',
        'Komponentenbasierte Entwicklung',
        'API-gesteuerte Schnittstellen'
      ],
      role: t.education.workintechRoleText
    }
  ];

  return (
    <section id="education" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.education.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.education.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-8 lg:p-12">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{edu.institution}</h3>
                <p className="text-lg text-blue-800 dark:text-blue-400 font-semibold mt-1">{edu.degree}</p>
                <p className="text-gray-500 dark:text-gray-400 mt-1">{edu.dates} | {edu.location}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Focus</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.focus.map((item) => (
                    <span key={item} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t.education.roleInJourney}</h4>
                <p className="text-gray-600 dark:text-gray-300">{edu.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-700 rounded-2xl shadow-md p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.education.continuousLearning}</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {t.education.continuousLearningText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;