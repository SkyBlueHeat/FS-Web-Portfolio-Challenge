import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import  en  from '../data/en.json';
import  tr  from '../data/tr.json';

const Footer = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const translations = language === "en" ? en : tr;

    return (
      <div class="flex justify-around gap-96 items-center h-96 px-12 bg-gray-50">
      
      <div class="space-y-4">
        <h1 class="text-4xl w-3/4 font-semibold mb-10 text-gray-900">
          {translations.fotterTitle}
        </h1>
        <p class="text-red-600 flex items-center gap-2">
          <span class="text-yellow-400 text-xl">👉</span>
          <a href="mailto:almilasucode@gmail.com" class="underline text-2xl">
            br.aydin@hotmail.com
          </a>
        </p>
      </div>
    
      
      <div class="flex gap-6 sm:-ml-72 text-gray-600">
        <a href="#" class="text-gray-800">Personal Blog</a>
        <a href="#" class="text-green-600">Github</a>
        <a href="#" class="text-blue-600">Linkedin</a>
      </div>
    </div>
    

    );
  };
  
  export default Footer;
  