import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-200 text-white py-6 dark:bg-slate-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-pink-500">
            Swarajya BookStore
          </h3>
          <p className="mt-2 text-gray-400">
            Your one-stop shop for all things books!
          </p>
        </div>

        <div className="flex gap-6 justify-center md:justify-start">
          <a
            href="https://facebook.com"
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com"
            className="text-gray-400 hover:text-pink-500 transition-colors"
          >
            <FaGithub size={24} />
          </a>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Swarajya BookStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
