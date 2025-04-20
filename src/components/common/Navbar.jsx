import React from "react";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="w-full shadow-md bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <img src={logo} alt="" />
        </div>

        {/* Right button */}
        <button className="bg-[#038317] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          View all roles
        </button>
      </div>
    </nav>
  );
};

export default Navbar;