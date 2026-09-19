import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../data/translations.json';

const ModernEngineering = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const aiUseCases = language === 'en' ? [
    'Solution Exploration',
    'Debugging',
    'Refactoring',
    'Rapid Prototyping',
    'Learning Unfamiliar Technologies'
  ] : language === 'tr' ? [
    'Çözüm Keşfi',
    'Hata Ayıklama',
    'Refactoring',
    'Hızlı Prototipleme',
    'Bilinmeyen Teknolojileri Öğrenme'
  ] : [
    'Lösungserkundung',
    'Debugging',
    'Refactoring',
    'Schnelles Prototyping',
    'Unbekannte Technologien Lernen'
  ];

  const engineeringOwnership = language === 'en' ? [
    'Architecture',
    'Implementation Decisions',
    'Testing',
    'Validation',
    'Code Review',
    'Final Code Quality'
  ] : language === 'tr' ? [
    'Mimari',
    'Implementasyon Kararları',
    'Test',
    'Doğrulama',
    'Kod İncelemesi',
    'Final Kod Kalitesi'
  ] : [
    'Architektur',
    'Implementierungsentscheidungen',
    'Testing',
    'Validierung',
    'Code-Review',
    'Endgültige Code-Qualität'
  ];

  const activeTools = language === 'en' ? 'ChatGPT · Claude · Cursor · Windsurf' : language === 'tr' ? 'ChatGPT · Claude · Cursor · Windsurf' : 'ChatGPT · Claude · Cursor · Windsurf';

  return (
    <section id="modern-engineering" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">AI-Assisted Engineering</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I use AI as an engineering accelerator, not as a substitute for technical understanding
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-8 lg:p-12">
            {/* My Approach */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Approach</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                AI helps me explore solutions, debug faster, reduce repetitive work, and learn unfamiliar technologies more efficiently. Architecture, implementation decisions, testing, validation, and final code quality remain my responsibility.
              </p>
              
              <div className="bg-blue-800 dark:bg-blue-900 text-white rounded-xl p-6 mb-6">
                <p className="text-xl font-semibold text-center">
                  AI accelerates the workflow. Engineering ownership stays with me.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-600 rounded-lg p-6">
                <p className="text-gray-700 dark:text-gray-200 text-center font-medium">
                  Generated code is still code that needs to be understood, reviewed, tested, and owned.
                </p>
              </div>
            </div>

            {/* Where AI Helps */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How I Use It</h3>
              <div className="flex flex-wrap gap-3">
                {aiUseCases.map((useCase) => (
                  <span key={useCase} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg font-semibold">
                    {useCase}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tools</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                {activeTools}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                I also follow developments in emerging coding agents and AI-assisted development tools.
              </p>
            </div>

            {/* Engineering Ownership */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Engineering Ownership</h3>
              <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-6 mb-6">
                <p className="text-gray-700 dark:text-gray-200 text-center font-semibold text-lg mb-4">
                  AI can suggest. I evaluate, implement, test, and own the result.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {engineeringOwnership.map((item) => (
                  <span key={item} className="px-4 py-2 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-semibold">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI in Projects Context */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">AI in My Projects</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              For projects like Aviora, I use AI-assisted tools during solution exploration, debugging, and iteration while retaining ownership of architecture, implementation decisions, testing, and final code quality. The projects themselves demonstrate my ability to independently engineer software through performance optimization, testing, architecture, and product ownership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernEngineering;