import React from 'react'
import './FooterStyles.css'
import footerImg from '../assets/footer.jpg'
import logo from '../assets/logo1.png'
import { Link } from 'react-router-dom'
import {FaPhone} from 'react-icons/fa'
import {BsFacebook, BsTwitter, BsPinterest} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-main'>
    <div className="discuss-section">
    <h1 className='discuss-heading'>Let's discuss about your interior</h1>
         <p className='discuss-para'>Even the all-powerful Pointing has no control about the
             blindtexts it is an almost unorthographic.</p>
             <Link to='/contact'><button className='btnn contact-btn2'>Contact Us</button></Link>
             <button className='btnn number-btn2'><FaPhone /> +91 7878787878</button>
    </div>
     <img src={footerImg} alt="pots" className='footer-img' />
  
   <div className='footer-blue'>

<div className="boxes">
        <div className="leftbox">
        <div className='box-text'>
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
          
        <div className="middlebox">
            <h2 className='box-text'>Our solutions</h2>
           <ul>
            <Link to='/'><li>Lorem, ipsum.</li></Link>
            <Link to='/'><li>Lorem, ipsum.</li></Link>
            <Link to='/'><li>Lorem, ipsum.</li></Link>
            <Link to='/'><li>Lorem, ipsum.</li></Link>
            <Link to='/'><li>Lorem, ipsum.</li></Link>
           </ul>
        </div>
        <div className="thirdbox">
            <h2 className='box-text'>Company</h2>
            <ul>
                <Link to='/about'><li>About</li></Link>
                <Link to='/'><li>Lorem, ipsum.</li></Link>
                <Link to='/'><li>Lorem, ipsum.</li></Link>
                <Link to='/'><li>Lorem, ipsum.</li></Link>
                <Link to='/'><li>Lorem, ipsum.</li></Link>
               </ul>
        </div>
        <div className="rightbox">
            <h2 className='box-text'>Contact Us</h2>
            <ul>
                <Link to='/contact'><li>interd@gmail.com</li></Link>
                <Link to='/contact'><li>New Delhi, India</li></Link>
                <Link to='/contact'><li className='mobile'>(+91 78787878787)</li></Link>
            </ul>
        </div>
    </div>
   </div>
    </div>
    <p className='copyright-text'> Copyright &copy; 2022 | Devopskey</p>
 </div>
  )
}

export default Footer