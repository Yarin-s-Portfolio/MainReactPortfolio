import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProjectsInfo from '../assets/data/projects';
import PText from './PText';
import SectionTitle from './SectionTitle';
import { RiCheckboxCircleFill } from 'react-icons/ri'


const PopupStyles = styled.div`
  z-index: 99999;
  background-color: var(--gray-1);
  position: fixed;
  top: 50%;
  left: auto;
  right: 5%;
  width: 90vw;
  height: 90vh;
  display: ${props => props.trigger ? 'flex' : 'none'};
  color: var(--white);
  justify-content: center;
  align-items: center;
  border-radius: 8px;
    
  .popupContent {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    text-align: center;
    width: 80%;
    height: 80%;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 8px;
    position: relative;
    .heading {
      text-align: center;
    }
    .description {
      margin-top: 2rem;
      display: flex;
      justify-content: flex-start;
      .left {
        flex: 3;
        text-align: center;
        .para {
          margin: 0 auto;
        }
      }
      .right {
        flex: 1;
        text-align: start;
        font-size: 1rem;
        svg {
          width: 1.5rem;
        }
        .ul {
          .li {
          }
        }
        .para {
          margin: 0;
          line-height: 4rem;
        }
      }
    }
    .right::before {
    position: absolute;
    content: '';
    width: 2px;
    height: 60%;
    background-color: var(--gray-1);
    right: 30%;
    top: 55%;
    transform: translate(-50%, -50%);
    }
  }

  .popupClose {
      position: absolute;
      font-size: 3rem;
      top: 5px;
      right: 15px;
      cursor: pointer;
  }
`;

function ProjectItemPopup({ trigger, name, getPopupByName }) {
  let [toggle, setToggle] = useState(trigger);
  console.log(trigger);
  console.log(toggle);
  let [project, setProject] = useState(ProjectsInfo);

  useEffect(() => {
    setToggle(trigger);
  }, [trigger])

  useEffect(() => {
    getProject();
    console.log(project);
  }, [name])

  const getProject = () => {
    setProject(() => (
      ProjectsInfo.filter(item => (
        item.name.toLowerCase().match(name.toLowerCase())
      ))
    ))
  }

  return (
    <PopupStyles trigger={toggle} className="popupWrapper">
      {project.map(item => (
        <div className="popupContent" key={item.id}>
          <div onClick={() => getPopupByName(item.name, false)} className="popupClose">X</div>
          <div className="heading">
            <SectionTitle heading={item.name} subHeading="About" />
          </div>
          <div className="description">
            <div className="left">
              <PText>{item.fullDesc}</PText>
            </div>
            <div className="right">
              <PText>
                <ul>
                  {item.usedLanguage?.map((item, i) => (
                    <li key={i}><RiCheckboxCircleFill /> {item}</li>
                  ))}
                </ul>
              </PText>
            </div>
          </div>
        </div>
      ))}
    </PopupStyles>
  )
}

export default ProjectItemPopup