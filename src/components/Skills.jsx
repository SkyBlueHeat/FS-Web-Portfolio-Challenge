import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../data/translations.json';

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const skillCategories = [
    {
      category: language === 'en' ? 'Frontend' : language === 'tr' ? 'Frontend' : 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'Vue.js', 'HTML', 'CSS', 'Tailwind CSS'],
      description: language === 'en' ? 'Building responsive, accessible user interfaces with modern frameworks and component architecture.' : language === 'tr' ? 'Modern frameworklar ve bileşen mimarisi ile duyarlı, erişilebilir kullanıcı arayüzleri oluşturma.' : 'Erstellen von responsiven, zugänglichen Benutzeroberflächen mit modernen Frameworks und Komponentenarchitektur.'
    },
    {
      category: language === 'en' ? 'Backend & APIs' : language === 'tr' ? 'Backend & API\'ler' : 'Backend & APIs',
      skills: ['Python', 'FastAPI', 'Node.js', 'REST APIs', 'SQLAlchemy', 'Pydantic'],
      description: language === 'en' ? 'Developing scalable backend services and API integrations with Python and Node.js.' : language === 'tr' ? 'Python ve Node.js ile ölçeklenebilir backend servisleri ve API entegrasyonları geliştirme.' : 'Entwicklung skalierbarer Backend-Services und API-Integrationen mit Python und Node.js.'
    },
    {
      category: language === 'en' ? 'Testing & Quality' : language === 'tr' ? 'Test & Kalite' : 'Testing & Qualität',
      skills: ['Playwright', 'Vitest', 'Jest', 'React Testing Library', 'pytest', 'Lighthouse'],
      description: language === 'en' ? 'Ensuring code quality through automated testing, performance profiling, and accessibility auditing.' : language === 'tr' ? 'Otomatik test, performans profilling ve erişilebilirlik denetimi aracılığıyla kod kalitesini sağlama.' : 'Sicherstellen von Code-Qualität durch automatisiertes Testing, Performance-Profiling und Accessibility-Auditing.'
    },
    {
      category: language === 'en' ? 'Tools & DevOps' : language === 'tr' ? 'Araçlar & DevOps' : 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Vite', 'PyWebView', 'Figma'],
      description: language === 'en' ? 'Using modern development tools, version control, containerization, and design collaboration.' : language === 'tr' ? 'Modern geliştirme araçları, sürüm kontrolü, konteynerizasyon ve tasarım işbirliği kullanma.' : 'Verwendung moderner Entwicklungstools, Versionskontrolle, Containerisierung und Design-Zusammenarbeit.'
    }
  ];

  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.skills.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{category.category}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-700 rounded-xl shadow-md p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.skills.approach}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Component-Driven Development</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Building reusable, type-safe components with clear interfaces and isolated testing.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Testing & Quality</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Automated testing at unit, component, and e2e levels with performance and accessibility validation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Performance Optimization</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Profiling and optimizing for Core Web Vitals, bundle size, and runtime performance.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">API Integration</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Designing and consuming REST APIs with proper error handling, validation, and type safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;