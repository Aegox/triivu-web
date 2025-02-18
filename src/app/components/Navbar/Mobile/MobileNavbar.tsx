"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import CategoryButton from '../Common/CategoryButton';
import SessionLinks from '../Common/SessionLinks';
import MobileDropdown from './MobileDropdown';
import { dropdownData } from '../constants'; // Importación del archivo de constantes

const MobileNavbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (menu: string) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  return (
    <nav className="md:hidden fixed top-0 left-0 w-full bg-[var(--color-black)] text-[var(--color-white)] z-[var(--navbar-z-index)] transition-transform duration-[var(--transition-duration)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full p-[var(--navbar-padding)] relative z-[var(--navbar-z-index)]">
        <Link href="/" className="text-[var(--color-primary)] text-2xl font-bold cursor-pointer mr-4">
          TRIIVU
        </Link>
        <button
          className="text-[var(--color-white)] relative z-[var(--navbar-z-index)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

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
        <MobileDropdown items={dropdownData.fidelizacion} active={activeMenu === 'fidelizacion'} />

        <CategoryButton
          id="referidos"
          label="Referidos"
          active={activeMenu === 'referidos'}
          onClick={() => toggleMenu('referidos')}
          variant="mobile"
        />
        <MobileDropdown items={dropdownData.referidos} active={activeMenu === 'referidos'} />

        <CategoryButton
          id="planes"
          label="Planes"
          active={false}
          variant="mobile"
          href="/planes"
        />

        <SessionLinks variant="mobile" />
      </div>
    </nav>
  );
};

export default MobileNavbar;

