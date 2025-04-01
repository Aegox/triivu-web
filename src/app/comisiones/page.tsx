import Presentation from "../components/Presentation";
import Services from "../components/Services/Services";

const data1 = {
  title: "MAXIMIZA TUS VENTAS Y OPTIMIZA TUS RECURSOS, MIENTRAS AHORRAS EN PUBLICIDAD.",
  content: "Solo pagas por cada cliente que llega, recarga o compra efectiva, los clientes de tu comunidad pueden ser tus embajadores de marca, los comerciales, pueden ganar por alianzas efectivas y los creadores de contenido o influenciadores, por resultados medibles.",
  button: "¡Conoce más!",
  img: "/maximiza-ventas.jpg"
};

const data2 = {
  title: "MIDE LAS VENTAS POR REFERIDOS, COMERCIALES E INFLUENCIADORES.",
  content: "<p style='width:89%;'>Controla todos tus ingresos y costos por referidos, que han llegado a través de tus clientes frecuentes, comerciales o influenciadores, te damos la herramienta para que tomes mejores decisiones y tu negocio sea más rentable y exponencial.</p>",
  button: "¡Contáctenos para saber más!",
  img: "/metricas.jpg"
};

const data3 = {
  title: "PAGAS SOLO POR RESULTADOS",
  content: "Podrás trabajar con creadores de contenido e influenciadores pagando solamente por clientes efectivos y resultados medibles, ya que ellos generan comisiones únicamente, por las personas que abran una nueva cuenta con su código de referido.",
  button: "¡Comienza a crecer!",
  img: "/pago-por-resultados.jpg"
};

const data4 = {
  title: "<p style='width:89%;'>PAGAS POR ALIANZAS EFECTIVAS Y CUENTAS EMPRESARIALES RECARGADAS.</p>",
  content: "<p style='width:89%;'>Tus comerciales, cierran alianzas estratégicas con instituciones, empresas o grupos, y solo pagas por las recargas de estas nuevas cuentas, entre más recarguen más gana tu negocio, y más gana tu comercial.</p>",
  button: "¡Comienza a crecer!",
  img: "/alianzas-efectivas.jpg"
};

const data5 = {
  title: "TUS CLIENTES SON TUS EMBAJADORES DE MARCA",
  content: "Tus clientes ganan comisiones en dinero por traer nuevos clientes que abran una nueva cuenta y recarguen en ella.",
  button: "¡Comienza a crecer!",
  img: "/embajadores.jpg"
};

export const cardsData6: cardDataProps[] = [
  {
    title: "INFLUENCIADORES",
    description: "Trabaja con creadores de contenido, sin tener que pagar, únicamente por conversiones y resultados.",
    icon: "/influenciadores.png",
  },
  {
    title: "ALIANZAS CORPORATIVAS",
    description: "Crea alianzas que formen una base sólida de consumo recurrente, sin tener que gastar muchos recursos, solo pagas por comisiones y recargas.",
    icon: "/alianzas-corporativas.png",
  },
  {
    title: "EMBAJADORES DE MARCA",
    description: "Tus clientes pueden referir amigos y familiares o incluso hacer contenido en redes, y solo pagas por los clientes nuevos y la primera recarga.",
    icon: "/embajadores-marca.png",
  },
  {
    title: "MÉTRICAS Y DECISIONES",
    description: "Tendrás un panel de estadísticas, donde podrás medir todo y tomar mejores decisiones.",
    icon: "/metricas-decisiones.png",
  }
];

const Comisiones: React.FC = () => {
  return (
    <div>
      {/* Primer Contenedor */}
      <Presentation title={data1.title} content={data1.content} button={data1.button} img={data1.img} styles="text-gray-800 md:pt-40" />
      <Presentation title={data2.title} content={data2.content} button={data2.button} img={data2.img} styles="bg-gray-900 text-white" reverse={true} />
      <Presentation title={data3.title} content={data3.content} button={data3.button} img={data3.img} styles="text-gray-800 bg-white" />
      <Presentation title={data4.title} content={data4.content} button={data4.button} img={data4.img} styles="bg-gray-100 text-white bg-gray-800" reverse={true}/>
      <Presentation title={data5.title} content={data5.content} button={data5.button} img={data5.img} styles="text-gray-800 bg-white" />
      <section className="py-10 md:py-28 bg-gray-100">
         <Services
            styles="bg-gray-100 lg:px-0 xl:px-0 justify-center items-center"
            cardsData={cardsData6}
            title="TODO LO QUE PUEDES HACER CON ESTE MÓDULO ESPECIALIZADO EN CRECIMIENTO BAJO RESULTADOS."
            description=""
            cardImgMode="unborder"
            fontMode="bold" 
            hoverMode="none"
        />
      </section>
    </div>
  );
};

export default Comisiones;


