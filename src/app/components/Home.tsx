import React from "react";
import TextSliderWithButtons from "./TextSliderWithButtons"

const Home: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/home.webm"
        autoPlay
        loop
        muted
      />
      {/* Overlay semitransparente */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Slider de texto y botones */}
      <TextSliderWithButtons />
    </div>
  );
};

export default Home;

