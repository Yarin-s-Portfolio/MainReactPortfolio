import React from 'react';
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';
import PaperPlane from '../assets/images/paper-plane.png';

const AboutPageStyles = styled.div`
position: relative;
  .about-info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .paper-plane-img {
    position: absolute;
    right: 15rem;
    img {
      width: 100%;
      max-width: 600px;
    }
  }
  .about-info-items {
    /* margin-top: 15rem; */
  }
  .about-info-item {
    margin-bottom: 10rem;
  }
  .about-info-heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 1200px) {
    .paper-plane-img {
      top: 30rem;
      right: 15rem;
      img {
        width: 100%;
        max-width: 400px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .about-info-items {
      margin-top: 10rem;
    }
    .about-info-heading {
      font-size: 3rem;
    }
    .paper-plane-img {
      top: 50rem;
      right: auto;
      img {
        width: 100%;
        max-width: 400px;
      }
    }
   }
`;

function About(props) {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="paper-plane-img">
          <img src={PaperPlane} alt="paper-plane-img" />
        </div>
        <div className="about-info-items">
          <div className="about-info-item">
            <h1 className="about-info-heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['Yarkon High School', 'Computer Science']}
            />
            <AboutInfoItem
              title="Campus"
              items={['Hacker-U', 'Web Developement']}
            />
          </div>
          <div className="about-info-item">
            <h1 className="about-info-heading">My Skills</h1>
            <AboutInfoItem
              title="Front-End"
              items={['HTML', 'CSS', 'JS', 'React', 'Angular']}
            />
            <AboutInfoItem
              title="Back-End"
              items={['Node.js', 'Express.js']}
            />
            <AboutInfoItem
              title="Databases"
              items={['mySql', 'MongoDb']}
            />
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}

export default About;
