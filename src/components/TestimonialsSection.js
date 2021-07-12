import React, { useState } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styled from 'styled-components';
import PText from './PText';
import SectionTitle from './SectionTitle';
import testimonials from '../assets/data/testimonials';

const TestimonialsStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .testimonials-wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .testimonials-info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
  }
  .testimonials-desc {
    .para {
      text-align: center;
    }
  }
  .testimonials-name {
    margin-top: 4rem;
    font-family: 'Montserrat Bold';
    font-size: 2.2rem;
  }
  .testimonials-title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  .fade-enter {
    opacity: 0;
    transform: scale(.96);
  }
  .fade-enter-active {
    opacity: 1;
    transition: 250ms ease-in;
    transition-property: opacity, transform;
    transform: scale(1);
  }
  .fade-exit {
    opacity: 1;
    transform: scale(1);
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(.96);
    transition: 250ms ease-in;
    transition-property: opacity, transform;
  }
`;

function TestimonialsSection(props) {

  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonials[activeIndex];

  const handleNext = () => activeIndex >= testimonials.length - 1 ? setActiveIndex(0) : setActiveIndex(activeIndex + 1);
  const handlePrev = () => activeIndex <= 0 ? setActiveIndex(testimonials.length - 1) : setActiveIndex(activeIndex - 1);

  return (
    <TestimonialsStyles>
      <div className="container">
        <SectionTitle heading="Testimonials" subHeading="see what our clients say about us" />
        <div className="testimonials-wrapper">
          <SwitchTransition>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="testimonials-info">
                <div className="testimonials-desc">
                  <PText>{activeSlide.desc}</PText>
                </div>
                <h2 className="testimonials-name">
                  {activeSlide.name}
                </h2>
                <p className="testimonials-title">
                  {activeSlide.title}, {activeSlide.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div onClick={handlePrev} role="button" tabIndex={0} onKeyDown={handlePrev} className="prev">
            <MdArrowBack />
          </div>
          <div onClick={handleNext} role="button" tabIndex={0} onKeyDown={handleNext} className="next">
            <MdArrowForward />
          </div>
        </div>
      </div>
    </TestimonialsStyles>
  )
}

export default TestimonialsSection