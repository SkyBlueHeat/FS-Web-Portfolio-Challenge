import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const J1Section = () => {
  return (
    <section className="bg-blue-50 dark:bg-blue-900/30 py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Open to U.S. Software Training Opportunities</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Based in Turkey and open to relocating anywhere in the United States for a structured software development training opportunity.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">J-1 Trainee Program Eligibility</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  My education and professional background have been reviewed by designated J-1 sponsor organizations and generally align with the J-1 Trainee category for software development professionals.
                </p>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      1
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Designated J-1 Sponsor</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        A designated J-1 sponsor organization would manage the program sponsorship process, including visa documentation and program oversight.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      2
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">U.S. Host Company</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        The U.S. company would participate as the host organization, providing structured professional training and mentorship in software development.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Structured Training Program</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        The program includes a formal training plan with clear learning objectives, regular evaluations, and professional development activities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">What I Bring</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Professional software development experience in frontend and full-stack development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Strong foundation in React, TypeScript, JavaScript, and Python</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Experience with automated testing, performance optimization, and accessibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Proven ability to build and ship independent full-stack products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Eagerness to learn and contribute to a professional development team</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 mt-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <p className="text-gray-700 dark:text-gray-200 text-center text-lg">
                    Interested in discussing a J-1 training opportunity?{' '}
                    <a 
                      href="mailto:br.aydin@hotmail.com" 
                      className="text-blue-800 dark:text-blue-400 font-semibold hover:underline inline-flex items-center"
                    >
                      <FaEnvelope className="mr-2" />
                      Contact me
                    </a>
                  </p>
                  <a
                    href="/Bora_Aydin_J1_Resume.pdf"
                    download="Bora_Aydin_J1_Resume.pdf"
                    className="px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default J1Section;