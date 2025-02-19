import CategoryButton from "../Common/CategoryButton"
import { dropdownData } from "../Common/constants"
import React from 'react';
import Link from 'next/link';

interface DesktopNavbarProps {
  activeMenu: string | null;
  toggleMenu: (menu: string) => void;
  menuHeight: number;
  menuRef: React.RefObject<HTMLDivElement>;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
  activeMenu,
  toggleMenu,
  menuHeight,
  menuRef,
}) => {
  return (
    <>
      {/* Barra Principal Desktop */}
      <div className="max-w-[85%] mx-auto flex justify-between items-center w-full p-[var(--navbar-padding)] relative z-[var(--navbar-z-index)]">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-[var(--color-primary)] text-2xl font-bold cursor-pointer mr-4"
          >
            TRIIVU
          </Link>
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
        <div className="hidden md:flex space-x-4 items-center justify-center">
          <Link
            href="/login"
            className="text-[var(--color-white)] hover:bg-[var(--color-gray-700)] px-3 py-2 rounded-md"
          >
            Iniciar Sesión
          </Link>
          <Link
            href="/register"
            className="bg-[var(--color-white)] text-[var(--color-primary)] hover:bg-[var(--color-gray-100)] px-3 py-2 rounded-md"
          >
            Registrarse
          </Link>
        </div>
      </div>

      {/* Menú desplegable Desktop */}
      <div
        className="hidden md:block bg-[var(--color-black)] text-[var(--color-white)] shadow-lg w-full transition-all duration-[var(--transition-duration)] ease-in-out overflow-hidden"
        style={{ height: menuHeight }}
      >
        <div className="max-w-7xl mx-auto py-4 px-0" ref={menuRef}>
          {activeMenu && dropdownData[activeMenu] && (
            <div className="flex flex-col md:flex-row justify-around items-center w-full">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {dropdownData[activeMenu].map((item: DropdownItem) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.href} className="flex items-center justify-center">
                      <Icon className="mr-2" />
                      <Link
                        href={item.href}
                        className="block px-4 py-2 hover:bg-[var(--color-gray-800)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default DesktopNavbar;
