import React from "react";
import Services from "./Services";
import { cardDataFree , cardsData2 , cardDataPay , cardsData } from "../../constants/Services.ts";

const ServicesRender: React.FC = () => {
  return (
    <div className="flex flex-col  gap-28 py-32 bg-gray-50">
      <Services cardsData={cardsData} title={cardDataFree.title} description={cardDataFree.description}/>     
      <Services cardsData={cardsData2} title={cardDataPay.title} description={cardDataPay.description}/>
    </div>
  );
};

export default ServicesRender;
