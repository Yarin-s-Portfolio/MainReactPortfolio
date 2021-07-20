import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSections';

function Home(props) {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default Home;
