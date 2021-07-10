import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';
import Button from './Button';

const ProjectItemStyles = styled.div`
  .project-item-img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .project-item-info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .project-item-title {
    font-size: 2.2rem;
  }
  .project-item-desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .project-links {
    display: flex;
    gap: 2rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
        font-size: 1.3rem;
      }
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, officia.',
  live = '#',
  github = '#'
}) {
  return (
    <ProjectItemStyles>
      <a href={live} className='project-item-img'>
        <img src={img} alt="project img" />
      </a>
      <div className="project-item-info">
        <a href={live}>
          <h3 className='project-item-title'>
            {title}
          </h3>
        </a>
        <p className='project-item-desc'>
          {desc}
        </p>
        <div className="project-links">
          <a href={live}>
            <Button btnText="Live" />
          </a>
            <Button btnText="GitHub" outline>
            <a href={github}></a>
              </Button>
        </div>
      </div>
    </ProjectItemStyles>
  )
}

export default ProjectItem