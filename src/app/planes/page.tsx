import React from "react";
import Pricing from "../components/Pricing"; // Ajusta la ruta si es necesario
import ServicesRender from "../components/Services";
import Questions from "../components/Questions";

const PlanesPage = () => {
  return (
    <div>
      <Pricing />
      <ServicesRender />
      <Questions/>
    </div>
  );
};

export default PlanesPage;
