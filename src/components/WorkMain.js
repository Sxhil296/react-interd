import React from 'react'
import './WorkMainStyles.css'
import work1 from '../assets/work1.webp'
import work2 from '../assets/work3.webp'
import work3 from '../assets/work4.webp'
import work4 from '../assets/work5.webp'
import work5 from '../assets/work6.webp'
import work6 from '../assets/work2.webp'

const WorkMain = () => {
  return (
<div>
<div className="main-work-text">
    <h2>Our Work</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, maxime amet ratione quasi recusandae voluptatum.</p>
   </div>
    <div class="container-fluid img-container">
    <div class="row imagetiles">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 hoverwrap">
            <img src={work1} class="img-responsive" alt='work-img' />
            <div className='hovercap'>
        <h1>Residential Design</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, autem.</p>
      </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 hoverwrap">
            <img src={work2} class="img-responsive" alt='work-img' />
            <div className='hovercap'>
        <h1>Residential Design</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, autem.</p>
      </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 hoverwrap">
            <img src={work3} class="img-responsive" alt='work-img' />
            <div className='hovercap'>
        <h1>Residential Design</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, autem.</p>
      </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 hoverwrap">
            <img src={work4} class="img-responsive" alt='work-img' />
            <div className='hovercap'>
        <h1>Residential Design</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, autem.</p>
      </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 hoverwrap">
            <img src={work5} class="img-responsive" alt='work-img' />
            <div className='hovercap'>
        <h1>Residential Design</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, autem.</p>
      </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 hoverwrap">
            <img src={work6} class="img-responsive" alt='work-img' />
            <div className='hovercap'>
        <h1>Residential Design</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, autem.</p>
      </div>
        </div>
    </div>
    </div>
</div>
  )
}

export default WorkMain