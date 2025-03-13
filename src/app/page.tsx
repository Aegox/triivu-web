import React from "react";
import Home from "./components/Home";
import CommunityGrowthSection from "./components/GrowthSection";
import ThirdContainer from "./components/ThirdContainer";
import FourthContainer from "./components/FourthContainer";
import FifthContainer from "./components/FifthContainer";
import Pricing from "./components/Pricing";
import ServicesRender from "./components/Services";
import Questions from "./components/Questions";

const Render: React.FC = () => {
  return (
    <div>
      <Home />
      <CommunityGrowthSection />
      <ThirdContainer />
      <FourthContainer />
      <FifthContainer />
      <Pricing />
      <ServicesRender />
      <Questions />
    </div>
  );
};

export default Render;

