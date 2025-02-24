"use client";
import {
  FaMoneyBillWave,
  FaHandHoldingUsd,
  FaChartLine,
  FaGift,
  FaUserPlus,
  FaBullhorn,
  FaPiggyBank,
  FaHandshake,
} from 'react-icons/fa';

export interface DropdownItem {
  title: string;
  items: string[];
}

export const dropdownData: Record<string, DropdownItem[]> = {
  soluciones: [
    { 
      title: "Fidelización por recarga", 
      items: [
        "Tus clientes recargan saldo",
        "Tu tienes el control del dinero de tu cliente",
        "Obtén ventas y flujo de caja anticipado",
        "Programa de Fidelización,descuentos, puntos, y recompensas"
      ]
    },
    { 
      title: "Referidos", 
      items: [
        "Tus clientes, traen más clientes", 
        "Marketing voz a voz",
        "Ahorro en publicidad",
        "Tus clientes son los embajadores de tu marca"
      ]
    },{ 
      title: "Comisión por venta con influenciadores", 
      items: [
        "Puedes medir las ventas por influenciador o vendedor",
        "Pagas solo bajo resultados",
        "Trabajar con muchos sin gastar dinero (ni afectar tu flujo de caja)"
      ]
    },
  ]
};
