import React, { useEffect, useState } from 'react';
import { aboutData, contactData, footerData, heroData, projectsData } from '../data';

import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import { PortfolioProvider } from '../context/context';
import Projects from './Projects/Projects';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
