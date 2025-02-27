import React from 'react';
import Link from 'next/link';
import { FaCreditCard, FaRegChartBar, FaUsers, FaGift } from 'react-icons/fa';

interface CardData {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const cardData: CardData[] = [
  {
    title: 'Tarjeta de fidelización',
    description: 'Tus clientes tienen una cuenta personal para recargar saldo y tú tendrás flujo de caja anticipado.',
    icon: <FaCreditCard className="text-4xl text-orange-400" />,
  },
  {
    title: 'Control de Caja',
    description: 'Controla todos los ingresos y egresos de las tarjetas de tus clientes.',
    icon: <FaRegChartBar className="text-4xl text-orange-400" />,
  },
  {
    title: 'Status de tus clientes',
    description: 'Verifica cuáles son tus mejores clientes y los que más compran.',
    icon: <FaUsers className="text-4xl text-orange-400" />,
  },
  {
    title: 'Descuentos y premios',
    description: 'Fideliza a tus clientes mediante descuentos, premios y recompensas.',
    icon: <FaGift className="text-4xl text-orange-400" />,
  },
];

const FourthContainer: React.FC = () => {
  return (
    <section className="bg-[var(--color-gray-dark)] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardData.map((card, index) => (
            <div key={index} className=" cursor-pointer flex flex-col items-center p-6 border rounded-lg shadow-md hover:shadow-gray-100 transition">
              <div className="mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
              <p className="w-[80%] text-white text-center">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link className="bg-orange-400 text-white font-bold px-6 py-3 rounded-md inline-block hover:bg-orange-500 transition" href="/planes">
              ¡Comienza a Fidelizar Gratis!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FourthContainer;
