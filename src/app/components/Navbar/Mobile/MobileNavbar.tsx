import React from 'react';
import Link from 'next/link';
import CategoryButton from "../Common/CategoryButton";
import { dropdownData, DropdownItem } from "../Common/constants";
import { FiMenu, FiX } from 'react-icons/fi';
import Image from "next/image";

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
      <div className="flex justify-between items-center max-w-[85%] mx-auto py-[16px] relative z-[var(--navbar-z-index)]">
        <Link
          href="/"
          className=""
        >
          <Image src="/logo.svg" alt="the Triivu logo" width={90} height={50}/>
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
          {dropdownData.soluciones.map((item: DropdownItem, index : number) => {
                  return (
                    <section key={index} className="flex px-4 flex-col items-center w-full">
                      <span className="w-full py-2 text-lg">{item.title}</span>
                      <ul className="flex list-disc pl-5 flex-col gap-1 w-full text-sm w-full">
                        <li className="">{item.items[0]}</li>
                        <li className="">{item.items[1]}</li>
                        <li className="">{item.items[2]}</li>
                        {item.items[3] && <li className="">{item.items[3]}</li>}
                      </ul>
                      <button className="w-auto sefl-center bg-orange-600 hover:bg-orange-700 text-white font-bold my-5 py-2 px-4 rounded-lg shadow-lg transition-colors text-sm whitespace-nowrap">Mas Información</button>
                    </section>
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
