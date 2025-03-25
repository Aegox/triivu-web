import React from "react";
import CategoryButton from "../Common/CategoryButton";
import { dropdownData } from "../../../constants/Navbar";
import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaUserFriends, FaMoneyBillWave } from "react-icons/fa";

const soluciones = dropdownData.soluciones;

interface DesktopNavbarProps {
  activeMenu: string;
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
          <Link href="/">
            <Image src="/logo.svg" alt="the Triivu logo" width={90} height={50} />
          </Link>
          <div className="pl-4 hidden md:flex space-x-4 items-center justify-center">
            <CategoryButton
              id="soluciones"
              label="Soluciones"
              active={activeMenu === "soluciones"}
              onClick={() => toggleMenu("soluciones")}
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
        className="hidden md:block bg-[var(--color-black)] text-[var(--color-white)] shadow-lg w-full transition-all duration-[var(--transition-duration)] ease-in-out overflow-hidden h-full"
        style={{ height: menuHeight }}
      >
        <div className="flex justify-center gap-10 pb-10 px-10" ref={menuRef}>
          {soluciones.map((solucion, index) => (
            <React.Fragment key={index}>
              {/* Sección */}
              <section className="group flex flex-col gap-4 w-[280px] cursor-pointer">
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
                <div className="flex items-center px-2 pt-12 h-[150px]">
                  <div className="w-[2px] h-full bg-white"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>      
      </div>
    </>
  );
};

export default DesktopNavbar;

