import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactStyles = styled.div`
  padding: 10rem 0;
  .contact-wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contact-wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    width: 100%;
    max-width: 500px;
  }
  @media only screen and (max-width: 768px) {
    .contact-wrapper {
      flex-direction: column;
    }
    .contact-wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

function ContactSection(props) {
  return (
    <ContactStyles>
      <div className="container">
        <SectionTitle heading="Contact" subHeading="Get in touch" />
        <div className="contact-wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+972 50-889-6251" />
            <ContactInfoItem icon={<MdEmail />} text="YarinWebDev@gmail.com" />
            <ContactInfoItem text="Moshav Adanim, 1, Israel" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactStyles>
  )
}

export default ContactSection