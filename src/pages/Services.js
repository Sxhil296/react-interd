import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import WhatWeDo from '../components/WhatWeDo'
import serviceHeroImage from '../assets/serviceHero.jpeg'
import PagesHero from '../components/PagesHero'

const Services = () => {
  return (
    <div>
        <Navbar />
        <PagesHero heading='Our Services' text='lorem ipsum lorem ipsum lorem ipsum lorem ipsum' img={serviceHeroImage} />
        <WhatWeDo />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Services