import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../data/translations.json';

const Experience = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const experiences = [
    {
      company: 'ARMA Group Holding',
      role: language === 'en' ? 'Full Stack Engineer' : language === 'tr' ? 'Full Stack Mühendisi' : 'Full-Stack-Ingenieur',
      period: 'Feb 2022 – Aug 2022',
      responsibilities: language === 'en' ? [
        'Built reusable Vue.js components for production interfaces',
        'Developed responsive production frontend interfaces',
        'Integrated frontend interfaces with Node.js REST services',
        'Collaborated with backend engineers and QA teams',
        'Worked on API contracts and integration specifications',
        'Investigated and resolved edge cases and cross-browser issues',
        'Supported release readiness and quality assurance processes'
      ] : language === 'tr' ? [
        'Üretim arayüzleri için yeniden kullanılabilir Vue.js bileşenleri oluşturdum',
        'Duyarlı üretim frontend arayüzleri geliştirdim',
        'Frontend arayüzlerini Node.js REST servisleri ile entegre ettim',
        'Backend mühendisleri ve QA ekipleriyle işbirliği yaptım',
        'API sözleşmeleri ve entegrasyon spesifikasyonları üzerinde çalıştım',
        'Kenar durumlarını ve çapraz tarayıcı sorunlarını araştırdım ve çözdüm',
        'Yayın hazırlığını ve kalite güvence süreçlerini destekledim'
      ] : [
        'Erstellte wiederverwendbare Vue.js-Komponenten für Produktionsschnittstellen',
        'Entwickelte responsive Produktions-Frontend-Schnittstellen',
        'Integrierte Frontend-Schnittstellen mit Node.js-REST-Services',
        'Arbeitete mit Backend-Ingenieuren und QA-Teams zusammen',
        'Arbeitete an API-Verträgen und Integrationsspezifikationen',
        'Untersuchte und löste Edge-Fälle und Cross-Browser-Probleme',
        'Unterstützte Release-Bereitschaft und Qualitätssicherungsprozesse'
      ],
      technologies: ['Vue.js', 'JavaScript', 'Node.js', 'REST APIs', 'CSS', 'HTML']
    },
    {
      company: 'CERS Software',
      role: language === 'en' ? 'Frontend Developer' : language === 'tr' ? 'Frontend Geliştirici' : 'Frontend-Entwickler',
      period: 'Jul 2021 – Dec 2021',
      responsibilities: language === 'en' ? [
        'Converted Adobe XD designs into responsive production interfaces',
        'Implemented semantic HTML, CSS, and JavaScript',
        'Created reusable UI patterns and component libraries',
        'Optimized frontend assets for performance',
        'Solved cross-browser compatibility and viewport issues',
        'Participated in QA cycles and user testing'
      ] : language === 'tr' ? [
        'Adobe XD tasarımlarını duyarlı üretim arayüzlerine dönüştürdüm',
        'Semantik HTML, CSS ve JavaScript uyguladım',
        'Yeniden kullanılabilir UI kalıpları ve bileşen kütüphaneleri oluşturdum',
        'Performans için frontend varlıklarını optimize ettim',
        'Çapraz tarayıcı uyumluluğu ve viewport sorunlarını çözdüm',
        'QA döngülerine ve kullanıcı testlerine katıldım'
      ] : [
        'Konvertierte Adobe XD-Designs in responsive Produktionsschnittstellen',
        'Implementierte semantisches HTML, CSS und JavaScript',
        'Erstellte wiederverwendbare UI-Muster und Komponentenbibliotheken',
        'Optimierte Frontend-Assets für Leistung',
        'Löste Cross-Browser-Kompatibilitäts- und Viewport-Probleme',
        'Nahm an QA-Zyklen und User-Testing teil'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Adobe XD', 'Responsive Design']
    }
  ];

  return (
    <section id="experience" className="bg-white dark:bg-gray-900 py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.experience.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="border-l-4 border-blue-800 pl-8 py-4">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{experience.role}</h3>
                <p className="text-xl text-blue-800 dark:text-blue-400 font-semibold mt-1">{experience.company}</p>
                <p className="text-gray-500 dark:text-gray-400 mt-1">{experience.period}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t.experience.responsibilities}</h4>
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t.experience.technologies}</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;