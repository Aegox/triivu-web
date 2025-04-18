import Presentation from "../components/Presentation";
import Services from "../components/Services/Services";
import AppCustom from "../components/AppCustom";
import ControlCash from "../components/ControlCash";
import { cardsData3 } from "../constants/Services";
import React from "react";

const data = {
  title: '<h1>AUMENTA TUS <span style="color: darkorange;">INGRESOS</span> EXPONENCIALMENTE</h1>',
  content: "<p style='width:80%;'>Aumenta tus ingresos mensuales con las recargas de tus clientes y triplica la recurrencia.</p>",
  button: "Comienza gratis!",
  img: "/fidelizacion2.webp"
};

const data1 = {
    title: "CREA TU COMUNIDAD",
    content: "Utiliza nuestra App para crear cuentas a todos tus clientes fieles, haz que se sientan parte de tu negocio, consientelos y fidelizalos mediante: descuentos, recompensas y regalos por su fidelidad.",
    button: "Conoce más!",
    img: "/comunidad.webp"
}

const ServicesInfo = {
    title: "FIDELIZA A TUS CLIENTES"
}

const Fidelizacion: React.FC = () => {
    return (
        <div>
            <Presentation img={data.img} title={data.title} content={data.content} button={data.button} reverse={true} styles="md:pt-40 pt-32 text-gray-800"/>
            <Presentation img={data1.img} title={data1.title} content={data1.content} button={data1.button} reverse={false} styles="md:py-10 bg-white text-gray-800"/>
            <section className="py-10 md:py-28 bg-gray-100">
                <Services styles="bg-gray-100 lg:px-0 xl:px-0 justify-center items-center" cardsData={cardsData3} title={ServicesInfo.title} description="" cardImgMode="unborder" fontMode="bold" hoverMode="none"/>
            </section>
            <ControlCash/>
            <AppCustom/>
        </div>
    )
}

export default Fidelizacion;
