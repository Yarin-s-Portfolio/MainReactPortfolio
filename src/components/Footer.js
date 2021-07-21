import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'


const FooterStyles = styled.div`
    padding-top: 10rem;
    background-color: var(--deep-dark);
    .container {
      display: flex;
      gap: 4rem;
    }
    .footer-col1 {
      flex: 2;
    }
    .footer-col2,
    .footer-col3,
    .footer-col4 {
      flex: 2;
    }
    .footer-col4 {
    }
    .footer-col1-title {
      font-size: 3.3rem;
      margin-bottom: 1rem;
    }
    .copyright {
      background-color: var(--dark-bg);
      text-align: left;
      padding: 1rem 0;
      margin-top: 5rem;
      .para {
        max-width: 700px;
        margin-left: 0;
      }
    }
    @media only screen and (max-width: 768px) {
      padding-top: 0;
      .container {
        flex-direction: column;
        gap: 0rem;
        & > div {
          margin-top: 5rem;
        }
      }
      .footer-col1 .para {
          max-width: 100%;
      }
      .copyright {
        .container {
          div {
            margin-top: 0;
          }
        }
      }
    }
`;

function Footer(props) {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer-col1">
          <h1 className="footer-col1-title">
            Yarin Ordman
          </h1>
          <PText>
            Full-Stack Web Developer
          </PText>
        </div>
        <div className="footer-col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: '#',
                type: 'Link'
              },
              {
                title: "About",
                path: '#about',
                type: 'Link'
              },
              {
                title: "Projects",
                path: '#projects',
                type: 'Link'
              },
              {
                title: "Contact",
                path: '#contact',
                type: 'Link'
              },
            ]}
          />
        </div>
        <div className="footer-col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+972 50-889-6251',
                path: 'tel:+972508896251'
              },
              {
                title: 'YarinWebDev@gmail.com',
                path: 'mailto:yarinwebdev@gmail.com'
              }
            ]}
          />
        </div>
        <div className="footer-col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: <FaFacebook />,
                path: 'https://www.facebook.com/yarin.ordman'
              },
              {
                title: <FaLinkedin />,
                path: 'https://www.linkedin.com/in/yarin-ordman-847a33202',
              },
              {
                title: <FaInstagram />,
                path: 'https://www.instagram.com/yarin_ordman'
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2021 - Yarin Ordman | associated with web cifar tutorial</PText>
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer