import React from 'react';
import NavBar from './components/NavBar';
import MainFrame from './components/MainFrame';
import Footer from './components/Footer';
import './App.css'; 
import background from './assets/back-grd.jpg';

const Profile = () => {
  return(
    <div className="Profile" style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      minHeight: '100vh',
    }}>
      <NavBar />
      <MainFrame />
      <Footer />
    </div>
  );
};

export default Profile;