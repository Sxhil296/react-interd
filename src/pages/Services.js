import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ServiceHero from '../components/ServiceHero'
import Testimonials from '../components/Testimonials'
import WhatWeDo from '../components/WhatWeDo'

const Services = () => {
  return (
    <div>
        <Navbar />
        <ServiceHero />
        <WhatWeDo />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Services