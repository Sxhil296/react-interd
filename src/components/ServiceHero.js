import React from 'react'
import './ServiceHeroStyles.css'
import serviceHeroImage from '../assets/serviceHero.jpeg'

const ServiceHero = () => {
  return (
    <div className='service-hero'>
    <div className='service-hero-text-bg'>
 </div>
 <div className='service-hero-text'>
      <h1>
          Our Services
      </h1>
      <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  a doloremque quod qui dolorum dignissimos? Laboriosam, placeat?</h4>
  </div>
  <div className='service-hero-img-holder'>
      <img src={serviceHeroImage} alt="heroImg"/>
  </div>
 
</div>
  )
}

export default ServiceHero