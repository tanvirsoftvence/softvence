import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full shadow-md bg-white fixed top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Right button */}
        <button className="text-sm sm:text-base bg-[#038317] text-white px-4 py-2 rounded-lg hover:bg-[#40854a] transition font-pop font-semibold">
          View all roles
        </button>
      </div>
    </nav>
  );
};

export default Navbar;