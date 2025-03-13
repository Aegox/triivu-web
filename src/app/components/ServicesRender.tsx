import React from "react";
import Services from "./Services";

export interface cardDataProps {
  title: string;
  description: string;
  icon: string;
}

const cardDataFree: cardDataProps = {
  title: "Servicios Gratuitos",
  description: "Estos productos son gratuitos hasta que acaben tus créditos."
}

const cardDataPay: cardDataProps = {
  title: "Servicios de Plan Pago",
  description: ""
}

const cardsData: cardDataProps[] = [
  {
    title: 'TARJETA DE CLIENTE FRECUENTE',
    description: 'Inscribe a tus clientes más fieles y comienza a crear tu comunidad.',
    icon: "/tarjeta.png",
  },
  {
    title: 'OBTIENES FLUJO DE CAJA ANTICIPADO',
    description: 'Tus clientes recargan y tú tienes dinero anticipado. Obtén anticipos de dinero de hasta un 500% de tu negocio.',
    icon: "/cash.png",
  },
  {
    title: 'RECOMPENSA',
    description: 'Tus clientes obtienen puntos y dinero en su cuenta para gastar en tu negocio, por cada compra.',
    icon: "/regalo.png",
  },
  {
    title: 'APP DE RECARGA PARA CLIENTES',
    description: 'Tendrás una aplicación con tu logo, donde tus clientes podrán ver su saldo y sus compras.',
    icon: "/celular.png",
  },
  {
    title: 'APLICACIÓN DE GESTIÓN',
    description: 'Toma decisiones en tiempo real, revisa flujos de dinero y crea campañas publicitarias con tus clientes.',
    icon: "/gestion.png",
  },
  {
    title: 'REFERIDOS',
    description: 'Tus clientes refieren a sus familiares y amigos, reciben recompensas y saldo en sus cuentas y tu obtienes un nuevo cliente para tu comunidad.',
    icon: "/referidos.png",
  },
];

const cardsData2: cardDataProps = [
  {
    title: 'URL PERSONALIZADA',
    description: 'Aplicación directamente con tu dominio y URL.',
    icon: '/url.png',
  },
  {
    title: 'PERSONALIZACIÓN DE APP',
    description: 'Puedes elegir los colores, branding y fondo de la app que tendrán tus clientes.',
    icon: '/celular2.png',
  },
  {
    title: 'TARJETA DE CLIENTE FRECUENTE',
    description: 'Inscribe todos los clientes que quieras y crea una gran comunidad, sin límite.',
    icon: '/tarjeta.png',
  },
  {
    title: 'OBTIENES FLUJO DE CAJA ANTICIPADO',
    description: 'Tus clientes recargan ilimitadamente y tú obtienes dinero de flujo de caja y compras futuras sin límite.',
    icon: '/cash.png',
  },
  {
    title: 'RECOMPENSA Y NIVELES DE FIDELIZACIÓN',
    description: 'Tus clientes obtienen puntos y dinero en su cuenta para gastar en tu negocio, por cada compra.',
    icon: '/regalo.png',
  },
];

const ServicesRender: React.FC = () => {
  return (
    <div>
      <Services cardsData={cardsData} title={cardDataFree.title} description={cardDataFree.description}/>     
      <Services cardsData={cardsData2} title={cardDataPay.title} description={cardDataPay.description}/>
    </div>
  );
};

export default ServicesRender;
