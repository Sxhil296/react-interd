import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import WorkMain from '../components/WorkMain'
import WorkHero from '../components/WorkHero'

const Work = () => {
  return (
    <div>
        <Navbar />
        <WorkHero />
        <WorkMain />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Work