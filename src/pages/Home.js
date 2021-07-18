import React from 'react';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSections';
import Contact from './Contact';

function Home(props) {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Contact />
    </div>
  );
}

export default Home;
