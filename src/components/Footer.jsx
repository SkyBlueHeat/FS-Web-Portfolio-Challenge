import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';
import en from '../data/en.json';
import tr from '../data/tr.json';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);  
  const translations = language === "en" ? en : tr;

  return (
    <div className={`flex justify-around gap-96 items-center h-96 px-12 border-t ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50 '}`}>
      <div className="space-y-4">
        <h1 className={`text-4xl w-3/4 font-semibold mb-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {translations.fotterTitle}
        </h1>
        <p className="text-red-600 flex items-center gap-2">
          <span className="text-yellow-400 text-xl">👉</span>
          <a
            href="mailto:almilasucode@gmail.com"
            className={`underline text-2xl ${theme === 'dark' ? 'text-red-500' : 'text-red-500'}`}
          >
            br.aydin@hotmail.com
          </a>
        </p>
      </div>
    
      <div className="flex gap-6 sm:-ml-72">
  <a href="#" className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Personal Blog</a>
  <a href="#" className={`text-xl ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Github</a>
  <a href="#" className={`text-xl ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Linkedin</a>
</div>
    </div>
  );
};

export default Footer;
