import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';

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
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

function ProjectItem({
  img= projectImg,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, officia.',
  live='#'
}){
  return(
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
      </div>
    </ProjectItemStyles> 
  )
}

export default ProjectItem