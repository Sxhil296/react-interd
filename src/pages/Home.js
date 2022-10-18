import React from 'react'
import HomeHero from '../components/HomeHero'
import Navbar from '../components/Navbar'
import WeDesign from '../components/WeDesign'
import WhatWeDo from '../components/WhatWeDo'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HomeHero />
        <WhatWeDo />
        <WeDesign />
    </div>
  )
}

export default Home