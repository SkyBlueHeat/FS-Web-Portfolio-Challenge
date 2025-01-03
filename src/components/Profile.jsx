import React, { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import en from '../data/en.json';
import tr from '../data/tr.json';

const Profile = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);
    const translations = language === "en" ? en : tr;

    const profileData = [
        { label: translations.birthDate, value: "18.01.1999" },
        { label: translations.CityofResidence, value: "Ankara" },
        { label: translations.educationalStatus, value: "Ufuk University - Computer Programing" },
        { label: translations.preferredRole, value: "Frontend, UI" },
        { label: translations.hobbies, value: "Playing electric guitar. swimming, extreme sports are interested.(Cross, Downhill skateboarding)" },
    ];

    return (
        <div className={`py-10 lg:py-0 mb-10 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className={`container mx-auto px-6 lg:px-10 lg:grid lg:grid-cols-5 lg:h-full flex flex-col lg:flex-row lg:items-stretch space-y-10 lg:space-y-0 lg:space-x-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          <div className="lg:col-span-3 lg:pl-20 lg:-space-x-24 lg:space-x-2">
            <h2 className={`text-4xl lg:text-5xl font-bold  mb-10  ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Profil
            </h2>
            <div className={`max-w-2xl shadow rounded-lg ${theme === 'dark' ? 'bg-gray-600 text-gray-300' : 'bg-white text-gray-600'}`}>
              <div className="px-4 py-5 sm:px-6">
                <h3 className={`text-2xl lg:text-3xl font-normal ${theme === 'dark' ? 'text-blue-400' : 'text-blue-800'}`}>
                  Profil
                </h3>
              </div>
              <div className={`border-t ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'}`}>
                <dl>
                  {profileData.map((item, index) => (
                    <div key={index} className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${index % 2 === 0 ? (theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50') : ''}`}>
                      <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{item.label}</div>
                      <div className={`mt-1 text-sm ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'} sm:mt-0 sm:col-span-2`}>
                        {item.value}
                      </div>
                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
                <div className={`flex flex-col justify-center px-6 lg:px-10 py-16 mt-20 lg:mt-0 mb-10 lg:mb-0 lg:col-span-2 rounded-xl lg:rounded-none ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    <h1 className="font-semibold text-3xl lg:text-4xl text-blue-800 mb-10 ">{translations.aboutMe}</h1>
                    <p className="text-base lg:text-lg text-justify ">{translations.aboutMeTitle}</p>
                    <p className="text-base lg:text-lg  text-justify mt-6 lg:mt-8">{translations.aboutMeTitlei}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
