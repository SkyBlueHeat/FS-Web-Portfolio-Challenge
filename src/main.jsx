// main.jsx
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import EngineeringCaseStudies from './components/EngineeringCaseStudies';
import J1Section from './components/J1Section';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <FeaturedProjects />
      <Experience />
      <Skills />
      <EngineeringCaseStudies />
      <J1Section />
      <Footer />
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
