import React from "react";

const Sl: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-white to-blue-50 py-10">
        <div className="max-w-[1247px] h-auto lg:h-[661px] mx-auto relative px-4 sm:px-6 lg:px-8">
          {/* Ecosystem Section */}
          <div className="text-left mb-10">
            <p className="text-slate-600 font-semibold">Ecosystem</p>
            <h1 className="text-2xl md:text-3xl font-bold">
              How does a smart street light ecosystem work?
            </h1>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* Street Light Controller */}
            <div className="flex flex-col items-center">
              <div className="flex flex-row gap-4">
                <img
                  src="./street_light_controler.png"
                  className="p-2 border bg-white border-indigo-500 rounded-lg"
                  alt="Street Light Controller"
                />
                <img
                  src="./street_light_controler.png"
                  className="p-2 border bg-white border-indigo-500 rounded-lg"
                  alt="Street Light Controller"
                />
              </div>
              <p className="font-semibold mt-4">Street Light Controller</p>
              <p className="text-sm text-gray-600 w-[250px]">
                Activates/deactivates in response to motion/light sensing and
                controls the brightness of the street lamp.
              </p>
            </div>

            {/* Gateway */}
            <div className="flex flex-col items-center">
              <img
                src="./gateway_png.png"
                className="p-2 border bg-white border-indigo-500 rounded-lg"
                alt="Gateway"
              />
              <p className="font-semibold mt-4">Gateway</p>
              <p className="text-sm text-gray-600 w-[250px]">
                Employed for interfacing between a Controller and the Lighting
                Management Software.
              </p>
            </div>

            {/* Cloud-based Management System */}
            <div className="flex flex-col items-center">
              <img
                src="./cloud_based management.png"
                className="p-2 border bg-white border-indigo-500 rounded-lg"
                alt="Cloud-based Management System"
              />
              <p className="font-semibold mt-4">Cloud-based Management System</p>
              <p className="text-sm text-gray-600 w-[250px]">
                Collects information from multiple gateways.
              </p>
            </div>
          </div>

          {/* Additional Items */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 text-center">
            {/* Users */}
            <div className="flex flex-col items-center">
              <img
                src="./users_png.png"
                className="p-2 border bg-white border-indigo-500 rounded-lg"
                alt="Users"
              />
              <p className="font-semibold mt-4">Users</p>
              <p className="text-sm text-gray-600 w-[250px]">
                Data from the cloud is used to monitor and control street lights
                by the System Managers.
              </p>
            </div>

            {/* Evaluation */}
            <div className="flex flex-col items-center">
              <img
                src="./evaluation_png.png"
                className="p-2 border bg-white border-indigo-500 rounded-lg"
                alt="Evaluation"
              />
              <p className="font-semibold mt-4">Evaluation</p>
              <p className="text-sm text-gray-600 w-[250px]">
                Gathered insights are used to evaluate the performance of the
                lighting systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sl;
