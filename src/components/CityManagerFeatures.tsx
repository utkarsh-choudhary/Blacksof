import React from "react";

interface Feature {
  text: string;
  icon: string;
}

const CityManagerComponent: React.FC = () => {
  const features: Feature[] = [
    { text: "Saves on power consumption & related costs", icon: "./image.png" },
    { text: "Lowers downtimes", icon: "./image.png" },
    { text: "Detects power thefts.", icon: "./image.png" },
    {
      text: "Ensures smart monitoring and control of the street light infrastructure.",
      icon: "./image.png",
    },
    {
      text: "Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc.",
      icon: "./image.png",
    },
    { text: "Ensures security in the neighborhood", icon: "./image.png" },
  ];

  return (
    <div className="px-6 py-10 mt-48 bg-white min-h-screen flex flex-col items-center text-center mt-20">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8 leading-relaxed">
        The platform assists city managers <br /> on multiple fronts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-center p-4 border-t-0 border-b-0 border-l-0 border text-center  shadow-sm ${
              index % 2 === 1 ? "sm:translate-y-6" : "" // Offset alternate cards on larger screens
            } ${index === 0 ? "first:border-t-0" : ""} ${index === features.length - 1 ? "last:border-b-0" : ""}`}
          >
            <img
              src={feature.icon}
              alt="Feature Icon"
              className="w-12 h-12 mb-4"
            />
            <p className="text-sm lg:text-base text-gray-700">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityManagerComponent;
