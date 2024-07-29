// src/components/AnimatedLady.js
import React from 'react';
import logo from './images/logo.gif'
import './splash.css'
const AnimatedLogo = () => {
  return (
    <div className="animated-logo-container">
      <img src={logo} alt="Animated Logo" className="animated-logo" />
    </div>
  );
};

export default AnimatedLogo;
