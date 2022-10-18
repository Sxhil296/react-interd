import React from 'react'
import './ContactFooterStyles.css'
// import footerImg from '../assets/footer.jpg'
import logo from '../assets/logo1.png'
import { Link } from 'react-router-dom'
// import {FaPhone} from 'react-icons/fa'
import {BsFacebook, BsTwitter, BsPinterest} from 'react-icons/bs'

const ContactFooter = () => {
  return (
<div>
<div className='footer-blue-contact'>

<div className="boxes">
        <div className="leftbox-contact">
        <div className='box-text-contact'>
        <img src={logo} alt="logo-png" />
        <span className='logo-text'>interd.</span>
        </div>
        <p style={{color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nam!</p>
            <div className="socials">
              <Link><span><BsFacebook/></span></Link>
            <Link><span> <BsTwitter/> </span></Link>
            <Link><span><BsPinterest/></span></Link>
            </div>
        </div> 
          
        <div className="middlebox-contact">
            <h2 className='box-text-contact'>Our solutions</h2>
           <ul>
            <Link to='/'><li>Lorem, ipsum.</li></Link>
            <Link to='/'><li>Lorem, ipsum.</li></Link>
            <Link to='/'><li>Lorem, ipsum.</li></Link>
            <Link to='/'><li>Lorem, ipsum.</li></Link>
            <Link to='/'><li>Lorem, ipsum.</li></Link>
           </ul>
        </div>
        <div className="thirdbox-contact">
            <h2 className='box-text-contact'>Company</h2>
            <ul>
                <Link to='/about'><li>About</li></Link>
                <Link to='/'><li>Lorem, ipsum.</li></Link>
                <Link to='/'><li>Lorem, ipsum.</li></Link>
                <Link to='/'><li>Lorem, ipsum.</li></Link>
                <Link to='/'><li>Lorem, ipsum.</li></Link>
               </ul>
        </div>
        <div className="rightbox-contact">
            <h2 className='box-text-contact'>Contact Us</h2>
            <ul>
                <Link to='/contact'><li>interd@gmail.com</li></Link>
                <Link to='/contact'><li>New Delhi, India</li></Link>
                <Link to='/contact'><li className='mobile'>(+91 78787878787)</li></Link>
            </ul>
        </div>
        
    </div>
   </div>
   <p className='copyright-text'> Copyright &copy; 2022 | Devopskey</p>
</div>
  )
}

export default ContactFooter