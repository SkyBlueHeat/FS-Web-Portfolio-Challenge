import React from 'react';

const Education = () => {
  const education = [
    {
      institution: 'Ufuk University',
      degree: 'Associate Degree in Computer Programming',
      dates: '2017 – 2020',
      location: 'Ankara, Turkey',
      focus: [
        'Programming Fundamentals',
        'Problem Solving',
        'Web Technologies',
        'Database Concepts',
        'Software Development Fundamentals',
        'Algorithms',
        'Logical Reasoning'
      ],
      role: 'Formal technical foundation that introduced me to programming and software development concepts, giving me an early base to build on.'
    },
    {
      institution: 'Workintech',
      degree: 'Full-Stack Software Development Program',
      dates: '2024 – 2025',
      location: 'Istanbul, Turkey',
      focus: [
        'React',
        'TypeScript',
        'JavaScript',
        'REST APIs',
        'Git/GitHub',
        'Testing',
        'Full-Stack Development',
        'Component-based Development',
        'API-driven Interfaces'
      ],
      role: 'Modern skill expansion that strengthened and modernized my full-stack development skills, building on professional experience and self-learning.'
    }
  ];

  return (
    <section id="education" className="bg-gray-50 py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Training</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Formal foundations, continuous growth
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-8 lg:p-12">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{edu.institution}</h3>
                <p className="text-lg text-blue-800 font-semibold mt-1">{edu.degree}</p>
                <p className="text-gray-500 mt-1">{edu.dates} | {edu.location}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Focus</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.focus.map((item) => (
                    <span key={item} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Role in My Journey</h4>
                <p className="text-gray-600">{edu.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-md p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
          <p className="text-gray-600 leading-relaxed">
            My formal software-development foundation goes back to 2017, but my real engineering growth continued far beyond formal education. 
            Ufuk University introduced me to the foundations of computer programming and software development, giving me an early technical base that I continued building on through professional experience, self-learning, and later training. 
            Workintech became an important stage in my growth, helping me strengthen and modernize my development skills, deepen my understanding of React, TypeScript, full-stack development, testing, APIs, and modern engineering workflows, while building on the professional experience and self-learning I had already developed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;