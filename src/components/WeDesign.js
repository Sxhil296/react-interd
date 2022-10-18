import React from 'react'
import { Link } from 'react-router-dom'
import designImg1 from '../assets/aboutbig.webp'
import designImg2 from '../assets/aboutsmall.webp'
import './WeDesignStyles.css'

const WeDesign = () => {
  return (
    <div className='container-fluid'>
        <div className='design'>
  <div className='design-img-holder'>
    <img src={designImg1} alt="lamp pic"/>
  </div>
  <div className='design-text'>
    <h1 className='design-text-heading'> We design with aesthetic sense</h1>
  </div>
 
  <div className='design-para'>
  <p className='design-para-text'>Even the all-powerful Pointing has no control about the blindtexts it is an almost unorthographic. Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.</p>
    <Link to='/work'><button className='btn' id='learn-more-btn'>Learn More</button></Link>
  </div>
  <span className="bar"></span>
  <div className='design-small-img-holder'>
    <img src={designImg2} alt="pic" />
  </div>
</div>

    </div>
  )
}

export default WeDesign