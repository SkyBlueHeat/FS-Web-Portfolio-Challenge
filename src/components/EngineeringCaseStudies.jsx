import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../data/translations.json';

const EngineeringCaseStudies = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const labels = {
    en: {
      problem: 'Problem',
      approach: 'Approach',
      results: 'Results',
      tools: 'Tools & Technologies',
    },
    tr: {
      problem: 'Problem',
      approach: 'Yaklaşım',
      results: 'Sonuçlar',
      tools: 'Araçlar & Teknolojiler',
    },
    de: {
      problem: 'Problem',
      approach: 'Vorgehensweise',
      results: 'Ergebnisse',
      tools: 'Tools & Technologien',
    },
  };

  const caseStudiesData = {
    en: [
      {
        id: 'aviora-performance',
        title: 'Aviora Performance Optimization',
        subtitle: 'Achieving 94–98 Lighthouse Performance Score',
        problem:
          'Initial performance measurements showed suboptimal Core Web Vitals, particularly on mobile devices where users needed fast access to their job application data.',
        approach: [
          'Analyzed bundle composition and identified heavy dependencies',
          'Implemented code splitting and lazy loading for route components',
          'Optimized image assets with responsive formats and lazy loading',
          'Reduced JavaScript execution time through component optimization',
          'Minimized layout shifts with proper dimension attributes',
          'Implemented efficient state management to reduce re-renders',
        ],
        results: [
          'Mobile Lighthouse Performance: 94–98',
          'Largest Contentful Paint (LCP): 1.9–2.3 seconds',
          'Total Blocking Time (TBT): 26–98 ms',
          'Consistent performance across 6 geographic regions',
        ],
        tools: [
          'Lighthouse',
          'Chrome DevTools',
          'Webpack Bundle Analyzer',
          'Playwright',
        ],
      },

      {
        id: 'payment-risk',
        title: 'Payment Risk Architecture',
        subtitle: 'Deterministic Rule Engine for AI Agent Security',
        problem:
          'AI agents handling payments need deterministic, testable security rules that can be validated against known attack patterns while maintaining performance.',
        approach: [
          'Designed a domain model with 6 core entities: transactions, merchants, agents, rules, alerts, and logs',
          'Implemented 10 deterministic payment-risk rules with explicit conditions',
          'Created merchant attack scenarios for testing and validation',
          'Built asynchronous SQLAlchemy integration for data access',
          'Implemented Pydantic validation for API payloads and domain models',
          'Added payload limits, redaction, and structured logging',
          'Set up Docker Compose quality gates for consistent development environments',
        ],
        results: [
          'Deterministic and repeatable risk evaluation',
          'Automated test coverage with pytest',
          'Type-safe API contracts with Pydantic',
          'Asynchronous database architecture',
          'Security-conscious handling of logging and sensitive data',
        ],
        tools: [
          'FastAPI',
          'SQLAlchemy',
          'Pydantic',
          'pytest',
          'Docker',
          'asyncio',
        ],
      },

      {
        id: 'motion-components',
        title: 'Reusable Typed Motion Components',
        subtitle: 'Type-Safe Motion Design System with Remotion',
        problem:
          'Motion design in video production required reusable, type-safe components capable of generating consistent animated content programmatically.',
        approach: [
          'Designed a component architecture with TypeScript for type safety',
          'Created typed APIs for motion composition and parameters',
          'Built reusable transitions and motion patterns',
          'Implemented animated charts and data-visualization components',
          'Designed responsive output formats for different use cases',
          'Implemented deterministic rendering for consistent output',
          'Enabled data-driven video generation from structured data',
        ],
        results: [
          'Type-safe motion composition with compile-time validation',
          'Reusable component library for consistent motion design',
          'Deterministic rendering for predictable output',
          'Responsive compositions for multiple output formats',
          'Data-driven workflow for programmatic video generation',
        ],
        tools: ['React', 'TypeScript', 'Remotion', 'FFmpeg'],
      },
    ],

    tr: [
      {
        id: 'aviora-performance',
        title: 'Aviora Performans Optimizasyonu',
        subtitle: '94–98 Lighthouse Performans Skoruna Ulaşma',
        problem:
          'İlk performans ölçümleri, özellikle kullanıcıların iş başvurusu verilerine hızlı erişmesi gereken mobil cihazlarda Core Web Vitals değerlerinin iyileştirilebileceğini gösterdi.',
        approach: [
          'Bundle yapısını analiz ederek ağır bağımlılıkları belirledim',
          'Route bileşenleri için code splitting ve lazy loading uyguladım',
          'Görselleri responsive formatlar ve lazy loading ile optimize ettim',
          'Bileşen optimizasyonlarıyla JavaScript çalışma süresini azalttım',
          'Doğru boyut tanımlarıyla layout shift etkisini azalttım',
          'Gereksiz yeniden render işlemlerini azaltmak için state yönetimini optimize ettim',
        ],
        results: [
          'Mobil Lighthouse Performansı: 94–98',
          'Largest Contentful Paint (LCP): 1.9–2.3 saniye',
          'Total Blocking Time (TBT): 26–98 ms',
          '6 farklı coğrafi bölgede tutarlı performans',
        ],
        tools: [
          'Lighthouse',
          'Chrome DevTools',
          'Webpack Bundle Analyzer',
          'Playwright',
        ],
      },

      {
        id: 'payment-risk',
        title: 'Ödeme Riski Mimarisi',
        subtitle: 'AI Agent Güvenliği için Deterministik Kural Motoru',
        problem:
          'Ödeme işlemleri gerçekleştiren AI agent sistemlerinin, bilinen saldırı senaryolarına karşı doğrulanabilen deterministik ve test edilebilir güvenlik kurallarına ihtiyacı vardı.',
        approach: [
          'İşlemler, satıcılar, agentlar, kurallar, uyarılar ve loglardan oluşan 6 temel entity içeren domain modeli tasarladım',
          'Açık koşullara sahip 10 deterministik ödeme riski kuralı geliştirdim',
          'Test ve doğrulama için merchant saldırı senaryoları oluşturdum',
          'Asenkron SQLAlchemy veri erişim katmanı geliştirdim',
          'API payloadları ve domain modelleri için Pydantic doğrulaması ekledim',
          'Payload limitleri, redaction ve yapılandırılmış logging uyguladım',
          'Tutarlı geliştirme ortamları için Docker Compose quality gate yapısı kurdum',
        ],
        results: [
          'Deterministik ve tekrarlanabilir risk değerlendirmesi',
          'pytest ile otomatik test kapsamı',
          'Pydantic ile type-safe API kontratları',
          'Asenkron veritabanı mimarisi',
          'Hassas veriler ve logging için güvenlik odaklı yaklaşım',
        ],
        tools: [
          'FastAPI',
          'SQLAlchemy',
          'Pydantic',
          'pytest',
          'Docker',
          'asyncio',
        ],
      },

      {
        id: 'motion-components',
        title: 'Yeniden Kullanılabilir Tip Güvenli Motion Bileşenleri',
        subtitle: 'Remotion ile Type-Safe Motion Design Sistemi',
        problem:
          'Video üretiminde tutarlı animasyonlu içerikleri programatik olarak oluşturabilmek için yeniden kullanılabilir ve tip güvenli bileşenlere ihtiyaç vardı.',
        approach: [
          'TypeScript ile tip güvenli bileşen mimarisi tasarladım',
          'Motion composition ve parametreler için typed API yapıları oluşturdum',
          'Yeniden kullanılabilir geçişler ve motion kalıpları geliştirdim',
          'Animasyonlu grafik ve veri görselleştirme bileşenleri oluşturdum',
          'Farklı kullanım alanları için responsive çıktı formatları tasarladım',
          'Tutarlı sonuçlar için deterministik rendering uyguladım',
          'Yapılandırılmış verilerden programatik video üretimini mümkün hale getirdim',
        ],
        results: [
          'Compile-time doğrulamalı type-safe motion composition',
          'Tutarlı motion tasarımı için yeniden kullanılabilir bileşen kütüphanesi',
          'Öngörülebilir sonuçlar için deterministik rendering',
          'Farklı çıktı formatlarına uyum sağlayan responsive composition yapısı',
          'Programatik video üretimi için veri odaklı workflow',
        ],
        tools: ['React', 'TypeScript', 'Remotion', 'FFmpeg'],
      },
    ],

    de: [
      {
        id: 'aviora-performance',
        title: 'Aviora Performance-Optimierung',
        subtitle: 'Lighthouse-Performance-Score von 94–98',
        problem:
          'Die ersten Performance-Messungen zeigten Verbesserungspotenzial bei den Core Web Vitals, insbesondere auf mobilen Geräten, auf denen Nutzer schnell auf ihre Bewerbungsdaten zugreifen müssen.',
        approach: [
          'Bundle-Zusammensetzung analysiert und umfangreiche Abhängigkeiten identifiziert',
          'Code-Splitting und Lazy Loading für Route-Komponenten implementiert',
          'Bildressourcen mit responsiven Formaten und Lazy Loading optimiert',
          'JavaScript-Ausführungszeit durch Komponentenoptimierung reduziert',
          'Layout-Verschiebungen durch korrekt definierte Abmessungen minimiert',
          'State-Management optimiert, um unnötige Re-Renders zu reduzieren',
        ],
        results: [
          'Mobile Lighthouse Performance: 94–98',
          'Largest Contentful Paint (LCP): 1,9–2,3 Sekunden',
          'Total Blocking Time (TBT): 26–98 ms',
          'Konsistente Performance in 6 geografischen Regionen',
        ],
        tools: [
          'Lighthouse',
          'Chrome DevTools',
          'Webpack Bundle Analyzer',
          'Playwright',
        ],
      },

      {
        id: 'payment-risk',
        title: 'Architektur für Zahlungsrisiken',
        subtitle:
          'Deterministische Regel-Engine für die Sicherheit von KI-Agenten',
        problem:
          'KI-Agenten, die Zahlungsvorgänge verarbeiten, benötigen deterministische und testbare Sicherheitsregeln, die gegen bekannte Angriffsszenarien validiert werden können.',
        approach: [
          'Domänenmodell mit 6 Kernelementen entworfen: Transaktionen, Händler, Agenten, Regeln, Warnungen und Logs',
          '10 deterministische Regeln zur Bewertung von Zahlungsrisiken implementiert',
          'Angriffsszenarien für Tests und Validierung erstellt',
          'Asynchrone Datenzugriffsschicht mit SQLAlchemy entwickelt',
          'Pydantic-Validierung für API-Payloads und Domänenmodelle implementiert',
          'Payload-Limits, Datenmaskierung und strukturiertes Logging hinzugefügt',
          'Docker-Compose-Quality-Gates für konsistente Entwicklungsumgebungen eingerichtet',
        ],
        results: [
          'Deterministische und reproduzierbare Risikobewertung',
          'Automatisierte Tests mit pytest',
          'Typsichere API-Verträge mit Pydantic',
          'Asynchrone Datenbankarchitektur',
          'Sicherheitsorientierter Umgang mit Logging und sensiblen Daten',
        ],
        tools: [
          'FastAPI',
          'SQLAlchemy',
          'Pydantic',
          'pytest',
          'Docker',
          'asyncio',
        ],
      },

      {
        id: 'motion-components',
        title: 'Wiederverwendbare typsichere Motion-Komponenten',
        subtitle: 'Typsicheres Motion-Design-System mit Remotion',
        problem:
          'Für die Videoproduktion wurden wiederverwendbare und typsichere Komponenten benötigt, mit denen sich konsistente animierte Inhalte programmatisch erzeugen lassen.',
        approach: [
          'Typsichere Komponentenarchitektur mit TypeScript entwickelt',
          'Typisierte APIs für Motion-Komposition und Parameter erstellt',
          'Wiederverwendbare Übergänge und Motion-Muster entwickelt',
          'Animierte Diagramme und Datenvisualisierungskomponenten implementiert',
          'Responsive Ausgabeformate für verschiedene Anwendungsfälle entwickelt',
          'Deterministisches Rendering für konsistente Ergebnisse implementiert',
          'Datengesteuerte Videogenerierung aus strukturierten Daten ermöglicht',
        ],
        results: [
          'Typsichere Motion-Komposition mit Compile-Time-Validierung',
          'Wiederverwendbare Komponentenbibliothek für konsistentes Motion Design',
          'Deterministisches Rendering für vorhersehbare Ergebnisse',
          'Responsive Kompositionen für unterschiedliche Ausgabeformate',
          'Datengesteuerter Workflow für programmatische Videogenerierung',
        ],
        tools: ['React', 'TypeScript', 'Remotion', 'FFmpeg'],
      },
    ],
  };

  const caseStudies =
    caseStudiesData[language] || caseStudiesData.en;

  const currentLabels =
    labels[language] || labels.en;

  return (
    <section
      id="engineering"
      className="bg-white py-16 dark:bg-gray-900 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {t.caseStudies.title}
          </h2>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
            {t.caseStudies.subtitle}
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-10 lg:space-y-12">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="
                rounded-2xl
                border border-gray-200
                bg-gray-50
                p-6
                shadow-sm
                dark:border-gray-700
                dark:bg-gray-800
                sm:p-8
                lg:p-10
              "
            >
              {/* Case Study Header */}
              <header className="mb-8">
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  {study.title}
                </h3>

                <p className="text-base font-semibold text-blue-800 dark:text-blue-400 sm:text-lg">
                  {study.subtitle}
                </p>
              </header>

              {/* Problem */}
              <div className="mb-8">
                <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
                  {currentLabels.problem}
                </h4>

                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  {study.problem}
                </p>
              </div>

              {/* Approach + Results */}
              <div className="grid gap-8 lg:grid-cols-2">

                {/* Approach */}
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
                    {currentLabels.approach}
                  </h4>

                  <ul className="space-y-3">
                    {study.approach.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3"
                      >
                        <span
                          className="mt-1 text-blue-600 dark:text-blue-400"
                          aria-hidden="true"
                        >
                          •
                        </span>

                        <span className="leading-relaxed text-gray-600 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
                    {currentLabels.results}
                  </h4>

                  <ul className="space-y-3">
                    {study.results.map((result) => (
                      <li
                        key={result}
                        className="flex items-start gap-3"
                      >
                        <span
                          className="mt-0.5 font-semibold text-green-600 dark:text-green-400"
                          aria-hidden="true"
                        >
                          ✓
                        </span>

                        <span className="leading-relaxed text-gray-600 dark:text-gray-300">
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tools */}
              <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
                <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  {currentLabels.tools}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {study.tools.map((tool) => (
                    <span
                      key={tool}
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
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringCaseStudies;