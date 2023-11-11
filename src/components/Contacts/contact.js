import React from 'react'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import './contact.css'


const contact = () => {
  return (
    <div id='contacts'>
        <h1 className="contactPageTitle">Contact Us</h1>
        <span className="contactDesc">Please fill out the form to discuss any work opportunities.</span>
        <form className="contactForm">
            <input type="text" className="name" placeholder='Your Name'/>
            <input type="email" className="email" placeholder='Your email'/>
            <textarea className='msg'name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='send' className='submitBtn'>Submit</button>
            <div className="Links">
                <img src={instagram} alt="instagram" className="link" />
                <img src={facebook} alt="facebook" className="link" />
                <img src={twitter} alt="twitter" className="link" />
                <img src={youtube} alt="youtube" className="link" />
            </div>
        </form>
      
    </div>
  )
}

export default contact
