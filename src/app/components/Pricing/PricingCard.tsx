import React from 'react';
import Link from 'next/link';
import ListItem from './ListItem'; 

interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  footerTextTitle: string;
  footerTextInfo: string;
  buttonText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  features,
  footerTextTitle,
  footerTextInfo,
  buttonText,
}) => {
  return (
    <div className="w-full hover:bg-gray-100 bg-white shadow-lg h-full md:h-[650px] flex flex-col border border-gray rounded-3xl p-8 lg:w-[45%]">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="font-light text-gray-700 mb-4">{description}</p>
      <ul className="flex flex-col w-full gap-2 list-none p-0">
        {features.map((feature, index) => (
          <ListItem key={index} text={feature} />
        ))}
      </ul>

      <div className="flex flex-col md:mt-auto mt-[50px]">
        <span className="font-bold text-2xl text-orange-400 mt-2">{footerTextTitle}</span>
        <span className="text-sm mt-2">{footerTextInfo}</span>
      <div className="mt-8">
          <Link
            href="/register"
            className=" bg-orange-400 font-bold text-white px-6 py-3 rounded-md inline-block hover:bg-orange-500 transition"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;

