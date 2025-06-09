import React, { useState } from 'react';
import './Projects.css';

import img1 from '../assets/Image1-project.jpg';
import img2 from '../assets/Image2-project.jpg';
import img3 from '../assets/Image3-project.jpg';
import img4 from '../assets/Image1-project.jpg';
import img5 from '../assets/Image2-project.jpg';
import img6 from '../assets/Image3-project.jpg';
import img7 from '../assets/Image1-project.jpg';
import img8 from '../assets/Image2-project.jpg';

const images = [
  { src: img1, title: "Myntra Warehouse on Soukya Road (2015)", area: "Leasable Area: 2 Lac Sq. Ft" },
  { src: img2, title: "Myntra Warehouse on Soukya Road (2015)", area: "Leasable Area: 2 Lac Sq. Ft" },
  { src: img3, title: "Myntra Warehouse on Soukya Road (2015)", area: "Leasable Area: 2 Lac Sq. Ft" },
  { src: img4, title: "Myntra Warehouse on Soukya Road (2015)", area: "Leasable Area: 2 Lac Sq. Ft" },
  { src: img5, title: "Myntra Warehouse on Soukya Road (2015)", area: "Leasable Area: 2 Lac Sq. Ft" },
  { src: img6, title: "Myntra Warehouse on Soukya Road (2015)", area: "Leasable Area: 2 Lac Sq. Ft" },
  { src: img7, title: "Myntra Warehouse on Soukya Road (2015)", area: "Leasable Area: 2 Lac Sq. Ft" },
  { src: img8, title: "Myntra Warehouse on Soukya Road (2015)", area: "Leasable Area: 2 Lac Sq. Ft" },
];

const ProjectCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <h1 className='project-t'>Completed <span className='project-span'>Projects</span> </h1>
        <p className='project-Description'><b>At Arc Constructions, we take pride in our diverse portfolio of successfully completed projects. Each venture showcases our commitment to quality, innovation, and client satisfaction. Explore our past projects to witness the excellence we bring to every development.
          </b></p>
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * (100 / 2.5)}%)` }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`carousel-slide ${idx === index ? "highlight" : ""}`}
            >
              <img src={img.src} alt={`Project ${idx}`} className="carousel-img" />
              <div className="project-info">
                <div className="project-title">{img.title}</div>
                <div className="project-area">{img.area}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-footer">
        <button className="view-all-btn">View All Property</button>
        <div className="carousel-controls">
          <button onClick={prevSlide} disabled={index === 0} className="carousel-button">←</button>
          <div className="slide-indicator">{index + 1}/8</div>
          <button onClick={nextSlide} disabled={index >= images.length - 1} className="carousel-button">→</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
