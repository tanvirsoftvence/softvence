import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import footbanner from "../../assets/BG.png";

const Footer = () => {
  return (
    <footer
      className="w-full py-14 h-[260px] bg-center bg-cover bg-no-repeat bg-gray-100 text-white"
      style={{
        backgroundImage: `url(${footbanner})`,
      }}
    >
      <div className="container mx-auto text-center">
        {/* Navigation Links */}
        <div className="mb-6">
          <ul className="flex justify-center space-x-8 text-black font-medium">
            <li>
              <a href="/" className="hover:text-blue-500">Home</a>
            </li>
            <li>
              <a href="/career" className="hover:text-blue-500">Careers</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-blue-500">Privacy</a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4 text-green-500 ">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="border-1 border-green-500 rounded-full p-2 hover:bg-green-500 hover:text-white transition duration-300">
            <FaFacebook size={24}  className=""/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="border-1 border-green-500 rounded-full p-2 hover:bg-green-500 hover:text-white transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="border-1 border-green-500 rounded-full p-2 hover:bg-green-500 hover:text-white transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="border-1 border-green-500 rounded-full p-2 hover:bg-green-500 hover:text-white transition duration-300">
            <FaYoutube size={24} />
          </a>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-6 text-sm text-gray-700">
          <p>© 2025 Softvence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;