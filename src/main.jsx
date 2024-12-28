import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import NavBar from './components/NavBar'
// import Hero from './components/Hero'
import './App.css'
import './index.css';
import React from 'react';
// import Header from './components/NavBar';
import Skills from './components/Skills';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Profile from './components/Profile'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <NavBar />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>, 
)
