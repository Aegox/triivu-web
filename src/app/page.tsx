import React from "react";
import Home from "./components/Home";
import CommunityGrowthSection from "./components/GrowthSection";
import ThirdContainer from "./components/ThirdContainer";
import FourthContainer from "./components/FourthContainer";
import FifthContainer from "./components/FifthContainer";

const Render: React.FC = () => {
  return (
    <div>
      <Home />
      <CommunityGrowthSection />
      <ThirdContainer />
      <FourthContainer />
      <FifthContainer />
    </div>
  );
};

export default Render;

