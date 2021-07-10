import React from 'react';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about-sec-img.png';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero-back.jpg';


const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .about-section-left,
  .about-section-right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .about-section-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .about-section-left {
      flex: 4;
    }
    .about-section-right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .about-section-left,
    .about-section-right {
    width: 100%;
    }
    .about-section-right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .about-section-buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

function AboutSection(props) {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="about-section-left">
          <SectionTitle heading="About Me" subHeading="Let me introduce myself" />
          <PText>
            Hi There Everyone! :) <br />
            My name is Yarin Ordman, 24 years old,<br /> living in moshav Adanim, Israel. <br />
            I have passion for everything connected with computers, from hardware and games as a hobby to programming and software professionally.
            I'm open minded and I have thirst for discovering new things and gain more experience.
            I'm a real team player, I know how to handle criticism, listen to the opinion of others and express my own.
            I believe in positive approach for life and waking up with a smile.
          </PText>
          <div className="about-section-buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read More" outline />
          </div>
        </div>
        <div className="about-section-right">
          <img src={HeroImg} alt="about-image" />
        </div>
      </div>
    </AboutSectionStyle>
  )
}

export default AboutSection