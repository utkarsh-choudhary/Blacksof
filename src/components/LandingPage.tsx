import React, { useState, MouseEvent } from "react";
import Header from "./Header";

const LandingPage: React.FC = () => {
  const [rotate, setRotate] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (event: MouseEvent<HTMLHeadingElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    const xRotation = ((clientY - top - height / 2) / height) * 15;
    const yRotation = ((clientX - left - width / 2) / width) * -15;

    setRotate({ x: xRotation, y: yRotation });
  };

  const resetRotation = () => {
    setRotate({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    resetRotation();
  };

  return (
    <div
      className="relative font-inter min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-no-repeat bg-center backdrop-blur-[647px] bg-opacity-50"
      style={{
        backgroundImage: "url('/Hero_section.png')",
      }}
    >
      <Header />
      <h2 className="text-sm sm:text-base md:text-lg font-medium text-white mb-4">
        Smart Lighting Solutions
      </h2>
      <h1
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-gray-500 mb-8 leading-snug ${
          hovered ? "rotate-animation" : ""
        }`}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: hovered ? "none" : "transform 0.1s ease-out",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Bringing A New Perspective To Street Lights <br />
        And The Cities Of Tomorrow.
      </h1>
      <button className="px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition duration-300">
        Login
      </button>
      <style >{`
        @keyframes rotate360 {
          from {
            transform: rotateY(45deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }

        .rotate-animation {
          animation: rotate360 1s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
