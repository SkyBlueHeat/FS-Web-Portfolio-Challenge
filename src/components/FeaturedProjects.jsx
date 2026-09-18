import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 'aviora',
      title: 'Aviora — Career Management Platform',
      description: 'Job seekers often apply to dozens of positions across platforms such as LinkedIn and Indeed, which makes applications, interviews, and follow-ups difficult to track. Aviora consolidates job-search activity into one organized workflow.',
      problem: 'Scattered job application data across multiple platforms with no unified tracking system.',
      solution: 'Built a comprehensive career management platform with application tracking, Kanban workflows, analytics, and interview preparation tools.',
      contributions: [
        'Designed and developed independently as a full-stack application',
        'Built reusable UI architecture with React and TypeScript',
        'Implemented application workflows with Kanban state management',
        'Added automated testing with Playwright and Vitest',
        'Implemented accessibility-conscious UI states',
        'Performed performance profiling and optimization'
      ],
      technologies: ['React', 'TypeScript', 'Python', 'PyWebView', 'Playwright', 'Vitest'],
      metrics: {
        performance: 'Mobile Lighthouse Performance: 94–98',
        lcp: 'LCP: 1.9–2.3 seconds',
        tbt: 'Total Blocking Time: 26–98 ms',
        regions: 'Measured across 6 regions'
      },
      github: 'https://github.com/SkyBlueHeat/Aviora-Showcase',
      live: 'https://aviora-eight.vercel.app/',
      featured: true
    },
    {
      id: 'agent-evidence',
      title: 'Agent Evidence — AI Agent Payment Security Lab',
      description: 'Security testing project for AI agents that can make or manage payments. Demonstrates frontend/backend integration, API design, transaction flows, and payment-risk scenarios.',
      problem: 'Need to test security vulnerabilities in AI agents that handle payment transactions.',
      solution: 'Built a comprehensive payment security testing platform with deterministic risk rules and domain modeling.',
      contributions: [
        'Designed REST API architecture with FastAPI',
        'Implemented 6 core domain entities with SQLAlchemy',
        'Created 10 deterministic payment-risk rules',
        'Built merchant attack scenarios and testing frameworks',
        'Implemented async data validation with Pydantic',
        'Added payload limits, redaction, and structured logging',
        'Set up Docker Compose quality gates'
      ],
      technologies: ['React', 'TypeScript', 'FastAPI', 'REST APIs', 'SQLAlchemy', 'Pydantic', 'Docker', 'pytest'],
      github: 'https://github.com/SkyBlueHeat',
      live: null,
      featured: true
    },
    {
      id: 'motionkit',
      title: 'MotionKit — Programmatic Motion Design System',
      description: 'Reusable motion design system built with React, TypeScript and Remotion for creating data-driven animated videos and motion components.',
      problem: 'Need for reusable, typed motion components that can generate consistent animated content programmatically.',
      solution: 'Built a comprehensive motion design system with typed APIs and deterministic rendering.',
      contributions: [
        'Created reusable motion components with TypeScript',
        'Implemented typed APIs for motion composition',
        'Built animated charts and data visualization components',
        'Created reusable transitions and motion patterns',
        'Implemented responsive output formats',
        'Achieved deterministic rendering for consistent output',
        'Enabled data-driven video generation'
      ],
      technologies: ['React', 'TypeScript', 'Remotion'],
      github: 'https://github.com/SkyBlueHeat/MotionKit',
      live: null,
      featured: true
    }
  ];

  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selected engineering projects demonstrating full-stack development, testing, and performance optimization.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <div className="inline-block p-6 bg-white rounded-xl shadow-md mb-4">
                      <h3 className="text-2xl font-bold text-blue-800">{project.title.split('—')[0].trim()}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{project.title.includes('—') ? project.title.split('—')[1].trim() : ''}</p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Problem</h4>
                    <p className="text-gray-600">{project.problem}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{project.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Engineering Contributions</h4>
                    <ul className="space-y-2">
                      {project.contributions.map((contribution, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          <span className="text-gray-600">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.metrics && (
                    <div className="mb-6 bg-blue-50 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Performance Metrics</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center">
                          <span className="text-blue-600 font-semibold mr-2">✓</span>
                          <span className="text-gray-700 text-sm">{project.metrics.performance}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-blue-600 font-semibold mr-2">✓</span>
                          <span className="text-gray-700 text-sm">{project.metrics.lcp}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-blue-600 font-semibold mr-2">✓</span>
                          <span className="text-gray-700 text-sm">{project.metrics.tbt}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-blue-600 font-semibold mr-2">✓</span>
                          <span className="text-gray-700 text-sm">{project.metrics.regions}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <FaGithub className="mr-2" />
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;