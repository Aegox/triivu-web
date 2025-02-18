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
import React from 'react';

export interface DropdownItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

export const dropdownData: Record<string, DropdownItem[]> = {
  fidelizacion: [
    { label: "Tus clientes recargan saldo", icon: FaMoneyBillWave, href: "/fidelizacion/saldo" },
    { label: "Tienes el control del dinero", icon: FaHandHoldingUsd, href: "/fidelizacion/control" },
    { label: "Obtén ventas anticipadas", icon: FaChartLine, href: "/fidelizacion/ventas" },
    { label: "Programa de Fidelización", icon: FaGift, href: "/fidelizacion/programa" },
  ],
  referidos: [
    { label: "Tus clientes traen más clientes", icon: FaUserPlus, href: "/referidos/clientes" },
    { label: "Marketing boca a boca", icon: FaBullhorn, href: "/referidos/marketing" },
    { label: "Ahorro en publicidad", icon: FaPiggyBank, href: "/referidos/ahorro" },
    { label: "Embajadores de tu marca", icon: FaHandshake, href: "/referidos/embajadores" },
  ],
};
