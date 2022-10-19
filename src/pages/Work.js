import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import WorkMain from '../components/WorkMain'
import PagesHero from '../components/PagesHero'
import workHeroImg from '../assets/workHero.webp'

const Work = () => {
  return (
    <div>
        <Navbar />
        <PagesHero heading='Work' text='lorem lorem ipsum ipsum lorem lorem ipsum' img={workHeroImg}/>
        <WorkMain />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Work