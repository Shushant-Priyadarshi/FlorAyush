import { IconPlant } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

   
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 h-20 px-6 flex items-center justify-between  transition-colors duration-300 ${
        isScrolled ? "bg-black" : "  "
      }`}
    >
      {/* ICONS AND LOGO */}
      <Link to="/" className="flex items-center gap-1 cursor-pointer">
        <IconPlant stroke={1.8} className="h-9 w-9" />

        <div className="text-3xl font-semibold">
          Flor
          <span className="bg-gradient-to-r from-website-color-200 to-website-color-500 text-transparent bg-clip-text font-bold">
            Ayush
          </span>
        </div>
      </Link>

      {/* HAMBURGER MENU FOR SMALL SCREENS */}
      <div
        className="lg:hidden cursor-pointer z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </div>

      {/* NAV LINKS */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row lg:static absolute top-20 left-0 w-full lg:w-auto bg-black lg:bg-transparent items-center lg:gap-5 z-40`}
      >
        <NavLinks />

        <Link to="/auth" className="bg-gradient-to-r from-website-color-200 to-website-color-500 text-transparent !text-black py-1 px-5 rounded-md font-bold">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
