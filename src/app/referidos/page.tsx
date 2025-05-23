import React from "react";
import Presentation from "../components/Presentation";

const data = {
    title: "TUS CLIENTES TRAEN MÁS CLIENTES",
    content: "<p style=' padding-bottom: 20px;'>Las personas que ya conocen tu negocio, invitan familiares, amigos y conocidos, para que prueben eso que a ellos les encanta.</p> <span style='color: darkorange;'>¡Crece tu negocio con tus clientes actuales!</span>",
    button: "Comienza gratis!",
    img: "/atraen-clientes.webp"
};

const data1 = {
    title: "MARKETING VOZ A VOZ",
    content: "<p style='width:80%;'>Ahorra en marketing, publicidad y en tus costos de adquisición de clientes, ya que las personas vienen con una recomendación de alto nivel de un cliente recurrente de tu marca, y son compradores efectivos.</p>",
    button: "Comienza gratis!",
    img: "/marketing-referidos.webp"
};

const data2 = {
    title: "¿CÓMO FUNCIONA?",
    content: "Los clientes que pertenecen a tu comunidad y son fieles, traen personas de confianza a quienes les han hablado de tu producto o servicio, y pueden darles un codigo de membresia, para que se hagan clientes frecuentes, ellos obtienen compensaciones por cada referido,es decir, obtienen recargas en su cuenta para que puedan gastar en tu negocio. <p style='padding-top:10px;'>Ellos refieren, tu ganas nuevos clientes constantemente, que recargaran, consumen y a su vez, podrán referir a otros clientes.</p>",
    button: "¡Comienza a crecer ya!",
    img: "/comunidad-1.webp"
};

const Referidos: React.FC = () => {
    return (
        <div>
            <Presentation title={data.title} content={data.content} button={data.button} img={data.img} styles="md:pt-40 pt-32 text-gray-800" />
            <Presentation title={data1.title} content={data1.content} button={data1.button} img={data1.img} styles="bg-gray-900 text-white" reverse={true} />
            <Presentation title={data2.title} content={data2.content} button={data2.button} img={data2.img} styles="text-gray-800 bg-white" />
        </div>
    )
}

export default Referidos;
