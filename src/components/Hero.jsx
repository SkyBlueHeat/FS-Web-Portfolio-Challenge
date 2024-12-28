import React, { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import  en  from '../data/en.json';
import  tr  from '../data/tr.json';

const ComponentName = () => {       
    const { language, toggleLanguage } = useContext(LanguageContext);
    const translations = language === "en" ? en : tr;
    return (
        <div className="bg-white">
    <header className="py-4 md:py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
                <div className="flex-shrink-0">
                <div class="flex items-center justify-center w-16 h-16 bg-blue-200 text-blue-800 font-bold text-2xl rounded-full">
  <span class="transform rotate-12">B</span>
</div>

                </div>

                <div className="flex lg:hidden">
                    <button type="button" className="text-gray-900">
                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

               

                <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                    <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> {translations.skills}  </a>

                    <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> {translations.projects} </a>

                    <a href="#" title="" className="px-7 py-2 text-base font-bold leading-7 text-blue-800 transition-all duration-200 bg-white border border-blue-800 rounded-lg hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                        {translations.hireMe}
                    </a>
                </div>
            </div>
        </div>
        
    </header>

    <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
        
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex items-center">
  <div class="h-0.5 bg-blue-800 w-32"></div>
  <p class="ml-4 text-blue-800 text-lg font-medium">Bora Aydın</p>
</div>
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                <div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">{translations.creative}</h1>
                        <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">{translations.bora}</p>

                        
           
                        <div class="flex space-x-4 mt-6">
                            <div >
    <button class="flex items-center bg-white dark:bg-slate-50 border border-blue-900 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        <img class="w-4 mr-2" src="src\assets\github-mark.png" alt="" />
        <span class="text-blue-900 ">{translations.hireMe}</span>
    </button>
    </div>
    <div >
    <button class="flex items-center bg-white dark:bg-slate-50 border border-blue-900 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        <img class="w-4 mr-2" src="src\assets\github-mark.png" alt="" />
        <span class="text-blue-900 ">Github</span>
    </button>
    </div>
    <div >
    <button class="flex items-center bg-white dark:bg-slate-50 border border-blue-900 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        <img class="w-4 mr-2" src="src\assets\LI-In-Bug.png" alt="" />
        <span class="text-blue-900 ">Linkedin</span>
    </button>
    </div>
</div>

                    </div>

                    
                </div>

                <div>
                    <img className="size-6/12 ml-auto rounded-3xl" src="src\assets\Hero-img-2.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
</div>

    )
}
export default ComponentName;