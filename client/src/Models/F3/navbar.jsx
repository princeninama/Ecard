// Navbar.js
import { IoMdMenu } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import '../animations/animation1.css'

import React from 'react';
import { useState } from 'react';
import { Rotate } from "react-awesome-reveal"

const Navbar = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-lime-400 via-green-400 via-emerald-300  to-teal-200 p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/"><div className="text-xl font-semibold text-gray-800">Wedding</div></a>
          {isMobile ? (
            <div>
              <span
                onClick={toggleDropdown}
                className="cursor-pointer text-gray-600 hover:text-gray-800 transition duration-300"
              >
                {
                  isDropdownOpen ?  <ImCancelCircle/> :  <IoMdMenu/>
                }
              </span>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <Rotate>
                <div className="absolute mt-2  bg-white border rounded-md shadow-lg right-10">
                  <a
                    href="/map"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Address
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    PreWedding
                  </a>
                  <a
                    href="album"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Album
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    RSVP
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Contact
                  </a>
                </div>
                </Rotate>
              )}
            </div>
          ) : (
            // Links for Larger Screens
            <ul className="flex space-x-4">
              <li className="text-gray-600 hover:text-gray-800 transition duration-300">
                <a href="/map">Address</a>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition duration-300">
                <a href="#">Events</a>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition duration-300">
                <a href="#">Gallery</a>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition duration-300">
                <a href="#">RSVP</a>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition duration-300">
                <a href="#">Contact</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
