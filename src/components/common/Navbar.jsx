import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-full shadow-md bg-white fixed top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          <img src={logo} alt="" />
        </Link>

        {/* Right button */}
        <button className="text-[16px] bg-[#038317] text-white px-4 py-2 rounded-lg hover:bg-[#40854a] transition font-pop font-semibold">
          View all roles
        </button>
      </div>
    </nav>
  );
};

export default Navbar;