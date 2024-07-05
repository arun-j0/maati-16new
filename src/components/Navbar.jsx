import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaBriefcase, FaImages, FaProjectDiagram, FaBlog, FaPhone, FaDonate, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import PersonalDetails from './PersonalDetails';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null); // Close any open dropdowns when menu is toggled
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null); // Close dropdown if already open
    } else {
      setActiveDropdown(dropdownName); // Open the clicked dropdown
    }
  };

  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName); // Open dropdown on hover
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null); // Close dropdown on mouse leave
  };

  const isActive = (path) => location.pathname === path;

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="z-10 bg-gray-100 shadow">
      <nav className="container relative flex items-center justify-between py-4 mx-auto">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-auto h-16" />
            <span className="ml-2 text-xl italic font-extrabold text-[#280101] md:text-3xl">MAATI-16</span>
          </Link>
        </div>

        <div className="hidden text-sm md:flex md:space-x-4 md:text-lg">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
              >
                <FaHome className="mr-2" />Home
              </Link>
            </li>

            <li className="relative group">
              <span
                className={`flex items-center cursor-pointer py-2 px-4 rounded-lg  transition-colors duration-300 ${isActive('/about-us') ? 'bg-amber-800 text-white' : 'text-gray-800 group-hover:text-white group-hover:bg-amber-800'}`}
                onClick={() => toggleDropdown('aboutUs')}
                onMouseEnter={() => handleMouseEnter('aboutUs')}
                onMouseLeave={handleMouseLeave}
              >
                <FaInfoCircle className="mr-2" />About Us
              </span>
              <motion.ul
                initial="hidden"
                animate={activeDropdown === 'aboutUs' ? "visible" : "hidden"}
                variants={dropdownVariants}
                className={`absolute ${activeDropdown === 'aboutUs' ? 'block' : 'hidden'} mt-[1px] bg-white rounded shadow-lg w-64 transition-all duration-300 ease-in-out z-20`}
                onMouseEnter={() => handleMouseEnter('aboutUs')}
                onMouseLeave={handleMouseLeave}
              >
                <li>
                  <Link
                    to="/personaldetails"
                    className="block w-full px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg hover:text-white hover:bg-amber-800"
                  >
                    Personal Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/core-members"
                    className="block px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg hover:text-white hover:bg-amber-800"
                    onClick={closeMenu}
                  >
                    Core Members
                  </Link>
                </li>
                <li>
                  <Link
                    to="/motto-objective"
                    className="block px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg hover:text-white hover:bg-amber-800"
                    onClick={closeMenu}
                  >
                    Our Motto and Objective
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs"
                    className="block px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg hover:text-white hover:bg-amber-800"
                    onClick={closeMenu}
                  >
                    FAQs and Policies
                  </Link>
                </li>
              </motion.ul>
            </li>

            <li className="relative group">
              <span
                className={`flex items-center cursor-pointer py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/careers') ? 'bg-amber-800 text-white' : 'text-gray-800 group-hover:text-white group-hover:bg-amber-800'}`}
                onClick={() => toggleDropdown('careers')}
                onMouseEnter={() => handleMouseEnter('careers')}
                onMouseLeave={handleMouseLeave}
              >
                <FaBriefcase className="mr-2" />Careers
              </span>
              <motion.ul
                initial="hidden"
                animate={activeDropdown === 'careers' ? "visible" : "hidden"}
                variants={dropdownVariants}
                className={`absolute ${activeDropdown === 'careers' ? 'block' : 'hidden'} mt-[1px] bg-white shadow-lg w-[330px] rounded-lg transition-all duration-300 ease-in-out z-20`}
                onMouseEnter={() => handleMouseEnter('careers')}
                onMouseLeave={handleMouseLeave}
              >
                <li>
                  <Link
                    to="/membership-volunteership"
                    className="block px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg hover:text-white hover:bg-amber-800"
                    onClick={closeMenu}
                  >
                    Membership/Volunteership Form
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="block px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg hover:text-white hover:bg-amber-800"
                    onClick={closeMenu}
                  >
                    Current Openings
                  </Link>
                </li>
              </motion.ul>
            </li>

            <li className="relative group">
              <span
                className={`flex items-center cursor-pointer py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/gallery') ? 'bg-amber-800 text-white' : 'text-gray-800 group-hover:text-white group-hover:bg-amber-800'}`}
                onClick={() => toggleDropdown('gallery')}
                onMouseEnter={() => handleMouseEnter('gallery')}
                onMouseLeave={handleMouseLeave}
              >
                <FaImages className="mr-2" />Gallery
              </span>
              <motion.ul
                initial="hidden"
                animate={activeDropdown === 'gallery' ? "visible" : "hidden"}
                variants={dropdownVariants}
                className={`absolute ${activeDropdown === 'gallery' ? 'block' : 'hidden'} mt-[1px] bg-white rounded-lg shadow-lg w-48 transition-all duration-300 ease-in-out z-20`}
                onMouseEnter={() => handleMouseEnter('gallery')}
                onMouseLeave={handleMouseLeave}
              >
                <li>
                  <Link
                    to="/photos"
                    className="block px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg hover:text-white hover:bg-amber-800"
                    onClick={closeMenu}
                  >
                    Photos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/videos"
                    className="block px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg hover:text-white hover:bg-amber-800"
                    onClick={closeMenu}
                  >
                    Videos
                  </Link>
                </li>
              </motion.ul>
            </li>

            <li>
              <Link
                to="/projects"
                className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/projects') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
              >
                <FaProjectDiagram className="mr-2" />Our Projects
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/blog') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
              >
                <FaBlog className="mr-2" />Blog
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/contact') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
              >
                <FaPhone className="mr-2" />Contact
              </Link>
            </li>

            <li>
              <Link
                to="/donate"
                className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/donate') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
              >
                <FaDonate className="mr-2" />Donate
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center p-2 text-gray-800 rounded-md focus:outline-none focus:shadow-outline"
          >
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col p-4 bg-white shadow-lg space-y-4">
            <li>
              <Link
                to="/"
                className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
                onClick={closeMenu}
              >
                <FaHome className="mr-2" />Home
              </Link>
            </li>

            <li>
              <span
                className={`flex items-center cursor-pointer py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/about-us') ? 'bg-amber-800 text-white' : 'text-gray-800'}`}
                onClick={() => toggleDropdown('aboutUs')}
              >
                <FaInfoCircle className="mr-2" />About Us
              </span>
              {activeDropdown === 'aboutUs' && (
                <ul className="pl-6 space-y-2">
                  <li>
                    <Link
                      to="/personaldetails"
                      className="block text-gray-800 transition-colors duration-300 hover:text-white hover:bg-amber-800"
                      onClick={closeMenu}
                    >
                      Personal Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/core-members"
                      className="block text-gray-800 transition-colors duration-300 hover:text-white hover:bg-amber-800"
                      onClick={closeMenu}
                    >
                      Core Members
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/motto-objective"
                      className="block text-gray-800 transition-colors duration-300 hover:text-white hover:bg-amber-800"
                      onClick={closeMenu}
                    >
                      Our Motto and Objective
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faqs"
                      className="block text-gray-800 transition-colors duration-300 hover:text-white hover:bg-amber-800"
                      onClick={closeMenu}
                    >
                      FAQs and Policies
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <span
                className={`flex items-center cursor-pointer py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/careers') ? 'bg-amber-800 text-white' : 'text-gray-800'}`}
                onClick={() => toggleDropdown('careers')}
              >
                <FaBriefcase className="mr-2" />Careers
              </span>
              {activeDropdown === 'careers' && (
                <ul className="pl-6 space-y-2">
                  <li>
                    <Link
                      to="/membership-volunteership"
                      className="block text-gray-800 transition-colors duration-300 hover:text-white hover:bg-amber-800"
                      onClick={closeMenu}
                    >
                      Membership/Volunteership Form
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/careers"
                      className="block text-gray-800 transition-colors duration-300 hover:text-white hover:bg-amber-800"
                      onClick={closeMenu}
                    >
                      Current Openings
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <span
                className={`flex items-center cursor-pointer py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/gallery') ? 'bg-amber-800 text-white' : 'text-gray-800'}`}
                onClick={() => toggleDropdown('gallery')}
              >
                <FaImages className="mr-2" />Gallery
              </span>
              {activeDropdown === 'gallery' && (
                <ul className="pl-6 space-y-2">
                  <li>
                    <Link
                      to="/photos"
                      className="block text-gray-800 transition-colors duration-300 hover:text-white hover:bg-amber-800"
                      onClick={closeMenu}
                    >
                      Photos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/videos"
                      className="block text-gray-800 transition-colors duration-300 hover:text-white hover:bg-amber-800"
                      onClick={closeMenu}
                    >
                      Videos
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/projects"
                className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/projects') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
                onClick={closeMenu}
              >
                <FaProjectDiagram className="mr-2" />Our Projects
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/blog') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
                onClick={closeMenu}
              >
                <FaBlog className="mr-2" />Blog
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/contact') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
                onClick={closeMenu}
              >
                <FaPhone className="mr-2" />Contact
              </Link>
            </li>

            <li>
              <Link
                to="/donate"
                className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/donate') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
                onClick={closeMenu}
              >
                <FaDonate className="mr-2" />Donate
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
