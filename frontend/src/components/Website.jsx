import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../navbar';
import Slider from './Plants_slider';
import Mentor from './Mentor_slider';
import { NavLink } from 'react-router-dom';

function Website() {
  return (
    <div style={{ marginTop: "-4.4%" }} className="min-h-screen z-50 bg-gray-900 flex flex-col">
      <Helmet>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <title>FlorAyush</title>
      </Helmet>

      <Navbar mt="mt-15" />
      <section className="text-black body-font colorback reduced-padding">
        <h1 className="text-2xl font-bold text-center flex-grow">Experience Metaverse</h1>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <center>
          <NavLink to="/metaverse">
            <button className="bg-gray-700 text-white hover:bg-black hover:text-indigo-500 flex items-center justify-center text-center p-2 w-34 rounded-lg">
              Enter Metaverse
            </button>
          </NavLink>
        </center>
        <br /><br />
      </section>

      <Slider title={"Ayurvedic Plants & Medicines"} />
      <Mentor title={"Mentors"} />
    </div>
  );
}

export default Website;
