import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import SectionTitle from './SectionTitle';
import projects from '../assets/data/projects';
import ProjectItem from './ProjectItem';
import styled from 'styled-components';
import 'swiper/swiper-bundle.min.css';
import ProjectItemPopup from './ProjectItemPopup';

SwiperCore.use([Navigation]);

const ProjectSectionStyles = styled.div`
  padding: 10rem 0;
  position: relative;
  /* height: 100%;
  min-height: 500px; */
  .projects-all-items {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects-all-items {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .project-item-img {
        width: 100%;
      }
    }
  }
`;

function ProjectsSection(props) {

  let [name, setName] = useState('name');
  let [toggle, setToggle] = useState(null);


  const getPopupByName = (_title, toggle) => {
    setName(_title)
    setToggle(toggle)
  }

  return (
    <ProjectSectionStyles id="projects">
      <div className="container">
        <ProjectItemPopup getPopupByName={getPopupByName} trigger={toggle} name={name} />
        <SectionTitle heading='Projects' subHeading="some of my recent projects" />
        <div className="projects-all-items">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={
              {
                //window width is >= 640
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                }
              }
            }
          >
            {projects.map((project, i) => {
              if (i >= 4) return;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    id={project.id}
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                    live={project.liveURL}
                    github={project.github}
                    getPopupByName={getPopupByName}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyles>
  )
}

export default ProjectsSection