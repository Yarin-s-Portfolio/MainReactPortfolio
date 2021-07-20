import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
    props.outline ? 'transparent' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? 'var(--gray-1)' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

function Button({ btnLink = '#', btnText = 'Button', outline = false, href = false }) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      {href ?
        <a href={btnLink} className="button" target="_blank">{btnText}</a>
        :
        <Link to={btnLink} smooth className="button">
          {btnText}
        </Link>
      }
    </ButtonStyle>
  );
}

export default Button;
