import React from 'react';

interface ServicesCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ title, description, icon }) => {
  return (
    <div className="w-full md:w-[300px] md:h-[300px] ">
      <div className=" hover:bg-gray-100 shadow-md  w-full h-full flex flex-col p-6 pr-10 bg-white rounded-3xl">
        <div className="min-w-[64px] min-h-[64px] mb-4 flex justify-center items-center w-[64px] h-[64px] border-[0.5px] border-orange-100 rounded-lg">
          <img className="w-[30px] h-[30px] " src={icon} alt="a icon of card services"/>
        </div>
          <h5 className="text-[20px] mb-2 font-normal leading-[24px]">
          {title}
        </h5>
        <p className="mb-3 font-light">{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
