import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedLogo from './AnimatedLogo';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3500); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <AnimatedLogo />
    </div>
  );
};

export default Splash;
