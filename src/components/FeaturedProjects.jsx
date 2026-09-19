import React, { useContext } from 'react';
import {
  FaGithub,
  FaExternalLinkAlt,
} from 'react-icons/fa';

import { LanguageContext } from '../context/LanguageContext';
import translations from '../data/translations.json';

const FeaturedProjects = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const labels = {
    en: {
      problem: 'Problem',
      solution: 'Solution',
      contributions: 'Engineering Contributions',
      highlights: 'Product Highlights',
      metrics: 'Performance Metrics',
      techStack: 'Tech Stack',
      liveDemo: 'Live Demo',
      github: 'View GitHub',
    },

    tr: {
      problem: 'Problem',
      solution: 'Çözüm',
      contributions: 'Mühendislik Katkıları',
      highlights: 'Ürün Özellikleri',
      metrics: 'Performans Metrikleri',
      techStack: 'Teknoloji Yığını',
      liveDemo: 'Canlı Demo',
      github: "GitHub'ı Gör",
    },

    de: {
      problem: 'Problem',
      solution: 'Lösung',
      contributions: 'Technische Beiträge',
      highlights: 'Produkt-Highlights',
      metrics: 'Performance-Metriken',
      techStack: 'Technologie-Stack',
      liveDemo: 'Live-Demo',
      github: 'GitHub ansehen',
    },
  };

  const projectsData = {
    en: [
      {
        id: 'aviora',
        name: 'Aviora',
        category: 'Career Management Platform',
        title: 'Aviora — Career Management Platform',

        description:
          'A career-management platform designed to bring job applications, interviews, analytics, and follow-up workflows into one organized product experience.',

        problem:
          'Job seekers often manage applications across multiple platforms, making applications, interviews, and follow-ups difficult to track in one place.',

        solution:
          'Built a comprehensive career management platform with application tracking, Kanban workflows, analytics, and interview preparation tools.',

        contributions: [
          'Designed and developed the product independently as a full-stack application',
          'Built reusable UI architecture with React and TypeScript',
          'Implemented application workflows with Kanban state management',
          'Added automated testing with Playwright and Vitest',
          'Implemented accessibility-conscious UI states',
          'Performed performance profiling and optimization',
        ],

        technologies: [
          'React',
          'TypeScript',
          'Python',
          'PyWebView',
          'Playwright',
          'Vitest',
        ],

        metrics: [
          'Mobile Lighthouse Performance: 94–98',
          'Largest Contentful Paint (LCP): 1.9–2.3 seconds',
          'Total Blocking Time (TBT): 26–98 ms',
          'Measured across 6 geographic regions',
        ],

        github: 'https://github.com/SkyBlueHeat/Aviora-Showcase',
        live: 'https://aviora-eight.vercel.app/',
      },

      {
        id: 'agent-evidence',
        name: 'Agent Evidence',
        category: 'AI Agent Payment Security Lab',
        title: 'Agent Evidence — AI Agent Payment Security Lab',

        description:
          'A security-focused engineering project for testing payment workflows involving AI agents, combining frontend/backend integration, API architecture, domain modeling, and deterministic risk evaluation.',

        problem:
          'AI agents capable of making or managing payments require deterministic and testable safeguards for known payment risks and attack scenarios.',

        solution:
          'Built a payment-security testing platform with deterministic risk rules, structured domain modeling, validation, and security-conscious API workflows.',

        highlights: [
          '6 core domain entities',
          '10 deterministic payment-risk rules',
          'Merchant attack scenarios',
          'Structured security logging',
          'Payload limits and redaction',
          'Docker-based development environment',
        ],

        contributions: [
          'Designed REST API architecture with FastAPI',
          'Implemented 6 core domain entities with SQLAlchemy',
          'Created 10 deterministic payment-risk rules',
          'Built merchant attack scenarios and testing workflows',
          'Implemented validation with Pydantic',
          'Added payload limits, redaction, and structured logging',
          'Set up Docker Compose quality gates',
        ],

        technologies: [
          'React',
          'TypeScript',
          'FastAPI',
          'REST APIs',
          'SQLAlchemy',
          'Pydantic',
          'Docker',
          'pytest',
        ],

        metrics: null,

        github: 'https://github.com/SkyBlueHeat',
        live: null,
      },

      {
        id: 'motionkit',
        name: 'MotionKit',
        category: 'Programmatic Motion Design System',
        title: 'MotionKit — Programmatic Motion Design System',

        description:
          'A reusable motion graphics system built with React, TypeScript, and Remotion for producing polished, data-driven video through reusable typed components.',

        problem:
          'One-off motion graphics workflows often duplicate animation logic and make it difficult to maintain consistent timing, styling, responsive formats, and rendering behavior.',

        solution:
          'Built a component-driven motion design system with typed APIs, centralized motion tokens, reusable transitions, responsive formats, themes, and deterministic frame-based rendering.',

        highlights: [
          'Reusable typed motion components',
          'Kinetic typography and animated titles',
          'Animated statistics and data visualization',
          'Centralized timing, easing, stagger, and motion tokens',
          'Reusable scene transitions',
          '16:9, 9:16, and 1:1 responsive video formats',
          'Data-driven and parameterized video generation',
          'Deterministic frame-based rendering',
        ],

        contributions: [
          'Designed reusable React and TypeScript motion architecture',
          'Created typed APIs for motion composition and parameters',
          'Built reusable typography, lower-third, statistics, chart, and quote components',
          'Implemented centralized timing and animation tokens',
          'Built reusable transitions and motion patterns',
          'Implemented responsive output formats',
          'Enabled data-driven video generation from structured content',
          'Implemented deterministic rendering for consistent output',
        ],

        technologies: [
          'React',
          'TypeScript',
          'Remotion 4',
        ],

        metrics: null,

        github: 'https://github.com/SkyBlueHeat/MotionKit',
        live: 'https://motion-kit-drab.vercel.app/',
      },
    ],

    tr: [
      {
        id: 'aviora',
        name: 'Aviora',
        category: 'Kariyer Yönetim Platformu',
        title: 'Aviora — Kariyer Yönetim Platformu',

        description:
          'İş başvurularını, mülakatları, analizleri ve takip süreçlerini tek bir düzenli ürün deneyiminde bir araya getiren kariyer yönetim platformu.',

        problem:
          'İş arayanlar başvurularını birden fazla platform üzerinden takip etmek zorunda kaldığı için başvuru, mülakat ve takip süreçlerini tek yerde yönetmek zorlaşabiliyor.',

        solution:
          'Başvuru takibi, Kanban workflow’ları, analizler ve mülakat hazırlık araçlarını içeren kapsamlı bir kariyer yönetim platformu geliştirdim.',

        contributions: [
          'Ürünü bağımsız olarak full-stack bir uygulama şeklinde tasarlayıp geliştirdim',
          'React ve TypeScript ile yeniden kullanılabilir UI mimarisi oluşturdum',
          'Kanban durum yönetimiyle başvuru workflow’ları geliştirdim',
          'Playwright ve Vitest ile otomatik testler ekledim',
          'Erişilebilirliği dikkate alan UI durumları geliştirdim',
          'Performans profilleme ve optimizasyon çalışmaları gerçekleştirdim',
        ],

        technologies: [
          'React',
          'TypeScript',
          'Python',
          'PyWebView',
          'Playwright',
          'Vitest',
        ],

        metrics: [
          'Mobil Lighthouse Performansı: 94–98',
          'Largest Contentful Paint (LCP): 1.9–2.3 saniye',
          'Total Blocking Time (TBT): 26–98 ms',
          '6 farklı coğrafi bölgede ölçüldü',
        ],

        github: 'https://github.com/SkyBlueHeat/Aviora-Showcase',
        live: 'https://aviora-eight.vercel.app/',
      },

      {
        id: 'agent-evidence',
        name: 'Agent Evidence',
        category: 'AI Agent Ödeme Güvenliği Laboratuvarı',
        title: 'Agent Evidence — AI Agent Ödeme Güvenliği Laboratuvarı',

        description:
          'AI agent ödeme süreçlerinin güvenliğini test etmeye odaklanan; frontend/backend entegrasyonu, API mimarisi, domain modelleme ve deterministik risk değerlendirmesini bir araya getiren güvenlik projesi.',

        problem:
          'Ödeme yapabilen veya ödeme süreçlerini yönetebilen AI agent sistemlerinin, bilinen ödeme riskleri ve saldırı senaryoları için deterministik ve test edilebilir güvenlik kontrollerine ihtiyacı bulunuyor.',

        solution:
          'Deterministik risk kuralları, domain modelleme, doğrulama ve güvenlik odaklı API workflow’ları içeren bir ödeme güvenliği test platformu geliştirdim.',

        highlights: [
          '6 temel domain entity',
          '10 deterministik ödeme riski kuralı',
          'Merchant saldırı senaryoları',
          'Yapılandırılmış güvenlik logging sistemi',
          'Payload limitleri ve redaction',
          'Docker tabanlı geliştirme ortamı',
        ],

        contributions: [
          'FastAPI ile REST API mimarisi tasarladım',
          'SQLAlchemy ile 6 temel domain entity geliştirdim',
          '10 deterministik ödeme riski kuralı oluşturdum',
          'Merchant saldırı senaryoları ve test workflow’ları geliştirdim',
          'Pydantic ile doğrulama yapıları uyguladım',
          'Payload limitleri, redaction ve structured logging ekledim',
          'Docker Compose quality gate yapısı kurdum',
        ],

        technologies: [
          'React',
          'TypeScript',
          'FastAPI',
          "REST API'ler",
          'SQLAlchemy',
          'Pydantic',
          'Docker',
          'pytest',
        ],

        metrics: null,

        github: 'https://github.com/SkyBlueHeat',
        live: null,
      },

      {
        id: 'motionkit',
        name: 'MotionKit',
        category: 'Programatik Motion Design Sistemi',
        title: 'MotionKit — Programatik Motion Design Sistemi',

        description:
          'React, TypeScript ve Remotion ile geliştirilen; yeniden kullanılabilir ve tip güvenli bileşenlerle veri odaklı video üretimi sağlayan motion graphics sistemi.',

        problem:
          'Tek seferlik motion graphics workflow’ları animasyon mantığının tekrar edilmesine ve zamanlama, stil, responsive formatlar ve rendering davranışında tutarlılığın zorlaşmasına neden olabiliyor.',

        solution:
          'Typed API’ler, merkezi motion token’ları, yeniden kullanılabilir geçişler, responsive formatlar, temalar ve deterministik frame tabanlı rendering içeren bileşen tabanlı bir motion design sistemi geliştirdim.',

        highlights: [
          'Yeniden kullanılabilir tip güvenli motion bileşenleri',
          'Kinetic typography ve animasyonlu başlıklar',
          'Animasyonlu istatistikler ve veri görselleştirme',
          'Merkezi timing, easing, stagger ve motion token sistemi',
          'Yeniden kullanılabilir scene transition’lar',
          '16:9, 9:16 ve 1:1 responsive video formatları',
          'Veri odaklı ve parametreli video üretimi',
          'Deterministik frame tabanlı rendering',
        ],

        contributions: [
          'React ve TypeScript ile yeniden kullanılabilir motion mimarisi tasarladım',
          'Motion composition ve parametreler için typed API’ler geliştirdim',
          'Typography, lower-third, statistic, chart ve quote bileşenleri oluşturdum',
          'Merkezi timing ve animation token sistemi geliştirdim',
          'Yeniden kullanılabilir transition ve motion pattern’ları oluşturdum',
          'Responsive çıktı formatları geliştirdim',
          'Yapılandırılmış verilerden veri odaklı video üretimini mümkün hale getirdim',
          'Tutarlı sonuçlar için deterministik rendering uyguladım',
        ],

        technologies: [
          'React',
          'TypeScript',
          'Remotion 4',
        ],

        metrics: null,

        github: 'https://github.com/SkyBlueHeat/MotionKit',
        live: 'https://motion-kit-drab.vercel.app/',
      },
    ],

    de: [
      {
        id: 'aviora',
        name: 'Aviora',
        category: 'Karriere-Management-Plattform',
        title: 'Aviora — Karriere-Management-Plattform',

        description:
          'Eine Karriere-Management-Plattform, die Bewerbungen, Vorstellungsgespräche, Analysen und Follow-up-Prozesse in einem strukturierten Produkt zusammenführt.',

        problem:
          'Bewerber verwalten ihre Bewerbungen häufig über mehrere Plattformen, wodurch Bewerbungen, Interviews und Follow-ups nur schwer an einem zentralen Ort nachverfolgt werden können.',

        solution:
          'Entwicklung einer umfassenden Karriere-Management-Plattform mit Bewerbungstracking, Kanban-Workflows, Analysen und Werkzeugen zur Interviewvorbereitung.',

        contributions: [
          'Das Produkt eigenständig als Full-Stack-Anwendung konzipiert und entwickelt',
          'Wiederverwendbare UI-Architektur mit React und TypeScript entwickelt',
          'Bewerbungs-Workflows mit Kanban-State-Management implementiert',
          'Automatisierte Tests mit Playwright und Vitest hinzugefügt',
          'Barrierebewusste UI-Zustände implementiert',
          'Performance-Profiling und Optimierungen durchgeführt',
        ],

        technologies: [
          'React',
          'TypeScript',
          'Python',
          'PyWebView',
          'Playwright',
          'Vitest',
        ],

        metrics: [
          'Mobile Lighthouse Performance: 94–98',
          'Largest Contentful Paint (LCP): 1,9–2,3 Sekunden',
          'Total Blocking Time (TBT): 26–98 ms',
          'Messungen in 6 geografischen Regionen',
        ],

        github: 'https://github.com/SkyBlueHeat/Aviora-Showcase',
        live: 'https://aviora-eight.vercel.app/',
      },

      {
        id: 'agent-evidence',
        name: 'Agent Evidence',
        category: 'Labor für KI-Agenten-Zahlungssicherheit',
        title: 'Agent Evidence — Labor für KI-Agenten-Zahlungssicherheit',

        description:
          'Ein Security-Engineering-Projekt zur Prüfung von Zahlungsworkflows mit KI-Agenten, das Frontend-/Backend-Integration, API-Architektur, Domänenmodellierung und deterministische Risikobewertung kombiniert.',

        problem:
          'KI-Agenten, die Zahlungen ausführen oder verwalten können, benötigen deterministische und testbare Sicherheitskontrollen für bekannte Zahlungsrisiken und Angriffsszenarien.',

        solution:
          'Entwicklung einer Payment-Security-Testplattform mit deterministischen Risikoregeln, Domänenmodellierung, Validierung und sicherheitsorientierten API-Workflows.',

        highlights: [
          '6 zentrale Domänenentitäten',
          '10 deterministische Zahlungsrisikoregeln',
          'Merchant-Angriffsszenarien',
          'Strukturiertes Security-Logging',
          'Payload-Limits und Redaction',
          'Docker-basierte Entwicklungsumgebung',
        ],

        contributions: [
          'REST-API-Architektur mit FastAPI entwickelt',
          '6 zentrale Domänenentitäten mit SQLAlchemy implementiert',
          '10 deterministische Zahlungsrisikoregeln erstellt',
          'Angriffsszenarien und Test-Workflows entwickelt',
          'Validierung mit Pydantic implementiert',
          'Payload-Limits, Redaction und strukturiertes Logging hinzugefügt',
          'Docker-Compose-Quality-Gates eingerichtet',
        ],

        technologies: [
          'React',
          'TypeScript',
          'FastAPI',
          'REST-APIs',
          'SQLAlchemy',
          'Pydantic',
          'Docker',
          'pytest',
        ],

        metrics: null,

        github: 'https://github.com/SkyBlueHeat',
        live: null,
      },

      {
        id: 'motionkit',
        name: 'MotionKit',
        category: 'Programmgesteuertes Motion-Design-System',
        title: 'MotionKit — Programmgesteuertes Motion-Design-System',

        description:
          'Ein wiederverwendbares Motion-Graphics-System mit React, TypeScript und Remotion zur Erstellung typsicherer und datengesteuerter Videos.',

        problem:
          'Einmalige Motion-Graphics-Workflows führen häufig zu duplizierter Animationslogik und erschweren konsistente Timings, Styles, responsive Formate und Rendering-Verhalten.',

        solution:
          'Entwicklung eines komponentenbasierten Motion-Design-Systems mit typisierten APIs, zentralen Motion-Tokens, wiederverwendbaren Übergängen, responsiven Formaten, Themes und deterministischem framebasiertem Rendering.',

        highlights: [
          'Wiederverwendbare typsichere Motion-Komponenten',
          'Kinetic Typography und animierte Titel',
          'Animierte Statistiken und Datenvisualisierung',
          'Zentrale Timing-, Easing-, Stagger- und Motion-Tokens',
          'Wiederverwendbare Scene Transitions',
          'Responsive Videoformate in 16:9, 9:16 und 1:1',
          'Datengesteuerte und parametrisierte Videogenerierung',
          'Deterministisches framebasiertes Rendering',
        ],

        contributions: [
          'Wiederverwendbare Motion-Architektur mit React und TypeScript entwickelt',
          'Typisierte APIs für Motion-Komposition und Parameter implementiert',
          'Typography-, Lower-Third-, Statistik-, Chart- und Quote-Komponenten entwickelt',
          'Zentrales Timing- und Animation-Token-System aufgebaut',
          'Wiederverwendbare Übergänge und Motion-Patterns erstellt',
          'Responsive Ausgabeformate implementiert',
          'Datengesteuerte Videogenerierung aus strukturierten Daten ermöglicht',
          'Deterministisches Rendering für konsistente Ergebnisse implementiert',
        ],

        technologies: [
          'React',
          'TypeScript',
          'Remotion 4',
        ],

        metrics: null,

        github: 'https://github.com/SkyBlueHeat/MotionKit',
        live: 'https://motion-kit-drab.vercel.app/',
      },
    ],
  };

  const projects = projectsData[language] || projectsData.en;
  const currentLabels = labels[language] || labels.en;

  return (
    <section
      id="projects"
      className="bg-gray-50 py-16 dark:bg-gray-800 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {t.projects.title}
          </h2>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-12 lg:space-y-16">
          {projects.map((project) => (
            <article
              key={project.id}
              className="
                overflow-hidden
                rounded-2xl
                border border-gray-200
                bg-white
                shadow-sm
                dark:border-gray-700
                dark:bg-gray-700
              "
            >
              <div className="lg:grid lg:grid-cols-[0.8fr_1.2fr]">

                {/* Project Overview */}
                <div
                  className="
                    flex
                    min-h-[280px]
                    items-center
                    justify-center
                    bg-gradient-to-br
                    from-blue-50
                    to-blue-100
                    p-8
                    dark:from-blue-950/30
                    dark:to-blue-900/20
                    lg:min-h-full
                  "
                >
                  <div className="max-w-sm text-center">
                    <div
                      className="
                        mb-5
                        inline-flex
                        rounded-xl
                        border border-blue-100
                        bg-white
                        px-6 py-4
                        shadow-sm
                        dark:border-gray-600
                        dark:bg-gray-700
                      "
                    >
                      <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300">
                        {project.name}
                      </h3>
                    </div>

                    <p className="mb-4 font-medium text-gray-700 dark:text-gray-200">
                      {project.category}
                    </p>

                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  {/* Problem */}
                  <div className="mb-6">
                    <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      {currentLabels.problem}
                    </h4>

                    <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      {currentLabels.solution}
                    </h4>

                    <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                      {project.solution}
                    </p>
                  </div>

                  {/* Highlights */}
                  {project.highlights?.length > 0 && (
                    <div className="mb-7">
                      <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                        {currentLabels.highlights}
                      </h4>

                      <div className="grid gap-2 sm:grid-cols-2">
                        {project.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="
                              flex
                              items-start
                              gap-2
                              rounded-lg
                              bg-gray-50
                              px-3
                              py-2.5
                              dark:bg-gray-800/70
                            "
                          >
                            <span
                              className="mt-0.5 text-blue-600 dark:text-blue-400"
                              aria-hidden="true"
                            >
                              ✓
                            </span>

                            <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Contributions */}
                  <div className="mb-7">
                    <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                      {currentLabels.contributions}
                    </h4>

                    <ul className="space-y-2.5">
                      {project.contributions.map((contribution) => (
                        <li
                          key={contribution}
                          className="flex items-start gap-3"
                        >
                          <span
                            className="mt-1 text-blue-600 dark:text-blue-400"
                            aria-hidden="true"
                          >
                            •
                          </span>

                          <span className="leading-relaxed text-gray-600 dark:text-gray-300">
                            {contribution}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  {project.metrics?.length > 0 && (
                    <div
                      className="
                        mb-7
                        rounded-xl
                        border border-blue-100
                        bg-blue-50
                        p-5
                        dark:border-blue-900/50
                        dark:bg-blue-900/20
                      "
                    >
                      <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                        {currentLabels.metrics}
                      </h4>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {project.metrics.map((metric) => (
                          <div
                            key={metric}
                            className="flex items-start gap-2"
                          >
                            <span
                              className="font-semibold text-blue-600 dark:text-blue-400"
                              aria-hidden="true"
                            >
                              ✓
                            </span>

                            <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                              {metric}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                      {currentLabels.techStack}
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            bg-blue-50
                            px-3 py-1.5
                            text-sm font-medium
                            text-blue-800
                            dark:bg-blue-900/40
                            dark:text-blue-200
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        rounded-lg
                        bg-gray-900
                        px-5 py-2.5
                        font-medium
                        text-white
                        transition-colors
                        hover:bg-gray-800
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-gray-500
                        focus-visible:ring-offset-2
                        dark:bg-gray-800
                        dark:hover:bg-gray-600
                      "
                    >
                      <FaGithub className="mr-2" />
                      {currentLabels.github}
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          rounded-lg
                          bg-blue-800
                          px-5 py-2.5
                          font-medium
                          text-white
                          transition-colors
                          hover:bg-blue-700
                          focus:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-blue-500
                          focus-visible:ring-offset-2
                          dark:bg-blue-700
                          dark:hover:bg-blue-600
                        "
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        {currentLabels.liveDemo}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;