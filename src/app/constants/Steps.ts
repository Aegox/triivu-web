interface Step {
  title: string;
  description: string;
  img: string;
}

export const steps: Step[] = [
  {
    title: 'REFERIR',
    description: 'Tus clientes refieren a sus familiares y amigos para que obtengan una Tarjeta virtual.',
    img: "/step1.webp",
  },
  {
    title: 'RECOMPENSA',
    description:
      'Tus clientes obtienen puntos y dinero en su cuenta para gastar en tu negocio.',
    img: "/step2.webp",
  },
  {
    title: 'NUEVO CLIENTE',
    description: 'El referido creará una tarjeta y tendrá sus datos y su primera recarga.',
    img: "/step3.webp",
  },
  {
    title: 'CRECE',
    description: 'Los nuevos clientes se fidelizan con tu negocio y la cadena vuelve a iniciar.',
    img: "/step4.webp",
  },
];
