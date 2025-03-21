import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'; // Logo resmini import edin

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the mobile menu
  const buttonRef = useRef(null); // Ref for the hamburger button

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside or on the hamburger button
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); // Close the menu
      }
    };

    // Add event listener when the menu is open
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]); // Only run this effect when `isMenuOpen` changes

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo ve Marka İsmi */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img
              src={logo} // Logo resmini buraya ekleyin
              alt="FurniStore Logo"
              className="h-12 w-12 sm:h-16 sm:w-16 rounded-lg -ml-4" // Increased size for mobile
            />
            <Link
  to="/"
  className="text-3xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#3E5879] via-[#c8b4a6] to-[#d5beae] bg-clip-text text-transparent drop-shadow-lg bg-[length:200%_200%] animate-gradientText -ml-1"
>
  FurniStore
</Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <ul className="hidden sm:flex space-x-4 md:space-x-8">
            <li>
              <Link
                to="/"
                className="text-lg sm:text-xl text-gray-800 hover:text-[#3E5879] font-semibold transition duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gradient-to-r from-[#D8C4B6] via-[#F5EFE7] to-[#3E5879] after:w-0 after:hover:w-full after:transition-all after:duration-300" // Responsive text size
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg sm:text-xl text-gray-800 hover:text-[#3E5879] font-semibold transition duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gradient-to-r from-[#D8C4B6] via-[#F5EFE7] to-[#3E5879] after:w-0 after:hover:w-full after:transition-all after:duration-300" // Responsive text size
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-lg sm:text-xl text-gray-800 hover:text-[#3E5879] font-semibold transition duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gradient-to-r from-[#D8C4B6] via-[#F5EFE7] to-[#3E5879] after:w-0 after:hover:w-full after:transition-all after:duration-300" // Responsive text size
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <button
            ref={buttonRef} // Ref for the hamburger button
            onClick={toggleMenu}
            className="sm:hidden p-2 text-gray-800 hover:text-[#3E5879] focus:outline-none transition-transform duration-500" // Slower animation (500ms)
          >
            <svg
              className="w-8 h-8 transition-transform duration-500 transform" // Increased size for mobile
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Hamburger Icon (Three Lines) */}
              {!isMenuOpen && (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </>
              )}
              {/* Close Icon (X Shape) */}
              {isMenuOpen && (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Conditional Rendering) */}
        {isMenuOpen && (
          <div ref={menuRef} className="sm:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <li className="flex items-center justify-center h-14"> {/* Increased height for mobile menu items */}
                <Link
                  to="/"
                  className="block text-xl text-gray-800 hover:text-[#3E5879] font-semibold transition duration-300" // Increased font size for mobile
                  onClick={toggleMenu} // Close menu on click
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center justify-center h-14"> {/* Increased height for mobile menu items */}
                <Link
                  to="/about"
                  className="block text-xl text-gray-800 hover:text-[#3E5879] font-semibold transition duration-300" // Increased font size for mobile
                  onClick={toggleMenu} // Close menu on click
                >
                  About
                </Link>
              </li>
              <li className="flex items-center justify-center h-14"> {/* Increased height for mobile menu items */}
                <Link
                  to="/contact"
                  className="block text-xl text-gray-800 hover:text-[#3E5879] font-semibold transition duration-300" // Increased font size for mobile
                  onClick={toggleMenu} // Close menu on click
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;