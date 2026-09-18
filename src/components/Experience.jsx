import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'ARMA Group Holding',
      role: 'Full Stack Engineer',
      period: 'Feb 2022 – Aug 2022',
      responsibilities: [
        'Built reusable Vue.js components for production interfaces',
        'Developed responsive production frontend interfaces',
        'Integrated frontend interfaces with Node.js REST services',
        'Collaborated with backend engineers and QA teams',
        'Worked on API contracts and integration specifications',
        'Investigated and resolved edge cases and cross-browser issues',
        'Supported release readiness and quality assurance processes'
      ],
      technologies: ['Vue.js', 'JavaScript', 'Node.js', 'REST APIs', 'CSS', 'HTML']
    },
    {
      company: 'CERS Software',
      role: 'Frontend Developer',
      period: 'Jul 2021 – Dec 2021',
      responsibilities: [
        'Converted Adobe XD designs into responsive production interfaces',
        'Implemented semantic HTML, CSS, and JavaScript',
        'Created reusable UI patterns and component libraries',
        'Optimized frontend assets for performance',
        'Solved cross-browser compatibility and viewport issues',
        'Participated in QA cycles and user testing'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Adobe XD', 'Responsive Design']
    }
  ];

  return (
    <section id="experience" className="bg-white py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional software development experience building production applications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="border-l-4 border-blue-800 pl-8 py-4">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{experience.role}</h3>
                <p className="text-xl text-blue-800 font-semibold mt-1">{experience.company}</p>
                <p className="text-gray-500 mt-1">{experience.period}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Independent Product Development</h3>
          <p className="text-gray-600 mb-4">
            In addition to professional experience, I've independently designed and developed full-stack applications including:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 mt-1">•</span>
              <span><strong>Aviora</strong> — Career management platform with React, TypeScript, Python, and automated testing</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 mt-1">•</span>
              <span><strong>Agent Evidence</strong> — AI payment security lab with FastAPI, React, and Docker</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 mt-1">•</span>
              <span><strong>MotionKit</strong> — Programmatic motion design system with React, TypeScript, and Remotion</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;