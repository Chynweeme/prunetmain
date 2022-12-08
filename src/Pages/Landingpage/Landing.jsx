import React from 'react'
import Hero from '../../Components/Hero/Hero.jsx'
import About from '../../Components/About/About.jsx'
import Ourprojects from '../../Components/Ourprojects/Ourprojects.jsx'
import "./Landing.css"
import Ourclients from '../../Components/Ourclients/ourclients.jsx'
import MeetTheTeam from '../../Components/TheTeam/MeetTheTeam.jsx'
import Contact from '../../Components/Contact us/Contact.jsx'


const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <Ourprojects />
      <Ourclients />
      <MeetTheTeam />
      <Contact />
      
    </div>
  )
}

export default Landing
