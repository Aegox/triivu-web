"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";

const messages = [
  "Tu negocio puede crecer sus ventas constantemente",
  "Tus clientes son los portavoces de tu marca",
  "Creas tu propia comunidad",
];

const TextSliderWithButtons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:pt-[80px] pt-[80px] absolute inset-0 flex flex-col justify-center items-center z-40">
      {/* Slider de texto */}
      <div className="relative w-full max-w-6xl md:h-[25vh] h-[40vh] flex items-center justify-center ">
        {messages.map((message, index) => (
          <p
            key={index}
            className={`md:px-0 px-[30px] break-words absolute w-full text-center text-white font-light transition-opacity duration-1000 leading-none 
              ${index === currentIndex ? "opacity-100" : "opacity-0"}
              md:text-[90px] text-6xl`}
          >
            {message}
          </p>
        ))}
      </div>
      {/* Botones */}
      <div className="gap-1 md:mt-10 mt-14 flex flex-wrap justify-center items-center space-x-4 overflow-x-auto ">
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-colors text-xl whitespace-nowrap">
          Prueba Gratis
        </button>
        <Link href="/planes">
          <button className="bg-white hover:bg-gray-200 text-orange-500 font-bold py-4 px-8 rounded-lg shadow-lg transition-colors text-xl whitespace-nowrap">
            Ver Planes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TextSliderWithButtons;

