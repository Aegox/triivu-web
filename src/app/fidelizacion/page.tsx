import Presentation from "../components/Presentation";
import Services from "../components/Services/Services";
import { cardsData3 } from "../constants/Services";
import React from "react";

const data = {
    title: "AUMENTA TUS INGRESOS EXPONENCIALMENTE",
    content: "Aumenta tus ingresos mensuales con las recargas de tus clientes y triplica la recurrencia.",
    button: "Comienza gratis!",
    img: "/fidelizacion2.jpg"
}

const data1 = {
    title: "CREA TU COMUNIDAD",
    content: "Utiliza nuestra App para crear cuentas a todos tus clientes fieles, haz que se sientan parte de tu negocio, consientelos y fidelizalos mediante: descuentos, recompensas y regalos por su fidelidad.",
    button: "Conoce más!",
    img: "/comunidad.jpg"
}

const ServicesInfo = {
    title: "FIDELIZA A TUS CLIENTES"
}

const Fidelizacion: React.FC = () => {
    return (
        <div>
            <Presentation img={data.img} title={data.title} content={data.content} button={data.button} reverse={true} styles="md:pt-40 pt-32"/>
            <Presentation img={data1.img} title={data1.title} content={data1.content} button={data1.button} reverse={false} styles="md:py-10 bg-white"/>
            <section className="md:py-20 bg-gray-50">
                <Services styles="lg:px-0 justify-center items-center" cardsData={cardsData3} title={ServicesInfo.title} description="" />
            </section>
        </div>
    )
}

export default Fidelizacion;
