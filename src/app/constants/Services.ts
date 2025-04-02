
export interface cardDataProps {
  title: string;
  description: string;
  icon: string;
}

interface cards {
  title: string;
  description: string;
}

export const cardDataFree: cards = {
  title: "Servicios Gratuitos",
  description: "Estos productos son gratuitos hasta que acaben tus créditos."
}

export const cardDataPay: cards = {
  title: "Servicios de Plan Pago",
  description: ""
}

export const cardsData: cardDataProps[] = [
  {
    title: 'TARJETA DE CLIENTE FRECUENTE',
    description: 'Inscribe a tus clientes más fieles y comienza a crear tu comunidad.',
    icon: "/tarjeta.webp",
  },
  {
    title: 'OBTIENES FLUJO DE CAJA ANTICIPADO',
    description: 'Tus clientes recargan y tú tienes dinero anticipado. Obtén anticipos de dinero de hasta un 500% de tu negocio.',
    icon: "/cash.webp",
  },
  {
    title: 'RECOMPENSA',
    description: 'Tus clientes obtienen puntos y dinero en su cuenta para gastar en tu negocio, por cada compra.',
    icon: "/regalo.webp",
  },
  {
    title: 'APP DE RECARGA PARA CLIENTES',
    description: 'Tendrás una aplicación con tu logo, donde tus clientes podrán ver su saldo y sus compras.',
    icon: "/celular.webp",
  },
  {
    title: 'APLICACIÓN DE GESTIÓN',
    description: 'Toma decisiones en tiempo real, revisa flujos de dinero y crea campañas publicitarias con tus clientes.',
    icon: "/gestion.webp",
  },
  {
    title: 'REFERIDOS',
    description: 'Tus clientes refieren a sus familiares y amigos, reciben recompensas y saldo en sus cuentas y tu obtienes un nuevo cliente para tu comunidad.',
    icon: "/referidos.webp",
  },
];

export const cardsData2: cardDataProps[] = [
  {
    title: 'URL PERSONALIZADA',
    description: 'Aplicación directamente con tu dominio y URL.',
    icon: '/url.webp',
  },
  {
    title: 'PERSONALIZACIÓN DE APP',
    description: 'Puedes elegir los colores, branding y fondo de la app que tendrán tus clientes.',
    icon: '/celular2.webp',
  },
  {
    title: 'TARJETA DE CLIENTE FRECUENTE',
    description: 'Inscribe todos los clientes que quieras y crea una gran comunidad, sin límite.',
    icon: '/tarjeta.webp',
  },
  {
    title: 'OBTIENES FLUJO DE CAJA ANTICIPADO',
    description: 'Tus clientes recargan ilimitadamente y tú obtienes dinero de flujo de caja y compras futuras sin límite.',
    icon: '/cash.webp',
  },
  {
    title: 'RECOMPENSA Y NIVELES DE FIDELIZACIÓN',
    description: 'Tus clientes obtienen puntos y dinero en su cuenta para gastar en tu negocio, por cada compra.',
    icon: '/regalo.webp',
  },
];

export const cardsData3: cardDataProps[] = [
  {
    title: 'STATUS DE CLIENTES',
    description: 'Dale un Status a tus clientes dependiendo su recurrencia de compra.',
    icon: "/client-status.webp",
  },
  {
    title: 'DESCUENTOS',
    description: 'Descuentos por recargas y según el status.',
    icon: "/descuento.webp",
  },
  {
    title: 'PREMIOS',
    description: 'Ofrece premios por cumplir desafíos como: 8 visitas en 1 mes, Gastar más de 1 millón de pesos en 1 mes, Más de 3 visitas en una semana, Referir más de 10 clientes nuevos en 3 meses',
    icon: "/premio.webp",
  },
  {
    title: 'OFERTAS',
    description: 'Ofertas por tiempo limitado para atraer a tus clientes a hacer compras, Ofertas relámpago para consumo en tiempos muertos, ofertas limitadas, para clientes de un Status alto.',
    icon: "/oferta.webp",
  }
];


