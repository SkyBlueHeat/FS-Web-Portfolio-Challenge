import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'Vue.js', 'HTML', 'CSS', 'Tailwind CSS'],
      description: 'Building responsive, accessible user interfaces with modern frameworks and component architecture.'
    },
    {
      category: 'Backend & APIs',
      skills: ['Python', 'FastAPI', 'Node.js', 'REST APIs', 'SQLAlchemy', 'Pydantic'],
      description: 'Developing scalable backend services and API integrations with Python and Node.js.'
    },
    {
      category: 'Testing & Quality',
      skills: ['Playwright', 'Vitest', 'Jest', 'React Testing Library', 'pytest', 'Lighthouse'],
      description: 'Ensuring code quality through automated testing, performance profiling, and accessibility auditing.'
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Vite', 'PyWebView', 'Figma'],
      description: 'Using modern development tools, version control, containerization, and design collaboration.'
    }
  ];

  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to build reliable, scalable software products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.category}</h3>
              <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Development Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Component-Driven Development</h4>
              <p className="text-gray-600 text-sm">
                Building reusable, type-safe components with clear interfaces and isolated testing.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Testing & Quality</h4>
              <p className="text-gray-600 text-sm">
                Automated testing at unit, component, and e2e levels with performance and accessibility validation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Performance Optimization</h4>
              <p className="text-gray-600 text-sm">
                Profiling and optimizing for Core Web Vitals, bundle size, and runtime performance.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">API Integration</h4>
              <p className="text-gray-600 text-sm">
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