interface PricingCardData {
  title: string;
  description: string;
  features: string[];
  footerTextTitle: string;
  footerTextInfo: string;
  buttonText: string;
}

export const cuentaGratuita: PricingCardData = {
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

export const pagoPorUso: PricingCardData = {
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
