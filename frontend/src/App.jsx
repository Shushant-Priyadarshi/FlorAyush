import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GetStarted from './components/GetStarted'; // Import GetStarted component
import Website from './components/Website'; // Import Website component
import Login from './components/login/Login'; // Import Login component
import Signup from './components/login/Signup'; // Import Signup component
import About from './components/About';
import Explore from './components/Explore';
import Order from './components/Order';
// import Dashboard from './components/Mentors';
import Metaverse from './components/Metaverse';
import Ourteam from './components/Ourteam';
import MentorList from './components/Mentors';
function App() {
  // Initialize flag from localStorage or default to 0
  const [flag, setFlag] = useState(() => {
    const storedFlag = localStorage.getItem('flag');
    return storedFlag !== null ? parseInt(storedFlag, 10) : 0;
  });

  const [data, setData] = useState(null);

  useEffect(() => {
    // Fake backend route
    const originalFetch = window.fetch;
    window.fetch = (url, options) => {
      if (url === '/update-users') {
        console.log('Updated Users: ', JSON.parse(options.body));
        return Promise.resolve({ ok: true });
      }
      return originalFetch(url, options);
    };

    return () => {
      window.fetch = originalFetch; // Cleanup the override
    };
  }, []);

  // Fetch data for the app
  useEffect(() => {
    fetch('http://localhost:5000/route')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to update flag to 1 and store it in localStorage
  const handleGetStarted = () => {
    setFlag(1);  // Set flag to 1 in state
    localStorage.setItem('flag', 1);  // Persist flag in localStorage
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Conditionally render GetStarted or Website based on the flag */}
        <Route 
  path="/" 
  element={flag === 0 ? <GetStarted handleGetStarted={handleGetStarted} /> : <Website />} 
/>


        {/* Route to Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Route to Signup Page */}
        <Route path="/signup" element={<Signup />} />

        {/* Other routes */}
        <Route path="/about-us" element={<About />} />
        <Route path="/explore-plants" element={<Explore />} />
        <Route path="/order-plants" element={<Order />} />
        {/* <Route path="/mentors" element={<Dashboard />} /> */}
        <Route path="/metaverse" element={<Metaverse />} />
        <Route path="/our-team" element={<Ourteam />} />
        <Route path="/mentors" element={<MentorList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
