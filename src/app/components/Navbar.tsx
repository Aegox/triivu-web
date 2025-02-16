"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState<number>(0);
  const [isNavbarBlack, setIsNavbarBlack] = useState(false); // Nuevo estado

  const toggleMenu = (menu: string) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
      setIsNavbarBlack(false); // Restablece el color del navbar al cerrar
    } else {
      setActiveMenu(menu);
      setIsNavbarBlack(true); // Cambia el color del navbar al abrir
    }
  };

  useEffect(() => {
    if (activeMenu && menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [activeMenu]);

  const navbarStyle = isNavbarBlack ? 'bg-black' : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 w-full ${navbarStyle} z-50 p-4 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        {/* Contenedor del Logo y Menús a la izquierda */}
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="text-orange-500 text-2xl font-bold cursor-pointer mr-4">
            TRIIVU
          </Link>

          {/* Menús a la izquierda */}
          <div className="hidden md:flex space-x-4 items-center">
            <div className="relative">
              <button
                onClick={() => toggleMenu('fidelizacion')}
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Fidelización
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => toggleMenu('referidos')}
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Referidos
              </button>
            </div>

            {/* Agregar Planes */}
            <div className="relative">
              <button
                onClick={() => toggleMenu('planes')}
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Planes
              </button>
            </div>
          </div>
        </div>

        {/* Contenedor de Iniciar Sesión y Registrarse a la derecha */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/login" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
            Iniciar Sesión
          </Link>
          <Link href="/register" className="bg-white text-orange-500 hover:bg-gray-100 px-3 py-2 rounded-md">
            Registrarse
          </Link>
        </div>
      </div>

      {/* Menú desplegable a ancho completo */}
      <div
        className="bg-black text-white shadow-lg w-full transition-all duration-300 ease-in-out overflow-hidden"
        style={{ height: menuHeight }}
      >
        <div className="max-w-7xl mx-auto py-4 px-0" ref={menuRef}>
          {activeMenu === 'fidelizacion' && (
            <div className="flex flex-col md:flex-row justify-around items-start w-full">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <Link href="/fidelizacion/saldo" className="block px-4 py-2 hover:bg-gray-800 text-white">
                    Tus clientes recargan saldo
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <Link href="/fidelizacion/control" className="block px-4 py-2 hover:bg-gray-800 text-white">
                    Tienes el control del dinero de tu cliente
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <Link href="/fidelizacion/ventas" className="block px-4 py-2 hover:bg-gray-800 text-white">
                    Obtén ventas y flujo de caja anticipado
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <Link href="/fidelizacion/programa" className="block px-4 py-2 hover:bg-gray-800 text-white">
                    Programa de Fidelización, descuentos, puntos y recompensas
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {activeMenu === 'referidos' && (
            <div className="flex flex-col md:flex-row justify-around items-start w-full">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <Link href="/referidos/clientes" className="block px-4 py-2 hover:bg-gray-800 text-white">
                    Tus clientes traen más clientes
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <Link href="/referidos/marketing" className="block px-4 py-2 hover:bg-gray-800 text-white">
                    Marketing boca a boca
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <Link href="/referidos/ahorro" className="block px-4 py-2 hover:bg-gray-800 text-white">
                    Ahorro en publicidad
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <Link href="/referidos/embajadores" className="block px-4 py-2 hover:bg-gray-800 text-white">
                    Tus clientes son los embajadores de tu marca
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {activeMenu === 'planes' && (
            <div className="flex flex-col md:flex-row justify-around items-start w-full">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {/* Aquí puedes agregar los subelementos relacionados con "Planes" */}
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <Link href="/planes/plan1" className="block px-4 py-2 hover:bg-gray-800 text-white">
                    Plan Básico
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <Link href="/planes/plan2" className="block px-4 py-2 hover:bg-gray-800 text-white">
                    Plan Premium
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

