import React from 'react'
import '../styles/About.css'
import Image from '../Assets/logo.png'
const About = () => {
  return (
    <div className='HeroSection'>
      <div className='AboutSection'>
         <div className='ImageSection'>
             <img src={Image} alt="Image" />
         </div>
           <p className='AboutMe'>Hi! I'm Amrit Adhikari, from Pokhara. I just graduated with a Bachelor's in Software Engineering
            from Pokhara University in 2023. I'm super excited to start building cool things using code, from
             elegant websites to innovative solutions. Whether it's learning something new or working with a team, 
              I'm always ready to dive in and make a difference!</p>
      </div>
    </div>
  
  )
}

export default About