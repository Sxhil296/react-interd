import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import WeDesign from '../components/WeDesign'
import aboutHeroImage from '../assets/aboutHero.webp'
import PagesHero from '../components/PagesHero'

const About = () => {
  return (
    <div>
        <Navbar />
        <PagesHero  heading='About' text='lorem lorem lorem lorem ipsum ipsum ipsum' img={aboutHeroImage}/>
        <WeDesign />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default About