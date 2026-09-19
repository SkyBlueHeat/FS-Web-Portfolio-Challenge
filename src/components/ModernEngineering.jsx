import React from 'react';

const ModernEngineering = () => {
  const aiUseCases = [
    'Solution Exploration',
    'Implementation Assistance',
    'Code Generation',
    'Debugging',
    'Refactoring',
    'Rapid Prototyping',
    'Comparing Approaches',
    'Understanding Unfamiliar Code',
    'Boilerplate Reduction',
    'Iteration',
    'Test Generation Assistance',
    'Documentation Assistance',
    'Exploring APIs and Frameworks',
    'Faster Experimentation'
  ];

  const responsibilities = [
    'Review generated code',
    'Understand what I ship',
    'Adapt generated code to project architecture',
    'Verify behavior',
    'Debug problems myself',
    'Test important paths',
    'Evaluate trade-offs',
    'Make final implementation decisions',
    'Maintain code quality',
    'Retain responsibility for architecture and final output'
  ];

  const adaptabilityFlow = [
    { step: 'Learn', description: 'Understand new technology' },
    { step: 'Experiment', description: 'Build small prototypes' },
    { step: 'Evaluate', description: 'Assess trade-offs' },
    { step: 'Build', description: 'Integrate if useful' },
    { step: 'Validate', description: 'Test in real work' },
    { step: 'Improve', description: 'Iterate and refine' }
  ];

  const techEvolution = [
    'HTML / CSS / JavaScript',
    'Production Frontend Development',
    'React / TypeScript',
    'Full-Stack Development',
    'Python / FastAPI / REST APIs',
    'Testing / Performance / Docker',
    'AI-Assisted Engineering with Cursor & Windsurf'
  ];

  const currentToolkit = {
    frontend: ['React', 'TypeScript', 'JavaScript', 'Vue.js', 'HTML', 'CSS', 'Tailwind CSS'],
    backend: ['Python', 'FastAPI', 'REST APIs', 'Node.js REST-service integration'],
    testing: ['Playwright', 'Vitest', 'Jest', 'React Testing Library', 'Accessibility', 'Performance profiling', 'Lighthouse'],
    infrastructure: ['Git', 'GitHub', 'Docker', 'Vite'],
    ai: ['Cursor', 'Windsurf']
  };

  return (
    <section id="modern-engineering" className="bg-gray-50 py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Modern Engineering Workflow</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Adapting quickly, learning continuously, and using modern tools without giving up engineering ownership
          </p>
        </div>

        {/* AI Philosophy Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-md p-8 lg:p-12">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Assisted Engineering</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I see AI as another major evolution in the software-development toolset. Used well, it can reduce repetitive work, accelerate exploration, and help engineers iterate faster. But speed without understanding creates technical debt. I use AI to accelerate my workflow while retaining responsibility for architecture, validation, testing, and the code I ship.
              </p>
              
              <div className="bg-blue-800 text-white rounded-xl p-6 mb-6">
                <p className="text-xl font-semibold text-center">
                  AI accelerates the workflow. I retain engineering ownership.
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                AI helps me move faster during exploration, implementation, debugging, and iteration, while architecture, engineering judgment, validation, testing, and final code quality remain my responsibility.
              </p>
            </div>

            {/* Tools */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Current Tools</h4>
              <div className="flex flex-wrap gap-3">
                {currentToolkit.ai.map((tool) => (
                  <span key={tool} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-semibold">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">I Use AI For</h4>
                <ul className="space-y-2">
                  {aiUseCases.map((useCase) => (
                    <li key={useCase} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">I Retain Responsibility For</h4>
                <ul className="space-y-2">
                  {responsibilities.map((resp) => (
                    <li key={resp} className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span className="text-gray-600">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Project Connection */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">AI in Real Projects</h4>
              <p className="text-gray-600 mb-4">
                For projects like Aviora, Cursor and Windsurf have been used during development for implementation assistance, debugging, solution exploration, and iteration. However, I review generated code, adapt it to the product architecture, and retain ownership of final implementation decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Adaptability Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-md p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Engineering Adaptability</h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Software development changes quickly. I try to stay effective by continuously learning, evaluating new technologies, understanding what problems they solve, and integrating them when they genuinely improve the development process. I don't adopt technology simply because it is new. I try to understand where it creates real value, where it improves productivity or quality, and where simpler or more traditional approaches remain the better choice.
            </p>

            {/* Adaptability Flow */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">How I Approach New Technologies</h4>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {adaptabilityFlow.map((item, index) => (
                  <React.Fragment key={item.step}>
                    <div className="flex-1 text-center">
                      <div className="bg-blue-100 rounded-lg p-4 mb-2">
                        <span className="text-blue-800 font-bold">{item.step}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    {index < adaptabilityFlow.length - 1 && (
                      <div className="text-blue-400 text-2xl hidden md:block">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <p className="text-gray-700 text-center font-medium">
                Strong fundamentals make new tools easier to learn.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Evolution */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-md p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Evolution</h3>
            
            <div className="space-y-4">
              {techEvolution.map((tech, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-lg p-4">
                    <span className="text-gray-900 font-medium">{tech}</span>
                  </div>
                  {index < techEvolution.length - 1 && (
                    <div className="ml-4 text-blue-400 text-2xl">↓</div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-gray-600 mt-6 text-sm italic">
              My engineering toolkit expanded over time — older technologies were not replaced, but built upon.
            </p>
          </div>
        </div>

        {/* Current Toolkit */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Engineering Toolkit</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {currentToolkit.frontend.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Backend / APIs</h4>
                <div className="flex flex-wrap gap-2">
                  {currentToolkit.backend.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Testing / Quality</h4>
                <div className="flex flex-wrap gap-2">
                  {currentToolkit.testing.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Infrastructure / Workflow</h4>
                <div className="flex flex-wrap gap-2">
                  {currentToolkit.infrastructure.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-500 italic">
              This represents breadth and adaptability, not expertise in every listed technology.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernEngineering;