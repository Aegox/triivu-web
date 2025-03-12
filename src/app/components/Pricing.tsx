import React from  "react";
import PricingCard from  "./PricingCard";

const cuentaGratuita = {
  title: "CUENTA GRATUITA",
  description: "Ideal para prueba de funcionalidades",
  features: [
    "Solo para nuevos clientes",
    "Acceso a todo nuestro portafolio de servicios.",
    "Sin compromiso por adelantado, puedes cancelar cuando quieras.",
    "No te pediremos datos de cobro, (Tarjeta de Crédito, Pse)",
  ],
  footerTextTitle: "CUENTA CON $100.000 EN CRÉDITOS ",
  footerTextInfo: "Hasta agotar tus $100.000 en créditos",
  buttonText: "¡Registrate!",
};

const pagoPorUso = {
  title: "PAGO POR USO",
  description:
    "Ideal para personas que quieren exponenciar sus negocios sin gastar mucho y aprovechando al máximo sus clientes",
  features: [
    "Accede a nuestro catálogo de servicios",
    "Recargas créditos y se gastan únicamente cuando obtienes Recargas para flujo de caja anticipado.",
    "Soporte tecnico disponible",
    "URL Personalizada",
    "Personalización de espacio con el branding de tu marca.",
  ],
  footerTextTitle: "PAGA SOLO POR EL DINERO QUE TE ENTRA ",
  footerTextInfo: "Flujo de caja ilimitado y recompensas ilimitadas para clientes.",
  buttonText: "¡Registrate!",
};

const Pricing: Reac.FC = () => {
  return (
    <div className="flex flex-col items-center py-28 px-5 xl:py-32 xl:px-20 w-full h-full">
      <h1 className="xl:w-[80%] text-2xl xl:text-3xl font-bold text-gray-800 mb-4 text-center">Apalancate de tus clientes, y ten hasta un 30% de tu ventas mensuales desde los primeros días del mes en tu flujo de caja.</h1>
      <p className="xl:w-[80%] text-lg text-center text-gray-600 mb-20">¡COMIENZA GRATIS! TE DAMOS UNA CUENTA CON $100.000 EN CRÉDITOS PARA QUE EMPIECES A RECIBIR FLUJO DE CAJA ANTICIPADO DE TUS CLIENTES FRECUENTES COMIENCES A CREAR TU COMUNIDAD Y GENERAR RECOMPRA.</p>
      <div className="flex flex-col justify-center xl:flex-row gap-8 w-full h-full">
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
