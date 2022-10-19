import React from 'react'
import ContactFooter from '../components/ContactFooter'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import PagesHero from '../components/PagesHero'
import ContactHeroImg from '../assets/contactHero.webp'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <PagesHero heading='Contact Us' text='lorem lorem lorem lorem lorem lorem lorem lorem' img={ContactHeroImg}/>
        <ContactForm />
        <ContactFooter />
    </div>
  )
}

export default Contact