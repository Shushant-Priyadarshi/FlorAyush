import { useRef, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Form = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPass, setShowPass] = useState(false);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  const handleToggleShowPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/example.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70"></div>

      {/* Form Container */}
      <div className="relative z-10 p-8 w-full max-w-md bg-black/80 rounded-lg shadow-lg">
        {/* Brand Logo */}
        <h1 className="text-center text-3xl font-bold text-white mb-6">
          Flor<span className="bg-gradient-to-r from-website-color-200 to-website-color-700 bg-clip-text text-transparent">Ayush</span>
        </h1>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {/* Form Title */}
          <h2 className="text-2xl font-semibold text-white">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>

          {/* Name Input (Visible only for Sign Up) */}
          {!isSignIn && (
            <input
              placeholder="Name"
              type="text"
              className="w-full p-4 bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-website-color-700"
            />
          )}

          {/* Email Input */}
          <input
            placeholder="Email Address"
            ref={email}
            type="email"
            className="w-full p-4 bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-website-color-700"
          />

          {/* Password Input */}
          <div className="relative">
            <input
              placeholder="Password"
              ref={password}
              type={showPass ? "text" : "password"}
              className="w-full p-4 bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-website-color-700"
            />
            <div
              className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-gray-400 hover:text-white"
              onClick={handleToggleShowPassword}
            >
              {showPass ? <FaEyeSlash size={18} /> : <IoEyeSharp size={20} />}
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-sm text-red-500 font-medium">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <button
            className="w-full p-4 bg-website-color-700 text-white font-semibold rounded-lg hover:bg-website-color-800 focus:outline-none focus:ring-4 focus:ring-website-color-700/50"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          {/* Toggle Sign Up/Sign In */}
          <p
            className="text-sm text-gray-400 hover:underline cursor-pointer text-center"
            onClick={toggleSignUp}
          >
            {isSignIn
              ? "New to FlorAyush? Sign up now."
              : "Already have an account? Sign in now."}
          </p>

          {/* Go Home Button */}
          <div className="text-center mt-4">
            <Link
              to="/"
              className="inline-block p-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition"
            >
              Go Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
