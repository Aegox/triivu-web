"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import {
  FaMoneyBillWave,
  FaHandHoldingUsd,
  FaChartLine,
  FaGift,
  FaUserPlus,
  FaBullhorn,
  FaPiggyBank,
  FaHandshake
} from 'react-icons/fa';
import { MdLoyalty } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';

interface CategoryButtonProps {
  id: string;
  label: string;
  Icon?: React.ComponentType<{ className?: string }>;
  active: boolean;
  onClick?: () => void;
  variant: 'desktop' | 'mobile';
  showIcon?: boolean;
  href?: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  label,
  Icon,
  active,
  onClick,
  variant,
  showIcon = false,
  href,
}) => {
  const baseClasses =
    variant === 'desktop'
      ? "text-[var(--color-white)] hover:bg-[var(--color-gray-700)] px-3 py-2 rounded-md focus:outline-none"
      : "text-xl py-4 focus:outline-none text-[var(--color-white)] hover:bg-[var(--color-gray-700)]";
  const content = (
    <>
      <div className="flex items-center justify-center space-x-2">
        {showIcon && Icon && <Icon className="text-[var(--color-white)]" />}
        <span>{label}</span>
      </div>
      <span
        className={`block h-0.5 bg-[var(--color-white)] transition-all duration-[var(--transition-duration)] mt-1 ${active ? 'w-full' : 'w-0'}`}
      ></span>
    </>
  );
  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState<number>(0);
  const [isNavbarBlack, setIsNavbarBlack] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (menu: string) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
      setIsNavbarBlack(false);
    } else {
      setActiveMenu(menu);
      setIsNavbarBlack(true);
    }
  };

  useEffect(() => {
    if (activeMenu && menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [activeMenu]);

  const navbarStyle = isNavbarBlack ? "bg-[var(--color-black)]" : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 w-full ${navbarStyle} z-[var(--navbar-z-index)] transition-colors duration-[var(--transition-duration)]`}>
      {/* Barra Principal */}
      <div className="max-w-[85%] mx-auto flex justify-between items-center w-full p-[var(--navbar-padding)] relative z-[var(--navbar-z-index)]">
        <div className="flex items-center">
          <Link href="/" className="text-[var(--color-primary)] text-2xl font-bold cursor-pointer mr-4">
            TRIIVU
          </Link>
          {/* Menú para escritorio sin iconos */}
          <div className="hidden md:flex space-x-4 items-center justify-center">
            <CategoryButton
              id="fidelizacion"
              label="Fidelización"
              active={activeMenu === 'fidelizacion'}
              onClick={() => toggleMenu('fidelizacion')}
              variant="desktop"
            />
            <CategoryButton
              id="referidos"
              label="Referidos"
              active={activeMenu === 'referidos'}
              onClick={() => toggleMenu('referidos')}
              variant="desktop"
            />
            <CategoryButton
              id="planes"
              label="Planes"
              active={false}
              variant="desktop"
              href="/planes"
            />
          </div>
        </div>
        {/* Opciones de sesión para escritorio */}
        <div className="hidden md:flex space-x-4 items-center justify-center">
          <Link href="/login" className="text-[var(--color-white)] hover:bg-[var(--color-gray-700)] px-3 py-2 rounded-md">
            Iniciar Sesión
          </Link>
          <Link href="/register" className="bg-[var(--color-white)] text-[var(--color-primary)] hover:bg-[var(--color-gray-100)] px-3 py-2 rounded-md">
            Registrarse
          </Link>
        </div>
        {/* Botón de hamburguesa para mobile */}
        <button className="md:hidden text-[var(--color-white)] relative z-[var(--navbar-z-index)]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menú desplegable para escritorio */}
      <div
        className="hidden md:block bg-[var(--color-black)] text-[var(--color-white)] shadow-lg w-full transition-all duration-[var(--transition-duration)] ease-in-out overflow-hidden"
        style={{ height: menuHeight }}
      >
        <div className="max-w-7xl mx-auto py-4 px-0" ref={menuRef}>
          {activeMenu === 'fidelizacion' && (
            <div className="flex flex-col md:flex-row justify-around items-center w-full">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <li className="flex items-center justify-center">
                  <FaMoneyBillWave className="mr-2" />
                  <Link href="/fidelizacion/saldo" className="block px-4 py-2 hover:bg-[var(--color-gray-800)]">
                    Tus clientes recargan saldo
                  </Link>
                </li>
                <li className="flex items-center justify-center">
                  <FaHandHoldingUsd className="mr-2" />
                  <Link href="/fidelizacion/control" className="block px-4 py-2 hover:bg-[var(--color-gray-800)]">
                    Tienes el control del dinero
                  </Link>
                </li>
                <li className="flex items-center justify-center">
                  <FaChartLine className="mr-2" />
                  <Link href="/fidelizacion/ventas" className="block px-4 py-2 hover:bg-[var(--color-gray-800)]">
                    Obtén ventas anticipadas
                  </Link>
                </li>
                <li className="flex items-center justify-center">
                  <FaGift className="mr-2" />
                  <Link href="/fidelizacion/programa" className="block px-4 py-2 hover:bg-[var(--color-gray-800)]">
                    Programa de Fidelización
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {activeMenu === 'referidos' && (
            <div className="flex flex-col md:flex-row justify-around items-center w-full">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <li className="flex items-center justify-center">
                  <FaUserPlus className="mr-2" />
                  <Link href="/referidos/clientes" className="block px-4 py-2 hover:bg-[var(--color-gray-800)]">
                    Tus clientes traen más clientes
                  </Link>
                </li>
                <li className="flex items-center justify-center">
                  <FaBullhorn className="mr-2" />
                  <Link href="/referidos/marketing" className="block px-4 py-2 hover:bg-[var(--color-gray-800)]">
                    Marketing boca a boca
                  </Link>
                </li>
                <li className="flex items-center justify-center">
                  <FaPiggyBank className="mr-2" />
                  <Link href="/referidos/ahorro" className="block px-4 py-2 hover:bg-[var(--color-gray-800)]">
                    Ahorro en publicidad
                  </Link>
                </li>
                <li className="flex items-center justify-center">
                  <FaHandshake className="mr-2" />
                  <Link href="/referidos/embajadores" className="block px-4 py-2 hover:bg-[var(--color-gray-800)]">
                    Embajadores de tu marca
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {/* "Planes" es un link directo, se muestra con el mismo componente para mantener la alineación */}
        </div>
      </div>

      {/* Menú overlay para mobile */}
      <div
        className={`md:hidden bg-[var(--color-black)] text-[var(--color-white)] w-full fixed top-0 left-0 h-screen flex flex-col pt-20 px-4 transition-transform duration-[var(--transition-duration)] ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Fidelización */}
        <CategoryButton
          id="fidelizacion"
          label="Fidelización"
          active={activeMenu === 'fidelizacion'}
          onClick={() => toggleMenu('fidelizacion')}
          variant="mobile"
        />
        <div
          className={`flex flex-col w-full overflow-hidden transition-all duration-[var(--transition-duration)] ${
            activeMenu === 'fidelizacion' ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <Link href="/fidelizacion/saldo" className="flex items-center justify-center px-4 py-2 hover:bg-[var(--color-gray-800)]">
            <FaMoneyBillWave className="mr-2" />
            Tus clientes recargan saldo
          </Link>
          <Link href="/fidelizacion/control" className="flex items-center justify-center px-4 py-2 hover:bg-[var(--color-gray-800)]">
            <FaHandHoldingUsd className="mr-2" />
            Tienes el control del dinero
          </Link>
          <Link href="/fidelizacion/ventas" className="flex items-center justify-center px-4 py-2 hover:bg-[var(--color-gray-800)]">
            <FaChartLine className="mr-2" />
            Obtén ventas anticipadas
          </Link>
          <Link href="/fidelizacion/programa" className="flex items-center justify-center px-4 py-2 hover:bg-[var(--color-gray-800)]">
            <FaGift className="mr-2" />
            Programa de Fidelización
          </Link>
        </div>

        {/* Referidos */}
        <CategoryButton
          id="referidos"
          label="Referidos"
          active={activeMenu === 'referidos'}
          onClick={() => toggleMenu('referidos')}
          variant="mobile"
        />
        <div
          className={`flex flex-col w-full overflow-hidden transition-all duration-[var(--transition-duration)] ${
            activeMenu === 'referidos' ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <Link href="/referidos/clientes" className="flex items-center justify-center px-4 py-2 hover:bg-[var(--color-gray-800)]">
            <FaUserPlus className="mr-2" />
            Tus clientes traen más clientes
          </Link>
          <Link href="/referidos/marketing" className="flex items-center justify-center px-4 py-2 hover:bg-[var(--color-gray-800)]">
            <FaBullhorn className="mr-2" />
            Marketing boca a boca
          </Link>
          <Link href="/referidos/ahorro" className="flex items-center justify-center px-4 py-2 hover:bg-[var(--color-gray-800)]">
            <FaPiggyBank className="mr-2" />
            Ahorro en publicidad
          </Link>
          <Link href="/referidos/embajadores" className="flex items-center justify-center px-4 py-2 hover:bg-[var(--color-gray-800)]">
            <FaHandshake className="mr-2" />
            Embajadores de tu marca
          </Link>
        </div>

        {/* Planes */}
        <CategoryButton
          id="planes"
          label="Planes"
          active={false}
          variant="mobile"
          href="/planes"
        />

        {/* Botones de sesión al final en mobile */}
        <div className="mt-auto w-full flex flex-wrap flex-col md:flex-row md:justify-center items-center space-y-4 md:space-y-0 md:space-x-4 pb-10">
          <Link
            href="/login"
            className="w-full md:w-auto text-[var(--color-white)] hover:bg-[var(--color-gray-700)] px-3 py-2 rounded-md text-center"
          >
            Iniciar Sesión
          </Link>
          <Link
            href="/register"
            className="w-full md:w-auto bg-[var(--color-white)] text-[var(--color-primary)] hover:bg-[var(--color-gray-100)] px-3 py-2 rounded-md text-center"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

