"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { messages } from "../../constants/HomeSlider";


const TextSliderWithButtons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center z-40">
      {/* Slider de texto */}
      <div className="relative w-full max-w-6xl md:h-[20vh] h-[15vh] flex items-center justify-center ">
        {messages.map((message, index) => (
          <p
            key={index}
            className={`md:px-0 px-[30px] break-words absolute w-full text-center text-white font-light transition-opacity duration-1000 leading-none 
              ${index === currentIndex ? "opacity-100" : "opacity-0"}
              md:text-6xl text-3xl`}
          >
            {message}
          </p>
        ))}
      </div>
      {/* Botones */}
      <div className="md:gap-4 gap-2 md:mt-6 mt-1 flex flex-wrap justify-center items-center w-full px-3">
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-colors text-md whitespace-nowrap">
          Prueba Gratis
        </button>
        <Link href="/planes">
          <button className="bg-white hover:bg-gray-200 text-orange-500 font-bold py-2 px-6 rounded-lg shadow-lg transition-colors text-md whitespace-nowrap">
            Ver Planes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TextSliderWithButtons;

