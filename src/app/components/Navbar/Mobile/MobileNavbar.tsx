"use client"
import React from 'react';
import Link from 'next/link';
import CategoryButton from "../Common/CategoryButton";
import { dropdownData } from "../../../constants/Navbar";
import { FiMenu, FiX } from 'react-icons/fi';
import Image from "next/image";
import { FaHeart, FaUserFriends, FaMoneyBillWave } from "react-icons/fa";
import useScrollToPricing from "../../../constants/useScroll";


const soluciones = dropdownData.soluciones;

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
  const { scrollToPricing } = useScrollToPricing();
  const handlePlanesClick = () => {
    scrollToPricing();
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Barra Principal Mobile */}
      <div className="flex justify-between items-center max-w-[85%] mx-auto py-[16px] relative z-[var(--navbar-z-index)]">
        <Link href="/">
          <Image src="/logo.svg" alt="the Triivu logo" width={90} height={50} />
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
        className={`bg-[var(--color-black)] text-[var(--color-white)] w-full fixed top-0 left-0 flex flex-col pt-20 px-4 transition-transform duration-[var(--transition-duration)] ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ height: "100dvh" }}
      >
        <CategoryButton
          id="soluciones"
          label="Soluciones"
          active={activeMenu === 'soluciones'}
          onClick={() => toggleMenu('soluciones')}
          variant="mobile"
        />
        <div
          className={`flex flex-col w-full gap-5 overflow-scroll transition-all duration-[var(--transition-duration)] ${
            activeMenu === 'soluciones' ? 'max-h-full flex' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col justify-center gap-10 pt-2 pb-8 px-10">
            {soluciones.map((solucion, index) => (
              <React.Fragment key={index}>
                {/* Sección */}
                <section className="group flex flex-col gap-4 w-full cursor-pointer">
                  <div className="flex items-center justify-center gap-2 relative">
                    {index === 0 && (
                      <FaHeart className="text-orange-400 text-xl" />
                    )}
                    {index === 1 && (
                      <FaUserFriends className="text-orange-400 text-xl" />
                    )}
                    {index === 2 && (
                      <FaMoneyBillWave className="text-orange-400 text-xl" />
                    )}
                    <span className="text-lg text-orange-400 relative inline-block">
                      {solucion.title}
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </span>
                  </div>
                  <ul className="flex list-disc flex-col gap-1 text-sm">
                    {solucion.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>

                {/* Divisor excepto después del último ítem */}
                {index < soluciones.length - 1 && (
                  <div className="flex items-center px-2 w-full">
                    <div className="h-[2px] w-full bg-white"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <CategoryButton
          id="planes"
          label="Planes"
          active={false}
          variant="mobile"
          href="/planes"
        />

        <div className="mt-auto flex flex-wrap flex-col md:flex-row md:justify-center items-center space-y-4 md:space-y-0 md:space-x-4 px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
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

