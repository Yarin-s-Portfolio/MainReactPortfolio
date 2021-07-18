import React from 'react';
import Button from '../components/Button';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';


const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about-subHeading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about-heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about-info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about-info-items {
    margin-top: 15rem;
  }
  .about-info-item {
    margin-bottom: 10rem;
  }
  .about-info-heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about-subHeading {
      font-size: 1.8rem;
    }
    .about-heading {
      font-size: 2.8rem;
    }
    .about-info-heading {
      font-size: 3rem;
    }
   }
`;

function About(props) {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about-subHeading">
              Hi, I am <span>Yarin</span>
            </p>
            <h2 className="about-heading">
              A Web Developer
            </h2>
            <div className="about-info">
              <PText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iure exercitationem doloribus autem dolore possimus minus perspiciatis inventore quis maiores!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iste corrupti exercitationem sed suscipit minima omnis ad, similique eveniet, velit id sint quidem? Eaque, tenetur! Labore officiis distinctio voluptatem ab?
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iste corrupti exercitationem sed suscipit minima omnis ad.
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="about-img" />
          </div>
        </div>
        <div className="about-info-items">
          <div className="about-info-item">
            <h1 className="about-info-heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['Yarkon High School','Computer Science']}
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
              items={['Node.js', 'Express.js', 'MongoDb']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}

export default About;
