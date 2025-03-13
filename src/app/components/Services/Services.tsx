import React from 'react';
import ServicesCard from './ServicesCard';
import { cardDataProps } from '../../constants/Services';

interface ServicesProps {
  cardsData: cardDataProps[];
  title: string;
  description: string;
}

const Services: React.FC<ServicesProps> = ({ cardsData , title , description }) => {
  return (
    <div className="flex flex-col justify-center bg-gray-50 px-5 lg:px-[10%] w-full h-full ">
      <h1 className="text-2xl xl:text-3xl font-bold text-[var(--heading-color)] mb-4 ">{title}</h1>
      <p className="font-light text-lg text-[var(--heading-color)] mb-10">{description}</p>
      <div className="flex flex-wrap gap-5 ">
        {cardsData.map((card, index) => (
          <ServicesCard key={index} title={card.title} description={card.description} icon={card.icon} />
        ))}
      </div>
    </div>
  );
};

export default Services;
