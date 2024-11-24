import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

const Navbar = (props) => {
  return (
    <header
      style={{ backgroundColor: '#A2CA71' }}
      className={`text-white w-full bg-black ${props.mt} body-font sticky top-0 z-50 shadow-lg border-b border-gray-700`}
    >
      <div className="container mx-auto flex flex-wrap p-3 md:flex-row items-center navbar-mobile">
        <NavLink to="/" className="flex title-font font-medium items-center text-white mb-1 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1725868904830-165e35d22ae6?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="FC Logo"
            className="w-12 h-12 mr-2 rounded-full"
          />
          <span className="text-xl mt-1 text-center">FlorAyush</span>
        </NavLink>

        {/* Hamburger menu button for small screens */}
        <button
          id="menu-btn"
          className="inline-flex items-center text-white bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded md:hidden ml-auto"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hidden md:flex">
        <NavLink
            to="/"
            className={({ isActive }) =>
              `mr-9 hover:text-indigo-400 ${isActive ? 'text-indigo-500' : 'text-white'}`
          }
            >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `mr-9 hover:text-indigo-400 ${isActive ? 'text-indigo-500' : 'text-white'}`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/order-plants"
            className={({ isActive }) =>
              `mr-9 hover:text-indigo-400 ${isActive ? 'text-indigo-500' : 'text-white'}`
            }
          >
            Order Plants
          </NavLink>
          <NavLink
            to="/explore-plants"
            className={({ isActive }) =>
              `mr-9 hover:text-indigo-400 ${isActive ? 'text-indigo-500' : 'text-white'}`
            }
          >
            Explore Plants
          </NavLink>
          <NavLink
            to="/mentors"
            className={({ isActive }) =>
              `mr-9 hover:text-indigo-400 ${isActive ? 'text-indigo-500' : 'text-white'}`
            }
          >
            Mentors
          </NavLink>
          <NavLink
            to="/our-team"
            className={({ isActive }) =>
              `mr-9 hover:text-indigo-400 ${isActive ? 'text-indigo-500' : 'text-white'}`
            }
          >
            Our Team
          </NavLink>
        </nav>

        <div className="hidden md:flex pr-6">
          <NavLink to="/login" className="hover:text-indigo-400">
            <button className="bg-gray-700 hover:bg-black hover:text-indigo-500 flex items-center justify-center text-center p-2 w-28 rounded-lg">
              Login
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
