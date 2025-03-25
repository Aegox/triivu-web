"use client"
import React, { useState } from "react";
import Services from "./Services";
import { cardDataFree, cardsData2, cardDataPay, cardsData } from "../../constants/Services";

const ServicesRender: React.FC = () => {
  const [activeTab, setActiveTab] = useState("paid");

  return (
    <div className="flex flex-col items-center gap-10 py-16 xl:py-32 bg-gray-50">
      {/* Navigation Tabs */}
      <div className="flex gap-4">
        <button
          className={`px-6 py-2 rounded-lg text-lg font-semibold transition-all ${activeTab === "paid" ? "bg-orange-400 text-white" : "bg-gray-200 text-gray-800"}`}
          onClick={() => setActiveTab("paid")}
        >
          Servicios Pagos
        </button>
        <button
          className={`px-6 py-2 rounded-lg text-lg font-semibold transition-all ${activeTab === "free" ? "bg-orange-400 text-white" : "bg-gray-200 text-gray-800"}`}
          onClick={() => setActiveTab("free")}
        >
          Servicios Gratis
        </button>
      </div>
      
      {/* Render Services based on active tab */}
      {activeTab === "paid" ? (
        <Services cardsData={cardsData2} title={cardDataPay.title} description={cardDataPay.description} />
      ) : (
        <Services cardsData={cardsData} title={cardDataFree.title} description={cardDataFree.description} />
      )}
    </div>
  );
};

export default ServicesRender;
