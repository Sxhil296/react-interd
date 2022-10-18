import React from 'react'
import ContactFooter from '../components/ContactFooter'
import ContactForm from '../components/ContactForm'
import ContactHero from '../components/ContactHero'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <ContactHero />
        <ContactForm />
        <ContactFooter />
    </div>
  )
}

export default Contact