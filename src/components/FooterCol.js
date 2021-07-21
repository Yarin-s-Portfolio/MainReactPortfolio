import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

const ColStyles = styled.div`
    text-align: center;
  .heading {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
    svg {
      width: 3rem;
    }
  }
`;

function FooterCol({
  heading = "heading",
  links = [
    {
      type: 'Link',
      title: 'Home',
      path: '/home'
    },
    {
      type: 'Link',
      title: 'About',
      path: '/about'
    },
  ]
}) {
  return (
    <ColStyles>
      <h1 className="heading">{heading}</h1>
      <ul>
        {
          links.map((item, i) => (
            <li key={i}>
              {item.type === 'Link'
                ?
                <Link smooth to={item.path}>{item.title}</Link>
                :
                <a href={item.path} target='_blank' rel='noreferrer'>{item.title}</a>
              }
            </li>
          ))
        }
      </ul>
    </ColStyles>
  )
}

export default FooterCol