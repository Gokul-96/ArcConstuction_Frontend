import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className='service-container'>
      <h1 className='service-t'>Our Services</h1>

      <p className='service-d'>
        <b>Arc Constructions offers a helping hand to businesses and individuals alike, turning visions into thriving spaces.</b>
      </p>

    <div className="service-links-row">
  <span className='residential-box'>
    <a href="#Residential" className="residential-link">Residential</a>
  </span>
  <span className='construction-box'>
    <a href="#construction" className="construction-link">Construction</a>
  </span>
</div>

      <div className="service-cards">
        <div className="service-card">
          <img src="../assets/forest.png" alt="Land Banking" className="service-image" />
          <div className="service-card-title">Land Banking</div>
     
        </div>

        <div className="service-card">
          <img src="../assets/factory.png" alt="Industrial Parks" className="service-image" />
          <div className="service-card-title">Industrial Parks</div>
        
        </div>

        <div className="service-card">
          <img src="../assets/briefcase (2).png" alt="Business Parks" className="service-image" />
          <div className="service-card-title">Business Parks</div>
       
        </div>

        <div className="service-card">
          <img src="../assets/housing-area.png" alt="Residential Spaces" className="service-image" />
          <div className="service-card-title">Residential Spaces</div>
         
        </div>
      </div>
    </div>
  );
};

export default Services;
