import React from 'react';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import PText from './PText';

function HeroSection(props) {
  return (
    <div>
      <div className="container">
        <h1 className="hero-heading">
          <span>Hello, This is</span>
          <span>Yarin Ordman</span>
        </h1>
        <div className="hero-image">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero-info">
          <PText>
            Im A Junior web developer with a lot of passion and thirst to
            observe every piece of knowledge and experience I can.
          </PText>
          <Button btnLink="/projects" btnText="See my works" outline={false} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
