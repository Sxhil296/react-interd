import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaPhone, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'
import logo from '../assets/logomain.webp'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
        const changeColor =() => {
            if(window.scrollY >= 100) {
                setColor(true)
            } else {
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
        <Link to='/'>
        <img src={logo} className='logo' alt="logo png" />
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu' }>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/services'>Services</Link>
            </li>
            <li>
                <Link to='/work'>Work</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>


                {click ? (<FaTimes size={25} style={{color: '#000'}}/>) : (<FaBars size={25} style={{color: '#000'}}/>)}
        </div>
        <div>
            <button className="number-btn btn"><FaPhone /> +91 7878787878</button>
        </div>
    </div>
  )
}

export default Navbar