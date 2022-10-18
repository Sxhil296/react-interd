import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero1.webp'
import './HomeHeroStyles.css'

const HomeHero = () => {
  return (
    <div>
       <div className='hero-text-bg'>
    </div>
    <div className='hero-text'>
         <h1>
             Let's Make Your Interior Better
         </h1>
         <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius impedit commodi praesentium, a doloremque quod qui dolorum dignissimos? Laboriosam, placeat?</h4>
         <br />
         <Link to='/services'><button className='btn' id='explore-btn'>Explore Our Services</button></Link>
     </div>
     <div className='hero-img-holder'>
         <img src={heroImage} alt="heroImg"/>
     </div>
    
 </div>
  )
}

export default HomeHero