import React from 'react'
import "./navbar.css"
import logo from "../../assets/logo.png"
import contact from "../../assets/contact.png"
import { Link } from 'react-scroll'

const navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="image not available" className='Logo' />
        <div className="desktopmenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} className="desktopmenulistitem">Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} className="desktopmenulistitem">About</Link>
          <Link activeClass='active' to='contacts' spy={true} smooth={true} offset={-100} className="desktopmenulistitem">Portfolio</Link>
        </div>
        <div>
          <button className='desktopmenubtn' onClick={()=>{
            document.getElementById('contacts').scrollIntoView({behaviour: 'smooth'});
          }}>
          <img src={contact} alt="image" className='desktopbtnimage'/>Contact Me
          </button>
        </div>
      </nav>
    </div>
  )
}

export default navbar
