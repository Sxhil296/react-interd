import React from 'react'
import AboutHero from '../components/AboutHero'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import WeDesign from '../components/WeDesign'

const About = () => {
  return (
    <div>
        <Navbar />
        <AboutHero />
        <WeDesign />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default About