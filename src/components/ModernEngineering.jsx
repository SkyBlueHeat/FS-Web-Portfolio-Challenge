import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../data/translations.json';

const ModernEngineering = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const workflowSteps = language === 'en' ? [
    { step: 'Understand', label: 'Problem & Requirements' },
    { step: 'Explore with AI', label: 'Compare Approaches' },
    { step: 'Choose Approach', label: 'Technical Decision' },
    { step: 'Implement', label: 'Build with AI Assistance' },
    { step: 'Review', label: 'Validate Generated Code' },
    { step: 'Test', label: 'Verify Behavior' },
    { step: 'Debug', label: 'AI-Assisted Debugging' },
    { step: 'Refine', label: 'Iterate & Improve' },
    { step: 'Ship', label: 'Own the Result' }
  ] : language === 'tr' ? [
    { step: 'Anla', label: 'Problem & Gereksinimler' },
    { step: 'AI ile Keşfet', label: 'Yaklaşımları Karşılaştır' },
    { step: 'Yaklaşım Seç', label: 'Teknik Karar' },
    { step: 'Uygula', label: 'AI Yardımıyla İnşa Et' },
    { step: 'İncele', label: 'Oluşturulan Kodu Doğrula' },
    { step: 'Test Et', label: 'Davranışı Doğrula' },
    { step: 'Hata Ayıkla', label: 'AI Destekli Debugging' },
    { step: 'İyileştir', label: 'Iterasyon & Geliştirme' },
    { step: 'Yayınla', label: 'Sonucun Sahibi Ol' }
  ] : [
    { step: 'Verstehen', label: 'Problem & Anforderungen' },
    { step: 'Mit KI Erkunden', label: 'Ansätze Vergleichen' },
    { step: 'Ansatz Wählen', label: 'Technische Entscheidung' },
    { step: 'Implementieren', label: 'Mit KI-Hilfe Bauen' },
    { step: 'Überprüfen', label: 'Generierten Code Validieren' },
    { step: 'Testen', label: 'Verhalten Verifizieren' },
    { step: 'Debuggen', label: 'KI-unterstütztes Debugging' },
    { step: 'Verfeinern', label: 'Iterieren & Verbessern' },
    { step: 'Ausliefern', label: 'Ergebnis Übernehmen' }
  ];

  const aiCategories = language === 'en' ? [
    {
      name: 'Think & Research',
      tools: 'ChatGPT · Claude · Gemini',
      uses: 'Research · Reasoning · Architecture exploration · Learning · Technical comparison',
      color: 'purple'
    },
    {
      name: 'Build',
      tools: 'Cursor · Windsurf · GitHub Copilot',
      uses: 'Implementation · Code generation · Refactoring · Debugging · Codebase navigation',
      color: 'blue'
    },
    {
      name: 'Agentic Engineering',
      tools: 'Devin · Coding agents',
      uses: 'Repository-level tasks · Multi-step implementation · Automated workflows · Testing and iteration',
      color: 'green'
    },
    {
      name: 'Validate',
      tools: 'Testing tools + Developer review',
      uses: 'AI output is validated through engineering judgment, testing, and review',
      color: 'orange'
    }
  ] : language === 'tr' ? [
    {
      name: 'Düşün & Araştır',
      tools: 'ChatGPT · Claude · Gemini',
      uses: 'Araştırma · Muhakeme · Mimari keşfi · Öğrenme · Teknik karşılaştırma',
      color: 'purple'
    },
    {
      name: 'İnşa Et',
      tools: 'Cursor · Windsurf · GitHub Copilot',
      uses: 'Implementasyon · Kod oluşturma · Refactoring · Debugging · Kod keşfi',
      color: 'blue'
    },
    {
      name: 'Ajan Mühendisliği',
      tools: 'Devin · Coding agents',
      uses: 'Repository seviyesi görevler · Çok adımlı implementasyon · Otomatik workflow · Test ve iterasyon',
      color: 'green'
    },
    {
      name: 'Doğrula',
      tools: 'Test araçları + Geliştirici incelemesi',
      uses: 'AI çıktısı mühendislik yargısı, test ve inceleme ile doğrulanır',
      color: 'orange'
    }
  ] : [
    {
      name: 'Denken & Forschen',
      tools: 'ChatGPT · Claude · Gemini',
      uses: 'Forschung ·推理 · Architekturerkundung · Lernen · Technischer Vergleich',
      color: 'purple'
    },
    {
      name: 'Bauen',
      tools: 'Cursor · Windsurf · GitHub Copilot',
      uses: 'Implementierung · Code-Generierung · Refactoring · Debugging · Codebase-Navigation',
      color: 'blue'
    },
    {
      name: 'Agenten-Ingenieurwesen',
      tools: 'Devin · Coding-Agents',
      uses: 'Repository-Ebene Aufgaben · Multi-Step-Implementierung · Automatisierte Workflows · Testing und Iteration',
      color: 'green'
    },
    {
      name: 'Validieren',
      tools: 'Testing-Tools + Entwickler-Review',
      uses: 'KI-Ausgabe wird durch Ingenieur-Urteil, Testing und Review validiert',
      color: 'orange'
    }
  ];

  const whatAIHelps = language === 'en' ? [
    { category: 'Problem Understanding', items: ['Breaking down unfamiliar problems', 'Exploring requirements', 'Clarifying technical concepts', 'Identifying edge cases'] },
    { category: 'Solution Exploration', items: ['Comparing architectures', 'Brainstorming approaches', 'Understanding trade-offs', 'Evaluating libraries'] },
    { category: 'Implementation Assistance', items: ['Implementation suggestions', 'Boilerplate reduction', 'Component scaffolding', 'API integration'] },
    { category: 'Debugging', items: ['Interpreting errors', 'Exploring root causes', 'Generating debugging hypotheses', 'Suggesting fixes'] },
    { category: 'Refactoring', items: ['Simplifying complex code', 'Identifying duplication', 'Restructuring components', 'Improving readability'] },
    { category: 'Testing & Validation', items: ['Generating test ideas', 'Identifying missing scenarios', 'Drafting unit tests', 'Exploring edge cases'] },
    { category: 'Documentation', items: ['Documentation drafts', 'README structure', 'API documentation', 'Explaining technical decisions'] },
    { category: 'Learning New Technologies', items: ['Understanding unfamiliar frameworks', 'Exploring new APIs', 'Comparing technologies', 'Reading unfamiliar codebases'] }
  ] : language === 'tr' ? [
    { category: 'Problem Anlama', items: ['Bilinmeyen problemleri parçalama', 'Gereksinimleri keşfetme', 'Teknik kavramları netleştirme', 'Kenar durumları belirleme'] },
    { category: 'Çözüm Keşfi', items: ['Mimarileri karşılaştırma', 'Yaklaşımlar beyin fırtınası', 'Takasları anlama', 'Kütüphaneleri değerlendirme'] },
    { category: 'Implementasyon Yardımı', items: ['Implementasyon önerileri', 'Boilerplate azaltma', 'Bileşen iskeleti', 'API entegrasyonu'] },
    { category: 'Hata Ayıklama', items: ['Hataları yorumlama', 'Kök nedenleri keşfetme', 'Debugging hipotezleri oluşturma', 'Düzeltmeler önerme'] },
    { category: 'Refactoring', items: ['Karmaşık kodu basitleştirme', 'Duplikasyon belirleme', 'Bileşenleri yeniden yapılandırma', 'Okunabilirliği iyileştirme'] },
    { category: 'Test & Doğrulama', items: ['Test fikirleri oluşturma', 'Eksik senaryoları belirleme', 'Unit test taslağı', 'Kenar durumları keşfetme'] },
    { category: 'Dokümantasyon', items: ['Dokümantasyon taslakları', 'README yapısı', 'API dokümantasyonu', 'Teknik kararları açıklama'] },
    { category: 'Yeni Teknolojileri Öğrenme', items: ['Bilinmeyen frameworkları anlama', 'Yeni APIleri keşfetme', 'Teknolojileri karşılaştırma', 'Bilinmeyen kodları okuma'] }
  ] : [
    { category: 'Problemverständnis', items: ['Unbekannte Probleme aufteilen', 'Anforderungen erkunden', 'Technische Konzepte klären', 'Edge-Fälle identifizieren'] },
    { category: 'Lösungserkundung', items: ['Architekturen vergleichen', 'Ansätze brainstormen', 'Trade-offs verstehen', 'Bibliotheken bewerten'] },
    { category: 'Implementierungshilfe', items: ['Implementierungsvorschläge', 'Boilerplate-Reduktion', 'Komponenten-Gerüst', 'API-Integration'] },
    { category: 'Debugging', items: ['Fehler interpretieren', 'Ursachen erkunden', 'Debugging-Hypothesen generieren', 'Lösungen vorschlagen'] },
    { category: 'Refactoring', items: ['Komplexen Code vereinfachen', 'Duplikation identifizieren', 'Komponenten restrukturieren', 'Lesbarkeit verbessern'] },
    { category: 'Testing & Validierung', items: ['Test-Ideen generieren', 'Fehlende Szenarien identifizieren', 'Unit-Tests entwerfen', 'Edge-Fälle erkunden'] },
    { category: 'Dokumentation', items: ['Dokumentationsentwürfe', 'README-Struktur', 'API-Dokumentation', 'Technische Entscheidungen erklären'] },
    { category: 'Neue Technologien Lernen', items: ['Unbekannte Frameworks verstehen', 'Neue APIs erkunden', 'Technologien vergleichen', 'Unbekannte Codebases lesen'] }
  ];

  const whatAINotReplace = language === 'en' ? [
    'Architecture', 'Engineering Judgment', 'Testing', 'Validation', 'Security Thinking', 'Code Review', 'Product Decisions', 'Final Code Ownership'
  ] : language === 'tr' ? [
    'Mimari', 'Mühendislik Yargısı', 'Test', 'Doğrulama', 'Güvenlik Düşüncesi', 'Kod İncelemesi', 'Ürün Kararları', 'Final Kod Sahipliği'
  ] : [
    'Architektur', 'Ingenieur-Urteil', 'Testing', 'Validierung', 'Sicherheitsdenken', 'Code-Review', 'Produktentscheidungen', 'Endgültige Code-Eigentum'
  ];

  const adaptabilityFlow = language === 'en' ? [
    { step: 'Discover', description: 'Find new technology' },
    { step: 'Understand', description: 'Learn how it works' },
    { step: 'Experiment', description: 'Build small prototypes' },
    { step: 'Evaluate', description: 'Assess trade-offs' },
    { step: 'Integrate', description: 'Use if it adds value' },
    { step: 'Validate', description: 'Test in real work' }
  ] : language === 'tr' ? [
    { step: 'Keşfet', description: 'Yeni teknolojiyi bul' },
    { step: 'Anla', description: 'Nasıl çalıştığını öğren' },
    { step: 'Dene', description: 'Küçük prototipler oluştur' },
    { step: 'Değerlendir', description: 'Takasları değerlendir' },
    { step: 'Entegre Et', description: 'Değer katıyorsa kullan' },
    { step: 'Doğrula', description: 'Gerçek işte test et' }
  ] : [
    { step: 'Entdecken', description: 'Neue Technologie finden' },
    { step: 'Verstehen', description: 'Lernen, wie es funktioniert' },
    { step: 'Experimentieren', description: 'Kleine Prototypen bauen' },
    { step: 'Bewerten', description: 'Trade-offs bewerten' },
    { step: 'Integrieren', description: 'Verwenden, wenn es Wert addiert' },
    { step: 'Validieren', description: 'In echter Arbeit testen' }
  ];

  const activeTools = language === 'en' ? 'ChatGPT · Cursor · Windsurf · Claude' : language === 'tr' ? 'ChatGPT · Cursor · Windsurf · Claude' : 'ChatGPT · Cursor · Windsurf · Claude';
  const ecosystemTools = language === 'en' ? 'Devin · GitHub Copilot · Gemini · Coding agents · Emerging AI development tools' : language === 'tr' ? 'Devin · GitHub Copilot · Gemini · Coding agents · Yeni gelişen AI geliştirme araçları' : 'Devin · GitHub Copilot · Gemini · Coding-Agents · Neue KI-Entwicklungstools';

  return (
    <section id="modern-engineering" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">AI-Assisted Engineering</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Using modern AI tools to explore, build, debug, validate, and iterate faster without giving up engineering ownership
          </p>
        </div>

        {/* My Philosophy */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My AI Engineering Philosophy</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              AI has changed how software can be explored, built, and iterated, but it has not removed the need for engineering judgment. I use AI to accelerate parts of the development process while retaining responsibility for architecture, implementation decisions, validation, testing, debugging, and final code quality.
            </p>
            
            <div className="bg-blue-800 dark:bg-blue-900 text-white rounded-xl p-6 mb-6">
              <p className="text-xl font-semibold text-center">
                AI accelerates my workflow. Engineering ownership stays with me.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-600 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-200 text-center font-medium">
                Generated code is still code that needs to be understood, reviewed, tested, and owned.
              </p>
            </div>
          </div>
        </div>

        {/* AI Workflow Visualization */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How AI Fits Into My Workflow</h3>
            
            <div className="space-y-4">
              {workflowSteps.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-32 font-semibold text-blue-800 dark:text-blue-400">{item.step}</div>
                  <div className="flex-1 text-gray-600 dark:text-gray-300">{item.label}</div>
                  {index < workflowSteps.length - 1 && (
                    <div className="ml-4 text-blue-400 dark:text-blue-500 text-2xl">↓</div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 bg-green-50 dark:bg-green-900/30 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-200 text-center font-medium">
                Human judgment decides. AI accelerates. Tests validate.
              </p>
            </div>
          </div>
        </div>

        {/* AI Toolkit Categories */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My AI Toolkit</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiCategories.map((category, index) => (
                <div key={index} className={`bg-${category.color}-50 dark:bg-${category.color}-900/30 rounded-xl p-6 border-l-4 border-${category.color}-500`}>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{category.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 font-semibold">{category.tools}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{category.uses}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Tools I Actively Use</h4>
                <p className="text-gray-600 dark:text-gray-300">{activeTools}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-600 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI Ecosystem I Follow / Explore</h4>
                <p className="text-gray-600 dark:text-gray-300">{ecosystemTools}</p>
              </div>
            </div>
          </div>
        </div>

        {/* What I Use AI For */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What I Use AI For</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whatAIHelps.map((category, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-600 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What AI Does NOT Replace */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What AI Does NOT Replace</h3>
            
            <div className="flex flex-wrap gap-3">
              {whatAINotReplace.map((item, index) => (
                <span key={index} className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg font-semibold">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* New Technology Adaptability */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Continuous Adaptation</h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              My toolset has evolved as software development has evolved. I focus on strong fundamentals first, then learn and integrate new technologies when they genuinely improve how I build.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">How I Approach a New Tool</h4>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {adaptabilityFlow.map((item, index) => (
                  <React.Fragment key={item.step}>
                    <div className="flex-1 text-center">
                      <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-4 mb-2">
                        <span className="text-blue-800 dark:text-blue-200 font-bold">{item.step}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                    {index < adaptabilityFlow.length - 1 && (
                      <div className="text-blue-400 dark:text-blue-500 text-2xl hidden md:block">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-200 text-center font-medium">
                I do not automatically adopt every new technology. I first try to understand what problem it solves, how it works, where it adds value, what trade-offs it introduces, and whether it improves development speed, maintainability, or quality.
              </p>
            </div>
          </div>
        </div>

        {/* AI Safety & Reliability */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">AI Safety & Reliability</h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              AI-generated output is a starting point, not an automatic source of truth. I review generated code, test output, check edge cases, validate APIs, verify assumptions, and avoid blindly copying generated code.
            </p>
          </div>
        </div>

        {/* AI in Real Projects */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">AI in Real Projects</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Aviora</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  AI-assisted workflow supports solution exploration, implementation assistance, debugging, refactoring, and iteration. I understand the implementation, review generated code, adapt it to the architecture, validate behavior, test important flows, and retain product and engineering ownership.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Agent Evidence</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  AI Agent Payment Security Lab - explores AI-agent payment security through AI agents, transaction workflows, payment-risk scenarios, evidence, findings, attack scenarios, validation, and predictable system behavior.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-900 dark:to-blue-700 rounded-2xl shadow-lg p-8 lg:p-12 text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">The Complete Picture</h3>
            <p className="text-xl text-center font-semibold mb-4">
              Strong fundamentals. Modern tools. Continuous adaptation. Human engineering ownership.
            </p>
            <p className="text-center text-blue-100">
              I started with traditional software-development fundamentals, expanded through professional experience and self-learning, adapted to modern frontend and full-stack development, and now actively incorporate AI-assisted tools into my engineering workflow. AI is not the beginning of my engineering story — it is the newest layer in an ongoing pattern of learning, adapting, building, validating, and improving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernEngineering;