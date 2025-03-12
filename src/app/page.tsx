import React from "react";
import Home from "./components/Home";
import CommunityGrowthSection from "./components/GrowthSection";
import ThirdContainer from "./components/ThirdContainer";
import FourthContainer from "./components/FourthContainer";
import FifthContainer from "./components/FifthContainer";
import Pricing from "./components/Pricing";

const Render: React.FC = () => {
  return (
    <div>
      <Home />
      <CommunityGrowthSection />
      <ThirdContainer />
      <FourthContainer />
      <FifthContainer />
      <Pricing />
    </div>
  );
};

export default Render;

