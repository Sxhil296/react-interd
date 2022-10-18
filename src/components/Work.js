import React from 'react'
import './WorkStyles.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import work1 from '../assets/work1.webp'
import work2 from '../assets/work3.webp'
import work3 from '../assets/work4.webp'
import work4 from '../assets/work5.webp'
import work5 from '../assets/work6.webp'
import work6 from '../assets/hero1.webp'
import { Link } from 'react-router-dom';

const Work = () => {

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        // dotsEach: true,
        loop: true,
        // dotsEach: 3,
        autoplay: false,
        navText:[
            '<span class="arrow prev">‹</span>',
            '<span class="arrow next">›</span>'
          ],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            // 700: {
            //     items: 3,
            // },
            1000: {
                items: 3,
    
            }
        },
    };

  return (
    <div className='our-work'>
        <div><h1 className="our-work-text">Our Work</h1>
  <p className='our-work-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ullam molestiae blanditiis corrupti similique tenetur.</p></div>
        <OwlCarousel
        className='owl-theme' 
        {...options}
        >
    <div className='item hoverwrap'>
        <img src={work1} alt="pic1" />
        <div className='hovercap'>
        <h1>Residential Design</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, autem.</p>
      </div>
    </div>
    <div className='item hoverwrap'>
    <img src={work2} alt="pic2" />
    <div className='hovercap'>
        <h1>Residential Design</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, autem.</p>
      </div>
    </div>
    <div className='item hoverwrap'>
    <img src={work3} alt="pic3" />
    <div className='hovercap'>
        <h1>Residential Design</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, autem.</p>
      </div>
    </div>
    <div className='item hoverwrap'>
    <img src={work4} alt="pic4" />
    <div className='hovercap'>
        <h1>Residential Design</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, autem.</p>
      </div>
    </div>
    <div className='item hoverwrap'>
    <img src={work5} alt="pic5" />
    <div className='hovercap'>
        <h1>Residential Design</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, autem.</p>
      </div>
    </div>
    <div className='item hoverwrap'>
    <img src={work6} alt="pic6" />
    <div className='hovercap'>
        <h1>Residential Design</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, autem.</p>
      </div>
    </div>
   
</OwlCarousel>
<Link to='/work'><button className='btn work-btn'>More Work</button></Link>
    </div>
  )
}

export default Work