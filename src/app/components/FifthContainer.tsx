import React from 'react';
import Link from 'next/link';
import { steps } from '../constants/Steps.tsx';

const FifthContainer: React.FC = () => {
  return (
    <section className="bg-gray-50 py-32 px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          TUS CLIENTES, SERÁN TU MEJOR MARKETING
        </h2>
        <p className="text-lg text-center text-gray-600 mb-20">
          Tus clientes fieles te ayudarán a crecer trayendo nuevos clientes y compras; tu base de clientes frecuentes puede pasar de un 20% a un 50% sin gastar en publicidad.
        </p>
        {/* Grid horizontal con tarjetas verticales (proporción 9:16) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white border rounded-lg shadow-md overflow-hidden aspect-[9/16]"
            >
              {/* Número de paso */}
              <div className="absolute top-2 left-2 bg-orange-400 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              {/* Contenido centrado */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <img src={step.img} alt="a step image for clients"/>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/planes"
            className="bg-orange-400 font-bold text-white px-6 py-3 rounded-md inline-block hover:bg-orange-500 transition"
          >
            ¡Comienza a crecer tu negocio!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FifthContainer;

