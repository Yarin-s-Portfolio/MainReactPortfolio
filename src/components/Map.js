import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map.png'

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 700px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map-card {
    position: absolute;
    right: 0;
    top: 50%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map-card-heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map-card-link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
    .map-card {
    }
  }
  @media only screen and (max-width: 400px) {
    .map-card {
      max-width: none;
      right: auto;
    }
  }
`;

function Map(props) {
  return (
    <MapStyles>
      <div className="container">
        <div className="map-card">
          <h3 className="map-card-heading">Here is me</h3>
          <PText>
            Moshav Adanim, 1, Israel
          </PText>
          <a href="https://www.google.co.il/maps/place/1,+Adanim/@32.1354979,34.9009538,17z/data=!4m5!3m4!1s0x151d379eec82e81b:0xba4b2e00f350ee01!8m2!3d32.136311!4d34.902767?hl=en" target="_blank" rel="noreferrer" className="map-card-link">Open In Google Map</a>
        </div>
      </div>
    </MapStyles>
  )
}

export default Map