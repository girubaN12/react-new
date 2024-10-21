import React from 'react';
import profileImage from '../assets/profile.jpeg';
import { FaUser, FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

const MainFrame = () => {
  return (
    <div className="mainframe">
      <div className="profile">
        <img 
          src={profileImage}
          alt="Profile" 
          className="profile-image"
        />
        
        <div className="contact-info">
        <h2>Full Stack Devoloper</h2>
          <h3>Girubanithi D</h3>
         <p>contact: +918072731129</p>         
          <p>Email: girubagyan1219@gmail.com</p>
          <div className="social-media">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MainFrame;
