import React from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/Home.css'
import Profile from '../Assets/profile1.png'

const Home = () => {
  return ( 
    <div className='HeroSection'>
      <div className="home-section">
        <div className="image-section">
          <img src= {Profile} alt="Profile Image" />
        </div>
        <div className="text-section">
         <h1 className='Hey'>Hey There,</h1>
         <p className='Name'><b> <span style={{color: "#F2F2F2"}}>IT'S ME </span><span style={{color:"#FF5733"}}> AMRIT ADHIKARI </span> </b></p>
         <p className='Iam'>I'm {" "} 
         <Typewriter
            options={{
            strings: ['Web Developer', 'React Developer' , 'Software Engineer'],
            autoStart: true,
            loop: true,
           }}
          />
          </p>
         <button class="glow-on-hover" type="button">My Resume</button>
         <div>
          <ul>
            <li><a href="https://github.com/Ad-Amrit" target='_blank' className='SocialLinks'>GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/amrit-adhikari-45a538277/" target='_blank' className='SocialLinks'>LinkedIn</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100077310444507" target='_blank' className='SocialLinks'>FaceBook</a></li>
            <li><a href="https://www.instagram.com/__amrit_8__/" target='_blank' className='SocialLinks'>Instagram</a></li>
          </ul>
        </div>
       </div>
        </div>

      <div><h1>Tools</h1></div>

    </div>
  );
};

export default Home;
