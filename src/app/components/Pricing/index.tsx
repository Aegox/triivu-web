import React from  "react";
import PricingCard from  "./PricingCard";
import {cuentaGratuita , pagoPorUso } from  "../../constants/Pricing";

const Pricing: React.FC = () => {

  return (
    <div id="planes" className="flex flex-col items-center py-28 px-5 xl:py-32 xl:px-20 w-full h-full">
      <h1 className="md:w-[80%] text-2xl xl:text-3xl font-bold text-gray-800 mb-4 text-center">Apalancate de tus clientes, y ten hasta un 30% de tu ventas mensuales desde los primeros días del mes en tu flujo de caja.</h1>
      <p className="md:w-[80%] text-lg text-center text-gray-600 mb-20">¡COMIENZA GRATIS! TE DAMOS UNA CUENTA CON $100.000 EN CRÉDITOS PARA QUE EMPIECES A RECIBIR FLUJO DE CAJA ANTICIPADO DE TUS CLIENTES FRECUENTES COMIENCES A CREAR TU COMUNIDAD Y GENERAR RECOMPRA.</p>
      <div className="flex flex-col items-center justify-center xl:flex-row gap-6 w-full h-full">
        <PricingCard 
          title={cuentaGratuita.title}
          description={cuentaGratuita.description}
          features={cuentaGratuita.features}
          footerTextTitle={cuentaGratuita.footerTextTitle}
          footerTextInfo={cuentaGratuita.footerTextInfo}
          buttonText={cuentaGratuita.buttonText}
        />
        <PricingCard 
          title={pagoPorUso.title}
          description={pagoPorUso.description}
          features={pagoPorUso.features}
          footerTextTitle={pagoPorUso.footerTextTitle}
          footerTextInfo={pagoPorUso.footerTextInfo}
          buttonText={pagoPorUso.buttonText}
        />
      </div>
    </div>
    );
};

export default Pricing;
