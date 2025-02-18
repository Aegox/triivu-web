"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import CategoryButton from '../Common/CategoryButton';
import SessionLinks from '../Common/SessionLinks';
import DesktopDropdown from "./DesktopDropdown";
import { dropdownData } from '../constants'; // Importación del archivo de constantes

export interface DropdownItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const DesktopNavbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState<number>(0);
  const [isNavbarBlack, setIsNavbarBlack] = useState(false);

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
    <nav
      className={`hidden md:block fixed top-0 left-0 w-full ${navbarStyle} z-[var(--navbar-z-index)] transition-colors duration-[var(--transition-duration)]`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full p-[var(--navbar-padding)] relative z-[var(--navbar-z-index)]">
        <div className="flex items-center">
          <Link href="/" className="text-[var(--color-primary)] text-2xl font-bold cursor-pointer mr-4">
            TRIIVU
          </Link>
          <div className="flex space-x-4 items-center justify-center">
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
        <SessionLinks variant="desktop" />
      </div>

      <div
        className="bg-[var(--color-black)] text-[var(--color-white)] shadow-lg w-full transition-all duration-[var(--transition-duration)] ease-in-out overflow-hidden"
        style={{ height: menuHeight }}
      >
        <div className="max-w-7xl mx-auto py-4 px-0" ref={menuRef}>
          {activeMenu === 'fidelizacion' && (
            <DesktopDropdown items={dropdownData.fidelizacion} />
          )}
          {activeMenu === 'referidos' && (
            <DesktopDropdown items={dropdownData.referidos} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;

