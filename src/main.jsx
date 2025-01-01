// main.jsx
import React, { useContext, useEffect } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { ThemeProvider, ThemeContext } from './context/ThemeContext'; // ThemeContext'i import ettik
import { LanguageProvider } from './context/LanguageContext';
import Profile from './components/Profile';
import { DataProvider } from './context/Context';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const { theme } = useContext(ThemeContext); // Tema bilgisini al

  // Tema değiştiğinde root seviyesindeki html elementine dark sınıfını ekleyip kaldır
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark'); // 'dark' sınıfını ekle
    } else {
      document.documentElement.classList.remove('dark'); // 'dark' sınıfını kaldır
    }
  }, [theme]); // Tema değiştiğinde tetiklenir

  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <DataProvider>
          <ToastContainer />
          <App />
        </DataProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);
