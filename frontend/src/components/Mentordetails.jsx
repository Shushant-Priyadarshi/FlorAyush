import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../navbar';
 // Ensure the correct path to the Navbar component

const MentorDetails = ({ mentor, setSelectedMentor }) => {
  return (
    <div className="min-h-screen bg-green-50">
      <Helmet>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <title>FlorAyush-Mentor Details</title>
        <link rel="icon" href="https://images.unsplash.com/photo-1725868904830-165e35d22ae6?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </Helmet>
      <Navbar />
      <div className="container mx-auto p-5">
        <button
          onClick={() => setSelectedMentor(null)}
          className="text-green-600 underline mb-4"
        >
          Back to Mentor List
        </button>

        <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col md:flex-row">
          {/* Details Section */}
          <div className="w-full md:w-2/3 pr-5">
            <h2 className="text-3xl font-bold text-green-600 mb-2">{mentor.name}</h2>
            <p className="text-xl text-green-600 mb-4">{mentor.expertise}</p>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Bio:</h3>
              <p className="text-gray-700">{mentor.bio}</p>
            </div>
          </div>

          {/* Photo Section */}
          <div className="w-full md:w-1/3 flex justify-center items-start mt-4 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1726743887906-9a3b86e0e9ad?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={mentor.name}
              className="w-32 h-32 rounded-full"
            />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-5 mt-8">
          <h3 className="text-xl font-semibold mb-2">Research Papers:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {mentor.researchPapers.map((paper, index) => (
              <li key={index} className="mb-2">
                <a
                  href={paper.link}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {paper.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Book a Session Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => alert(`Session booked with ${mentor.name}`)} // Replace with actual session booking logic
            className="bg-green-600 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 focus:outline-none"
          >
            Book a Session!
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorDetails;
