import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import  en  from '../data/en.json';
import  tr  from '../data/tr.json';


const Skills = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const translations = language === "en" ? en : tr;
  return (
    <div className={`bg-white py-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
  <div class="container mx-auto px-6">
    <h2 class="text-4xl font-bold mb-12">{translations.skills}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class=" md:text-left">
        <h3 class="text-2xl font-semibold text-blue-800 mb-4">Java Script</h3>
        <p class="text-gray-600 text-base">{translations.react}</p>
      </div>
      <div class="md:text-left">
        <h3 class="text-2xl font-semibold text-blue-800 mb-4">React.Js</h3>
        <p class="text-gray-600 text-base">{translations.redux}</p>
      </div>
      <div class=" md:text-left">
        <h3 class="text-2xl font-semibold text-blue-800 mb-4">Node.Js</h3>
        <p class="text-gray-600 text-base">{translations.axios}</p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Skills;
