import React from 'react';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSections';
import ServiceSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';

function Home(props) {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
      <TestimonialsSection />
    </div>
  );
}

export default Home;
