import React from 'react'
import './skills.css'
import websitedesign from '../../assets/websitedesign.png'
import skill1 from '../../assets/skill1.png'

const skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle">What I do?</span>
      <span className="skillDesc"></span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={websitedesign} alt="website-design" className='skillBarImg'/>
          <div className="skillBarTest">
            <h2>Website Design</h2>
            <p>This is the demo text,enter your text</p>
          </div>
          <img src={skill1} alt="reactjs" className='skillBarImg'/>
          <div className="skillBarTest">
            <h2>ReactJS</h2>
            <p>This is the demo text,enter your text</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills
