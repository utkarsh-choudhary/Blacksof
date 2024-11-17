import React, { useState } from "react";

interface Product {
  title: string;
  description: string;
  image: string;
}

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const products: Product[] = [
    {
      title: "Centralized Control & Monitoring System",
      description:
        "Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights.",
      image: "./smart_lights.png",
    },
    {
      title: "NEMA-Mounted VOLC 1160",
      description:
        "A compact device providing advanced monitoring capabilities for urban infrastructure.",
      image: "./image_31.png",
    },
    {
      title: "Retrofit Street Light Controller VOLC 2160",
      description:
        "This controller is designed to retrofit existing street lights for improved efficiency and control.",
      image: "./Hero_section.png",
    },
    {
      title: "Retrofit Street Light Controller VOLC 2180",
      description:
        "Offering next-gen solutions to modernize older lighting systems with ease.",
      image: "./retrofit2.jpg",
    },
    {
      title: "Retrofit Street Light Controller VOLC 4180",
      description:
        "A robust solution for large-scale lighting systems requiring centralized control.",
      image: "./retrofit3.jpg",
    },
  ];

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % products.length);
  };

  const handlePrevious = () => {
    setActiveTab((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="bg-customLightBlue font-inter from-[#e8f3ff] to-white min-h-screen py-12 px-4 sm:px-6 lg:px-12">
      {/* Section Heading */}
      <div className="mb-10 ">
        <span className="text-black p-2 font-bold mb-2 border">Products</span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-thin text-gray-800 whitespace-normal max-w-4xl leading-snug mx-auto">
          <span className="font-bold text-black">Cutting-edge hardware,</span>{" "}
          offerings helping cities optimize resources and achieve smart
          development goals
        </h1>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm border ${
              activeTab === index
                ? "bg-indigo-100 border-black text-gray-600"
                : "bg-white border-gray-300 text-gray-600"
            }`}
          >
            {product.title}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-10 flex justify-center">
        <div className="bg-custom-gradient relative flex flex-col lg:flex-row items-center gap-8 border shadow-lg max-w-5xl bg-white">
          {/* Image */}
          {/* Image */}
<div className="w-full lg:w-1/2">
  <img
    src={products[activeTab].image}
    alt={products[activeTab].title}
    className="shadow-md w-full object-cover"
    style={{ height: "300px", maxHeight: "300px" }} // Set a fixed height
  />
</div>

{/* Text */}
<div
  className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
  style={{ minHeight: "300px" }} // Ensures consistent height for text
>
  <p className="text-gray-500 mb-2">
    Products {activeTab + 1}/{products.length}
  </p>
  <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 line-clamp-2">
    {products[activeTab].title}
  </h2>
  <p className="text-gray-600 mb-6 line-clamp-3">
    {products[activeTab].description}
  </p>
  <a
    href="#"
    className="text-blue-600 font-semibold flex items-center"
  >
    Know More <img src="./icon_png.png" className="p-2" />
  </a>
</div>

          {/* Arrows */}
          <div className="absolute bottom-4 flex justify-center items-center gap-6">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow hover:bg-gray-300"
            >
              <span className="text-gray-700">&larr;</span>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow hover:bg-gray-300"
            >
              <span className="text-blue-600">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
