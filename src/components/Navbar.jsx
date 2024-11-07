import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CiLight } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [themeMode, setThemeMode] = useState(false);
  const [mobilePopup, setMobilePopup] = useState(false);

  const toggleTheme = () => {
    setThemeMode(!themeMode);
  };

  const toggleMobileView = () => {
    setMobilePopup(!mobilePopup);
  };

  return (
    <div>
      <div className=" h-16 bg-slate-200 flex items-center ">
        <div className="md:hidden flex items-center ml-3">
          <button onClick={toggleMobileView}>
            {mobilePopup ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className="mx-[60px] md:mx-[100px] w-full flex items-center justify-between ">
          {/* when text comein two line instead of one line we use below class = whiteapce-nowrap */}
          <div className="text-xl font-bold  text-center  whitespace-nowrap ">
            Swarajya BookStore
          </div>
          {/* <div className="text-xl font-bold text-center whitespace-nowrap overflow-hidden text-ellipsis">
            Swarajya BookStore
          </div> */}
          <div className="flex gap-5 items-center">
            <ul className="hidden md:flex  gap-8">
              <li>
                <a href="">Home</a>
              </li>{" "}
              <li>
                <a href="">Courses</a>
              </li>{" "}
              <li>
                <a href="">Contact</a>
              </li>{" "}
              <li>
                <a href="">About</a>
              </li>
            </ul>
            <div
              className={`${
                mobilePopup ? "block" : "hidden"
              } absolute top-16 left-0 w-full bg-slate-200 md:hidden shadow-md flex flex-col items-center gap-16 py-4`}
            >
              <ul>
                <li>
                  <a className="block text-center py-3">Home</a>
                </li>
                <li>
                  <a className="block text-center py-3">Courses</a>
                </li>
                <li>
                  <a className="block text-center py-3">Contact</a>
                </li>
                <li>
                  <a className="block text-center py-3">About</a>
                </li>
              </ul>
            </div>
            <div className="hidden md:block relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-3 pl-10  pr-4 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
              <BiSearch
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
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
