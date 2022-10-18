import React from 'react'
import './TestimonialsStyles.css'
import quote from '../assets/quote.webp'

const Testimonials = () => {
  return (
<section className="testimonials">
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  
    <div className="carousel-item active  test-text" id=''>
    <span ><img src={quote} alt="" className='quote'/></span>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus officiis totam, eos itaque corporis facere iure aut quisquam laborum?</h2>
    <em>- Robert</em>
    </div>
    
    <div className="carousel-item  test-text" id=''>
    <span ><img src={quote} alt="" className='quote'/></span>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus officiis totam, eos itaque corporis facere iure aut quisquam laborum?</h2>
    <em>- Robert</em>
    </div>
    <div className="carousel-item  test-text" id=''>
    <span ><img src={quote} alt="" className='quote'/></span>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus officiis totam, eos itaque corporis facere iure aut quisquam laborum?</h2>
    <em>- Robert</em>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" id='test-prev' aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" id='test-next' aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section>
  )
}

export default Testimonials