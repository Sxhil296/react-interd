import React from 'react'
import Footer from '../components/Footer'
import HomeHero from '../components/HomeHero'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import WeDesign from '../components/WeDesign'
import WhatWeDo from '../components/WhatWeDo'
import Work from '../components/Work'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HomeHero />
        <WhatWeDo />
        <WeDesign />
        <Testimonials />
        <Work />
        <Footer />
    </div>
  )
}

export default Home