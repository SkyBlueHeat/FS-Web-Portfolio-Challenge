import React, { useContext } from 'react';
import { FaEnvelope, FaDownload } from 'react-icons/fa';

import { LanguageContext } from '../context/LanguageContext';

const J1Section = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: 'Open to U.S. Software Development Opportunities',
      subtitle:
        'Based in Turkey and open to relocating to the United States for full-time software development roles as well as structured J-1 Trainee opportunities.',

      eligibilityTitle: 'J-1 Trainee Program Eligibility',
      eligibilityText:
        'My education and professional background have been reviewed by designated J-1 sponsor organizations and confirmed as meeting the eligibility requirements for the J-1 Trainee category in software development.',

      howItWorks: 'How the J-1 Trainee Path Works',

      steps: [
        {
          id: 'sponsor',
          title: 'Designated J-1 Sponsor',
          description:
            'A designated J-1 sponsor organization manages the sponsorship process, including required program documentation and program oversight.',
        },
        {
          id: 'host',
          title: 'U.S. Host Company',
          description:
            'The U.S. company participates as the host organization and provides structured professional training and mentorship in software development.',
        },
        {
          id: 'training',
          title: 'Structured Training Program',
          description:
            'The program follows a structured training plan with defined learning objectives, evaluations, and professional development activities.',
        },
      ],

      whatIBring: 'What I Bring',

      strengths: [
        'Professional software development experience across frontend and full-stack work',
        'Strong foundation in React, TypeScript, JavaScript, and Python',
        'Experience with automated testing, performance optimization, and accessibility',
        'Ability to independently design, build, test, and ship software products',
        'Strong motivation to contribute and continue growing within a professional engineering team',
      ],

      ctaText:
        'Interested in discussing a full-time software development role or J-1 Trainee opportunity?',

      contact: 'Contact me',
      downloadResume: 'Download Resume',

      contactAria: 'Contact Bora Aydin by email',
      resumeAria: 'Download Bora Aydin resume',
    },

    tr: {
      title: 'ABD’de Yazılım Geliştirme Fırsatlarına Açığım',
      subtitle:
        'Türkiye’de yaşıyorum ve tam zamanlı yazılım geliştirme pozisyonları veya yapılandırılmış J-1 Trainee fırsatları için ABD’ye taşınmaya açığım.',

      eligibilityTitle: 'J-1 Trainee Programı Uygunluğu',
      eligibilityText:
        'Eğitim ve profesyonel geçmişim designated J-1 sponsor kuruluşları tarafından incelendi ve yazılım geliştirme alanında J-1 Trainee kategorisinin uygunluk şartlarını karşıladığı teyit edildi.',

      howItWorks: 'J-1 Trainee Süreci Nasıl İşler',

      steps: [
        {
          id: 'sponsor',
          title: 'Designated J-1 Sponsor',
          description:
            'Designated J-1 sponsor kuruluşu, gerekli program belgeleri ve program takibi dahil olmak üzere sponsorluk sürecini yönetir.',
        },
        {
          id: 'host',
          title: 'ABD’deki Host Şirket',
          description:
            'ABD’deki şirket host kuruluş olarak programa katılır ve yazılım geliştirme alanında yapılandırılmış profesyonel eğitim ve mentorluk sağlar.',
        },
        {
          id: 'training',
          title: 'Yapılandırılmış Eğitim Programı',
          description:
            'Program; belirlenmiş öğrenme hedefleri, değerlendirmeler ve profesyonel gelişim faaliyetlerini içeren yapılandırılmış bir eğitim planına dayanır.',
        },
      ],

      whatIBring: 'Katabileceğim Değer',

      strengths: [
        'Frontend ve full-stack geliştirme alanında profesyonel yazılım deneyimi',
        'React, TypeScript, JavaScript ve Python konusunda güçlü teknik temel',
        'Otomatik test, performans optimizasyonu ve erişilebilirlik deneyimi',
        'Yazılım ürünlerini bağımsız olarak tasarlama, geliştirme, test etme ve yayına alma becerisi',
        'Profesyonel bir mühendislik ekibine katkı sağlama ve gelişmeye devam etme motivasyonu',
      ],

      ctaText:
        'Tam zamanlı bir yazılım geliştirme pozisyonu veya J-1 Trainee fırsatı hakkında görüşmek ister misiniz?',

      contact: 'İletişime Geç',
      downloadResume: 'Özgeçmişi İndir',

      contactAria: 'Bora Aydin ile e-posta üzerinden iletişime geç',
      resumeAria: 'Bora Aydin özgeçmişini indir',
    },

    de: {
      title: 'Offen für Softwareentwicklungsstellen in den USA',
      subtitle:
        'Ich lebe in der Türkei und bin für Vollzeitstellen in der Softwareentwicklung sowie strukturierte J-1-Trainee-Möglichkeiten zu einem Umzug in die USA bereit.',

      eligibilityTitle: 'Voraussetzungen für das J-1-Trainee-Programm',
      eligibilityText:
        'Mein Bildungs- und Berufshintergrund wurde von anerkannten J-1-Sponsororganisationen geprüft und als den Voraussetzungen der J-1-Trainee-Kategorie im Bereich Softwareentwicklung entsprechend bestätigt.',

      howItWorks: 'So funktioniert der J-1-Trainee-Weg',

      steps: [
        {
          id: 'sponsor',
          title: 'Anerkannte J-1-Sponsororganisation',
          description:
            'Eine anerkannte J-1-Sponsororganisation begleitet den Sponsoring-Prozess einschließlich der erforderlichen Programmdokumentation und Programmbetreuung.',
        },
        {
          id: 'host',
          title: 'US-Gastunternehmen',
          description:
            'Das US-Unternehmen nimmt als Gastorganisation am Programm teil und bietet strukturierte berufliche Weiterbildung und Mentoring im Bereich Softwareentwicklung.',
        },
        {
          id: 'training',
          title: 'Strukturiertes Trainingsprogramm',
          description:
            'Das Programm basiert auf einem strukturierten Trainingsplan mit definierten Lernzielen, regelmäßigen Bewertungen und Maßnahmen zur beruflichen Weiterentwicklung.',
        },
      ],

      whatIBring: 'Was ich mitbringe',

      strengths: [
        'Berufserfahrung in der Frontend- und Full-Stack-Softwareentwicklung',
        'Fundierte Kenntnisse in React, TypeScript, JavaScript und Python',
        'Erfahrung mit automatisierten Tests, Performance-Optimierung und Accessibility',
        'Fähigkeit, Softwareprodukte eigenständig zu konzipieren, zu entwickeln, zu testen und bereitzustellen',
        'Hohe Motivation, zu einem professionellen Entwicklungsteam beizutragen und mich kontinuierlich weiterzuentwickeln',
      ],

      ctaText:
        'Interesse an einem Austausch über eine Vollzeitstelle in der Softwareentwicklung oder eine J-1-Trainee-Möglichkeit?',

      contact: 'Kontakt aufnehmen',
      downloadResume: 'Lebenslauf herunterladen',

      contactAria: 'Bora Aydin per E-Mail kontaktieren',
      resumeAria: 'Lebenslauf von Bora Aydin herunterladen',
    },
  };

  const currentContent = content[language] || content.en;

  return (
    <section
      id="j1"
      className="bg-blue-50 py-16 dark:bg-blue-950/20 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">

          {/* Header */}
          <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              {currentContent.title}
            </h2>

            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
              {currentContent.subtitle}
            </p>
          </div>

          {/* Main Card */}
          <div
            className="
              rounded-2xl
              border border-blue-100
              bg-white
              p-6
              shadow-sm
              dark:border-gray-700
              dark:bg-gray-800
              sm:p-8
              lg:p-10
            "
          >
            {/* Eligibility */}
            <div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                {currentContent.eligibilityTitle}
              </h3>

              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                {currentContent.eligibilityText}
              </p>
            </div>

            {/* How It Works */}
            <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
              <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                {currentContent.howItWorks}
              </h3>

              <div className="space-y-6">
                {currentContent.steps.map((step, index) => (
                  <div
                    key={step.id}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="
                        flex h-8 w-8
                        flex-shrink-0
                        items-center justify-center
                        rounded-full
                        bg-blue-800
                        text-sm font-bold
                        text-white
                        dark:bg-blue-700
                      "
                      aria-hidden="true"
                    >
                      {index + 1}
                    </div>

                    <div>
                      <h4 className="mb-1.5 text-lg font-semibold text-gray-900 dark:text-white">
                        {step.title}
                      </h4>

                      <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What I Bring */}
            <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
              <h3 className="mb-5 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                {currentContent.whatIBring}
              </h3>

              <ul className="space-y-3">
                {currentContent.strengths.map((strength) => (
                  <li
                    key={strength}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="mt-1 text-blue-600 dark:text-blue-400"
                      aria-hidden="true"
                    >
                      •
                    </span>

                    <span className="leading-relaxed text-gray-600 dark:text-gray-300">
                      {strength}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div
              className="
                mt-8
                rounded-xl
                border border-blue-100
                bg-blue-50
                p-5
                dark:border-blue-900/50
                dark:bg-blue-900/20
                sm:p-6
              "
            >
              <p className="mb-5 text-center text-base font-medium text-gray-700 dark:text-gray-200 sm:text-lg">
                {currentContent.ctaText}
              </p>

              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="mailto:br.aydin@hotmail.com"
                  aria-label={currentContent.contactAria}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-lg
                    border border-blue-200
                    bg-white
                    px-5 py-2.5
                    font-semibold
                    text-blue-800
                    transition-colors
                    hover:bg-blue-50
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-500
                    focus-visible:ring-offset-2
                    dark:border-blue-800
                    dark:bg-gray-800
                    dark:text-blue-400
                    dark:hover:bg-gray-700
                    dark:focus-visible:ring-offset-gray-800
                  "
                >
                  <FaEnvelope
                    className="mr-2"
                    aria-hidden="true"
                  />

                  {currentContent.contact}
                </a>

                <a
                  href="/Bora_Aydin_J1_Resume.pdf"
                  download="Bora_Aydin_J1_Resume.pdf"
                  aria-label={currentContent.resumeAria}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-blue-800
                    px-5 py-2.5
                    font-semibold
                    text-white
                    transition-colors
                    hover:bg-blue-700
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-500
                    focus-visible:ring-offset-2
                    dark:bg-blue-700
                    dark:hover:bg-blue-600
                    dark:focus-visible:ring-offset-gray-800
                  "
                >
                  <FaDownload
                    className="mr-2"
                    aria-hidden="true"
                  />

                  {currentContent.downloadResume}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default J1Section;