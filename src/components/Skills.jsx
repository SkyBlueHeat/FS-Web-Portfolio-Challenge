import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../data/translations.json';

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const content = {
    en: {
      categories: [
        {
          id: 'frontend',
          category: 'Frontend',
          skills: [
            'React',
            'TypeScript',
            'JavaScript',
            'Vue.js',
            'HTML',
            'CSS',
            'Tailwind CSS',
          ],
          description:
            'Building responsive, accessible user interfaces with modern frameworks and component-based architecture.',
        },
        {
          id: 'backend',
          category: 'Backend & APIs',
          skills: [
            'Python',
            'FastAPI',
            'Node.js',
            'REST APIs',
            'SQLAlchemy',
            'Pydantic',
          ],
          description:
            'Building backend services with Python/FastAPI and integrating REST APIs, including Node.js-based services.',
        },
        {
          id: 'testing',
          category: 'Testing & Quality',
          skills: [
            'Playwright',
            'Vitest',
            'Jest',
            'React Testing Library',
            'pytest',
            'Lighthouse',
          ],
          description:
            'Ensuring code quality through automated testing, performance profiling, and accessibility auditing.',
        },
        {
          id: 'tools',
          category: 'Tools & DevOps',
          skills: [
            'Git',
            'GitHub',
            'Docker',
            'Docker Compose',
            'Vite',
            'PyWebView',
            'Figma',
          ],
          description:
            'Using modern development tools, version control, containerization, and collaborative design workflows.',
        },
      ],

      approaches: [
        {
          id: 'component-driven',
          title: 'Component-Driven Development',
          description:
            'Building reusable, type-safe components with clear interfaces and isolated testing.',
        },
        {
          id: 'testing-quality',
          title: 'Testing & Quality',
          description:
            'Using automated testing across unit, component, and end-to-end levels, supported by performance and accessibility validation.',
        },
        {
          id: 'performance',
          title: 'Performance Optimization',
          description:
            'Profiling and optimizing Core Web Vitals, bundle size, rendering behavior, and runtime performance.',
        },
        {
          id: 'api-integration',
          title: 'API Integration',
          description:
            'Designing and consuming REST APIs with error handling, validation, and type safety in mind.',
        },
      ],
    },

    tr: {
      categories: [
        {
          id: 'frontend',
          category: 'Frontend',
          skills: [
            'React',
            'TypeScript',
            'JavaScript',
            'Vue.js',
            'HTML',
            'CSS',
            'Tailwind CSS',
          ],
          description:
            'Modern frameworkler ve bileşen tabanlı mimari kullanarak responsive ve erişilebilir kullanıcı arayüzleri geliştiriyorum.',
        },
        {
          id: 'backend',
          category: "Backend & API'ler",
          skills: [
            'Python',
            'FastAPI',
            'Node.js',
            "REST API'ler",
            'SQLAlchemy',
            'Pydantic',
          ],
          description:
            "Python/FastAPI ile backend servisleri geliştiriyor ve Node.js tabanlı servisler dahil REST API entegrasyonları üzerinde çalışıyorum.",
        },
        {
          id: 'testing',
          category: 'Test & Kalite',
          skills: [
            'Playwright',
            'Vitest',
            'Jest',
            'React Testing Library',
            'pytest',
            'Lighthouse',
          ],
          description:
            'Otomatik test, performans profilleme ve erişilebilirlik kontrolleriyle kod kalitesini destekliyorum.',
        },
        {
          id: 'tools',
          category: 'Araçlar & DevOps',
          skills: [
            'Git',
            'GitHub',
            'Docker',
            'Docker Compose',
            'Vite',
            'PyWebView',
            'Figma',
          ],
          description:
            'Modern geliştirme araçları, sürüm kontrolü, konteynerizasyon ve tasarım işbirliği süreçlerini kullanıyorum.',
        },
      ],

      approaches: [
        {
          id: 'component-driven',
          title: 'Bileşen Tabanlı Geliştirme',
          description:
            'Net arayüzlere sahip, yeniden kullanılabilir ve tip güvenli bileşenler geliştiriyorum.',
        },
        {
          id: 'testing-quality',
          title: 'Test & Kalite',
          description:
            'Unit, component ve end-to-end seviyelerinde otomatik testler; performans ve erişilebilirlik kontrolleri uyguluyorum.',
        },
        {
          id: 'performance',
          title: 'Performans Optimizasyonu',
          description:
            'Core Web Vitals, bundle boyutu, rendering davranışı ve runtime performansını analiz edip optimize ediyorum.',
        },
        {
          id: 'api-integration',
          title: 'API Entegrasyonu',
          description:
            "REST API'leri hata yönetimi, doğrulama ve tip güvenliğini dikkate alarak tasarlıyor ve entegre ediyorum.",
        },
      ],
    },

    de: {
      categories: [
        {
          id: 'frontend',
          category: 'Frontend',
          skills: [
            'React',
            'TypeScript',
            'JavaScript',
            'Vue.js',
            'HTML',
            'CSS',
            'Tailwind CSS',
          ],
          description:
            'Entwicklung responsiver und zugänglicher Benutzeroberflächen mit modernen Frameworks und komponentenbasierter Architektur.',
        },
        {
          id: 'backend',
          category: 'Backend & APIs',
          skills: [
            'Python',
            'FastAPI',
            'Node.js',
            'REST-APIs',
            'SQLAlchemy',
            'Pydantic',
          ],
          description:
            'Entwicklung von Backend-Services mit Python/FastAPI und Integration von REST-APIs, einschließlich Node.js-basierter Services.',
        },
        {
          id: 'testing',
          category: 'Testing & Qualität',
          skills: [
            'Playwright',
            'Vitest',
            'Jest',
            'React Testing Library',
            'pytest',
            'Lighthouse',
          ],
          description:
            'Sicherstellung der Codequalität durch automatisierte Tests, Performance-Profiling und Accessibility-Prüfungen.',
        },
        {
          id: 'tools',
          category: 'Tools & DevOps',
          skills: [
            'Git',
            'GitHub',
            'Docker',
            'Docker Compose',
            'Vite',
            'PyWebView',
            'Figma',
          ],
          description:
            'Einsatz moderner Entwicklungstools, Versionskontrolle, Containerisierung und kollaborativer Designprozesse.',
        },
      ],

      approaches: [
        {
          id: 'component-driven',
          title: 'Komponentenbasierte Entwicklung',
          description:
            'Entwicklung wiederverwendbarer, typsicherer Komponenten mit klaren Schnittstellen und isolierten Tests.',
        },
        {
          id: 'testing-quality',
          title: 'Testing & Qualität',
          description:
            'Automatisierte Tests auf Unit-, Komponenten- und End-to-End-Ebene sowie Performance- und Accessibility-Prüfungen.',
        },
        {
          id: 'performance',
          title: 'Performance-Optimierung',
          description:
            'Analyse und Optimierung von Core Web Vitals, Bundle-Größe, Rendering-Verhalten und Laufzeit-Performance.',
        },
        {
          id: 'api-integration',
          title: 'API-Integration',
          description:
            'Entwicklung und Integration von REST-APIs mit Fehlerbehandlung, Validierung und Typsicherheit.',
        },
      ],
    },
  };

  const currentContent = content[language] || content.en;

  return (
    <section
      id="skills"
      className="bg-gray-50 py-16 dark:bg-gray-800 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {t.skills.title}
          </h2>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Skill Categories */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {currentContent.categories.map((category) => (
            <article
              key={category.id}
              className="
                rounded-xl
                border border-gray-200
                bg-white
                p-6
                shadow-sm
                transition-shadow
                hover:shadow-md
                dark:border-gray-700
                dark:bg-gray-700
              "
            >
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                {category.category}
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
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
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Development Approach */}
        <div
          className="
            mx-auto mt-12
            max-w-5xl
            rounded-2xl
            border border-gray-200
            bg-white
            p-6
            shadow-sm
            dark:border-gray-700
            dark:bg-gray-700
            sm:p-8
            lg:mt-16
          "
        >
          <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            {t.skills.approach}
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {currentContent.approaches.map((approach) => (
              <div
                key={approach.id}
                className="
                  rounded-xl
                  border border-gray-200
                  bg-gray-50
                  p-5
                  dark:border-gray-600
                  dark:bg-gray-800/60
                "
              >
                <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {approach.title}
                </h4>

                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;