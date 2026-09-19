import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../data/translations.json';

const EngineeringJourney = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const journeySteps = [
    {
      year: '2017–2020',
      title: t.journey.formalFoundation,
      description: t.journey.formalFoundationText,
      type: 'education'
    },
    {
      year: '2021',
      title: t.journey.firstProfessional,
      description: t.journey.firstProfessionalText,
      type: 'professional',
      skills: language === 'en' ? ['Frontend Development', 'HTML/CSS/JavaScript', 'Responsive Development', 'Reusable UI Patterns', 'Cross-browser Problem Solving', 'QA Cycles'] : language === 'tr' ? ['Frontend Geliştirme', 'HTML/CSS/JavaScript', 'Duyarlı Geliştirme', 'Yeniden Kullanılabilir UI Kalıpları', 'Çapraz Tarayıcı Problem Çözme', 'QA Döngüleri'] : ['Frontend-Entwicklung', 'HTML/CSS/JavaScript', 'Responsive Entwicklung', 'Wiederverwendbare UI-Muster', 'Cross-Browser-Problemlösung', 'QA-Zyklen']
    },
    {
      year: '2022',
      title: t.journey.continuedGrowth,
      description: t.journey.continuedGrowthText,
      type: 'professional',
      skills: language === 'en' ? ['Vue.js', 'Node.js REST Services', 'API Contracts', 'Backend Collaboration', 'Full-stack Workflows', 'Production Interfaces'] : language === 'tr' ? ['Vue.js', 'Node.js REST Servisleri', 'API Sözleşmeleri', 'Backend İşbirliği', 'Full-Stack Workflow\'lar', 'Üretim Arayüzleri'] : ['Vue.js', 'Node.js-REST-Services', 'API-Verträge', 'Backend-Zusammenarbeit', 'Full-Stack-Workflows', 'Produktionsschnittstellen']
    },
    {
      year: language === 'en' ? 'Following Years' : language === 'tr' ? 'Sonraki Yıllar' : 'Folgende Jahre',
      title: t.journey.selfDevelopment,
      description: t.journey.selfDevelopmentText,
      type: 'self-learning',
      skills: language === 'en' ? ['Self-directed Learning', 'Continuous Technical Improvement', 'Learning Through Building', 'Experimentation', 'Independent Problem Solving', 'Adapting to New Technologies'] : language === 'tr' ? ['Kendi Kendine Öğrenme', 'Sürekli Teknik İyileştirme', 'Yaparak Öğrenme', 'Deney', 'Bağımsız Problem Çözme', 'Yeni Teknolojilere Uyum'] : ['Selbstgesteuertes Lernen', 'Kontinuierliche Technische Verbesserung', 'Lernen durch Bauen', 'Experimentieren', 'Unabhängige Problemlösung', 'Anpassung an neue Technologien']
    },
    {
      year: '2024–2025',
      title: t.journey.modernExpansion,
      description: t.journey.modernExpansionText,
      type: 'training',
      skills: language === 'en' ? ['React', 'TypeScript', 'JavaScript', 'REST APIs', 'Git/GitHub', 'Testing', 'Full-Stack Development'] : language === 'tr' ? ['React', 'TypeScript', 'JavaScript', 'REST API\'ler', 'Git/GitHub', 'Test', 'Full-Stack Geliştirme'] : ['React', 'TypeScript', 'JavaScript', 'REST-APIs', 'Git/GitHub', 'Testing', 'Full-Stack-Entwicklung']
    },
    {
      year: '2024–Today',
      title: t.journey.independentEngineering,
      description: t.journey.independentEngineeringText,
      type: 'independent',
      skills: language === 'en' ? ['Product Ownership', 'Application Architecture', 'Backend/API Development', 'Testing & Performance', 'Docker', 'AI-Assisted Development'] : language === 'tr' ? ['Ürün Sahipliği', 'Uygulama Mimarisi', 'Backend/API Geliştirme', 'Test & Performans', 'Docker', 'AI Destekli Geliştirme'] : ['Produkteigentum', 'Anwendungsarchitektur', 'Backend/API-Entwicklung', 'Testing & Leistung', 'Docker', 'KI-unterstützte Entwicklung']
    },
    {
      year: language === 'en' ? 'Today' : language === 'tr' ? 'Bugün' : 'Heute',
      title: t.journey.currentToolkit,
      description: t.journey.currentToolkitText,
      type: 'current',
      skills: language === 'en' ? ['React/TypeScript', 'Python/FastAPI', 'REST APIs', 'Testing', 'Performance', 'Docker', 'AI-Assisted Engineering'] : language === 'tr' ? ['React/TypeScript', 'Python/FastAPI', 'REST API\'ler', 'Test', 'Performans', 'Docker', 'AI Destekli Mühendislik'] : ['React/TypeScript', 'Python/FastAPI', 'REST-APIs', 'Testing', 'Leistung', 'Docker', 'KI-unterstützte Ingenieurwesen']
    }
  ];

  const getTypeColor = (type) => {
    switch(type) {
      case 'education': return 'bg-purple-100 dark:bg-purple-900/30 border-purple-500 dark:border-purple-400';
      case 'professional': return 'bg-blue-100 dark:bg-blue-900/30 border-blue-500 dark:border-blue-400';
      case 'self-learning': return 'bg-green-100 dark:bg-green-900/30 border-green-500 dark:border-green-400';
      case 'training': return 'bg-orange-100 dark:bg-orange-900/30 border-orange-500 dark:border-orange-400';
      case 'independent': return 'bg-pink-100 dark:bg-pink-900/30 border-pink-500 dark:border-pink-400';
      case 'current': return 'bg-gray-100 dark:bg-gray-700 border-gray-800 dark:border-gray-600';
      default: return 'bg-gray-100 dark:bg-gray-700 border-gray-500 dark:border-gray-400';
    }
  };

  return (
    <section id="journey" className="bg-white dark:bg-gray-900 py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.journey.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.journey.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 hidden md:block"></div>

            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative pl-0 md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-0 w-4 h-4 rounded-full bg-blue-800 dark:bg-blue-400 border-4 border-white dark:border-gray-900 hidden md:block"></div>

                  <div className={`rounded-2xl p-6 lg:p-8 border-l-4 ${getTypeColor(step.type)}`}>
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {step.year}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{step.title}</h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{step.description}</p>

                    {step.skills && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">{t.journey.keyAreas}</h4>
                        <div className="flex flex-wrap gap-2">
                          {step.skills.map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-500">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.journey.howIGrew}</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {t.journey.howIGrewText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngineeringJourney;