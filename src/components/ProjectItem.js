import React, { useState } from 'react';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';
import Button from './Button';
import ProjectItemPopup from './ProjectItemPopup';

const ProjectItemStyles = styled.div`
  .project-item-img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    cursor: pointer;
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
  desc = 'Project Description.',
  live = '#',
  github = '#',
  trigger = false,
  getPopupByName
}) {

  // let [toggle, setToggle] = useState(trigger);
  // console.log(toggle);

  return (
    <ProjectItemStyles>
      <div onClick={() => getPopupByName(title, true)} className='project-item-img'>
        <img src={img} alt="project img" />
      </div>
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
          <Button btnLink={live} btnText="Live" href />
          <Button btnLink={github} btnText="GitHub" href outline>
          </Button>
        </div>
      </div>
    </ProjectItemStyles >
  )
}

export default ProjectItem