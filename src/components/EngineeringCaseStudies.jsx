import React from 'react';

const EngineeringCaseStudies = () => {
  const caseStudies = [
    {
      title: 'Aviora Performance Optimization',
      subtitle: 'Achieving 94-98 Lighthouse Performance Score',
      problem: 'Initial performance measurements showed suboptimal Core Web Vitals, particularly on mobile devices where users needed fast access to their job application data.',
      approach: [
        'Analyzed bundle composition and identified heavy dependencies',
        'Implemented code splitting and lazy loading for route components',
        'Optimized image assets with responsive formats and lazy loading',
        'Reduced JavaScript execution time through component optimization',
        'Minimized layout shifts with proper dimension attributes',
        'Implemented efficient state management to reduce re-renders'
      ],
      results: [
        'Mobile Lighthouse Performance: 94–98 (up from initial scores)',
        'Largest Contentful Paint (LCP): 1.9–2.3 seconds',
        'Total Blocking Time (TBT): 26–98 ms',
        'Consistent performance across 6 geographic regions',
        'Improved user perceived performance and engagement'
      ],
      tools: ['Lighthouse', 'Chrome DevTools', 'Webpack Bundle Analyzer', 'Playwright']
    },
    {
      title: 'Payment Risk Architecture',
      subtitle: 'Deterministic Rule Engine for AI Agent Security',
      problem: 'AI agents handling payments need deterministic, testable security rules that can be validated against known attack patterns while maintaining performance.',
      approach: [
        'Designed domain model with 6 core entities (transactions, merchants, agents, rules, alerts, logs)',
        'Implemented 10 deterministic payment-risk rules with clear conditions',
        'Created merchant attack scenarios for testing and validation',
        'Built async SQLAlchemy integration for scalable data access',
        'Implemented Pydantic validation for API payloads and domain models',
        'Added payload limits, redaction, and structured logging for security',
        'Set up Docker Compose quality gates for consistent development environments'
      ],
      results: [
        'Deterministic risk assessment with consistent rule evaluation',
        'Comprehensive test coverage with pytest',
        'Type-safe API contracts with Pydantic',
        'Scalable architecture with async database operations',
        'Security-conscious design with redaction and logging'
      ],
      tools: ['FastAPI', 'SQLAlchemy', 'Pydantic', 'pytest', 'Docker', 'asyncio']
    },
    {
      title: 'Reusable Typed Motion Components',
      subtitle: 'Type-Safe Motion Design System with Remotion',
      problem: 'Motion design in video production required reusable, type-safe components that could generate consistent animated content programmatically.',
      approach: [
        'Designed component architecture with TypeScript for type safety',
        'Created typed APIs for motion composition and parameters',
        'Built reusable transitions and motion patterns',
        'Implemented animated charts and data visualization components',
        'Designed responsive output formats for different use cases',
        'Achieved deterministic rendering for consistent output across runs',
        'Enabled data-driven video generation from structured data'
      ],
      results: [
        'Type-safe motion composition with compile-time validation',
        'Reusable component library for consistent motion design',
        'Deterministic rendering for predictable output',
        'Responsive compositions that adapt to different formats',
        'Data-driven workflow for automated video generation'
      ],
      tools: ['React', 'TypeScript', 'Remotion', 'FFmpeg']
    }
  ];

  return (
    <section id="engineering" className="bg-white py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Engineering Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep dives into technical challenges, architectural decisions, and implementation details.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-lg text-blue-800 font-semibold">{study.subtitle}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Problem</h4>
                <p className="text-gray-600">{study.problem}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Approach</h4>
                <ul className="space-y-2">
                  {study.approach.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Results</h4>
                <ul className="space-y-2">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span className="text-gray-600">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {study.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tool}
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

export default EngineeringCaseStudies;