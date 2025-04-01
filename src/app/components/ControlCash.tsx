import React from "react";

const data = ["Recargas", "Compras" , "Dinero Residual", "Control de descuentos" , "Control de premios"];

const ControlCash: React.FC = () => {
    return (
        <section className="px-5 flex py-8 xl:py-12 items-center justify-center">
            <ul className="flex flex-wrap  gap-4 ">
                {data.map((i, index) => (
                    <li key={index} className="w-full md:w-auto cursor-pointer text-[var(--heading-color)] bg-white hover:bg-orange-400 rounded-3xl border-2 border-orange-400 hover:text-white px-10 py-3 text-center ">
                        {i}
                    </li>
                ))}
            </ul>
        </section>
    )
};

export default ControlCash;

