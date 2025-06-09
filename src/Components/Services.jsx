import React, { useState } from 'react';
import './Services.css';
import Image1 from '../assets/forest.png';
import Factory from '../assets/factory.png';
import Briefcase from '../assets/briefcase.png';
import Housing from '../assets/housing-area.png';

const allServices = [
  { img: Image1, title: "Land Banking", type: "Residential" },
  { img: Factory, title: "Industrial Parks", type: "Construction" },
  { img: Briefcase, title: "Business Parks", type: "Construction" },
  { img: Housing, title: "Residential Spaces", type: "Residential" }
];

const Services = () => {
  const [selected, setSelected] = useState('Residential');

  const filteredServices = allServices.filter(service => service.type === selected);

  return (
    <div className='service-container'>
      <h1 className='service-t'>Our Services</h1>

      <p className='service-d'>
        <b>Arc Constructions offers a helping hand to businesses and individuals alike, turning visions into thriving spaces.</b>
      </p>

      <div className="service-links-row">
        <span className="residential-box">
          <button onClick={() => setSelected('Residential')} className="residential-link">Residential</button>
        </span>
        <span className="construction-box">
          <button onClick={() => setSelected('Construction')} className="construction-link">Construction</button>
        </span>
      </div>

      <div className="service-cards">
        {filteredServices.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} className="service-image" />
            <div className="service-card-title">{service.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
