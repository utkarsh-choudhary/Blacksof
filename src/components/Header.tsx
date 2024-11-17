import React from "react";
import { Link } from "react-router-dom";
import WifiIcon from "@mui/icons-material/Wifi";

const Header: React.FC = () => {
  return (
    <div
      className="w-full bg-transparent text-white px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between fixed top-0 z-10 border-b border-gray-500 hover:border-gray-500 transition duration-300"
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <WifiIcon className="text-blue-600 hover:text-blue-700" />
        <span className="text-lg sm:text-xl font-bold gap-2 text-white">
          Smart Lights
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        <Link to="/" className="text-white hover:text-blue-400">
          Home
        </Link>
        <Link to="/products" className="text-white hover:text-blue-400">
          Products
        </Link>
        <Link to="/services" className="text-white hover:text-blue-400">
          Software Services
        </Link>
        <Link
          to="/login"
          className="bg-blue-500 text-white px-4 py-2  hover:bg-blue-600 transition"
        >
          Login
        </Link>
      </div>

      {/* Mobile Menu Icon (Hamburger Menu) */}
      <div className="flex md:hidden items-center">
        <button
          className="text-white focus:outline-none hover:text-blue-400"
          aria-label="Open Menu"
        >
          ☰
        </button>
      </div>
    </div>
  );
};

export default Header;
