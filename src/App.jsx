import React from 'react';

// Import Component Files using relative paths
import Navbar from './components/Navbar.jsx';       // Corrected path
import Hero from './components/Hero.jsx';         // Corrected path
import About from './components/About.jsx';       // Corrected path
import Projects from './components/Projects.jsx';   // Corrected path
import Skills from './components/Skills.jsx';     // Corrected path
import Socials from './components/Socials.jsx';     // Corrected path
import Contact from './components/Contact.jsx';     // Corrected path
import Footer from './components/Footer.jsx';       // Corrected path

// Import your global stylesheet
import './assets/style.css'; 

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Socials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;