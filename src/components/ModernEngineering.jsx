import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const ModernEngineering = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: 'AI-Assisted Engineering',
      subtitle:
        'I use AI as an engineering accelerator, not as a substitute for technical understanding.',

      approachTitle: 'My Approach',
      approachText:
        'AI helps me explore solutions, debug faster, reduce repetitive work, and learn unfamiliar technologies more efficiently. Architecture, implementation decisions, testing, validation, and final code quality remain my responsibility.',

      ownershipStatement:
        'AI accelerates the workflow. Engineering ownership stays with me.',

      generatedCodeStatement:
        'Generated code is still code that needs to be understood, reviewed, tested, and owned.',

      usageTitle: 'How I Use It',
      useCases: [
        'Solution Exploration',
        'Debugging',
        'Refactoring',
        'Rapid Prototyping',
        'Learning Unfamiliar Technologies',
      ],

      toolsTitle: 'Tools',
      toolsText: 'ChatGPT · Claude · Cursor · Windsurf',
      toolsNote:
        'I also follow developments in emerging coding agents and AI-assisted development tools.',

      ownershipTitle: 'Engineering Ownership',
      ownershipText:
        'AI can suggest. I evaluate, implement, test, and own the result.',

      ownershipAreas: [
        'Architecture',
        'Implementation Decisions',
        'Testing',
        'Validation',
        'Code Review',
        'Final Code Quality',
      ],

      projectsTitle: 'AI in My Projects',
      projectsText:
        'For projects like Aviora, I use AI-assisted tools during solution exploration, debugging, and iteration while retaining ownership of architecture, implementation decisions, testing, and final code quality.',
    },

    tr: {
      title: 'AI Destekli Mühendislik',
      subtitle:
        'AI araçlarını teknik anlayışın yerine değil, mühendislik sürecini hızlandıran araçlar olarak kullanıyorum.',

      approachTitle: 'Yaklaşımım',
      approachText:
        'AI; çözüm seçeneklerini araştırmamı, hataları daha hızlı analiz etmemi, tekrarlayan işleri azaltmamı ve yeni teknolojileri daha verimli öğrenmemi destekliyor. Mimari, implementasyon kararları, test, doğrulama ve final kod kalitesi benim sorumluluğumda kalıyor.',

      ownershipStatement:
        'AI süreci hızlandırır. Mühendislik sorumluluğu bende kalır.',

      generatedCodeStatement:
        'Üretilen kodun yine de anlaşılması, incelenmesi, test edilmesi ve sorumluluğunun alınması gerekir.',

      usageTitle: 'Nasıl Kullanıyorum',
      useCases: [
        'Çözüm Araştırma',
        'Hata Ayıklama',
        'Refactoring',
        'Hızlı Prototipleme',
        'Yeni Teknolojileri Öğrenme',
      ],

      toolsTitle: 'Araçlar',
      toolsText: 'ChatGPT · Claude · Cursor · Windsurf',
      toolsNote:
        'Yeni coding agent araçlarını ve AI destekli yazılım geliştirme teknolojilerindeki gelişmeleri de takip ediyorum.',

      ownershipTitle: 'Mühendislik Sorumluluğu',
      ownershipText:
        'AI öneride bulunabilir. Sonucu değerlendirir, uygular, test eder ve sorumluluğunu ben alırım.',

      ownershipAreas: [
        'Mimari',
        'Implementasyon Kararları',
        'Test',
        'Doğrulama',
        'Kod İncelemesi',
        'Final Kod Kalitesi',
      ],

      projectsTitle: 'Projelerimde AI',
      projectsText:
        'Aviora gibi projelerde AI destekli araçları çözüm araştırma, hata ayıklama ve iterasyon süreçlerinde kullanıyorum; mimari, implementasyon kararları, test ve final kod kalitesinin sorumluluğunu ise kendim üstleniyorum.',
    },

    de: {
      title: 'KI-unterstützte Softwareentwicklung',
      subtitle:
        'Ich nutze KI als Beschleuniger im Entwicklungsprozess – nicht als Ersatz für technisches Verständnis.',

      approachTitle: 'Mein Ansatz',
      approachText:
        'KI hilft mir, Lösungsansätze schneller zu untersuchen, Fehler effizienter zu analysieren, repetitive Arbeit zu reduzieren und mich schneller in neue Technologien einzuarbeiten. Architektur, Implementierungsentscheidungen, Tests, Validierung und die finale Codequalität bleiben in meiner Verantwortung.',

      ownershipStatement:
        'KI beschleunigt den Workflow. Die technische Verantwortung bleibt bei mir.',

      generatedCodeStatement:
        'Generierter Code muss weiterhin verstanden, überprüft, getestet und verantwortet werden.',

      usageTitle: 'So nutze ich KI',
      useCases: [
        'Lösungserkundung',
        'Debugging',
        'Refactoring',
        'Schnelles Prototyping',
        'Einarbeitung in neue Technologien',
      ],

      toolsTitle: 'Tools',
      toolsText: 'ChatGPT · Claude · Cursor · Windsurf',
      toolsNote:
        'Ich verfolge außerdem die Entwicklung neuer Coding Agents und KI-gestützter Entwicklungstools.',

      ownershipTitle: 'Technische Verantwortung',
      ownershipText:
        'KI kann Vorschläge machen. Ich bewerte, implementiere und teste sie und übernehme die Verantwortung für das Ergebnis.',

      ownershipAreas: [
        'Architektur',
        'Implementierungsentscheidungen',
        'Testing',
        'Validierung',
        'Code-Review',
        'Finale Codequalität',
      ],

      projectsTitle: 'KI in meinen Projekten',
      projectsText:
        'Bei Projekten wie Aviora nutze ich KI-gestützte Tools zur Lösungserkundung, Fehlersuche und Iteration. Architektur, Implementierungsentscheidungen, Tests und finale Codequalität bleiben dabei in meiner Verantwortung.',
    },
  };

  const currentContent = content[language] || content.en;

  return (
    <section
      id="modern-engineering"
      className="bg-gray-50 py-16 dark:bg-gray-800 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {currentContent.title}
          </h2>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl">
          <div
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
            {/* Approach */}
            <div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                {currentContent.approachTitle}
              </h3>

              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                {currentContent.approachText}
              </p>

              <div
                className="
                  mt-6
                  rounded-xl
                  bg-blue-800
                  p-5
                  text-center
                  text-white
                  dark:bg-blue-900
                "
              >
                <p className="text-base font-semibold sm:text-lg">
                  {currentContent.ownershipStatement}
                </p>
              </div>

              <p
                className="
                  mt-4
                  rounded-lg
                  bg-gray-50
                  p-4
                  text-center
                  text-sm font-medium
                  leading-relaxed
                  text-gray-700
                  dark:bg-gray-600
                  dark:text-gray-200
                  sm:text-base
                "
              >
                {currentContent.generatedCodeStatement}
              </p>
            </div>

            {/* Use Cases */}
            <div className="mt-9 border-t border-gray-200 pt-8 dark:border-gray-600">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                {currentContent.usageTitle}
              </h3>

              <div className="flex flex-wrap gap-2">
                {currentContent.useCases.map((useCase) => (
                  <span
                    key={useCase}
                    className="
                      rounded-lg
                      bg-blue-50
                      px-3 py-2
                      text-sm font-medium
                      text-blue-800
                      dark:bg-blue-900/40
                      dark:text-blue-200
                    "
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mt-8">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                {currentContent.toolsTitle}
              </h3>

              <p className="font-medium text-gray-700 dark:text-gray-200">
                {currentContent.toolsText}
              </p>

              <p className="mt-2 text-sm italic leading-relaxed text-gray-500 dark:text-gray-400">
                {currentContent.toolsNote}
              </p>
            </div>

            {/* Ownership */}
            <div className="mt-9 border-t border-gray-200 pt-8 dark:border-gray-600">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                {currentContent.ownershipTitle}
              </h3>

              <p
                className="
                  mb-5
                  rounded-lg
                  bg-green-50
                  p-4
                  text-center
                  font-semibold
                  leading-relaxed
                  text-gray-700
                  dark:bg-green-900/20
                  dark:text-gray-200
                "
              >
                {currentContent.ownershipText}
              </p>

              <div className="flex flex-wrap gap-2">
                {currentContent.ownershipAreas.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-lg
                      bg-gray-100
                      px-3 py-2
                      text-sm font-medium
                      text-gray-700
                      dark:bg-gray-600
                      dark:text-gray-200
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Context */}
            <div className="mt-9 border-t border-gray-200 pt-8 dark:border-gray-600">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                {currentContent.projectsTitle}
              </h3>

              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                {currentContent.projectsText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernEngineering;