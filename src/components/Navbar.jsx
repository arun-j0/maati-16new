import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaBriefcase, FaImages, FaProjectDiagram, FaBlog, FaDonate, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
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
                className={`flex items-center cursor-pointer py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/about-us') ? 'bg-amber-800 text-white' : 'text-gray-800 group-hover:text-white group-hover:bg-amber-800'}`}
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
                className={`absolute ${activeDropdown === 'aboutUs' ? 'block' : 'hidden'} mt-[1px] bg-white rounded shadow-lg w-56 transition-all duration-300 ease-in-out z-20`}
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
                className={`absolute ${activeDropdown === 'careers' ? 'block' : 'hidden'} mt-[1px] bg-white shadow-lg w-[270px] rounded-lg transition-all duration-300 ease-in-out z-20`}
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
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/internships"
                    className="block px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg hover:text-white hover:bg-amber-800"
                    onClick={closeMenu}
                  >
                    Internships
                  </Link>
                </li>
              </motion.ul>
            </li>

            <li>
              <Link
                to="/gallery"
                className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/gallery') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
                onClick={closeMenu}
              >
                <FaImages className="mr-2" />Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/our-works"
                className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/our-works') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
                onClick={closeMenu}
              >
                <FaProjectDiagram className="mr-2" />Our Works
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/blogs') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
                onClick={closeMenu}
              >
                <FaBlog className="mr-2" />Blogs
              </Link>
            </li>
            {/* <li>
              <Link
                to="/contact-us"
                className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/contact-us') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
                onClick={closeMenu}
              >
                <FaEnvelope className="mr-2" />Contact Us
              </Link>
            </li> */}
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

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-800 rounded-lg focus:outline-none focus:shadow-outline"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="text-center md:hidden">
          <ul className="py-2 space-y-2">
            <li>
              <Link
                to="/"
                className={`block py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
                onClick={closeMenu}
              >
                <FaHome className="inline-block mr-2" />Home
              </Link>
            </li>
            <li>
              <span
                className={`flex items-center justify-center cursor-pointer py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/about-us') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
                onClick={() => toggleDropdown('aboutUs')}
              >
                <FaInfoCircle className="mr-2" />About Us
              </span>
              {activeDropdown === 'aboutUs' && (
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/personaldetails"
                      className="block w-full px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg hover:text-white hover:bg-amber-800"
                      onClick={closeMenu}
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
                </ul>
              )}
            </li>
            <li>
              <span
                className={`flex items-center justify-center cursor-pointer py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/careers') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
                onClick={() => toggleDropdown('careers')}
              >
                <FaBriefcase className="mr-2" />Careers
              </span>
              {activeDropdown === 'careers' && (
                <ul className="space-y-2">
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
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/internships"
                      className="block px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg hover:text-white hover:bg-amber-800"
                      onClick={closeMenu}
                    >
                      Internships
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/gallery"
                className={`block py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/gallery') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
                onClick={closeMenu}
              >
                <FaImages className="inline-block mr-2" />Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/our-works"
                className={`block py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/our-works') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
                onClick={closeMenu}
              >
                <FaProjectDiagram className="inline-block mr-2" />Our Works
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className={`block py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/blogs') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
                onClick={closeMenu}
              >
                <FaBlog className="inline-block mr-2" />Blogs
              </Link>
            </li>
            {/* <li>
              <Link
                to="/contact-us"
                className={`block py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/contact-us') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
                onClick={closeMenu}
              >
                <FaEnvelope className="inline-block mr-2" />Contact Us
              </Link>
            </li> */}
            <li>
              <Link
                to="/donate"
                className={`block py-2 px-4 rounded-lg transition-colors duration-300 ${isActive('/donate') ? 'bg-amber-800 text-white' : 'text-gray-800 hover:text-white hover:bg-amber-800'}`}
                onClick={closeMenu}
              >
                <FaDonate className="inline-block mr-2" />Donate
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
