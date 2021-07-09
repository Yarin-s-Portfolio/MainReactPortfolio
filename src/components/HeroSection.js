import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero-heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero-name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero-img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero-info {
    margin-top: -18rem;
  }
  .hero-social,
  .hero-scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero-social {
    left: 50px;
  }
  .hero-scrollDown {
    right: 50px;
  }
  .hero-social-indicator,
  .hero-scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
  }
`;

function HeroSection(props) {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero-heading">
            <span>Hello, This is</span>
            <span className="hero-name">Yarin Ordman</span>
          </h1>
          <div className="hero-img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero-info">
            <PText>
              Im A Junior web developer with a lot of passion and thirst to
              observe every piece of knowledge and experience I can.
            </PText>
            <Button btnLink="/projects" btnText="See my works" />
          </div>
          <div className="hero-social">
            <div className="hero-social-indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="hero-social-text">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/yarin.ordman/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/yarin_ordman/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/yarin-ordman-847a33202/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero-scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDownArrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

export default HeroSection;
