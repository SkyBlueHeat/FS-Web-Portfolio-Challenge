import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../data/translations.json';

const EngineeringJourney = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const labels = {
    en: {
      continuedDevelopment: 'Continued Development',
      independentPeriod: '2024–Present',
      today: 'Today',
    },
    tr: {
      continuedDevelopment: 'Sürekli Gelişim',
      independentPeriod: '2024–Günümüz',
      today: 'Bugün',
    },
    de: {
      continuedDevelopment: 'Kontinuierliche Weiterentwicklung',
      independentPeriod: '2024–Heute',
      today: 'Heute',
    },
  };

  const skillsByLanguage = {
    en: {
      professionalFrontend: [
        'Frontend Development',
        'HTML/CSS/JavaScript',
        'Responsive Development',
        'Reusable UI Patterns',
        'Cross-Browser Problem Solving',
        'QA Cycles',
      ],

      professionalFullStack: [
        'Vue.js',
        'Node.js REST Services',
        'API Contracts',
        'Backend Collaboration',
        'Full-Stack Workflows',
        'Production Interfaces',
      ],

      selfDevelopment: [
        'Self-Directed Learning',
        'Continuous Technical Improvement',
        'Learning Through Building',
        'Experimentation',
        'Independent Problem Solving',
        'Adapting to New Technologies',
      ],

      workintech: [
        'React',
        'TypeScript',
        'JavaScript',
        'REST APIs',
        'Git/GitHub',
        'Testing',
        'Full-Stack Development',
      ],

      independent: [
        'Product Ownership',
        'Application Architecture',
        'Backend/API Development',
        'Testing & Performance',
        'Docker',
      ],

      current: [
        'React/TypeScript',
        'Python/FastAPI',
        'REST APIs',
        'Testing',
        'Performance',
        'Docker',
      ],
    },

    tr: {
      professionalFrontend: [
        'Frontend Geliştirme',
        'HTML/CSS/JavaScript',
        'Responsive Tasarım',
        'Yeniden Kullanılabilir UI Yapıları',
        'Tarayıcılar Arası Problem Çözme',
        'QA Süreçleri',
      ],

      professionalFullStack: [
        'Vue.js',
        'Node.js REST Servisleri',
        'API Sözleşmeleri',
        'Backend İşbirliği',
        'Full-Stack Süreçleri',
        'Üretim Arayüzleri',
      ],

      selfDevelopment: [
        'Kendi Kendine Öğrenme',
        'Sürekli Teknik Gelişim',
        'Yaparak Öğrenme',
        'Deneyimleme',
        'Bağımsız Problem Çözme',
        'Yeni Teknolojilere Uyum',
      ],

      workintech: [
        'React',
        'TypeScript',
        'JavaScript',
        "REST API'ler",
        'Git/GitHub',
        'Test',
        'Full-Stack Geliştirme',
      ],

      independent: [
        'Ürün Sorumluluğu',
        'Uygulama Mimarisi',
        'Backend/API Geliştirme',
        'Test & Performans',
        'Docker',
      ],

      current: [
        'React/TypeScript',
        'Python/FastAPI',
        "REST API'ler",
        'Test',
        'Performans',
        'Docker',
      ],
    },

    de: {
      professionalFrontend: [
        'Frontend-Entwicklung',
        'HTML/CSS/JavaScript',
        'Responsive Entwicklung',
        'Wiederverwendbare UI-Strukturen',
        'Browserübergreifende Problemlösung',
        'QA-Prozesse',
      ],

      professionalFullStack: [
        'Vue.js',
        'Node.js-REST-Services',
        'API-Verträge',
        'Backend-Zusammenarbeit',
        'Full-Stack-Workflows',
        'Produktionsoberflächen',
      ],

      selfDevelopment: [
        'Selbstständiges Lernen',
        'Kontinuierliche technische Weiterentwicklung',
        'Lernen durch praktische Entwicklung',
        'Experimentieren',
        'Eigenständige Problemlösung',
        'Anpassung an neue Technologien',
      ],

      workintech: [
        'React',
        'TypeScript',
        'JavaScript',
        'REST-APIs',
        'Git/GitHub',
        'Testing',
        'Full-Stack-Entwicklung',
      ],

      independent: [
        'Produktverantwortung',
        'Anwendungsarchitektur',
        'Backend/API-Entwicklung',
        'Testing & Performance',
        'Docker',
      ],

      current: [
        'React/TypeScript',
        'Python/FastAPI',
        'REST-APIs',
        'Testing',
        'Performance',
        'Docker',
      ],
    },
  };

  const currentLabels = labels[language] || labels.en;
  const skills = skillsByLanguage[language] || skillsByLanguage.en;

  const journeySteps = [
    {
      id: 'foundation',
      year: '2017–2020',
      title: t.journey.formalFoundation,
      description: t.journey.formalFoundationText,
      type: 'education',
    },

    {
      id: 'cers',
      year: '2021',
      title: t.journey.firstProfessional,
      description: t.journey.firstProfessionalText,
      type: 'professional',
      skills: skills.professionalFrontend,
    },

    {
      id: 'arma',
      year: '2022',
      title: t.journey.continuedGrowth,
      description: t.journey.continuedGrowthText,
      type: 'professional',
      skills: skills.professionalFullStack,
    },

    {
      id: 'self-development',
      year: currentLabels.continuedDevelopment,
      title: t.journey.selfDevelopment,
      description: t.journey.selfDevelopmentText,
      type: 'self-learning',
      skills: skills.selfDevelopment,
    },

    {
      id: 'workintech',
      year: '2024–2025',
      title: t.journey.modernExpansion,
      description: t.journey.modernExpansionText,
      type: 'training',
      skills: skills.workintech,
    },

    {
      id: 'independent-engineering',
      year: currentLabels.independentPeriod,
      title: t.journey.independentEngineering,
      description: t.journey.independentEngineeringText,
      type: 'independent',
      skills: skills.independent,
    },

    {
      id: 'current-toolkit',
      year: currentLabels.today,
      title: t.journey.currentToolkit,
      description: t.journey.currentToolkitText,
      type: 'current',
      skills: skills.current,
    },
  ];

  const typeStyles = {
    education:
      'bg-purple-50 dark:bg-purple-900/20 border-purple-500 dark:border-purple-400',

    professional:
      'bg-blue-50 dark:bg-blue-900/20 border-blue-500 dark:border-blue-400',

    'self-learning':
      'bg-green-50 dark:bg-green-900/20 border-green-500 dark:border-green-400',

    training:
      'bg-orange-50 dark:bg-orange-900/20 border-orange-500 dark:border-orange-400',

    independent:
      'bg-pink-50 dark:bg-pink-900/20 border-pink-500 dark:border-pink-400',

    current:
      'bg-gray-50 dark:bg-gray-800 border-gray-800 dark:border-gray-500',
  };

  const getTypeStyle = (type) =>
    typeStyles[type] ||
    'bg-gray-50 dark:bg-gray-800 border-gray-500 dark:border-gray-400';

  return (
    <section
      id="journey"
      className="bg-white py-16 dark:bg-gray-900 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {t.journey.title}
          </h2>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
            {t.journey.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto max-w-5xl">
          <div className="relative">

            {/* Timeline Line */}
            <div
              className="
                absolute bottom-0 left-8 top-0
                hidden w-0.5
                bg-blue-200
                dark:bg-blue-900
                md:block
              "
              aria-hidden="true"
            />

            <div className="space-y-8 lg:space-y-10">
              {journeySteps.map((step) => (
                <article
                  key={step.id}
                  className="relative md:pl-20"
                >
                  {/* Timeline Dot */}
                  <div
                    className="
                      absolute left-[26px] top-7
                      hidden h-3.5 w-3.5
                      rounded-full
                      border-4 border-white
                      bg-blue-800
                      dark:border-gray-900
                      dark:bg-blue-400
                      md:block
                    "
                    aria-hidden="true"
                  />

                  <div
                    className={`
                      rounded-2xl
                      border border-gray-200
                      border-l-4
                      p-6
                      shadow-sm
                      dark:border-gray-700
                      sm:p-7
                      lg:p-8
                      ${getTypeStyle(step.type)}
                    `}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <span
                        className="
                          text-xs font-semibold
                          uppercase tracking-wider
                          text-gray-500
                          dark:text-gray-400
                          sm:text-sm
                        "
                      >
                        {step.year}
                      </span>

                      <h3 className="mt-1 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>

                    {/* Skills */}
                    {step.skills?.length > 0 && (
                      <div>
                        <h4 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
                          {t.journey.keyAreas}
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {step.skills.map((skill) => (
                            <span
                              key={skill}
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
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Growth Summary */}
        <div
          className="
            mx-auto mt-12
            max-w-4xl
            rounded-2xl
            border border-blue-100
            bg-blue-50
            p-6
            dark:border-blue-900/50
            dark:bg-blue-900/20
            sm:p-8
            lg:mt-16
          "
        >
          <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
            {t.journey.howIGrew}
          </h3>

          <p className="leading-relaxed text-gray-600 dark:text-gray-300">
            {t.journey.howIGrewText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngineeringJourney;