import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

const Navbar = () => {
  const [themeMode, setThemeMode] = useState(false);
  const [mobilePopup, setMobilePopup] = useState(false); // State for mobile menu visibility

  const toggleTheme = () => {
    setThemeMode(!themeMode);
  };

  const toggleMobileMenu = () => {
    setMobilePopup(!mobilePopup); // Toggle mobile menu visibility
  };

  return (
    <div>
      <div className="h-16 bg-slate-200 flex items-center">
        <div className="mx-[60px] md:mx-[100px] w-full flex items-center justify-between">
          <div className="text-xl font-bold text-center whitespace-nowrap">
            Swarajya BookStore
          </div>
          <div className="flex gap-5 items-center">
            {/* Hamburger icon for mobile */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu}>
                {mobilePopup ? (
                  <FaTimes size={24} /> // Show close icon when menu is open
                ) : (
                  <FaBars size={24} /> // Show hamburger icon when menu is closed
                )}
              </button>
            </div>

            {/* Navigation links for desktop */}
            <ul className="hidden md:flex gap-8">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Courses</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>

            {/* Mobile menu links */}
            <div
              className={`${
                mobilePopup ? "block" : "hidden"
              } absolute top-16 left-0 w-full bg-slate-200 md:hidden shadow-md flex flex-col items-center gap-4 py-4`}
            >
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Courses</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
              </ul>
            </div>

            <div>
              <div
                onClick={toggleTheme}
                className="cursor-pointer text-gray-800 dark:text-white"
              >
                {themeMode ? <CiLight size={24} /> : <MdDarkMode size={24} />}
              </div>
            </div>

            <button className="px-3 py-2 bg-black text-white font-semibold rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition duration-300">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
