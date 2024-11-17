import React from "react";
import WifiIcon from "@mui/icons-material/Wifi";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative font-inter bg-black text-white overflow-hidden"
      style={{ height: "50vh" }} // 50% of the viewport height
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/Footer.png')`,
          backgroundSize: "1920px 657px",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-4 sm:space-y-0">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2">
            <div className="text-blue-400 text-2xl">
              <WifiIcon />
            </div>
            <span className="text-lg font-semibold">Smart Lights</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
            <a href="#product" className="hover:underline">
              Product
            </a>
            <a href="#services" className="hover:underline">
              Software Services
            </a>
            <a href="#follow-us" className="hover:underline">
              Follow Us
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-48">
        <div className="border-t gap-20 sm:mt-20 border-gray-700 my-6 "></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row text-sm text-gray-400 space-y-4 sm:space-y-0 sm:space-x-8">
          <a href="#privacy-policy" className="hover:text-gray-200">
            Privacy Policy
          </a>
          <a href="#terms-conditions" className="hover:text-gray-200">
            Terms & Conditions
          </a>
          <a href="#cookie-policy" className="hover:text-gray-200">
            Cookie Policy
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
