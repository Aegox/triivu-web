import React from 'react';
import Link from 'next/link';

const ThirdContainer: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Contenedor de la imagen: debe ser relative y tener altura definida */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
          <img src="/ventas.webp" alt="Expande tu negocio" className="w-full h-full rounded-md border-4 border-orange-400"/>
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            APALANCATE Y EXPANDE TU NEGOCIO CON VENTAS ANTICIPADAS
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Tus clientes recargan su cuenta para obtener privilegios, descuentos y premios, permitiéndote apalancarte en sus futuras compras.
          </p>
          <Link
            className="bg-orange-400 text-white px-6 py-3 font-bold rounded-md inline-block hover:bg-orange-500 transition"
            href="/planes"
          >
            ¡Empieza ahora y prueba Gratis!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThirdContainer;

