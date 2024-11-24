import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function GetStarted({ handleGetStarted }) {  // Use the correct prop name
  const navigate = useNavigate();

  const handleClick = () => {
    handleGetStarted(); // Set the flag to 1
    navigate('/'); // Navigate to home page
  };

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <title>Get Started to Florayush</title>
      </Helmet>

      <video 
        autoPlay 
        loop 
        muted 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          filter: 'blur(4px)',
          zIndex: '-1'
        }}>
        <source src="src/assets/vidooeoeo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={{ 
        position: 'relative', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
      }}>
        <h1 style={{ 
          fontSize: '4rem', 
          marginBottom: '20px', 
          fontFamily: "'Press Start 2P', cursive"
        }}>
          FlorAyush
        </h1>
        <button 
          style={{
            padding: '15px 30px', 
            fontSize: '1.5rem', 
            cursor: 'pointer', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
          }}
          onClick={handleClick} // Call the correct function
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default GetStarted;
