import CategoryButton from "../Common/CategoryButton"
import { dropdownData , DropdownItem } from "../Common/constants"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  console.log(menuHeight)
  return (
    <>
      {/* Barra Principal Desktop */}
      <div className="max-w-[85%] mx-auto flex justify-between items-center w-full p-[var(--navbar-padding)] relative z-[var(--navbar-z-index)]">
        <div className="flex items-center">
          <Link
            href="/"
            className=""
          >
            <Image src="/logo.svg" alt="the Triivu logo" width={90} height={50}/>
          </Link>
            <div className="pl-4 hidden md:flex space-x-4 items-center justify-center">
            <CategoryButton
              id="soluciones"
              label="Soluciones"
              active={activeMenu === 'soluciones'}
              onClick={() => toggleMenu('soluciones')}
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
        style={{ height: menuHeight}}
      >
        <div className="flex justify-center gap-10 mx-auto py-2 px-20" ref={menuRef}>
          {dropdownData.soluciones.map((item: DropdownItem , index : number) => {
                  return (
                    <section key={index} className="flex flex-col gap-2 justify-between items-center w-full">
                      <span className="text-center py-2 text-lg">{item.title}</span>
                      <ul className="flex list-disc flex-col gap-1 text-sm">
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
      </div>
    </>
  );
};
export default DesktopNavbar;
