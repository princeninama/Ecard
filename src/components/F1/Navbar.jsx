import React, { useState } from "react";
import logo from "../../assets/logo1.jpg";
import { Routes,Route } from "react-router-dom";
import HIghllights from "./HIghllights";
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setShowDropdown(false);
    }
  };
  const map = () => {
<Routes>
  <Route
  path="/Album"  element={<HIghllights/>}>
    
  </Route>
</Routes>
  };
  return (
    <nav className="bg-gradient-to-r from-red-900 to-black  w-[100%] h-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* <img src={logo} className="w-11 h-10 mt-1 ml-1" alt="" /> */}
          <h1 className="font-serif text-3xl text-white pt-3 pl-3">Wedding</h1>
          {/* Show dropdown button for small devices */}
          <div className="sm:hidden ml-2 ">
            <button
              onClick={toggleDropdown}
              className="mt-2 text-xl font-serif focus:outline-none ml-[6rem] text-white"
            >
              Menu
            </button>
          </div>
        </div>

        {/* Navigation links for small and medium devices */}
        {(showDropdown || window.innerWidth >= 640) && (
          <div className="hidden sm:flex sm:mr-5 space-x-4 text-white text-2xl font-serif mt-5">
            <div
              className="cursor-pointer hover:text-gray-700"
              onClick={() => scrollToSection("eventsSection")}
            >
              Events
            </div>
            <div
              className="cursor-pointer hover:text-gray-700"
              onClick={() => scrollToSection("imagesection")}
            >
              Album
            </div>
            <div
              className="cursor-pointer hover:text-gray-700"
              onClick={() => map}
            >
              Family
            </div>
            <div
              className="cursor-pointer hover:text-gray-700"
              onClick={() => scrollToSection("mapSection")}
            >
              Map
            </div>
          </div>
        )}

        {showDropdown && (
          <div className="sm:hidden absolute top-12 z-50 opacity-60 left-0 w-full bg-white border-b border-gray-600">
            <div className=" flex flex-col space-y-2 p-2 text-black">
              <div
                className="cursor-pointer hover:text-gray-700"
                onClick={() => scrollToSection("eventsSection")}
              >
                Events
              </div>
              <div
                className="cursor-pointer hover:text-gray-700"
                onClick={() => map}
              >
                Album
              </div>
              <div
                className="cursor-pointer hover:text-gray-700"
                onClick={() => scrollToSection("familySection")}
              >
                Family
              </div>
              <div
                className="cursor-pointer hover:text-gray-700"
                onClick={() => scrollToSection("mapSection")}
              >
                Map
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
