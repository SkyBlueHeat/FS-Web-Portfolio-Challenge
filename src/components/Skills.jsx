import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';  // ThemeContext'i içeri aktarıyoruz
import { LanguageContext } from '../context/LanguageContext';  // LanguageContext'i içeri aktarıyoruz
import en from '../data/en.json';  // İngilizce çeviri verisi
import tr from '../data/tr.json';  // Türkçe çeviri verisi

const Skills = () => {
  // Context'leri kullanarak theme ve language değerlerine erişiyoruz
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  // Dilin seçili olup olmadığına göre doğru çeviriyi seçiyoruz
  const translations = language === 'en' ? en : tr;

  return (
    <div className={`py-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold mb-12 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{translations.skills}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="md:text-left">
            <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-800'}`}>JavaScript</h3>
            <p className={`text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{translations.react}</p>
          </div>
          <div className="md:text-left">
            <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-800'}`}>React.js</h3>
            <p className={`text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{translations.redux}</p>
          </div>
          <div className="md:text-left">
            <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-800'}`}>Node.js</h3>
            <p className={`text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{translations.axios}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
