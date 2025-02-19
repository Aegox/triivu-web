"use client";
import React from 'react';
import Link from 'next/link';
import CategoryButton from "../Common/CategoryButton";
import { dropdownData , DropdownItem } from "../Common/constants"
import { FiMenu, FiX } from 'react-icons/fi';

interface MobileNavbarProps {
  activeMenu: string | null;
  toggleMenu: (menu: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  activeMenu,
  toggleMenu,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  return (
    <>
      {/* Barra Principal Mobile */}
      <div className="flex justify-between items-center max-w-[85%] mx-auto p-[var(--navbar-padding)] relative z-[var(--navbar-z-index)]">
        <Link
          href="/"
          className="text-[var(--color-primary)] text-2xl font-bold cursor-pointer mr-4"
        >
          TRIIVU
        </Link>
        <button
          className="text-[var(--color-white)] relative z-[var(--navbar-z-index)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menú overlay Mobile */}
      <div
        className={`bg-[var(--color-black)] text-[var(--color-white)] w-full fixed top-0 left-0 h-screen flex flex-col pt-20 px-4 transition-transform duration-[var(--transition-duration)] ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
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
          {dropdownData.fidelizacion.map((item: DropdownItem) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-center px-4 py-2 hover:bg-[var(--color-gray-800)]"
              >
                <Icon className="mr-2" />
                {item.label}
              </Link>
            );
          })}
        </div>

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
          {dropdownData.referidos.map((item: DropdownItem) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-center px-4 py-2 hover:bg-[var(--color-gray-800)]"
              >
                <Icon className="mr-2" />
                {item.label}
              </Link>
            );
          })}
        </div>

        <CategoryButton
          id="planes"
          label="Planes"
          active={false}
          variant="mobile"
          href="/planes"
        />

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
    </>
  );
};
export default MobileNavbar;

