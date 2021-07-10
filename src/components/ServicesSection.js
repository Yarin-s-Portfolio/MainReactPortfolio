import React from 'react';
import { MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services-all-items {
    display: flex;
    gap: 10rem;
    /* align-items: center; */
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services-all-items {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
    }
}
`;

function ServiceSection(props){
  return(
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subHeading="what I will do for you" />
        <div className="services-all-items">
          <ServicesSectionItem title={'Website Design'}/>
          <ServicesSectionItem icon={<MdCode />} title={'Web Dev'}/>
          <ServicesSectionItem icon={<MdPhonelinkSetup />} title={'App Dev'}/>
        </div>
      </div>
    </ServicesItemStyles> 
  )
}

export default ServiceSection