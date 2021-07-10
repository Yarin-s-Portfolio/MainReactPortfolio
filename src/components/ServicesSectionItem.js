import React from 'react';
import { MdDesktopWindows } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  .services-item-icon {
    svg {
     width: 3rem;
    }
  }
  .services-item-title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

function ServicesSectionItem({
  icon = <MdDesktopWindows />,
  title = 'Web Design',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eum?'
}) {
  return (
    <ItemStyles>
      <div className="services-item-icon">
        {icon}
      </div>
      <div className="services-item-title">
        {title}
      </div>
      <PText>
        {desc}
      </PText>
    </ItemStyles>
  )
}

export default ServicesSectionItem