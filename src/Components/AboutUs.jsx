import React from 'react';
import AboutImg1 from '../assets/About1.png';
import AboutImg2 from '../assets/About2.png';
import AboutImg3 from '../assets/About3.png';
import AboutImg4 from '../assets/About4.png';
import './AboutUs.css'
import Vector from '../assets/Vector.png'

const AboutUs = () => {
  const handleKnowMore = () => alert("Know more clicked");

  return (
    <div className="about-container">
      <div className="about-left">
        <p className="about-t">About us</p>
        <h2 className="about-head">Building dreams,<br />brick by brick, since the 1960s</h2>
        <p className="about-des">
          Since the 1960s, we've been building in Bengaluru, starting with<br/> handmade bricks and tiles.
          Today, we construct everything from cosy<b/> homes to busy business centres using steel and glass.
          We're a dedicated<b/> and family-oriented team, using the latest tools while staying true to our<b/> roots.
        </p>
        
        <div className="about-knowmore-button" onClick={handleKnowMore}>
          <span className="about-knowmore-text">Know more</span>
        <img src={Vector} alt="Arrow" className="arrow-icon" />
        </div>
      </div>

      <div className="about-right">
        <span>
        <img src={AboutImg1} alt="About 1" className="about-img1" />
        <img src={AboutImg2} alt="About 2" className="about-img2" />
        <img src={AboutImg3} alt="About 3" className="about-img3" />
        <img src={AboutImg4} alt="About 4" className="about-img4" />
        </span>
      </div>



    </div>
  );
};

export default AboutUs;
