import React from "react";
import Presentation from "../components/Presentation";

const data = {
    title: "AUMENTA TUS INGRESOS EXPONENCIALMENTE",
    content: "Aumenta tus ingresos mensuales con las recargas de tus clientes y triplica la recurrencia.",
    button: "Comienza gratis!",
    img: "/fidelizacion2.jpg"
};


const Referidos: React.FC = () => {
    return (
        <section>
            <Presentation title={data.title} content={data.content} img={data.img} styles="" />
        </section>
    )
}

export default Referidos;
