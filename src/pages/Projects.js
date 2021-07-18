import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/projects';
import { MdSearch } from 'react-icons/md'

const ProjectsStyles = styled.div`
  padding: 10rem 0;
  .projects-all-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
    gap:  5rem;
    margin-top: 5rem;
  }
  .projects-search-bar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
    input {
      width: 100%;
      font-size: 2rem;
      padding: 0.8rem;
      color: var(--black);
      border-radius: 6px;
      outline: none;
      border: none;
    }
    .search-icon {
      position: absolute;
      width: 2rem;
      right: 1rem;
      path {
        color: var(--deep-dark);
      }
    }
  }
   @media only screen and (max-width: 768px) {
      .projects-search-bar,
      .projects-search-bar form,
      .projects-search-bar input {
          width: 100%;
      }
   }
`;

function Projects(props) {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
    if (searchText === '') return;
    setProjectData(() => (
      ProjectInfo.filter(item => (
        item.name.toLowerCase().match(searchText.toLowerCase())
      ))
    ))
  }, [searchText])

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  }

  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle heading="Projects" subHeading="some of my recent works" />
        <div className="projects-search-bar">
          <form>
            <input type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Project Name"
            />
            <MdSearch className="search-icon" />
          </form>
        </div>
        <div className="projects-all-items">
          {projectData.map(item => (
            <ProjectItem key={item.id} title={item.name} desc={item.desc} img={item.img} live={item.liveURL}
              github={item.github} />
          ))}
        </div>
      </div>
    </ProjectsStyles>
  );
}

export default Projects;
