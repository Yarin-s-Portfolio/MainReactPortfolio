import React, { useState } from 'react';
import styled from 'styled-components';


const PopupStyles = styled.div`
  .popupWrapper {
      background-color: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: ${props => props.isClicked ? 'block' : 'none'};
      color: var(--grasy-1);
    }
    
    .popup {
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
      text-align: center;
      width: 100%;
      max-width: 300px;
      margin: 10% auto;
      padding: 20px;
      background-color: var(--deep-dark);
      position: relative;
  }

  .popupClose {
      position: absolute;
      top: 5px;
      right: 8px;
      cursor: pointer;
  }
`;

function ProjectItemPopup({ isClicked = false }) {

  let [toggle, setToggle] = useState(isClicked);

  return (
    <PopupStyles isClicked={toggle}>
      <div className="container">
        <div className="popupWrapper">
          <div className="popup">
            <div onClick={() => setToggle(!toggle)} className="popupClose">X</div>
            <div className="popupContent">
              sss
            </div>
          </div>
        </div>
      </div>
    </PopupStyles>
  )
}

export default ProjectItemPopup