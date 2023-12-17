import React from 'react';
import './Home.css';
import Profile from '/images/profile1.png'

const Home = () => {
  return ( 
    <div className='HeroSection'>
      <div className="home-section">
        <div className="image-section">
          <img src= {Profile} alt="Profile" />
        </div>
        <div className="text-section">
         <p className='Hey'>Hey There,</p>
         <p className='Name'><b> <span style={{color: "#F2F2F2"}}>IT'S ME </span><span style={{color:"#FF5733"}}> AMRIT ADHIKARI </span> </b></p>
         <p className='Iam'>I'm Software Engineer</p>
         <button class="glow-on-hover" type="button">My Resume</button>
         <div>
          <ul>
            <li><a href="https://github.com/Ad-Amrit" target='_blank' className='SocialLinks'>GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/amrit-adhikari-45a538277/" target='_blank' className='SocialLinks'>LinkedIn</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100077310444507" target='_blank' className='SocialLinks'>FaceBook</a></li>
            <li><a href="https://www.instagram.com/__amrit_8__/" target='_blank' className='SocialLinks'></a></li>
            <li></li>
          </ul>
        </div>
       </div>
        </div>

      <div><h1>Tools</h1></div>

    </div>
  );
};

export default Home;
