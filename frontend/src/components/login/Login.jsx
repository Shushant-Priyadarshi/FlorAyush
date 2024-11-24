import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../../navbar';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login successful!');
        navigate('/'); // Navigate to the home page after successful login
      } else {
        setMessage(data.message || 'Login failed.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Helmet>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <title>FlorAyush - Login</title>
      </Helmet>
      <Navbar mt="mt-0" />
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <section className="flex-grow flex items-center justify-center text-gray-400">
          <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center text-white mb-6">Login to your account</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                  className="h-12 border-2 border-gray-600 rounded-full px-4 py-2 text-gray-800 focus:border-gray-500 focus:outline-none"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                  className="h-12 border-2 border-gray-600 rounded-full px-4 py-2 text-gray-800 focus:border-gray-500 focus:outline-none"
                />
              </div>

              <button type="submit" className="w-full bg-black text-white rounded-full py-3 hover:bg-gray-700 focus:outline-none">
                Sign in
              </button>

              {message && <p className="text-white mt-2">{message}</p>}

              <div className="text-center mt-4">
                <p className="text-white">Don't have an account? <a href="/signup" className="text-blue-400 underline">Sign Up</a></p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
