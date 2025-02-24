"use client"
import React, { useState, useRef, useEffect } from 'react';
import MobileNavbar from "./Mobile/MobileNavbar"
import DesktopNavbar from "./Desktop/DesktopNavbar"

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [menuHeight, setMenuHeight] = useState<number>(0);
  const [isNavbarBlack, setIsNavbarBlack] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null!);


  const toggleMenu = (menu: string) => {
    setActiveMenu((prev) => (prev === menu ? "": menu));
  };

  useEffect(() => {
    if (activeMenu && menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [activeMenu]);

  // Efecto combinado: navbar negro al hacer scroll o tener un menú activo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 || activeMenu !== "") {
        setIsNavbarBlack(true);
      } else {
        setIsNavbarBlack(false);
      }
    };

    // Ejecuta para establecer el estado inicial
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeMenu]);

  const navbarStyle = isNavbarBlack
    ? "bg-[var(--color-black)]"
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 w-full ${navbarStyle} z-[var(--navbar-z-index)] transition-colors duration-[var(--transition-duration)]`}
    >
      {/* Desktop: se muestra solo en pantallas md en adelante */}
      <div className="hidden md:block">
        <DesktopNavbar
          activeMenu={activeMenu}
          toggleMenu={toggleMenu}
          menuHeight={menuHeight}
          menuRef={menuRef}
        />
      </div>

      {/* Mobile: se muestra solo en pantallas menores a md */}
      <div className="md:hidden">
        <MobileNavbar
          activeMenu={activeMenu}
          toggleMenu={toggleMenu}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>
    </nav>
  );
};

export default Navbar;
