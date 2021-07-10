import React from 'react';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import ServiceSection from '../components/ServicesSection';

function Home(props) {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
    </div>
  );
}

export default Home;
