import React from 'react';
import ServicesCard from './ServicesCard';
import { cardDataProps } from '../../constants/Services';

interface ServicesProps {
  cardsData: cardDataProps[];
  title: string;
  description: string;
  styles?: string;
  cardImgMode: "normal" | "unborder";
  fontMode: "light" | "bold";
  hoverMode: "active" | "none";
}

const Services: React.FC<ServicesProps> = ({ cardsData , title , description , styles , cardImgMode , fontMode , hoverMode }) => {
  return (
    <div className={` ${ styles ? styles : ""} flex flex-col justify-center px-5 lg:px-[10%] w-full h-full`}>
      <h1 className="text-2xl text-center xl:text-3xl font-bold text-[var(--heading-color)] mb-4 ">{title}</h1>
      <p className="font-light text-lg text-[var(--heading-color)] mb-10">{description}</p>
      <div className="flex flex-wrap gap-5 ">
        {cardsData.map((card, index) => (
          <ServicesCard key={index} title={card.title} description={card.description} icon={card.icon} cardImgMode={cardImgMode} hoverMode={hoverMode} fontMode={fontMode}/>
        ))}
      </div>
    </div>
  );
};

export default Services;
