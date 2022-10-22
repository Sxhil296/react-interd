import React from 'react'
import { Link } from 'react-router-dom'
import work1 from '../assets/services1.webp'
import work2 from '../assets/services2.webp'
import work3 from '../assets/services3.webp'
import './WhatWeDoStyles.css'


const WhatWeDo = () => {
  return (
    <div  className='container-fluid whatWeDo'>
        <div>
            <h1 className='work-heading'>What We Do?</h1>
            <p className='work-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi debitis recusandae quia veritatis molestiae consequuntur.</p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src={work1} className="card-img-top card-img" alt="..."/>
      <div className="card-body">
        <Link to='/whatwedopage1'><h5 className="card-title">Starts the automated process.</h5></Link>
        <p className="card-text">The automated process starts as soon as your clothes go into the machine.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={work2} className="card-img-top card-img" alt="..." />
      <div className="card-body">
        <Link to='/whatwedopage1'><h5 className="card-title">Starts the automated process.</h5></Link>
        <p className="card-text">The automated process starts as soon as your clothes go into the machine.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={work3} className="card-img-top card-img" alt="..." />
      <div className="card-body">
        <Link to='/whatwedopage1'><h5 className="card-title">Starts the automated process.</h5></Link>
        <p className="card-text">The automated process starts as soon as your clothes go into the machine.</p>
      </div>
    </div>
  </div>
</div>
<br />

    </div>
  )
}

export default WhatWeDo