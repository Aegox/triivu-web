import React from "react";
import Link from "next/link";

const data = {
    title: "",
    icon: "/presentacion.svg"
}

const AppCustom: React.FC = () => {
    return (
        <section className="px-3 xl:px-0 py-12 xl:py-28 bg-[var(--color-primary)] flex flex-col items-center justify-center gap-8">
          <h1 className="xl:w-[70%] text-center text-xl xl:text-2xl font-light text-white">Utiliza nuestro gestor de aplicaciones, para crear tu aplicación personalizada, con unos pocos clicks, y lo mejor <strong>sin saber de programación.</strong></h1>
          <img src={data.icon} alt="un icono de empresa " className="w-[50px] h-auto  "/>
          <Link href="/planes" className="bg-white hover:text-white hover:bg-black text-[var(--heading-color)] font-bold py-4 px-6 rounded-lg shadow-lg transition-colors text-md whitespace-nowrap">
            ¡Comienza gratis!
          </Link>
        </section>
    )
};

export default AppCustom;
