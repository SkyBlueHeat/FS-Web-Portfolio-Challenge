import React from 'react';

const EngineeringJourney = () => {
  const journeySteps = [
    {
      year: '2017–2020',
      title: 'Formal Programming Foundation',
      description: 'Ufuk University introduced me to computer programming fundamentals, problem-solving, and software development concepts.',
      type: 'education'
    },
    {
      year: '2021',
      title: 'First Professional Steps — CERS Software',
      description: 'My real transition into professional software development began at CERS Software, where I started applying technical foundations to production-facing frontend work and learning how software is built, tested, refined, and delivered in a professional environment.',
      type: 'professional',
      skills: ['Frontend Development', 'HTML/CSS/JavaScript', 'Responsive Development', 'Reusable UI Patterns', 'Cross-browser Problem Solving', 'QA Cycles']
    },
    {
      year: '2022',
      title: 'Continued Professional Growth — ARMA Group Holding',
      description: 'Expanded beyond basic frontend implementation through full-stack collaboration, working with Vue.js, Node.js REST services, API contracts, backend collaboration, and production interfaces.',
      type: 'professional',
      skills: ['Vue.js', 'Node.js REST Services', 'API Contracts', 'Backend Collaboration', 'Full-stack Workflows', 'Production Interfaces']
    },
    {
      year: 'Following Years',
      title: 'Self-Development & Independent Learning',
      description: 'A large part of my development as an engineer came through continuous self-learning, professional experience, independent projects, and adapting to new technologies as the software landscape evolved.',
      type: 'self-learning',
      skills: ['Self-directed Learning', 'Continuous Technical Improvement', 'Learning Through Building', 'Experimentation', 'Independent Problem Solving', 'Adapting to New Technologies']
    },
    {
      year: '2024–2025',
      title: 'Modern Skill Expansion — Workintech',
      description: 'Workintech strengthened and modernized my full-stack development skills, deepening my understanding of React, TypeScript, testing, APIs, and modern engineering workflows.',
      type: 'training',
      skills: ['React', 'TypeScript', 'JavaScript', 'REST APIs', 'Git/GitHub', 'Testing', 'Full-Stack Development']
    },
    {
      year: '2024–Today',
      title: 'Independent Product Engineering',
      description: 'Independent products became one of the most important ways I continued growing, pushing me into deeper product, backend, testing, and performance work.',
      type: 'independent',
      skills: ['Product Ownership', 'Application Architecture', 'Backend/API Development', 'Testing & Performance', 'Docker', 'AI-Assisted Development']
    },
    {
      year: 'Today',
      title: 'Current Engineering Toolkit',
      description: 'React / TypeScript + Python / FastAPI + REST APIs + Testing + Docker + Product Engineering + AI-Assisted Development',
      type: 'current',
      skills: ['React/TypeScript', 'Python/FastAPI', 'REST APIs', 'Testing', 'Performance', 'Docker', 'AI-Assisted Engineering']
    }
  ];

  const getTypeColor = (type) => {
    switch(type) {
      case 'education': return 'bg-purple-100 border-purple-500';
      case 'professional': return 'bg-blue-100 border-blue-500';
      case 'self-learning': return 'bg-green-100 border-green-500';
      case 'training': return 'bg-orange-100 border-orange-500';
      case 'independent': return 'bg-pink-100 border-pink-500';
      case 'current': return 'bg-gray-100 border-gray-800';
      default: return 'bg-gray-100 border-gray-500';
    }
  };

  return (
    <section id="journey" className="bg-white py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Engineering Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From foundation to product engineering
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative pl-0 md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-0 w-4 h-4 rounded-full bg-blue-800 border-4 border-white hidden md:block"></div>

                  <div className={`rounded-2xl p-6 lg:p-8 border-l-4 ${getTypeColor(step.type)}`}>
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {step.year}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-1">{step.title}</h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                    {step.skills && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          {step.skills.map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
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

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4">How I Grew as a Developer</h3>
          <p className="text-gray-600 leading-relaxed">
            My education gave me a foundation. Professional experience taught me how software is built in the real world. 
            Self-directed learning helped me continue growing beyond formal education. Workintech strengthened and modernized my full-stack skills. 
            Independent projects pushed me into deeper product, backend, testing, and performance work. 
            AI-assisted tools such as Cursor and Windsurf are the newest stage in a longer pattern of adapting to new technologies and improving how I work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngineeringJourney;