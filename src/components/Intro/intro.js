import React from 'react'
import './intro.css'
import bg1 from '../../assets/bg1.jpg'
import hireme from '../../assets/hireme.png'
import { Link } from 'react-scroll'

const intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm<span className='introName'> Samriti Raj</span><br/>Web Developer</span>
            <p className="introPara">I'm passionate about creating engaging and interactive web applications,<br/>and this is where I showcase my journey as a front-end developer.</p>
            <Link><button className='btn'><img src={hireme} alt="hireme" className='hire' />Hire me</button></Link>
        </div>

        <img src={bg1} alt="my_image" className='bg'/>
    </section>
  )
}

export default intro
