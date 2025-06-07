import React from 'react';
import HomeImage from '../assets/HomeImage.jpg'
import Vector from '../assets/Vector.png'
import './HomeComponent.css'
const HomeComponent = () => {

    const handleKnowMoreClick = () => {
    alert('Know more clicked');
  };
return (
    <div>
        <img src={HomeImage} alt="HomeImage" className='home-image'/>

{/* Text */}
     
         <h1 className="home-text">A gateway to your future</h1>

      <div className="know-more-button" onClick={handleKnowMoreClick}>
        <span className="know-more-text">Know more</span>
        <img src={Vector} alt="Arrow" className="arrow-icon" />
      </div>
    </div>
    
    
  )
}

export default HomeComponent