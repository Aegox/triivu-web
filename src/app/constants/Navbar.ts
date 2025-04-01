export interface DropdownItem {
  title: string;
  link: string;
  items: string[];
}

export const dropdownData: Record<string, DropdownItem[]> = {
  soluciones: [
    { 
      title: "Fidelización",
      link: "/fidelizacion",
      items: [
        "Tus clientes recargan saldo",
        "Tu tienes el control del dinero de tu cliente",
        "Obtén ventas y flujo de caja anticipado",
        "Programa de Fidelización,descuentos, puntos, y recompensas"
      ]
    },
    { 
      title: "Referidos", 
      link: "/referidos",
      items: [
        "Tus clientes traen más clientes", 
        "Marketing voz a voz",
        "Ahorro en publicidad",
        "Tus clientes son los embajadores de tu marca"
      ]
    },{ 
      title: "Comisiones", 
      link: "/comisiones",
      items: [
        "Puedes medir las ventas por influenciador o vendedor",
        "Pagas solo bajo resultados",
        "Trabajar con muchos sin gastar dinero (ni afectar tu flujo de caja)"
      ]
    },
  ]
};
