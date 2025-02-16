

import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/shopify-video.webm" // Ruta al video en la carpeta public
        autoPlay
        loop
        muted
      />

      {/* Contenido sobre el video */}
      <div className="absolute w-full flex p-44 flex-col items-left justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Bienvenido a Triivu</h1>
        <p className="text-white text-lg md:text-xl mb-8 text-left">Explora nuestras soluciones y planes.</p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Soluciones
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Planes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

