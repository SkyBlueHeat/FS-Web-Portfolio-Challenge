import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import  en  from '../data/en.json';
import  tr  from '../data/tr.json';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const translations = language === "en" ? en : tr;

  return (
    <header className={`p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">{translations.portfolio}</h1>
        <div className="flex items-center space-x-4">
          <button class="mr-3.5" onClick={toggleTheme}>
            
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            <input
  class="me-5 mt-[0.3rem] h-6 w-14 appearance-none rounded-[1.4375rem] bg-black/25 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-4.3875rem]  after:h-5 after:w-5 after:rounded-full right-0 after:border-none after:bg-orange-400 after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[-2px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-sky-600 dark:after:bg-surface-dark dark:checked:bg-primary dark:checked:after:bg-primary"
  type="checkbox"
  role="switch"
  id="flexSwitchCheckDefault" />
<label
  class="inline-block ps-[0.15rem] hover:cursor-pointer"
  for="flexSwitchCheckDefault"
  ></label
>
          </button>
          
          <button onClick={toggleLanguage}>
            {language === 'tr' ? 'English' : 'TÜRKÇE’YE GEÇ'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
