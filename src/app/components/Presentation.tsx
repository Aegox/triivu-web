import React from 'react';
import Link from 'next/link';

interface dataPresent {
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
      <div className={`max-w-6xl  mx-auto flex flex-col ${ !reverse ? "md:flex-row" : "md:flex-row-reverse"} items-center`}>
        {/* Contenedor de la imagen: debe ser relative y tener altura definida */}
        <div className="w-full relative h-auto ">
          <img src={img} alt="Expande tu negocio" className="w-[700px] h-auto max-h-[700px] rounded-md "/>
        </div>
        <div className="flex flex-col justify-center items-start w-full  md:pl-12 md:pt-0 pt-5">
          <div className="text-3xl lg:text-4xl font-bold  mb-4" dangerouslySetInnerHTML={{ __html: title }} />
          <div className="text-lg lg:text-xl  mb-8" dangerouslySetInnerHTML={{ __html: content }} />
          <Link
            className="lg:text-xl bg-orange-400 text-white px-6 py-3 font-bold rounded-md inline-block hover:bg-orange-500 transition"
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

