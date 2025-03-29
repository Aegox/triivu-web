import React from 'react';
import Link from 'next/link';

interface dataPrenset {
    title: string;
    content: string;
    button: string;
    img: string;
    reverse: boolean;
    styles: string;
}

const Presentation: React.FC<dataPresent> = ({ title , content , button , img , reverse , styles }) => {
  return (
    <section className={`${styles ? styles : ""} bg-gray-100 py-10 md:py-28 px-4`}>
      <div className={`max-w-6xl gap-5 mx-auto flex flex-col ${ !reverse ? "md:flex-row" : "md:flex-row-reverse"} items-center`}>
        {/* Contenedor de la imagen: debe ser relative y tener altura definida */}
        <div className="w-full md:w-1/2 relative h-auto md:h-[400px]">
          <img src={img} alt="Expande tu negocio" className="w-auto h-auto max-h-[365px] rounded-md "/>
        </div>
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 md:pl-12 md:pt-0 pt-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className=" text-lg text-gray-600 mb-8">{content}</p>
          <Link
            className="bg-orange-400 text-white px-6 py-3 font-bold rounded-md inline-block hover:bg-orange-500 transition"
            href="/planes"
          >
            {button}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Presentation;

