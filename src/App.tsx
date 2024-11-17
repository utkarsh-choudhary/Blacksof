import React from "react";

import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import CityManagerFeatures from "./components/CityManagerFeatures";
import Sl from "./components/Sl";
import Products from "./components/Products";

const App: React.FC = () => {
  return (
    <>
      {/* LandingPage with Header */}
      <div className="relative">
        <LandingPage />
      </div>
      {/* Remaining Components */}
      <div className="relative z-10 mt-8">
        {/* Ensures these render above LandingPage */}
        <Sl />
        <Products />
        <CityManagerFeatures />
      </div>
      <Footer />
    </>
  );
};

export default App;
