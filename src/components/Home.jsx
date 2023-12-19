import React from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/Home.css'
import Profile from '../Assets/profile1.png'
import { GitHub, Linkedin, Facebook, Instagram } from 'react-feather' ;

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
          <div className="SocialIcons">
              <a href="https://github.com/Ad-Amrit" target="_blank"> <span><GitHub/></span>
              </a>
              <a href="https://www.linkedin.com/in/amrit-adhikari-45a538277/" target="_blank" > <span><Linkedin/></span> 
              </a>
              <a href="https://www.facebook.com/profile.php?id=100077310444507" target="_blank"> <span><Facebook/></span>
              </a>
              <a href="https://www.instagram.com/__amrit_8__/" target="_blank"><span><Instagram/></span>
              </a>

          </div>
          <button class="glow-on-hover" type="button" onClick={()=>window.open("https://drive.google.com/file/d/1uC2jB8gPbuDSKk6HyJqia8zPPftAER46/view?usp=sharing")}>My Resume</button>
       </div>
     </div>

      {/* <div>
         <h1>Tools</h1>
      </div> */}
    </div>
  );
};

export default Home;
