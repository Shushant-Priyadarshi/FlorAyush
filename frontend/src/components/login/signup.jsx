import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../../navbar';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [usersData, setUsersData] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch users from backend
    fetch('http://localhost:5000/users')
      .then(response => response.json())
      .then(data => setUsersData(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userExists = usersData.find(user => user.email === formData.email);

    if (userExists) {
      setMessage('User already exists.');
      return;
    }

    const newUser = {
      id: usersData.length + 1,
      ...formData,
    };

    // Send new user data to backend
    fetch('http://localhost:5000/update-users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then(() => {
        setMessage('Signup successful!');
        navigate('/');  // Navigate to home after signup success
      })
      .catch(() => setMessage('Signup failed.'));
  };

  return (
    <>
      <Helmet>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <title>FlorAyush - Signup</title>
      </Helmet>
      <Navbar mt="mt-0" />
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <section className="flex-grow flex items-center justify-center text-gray-400">
          <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center text-white mb-6">Create an account</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  required
                  className="h-12 border-2 border-gray-600 rounded-full px-4 py-2 text-gray-800 focus:border-gray-500 focus:outline-none"
                />
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
                Sign up
              </button>

              {message && <p className="text-white mt-2">{message}</p>}
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Signup;
