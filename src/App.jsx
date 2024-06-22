

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSetion from './components/HeroSetion';
import RecentWork from './components/RecentWork';
import EducationCertification from './components/EducationCertification';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('darkMode');
      if (savedTheme !== null) {
        setDarkMode(JSON.parse(savedTheme));
      }
    } catch (error) {
      console.error("Error parsing JSON from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen duration-300 dark:bg-darkBodyColor dark:text-whiteColor">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <HeroSetion/>
        <Skills/>
        <RecentWork/>
        <EducationCertification/>
        <Contact/>
        <Footer/>
        <ScrollUp/>
      </div>
    </div>
  );
}

export default App;
