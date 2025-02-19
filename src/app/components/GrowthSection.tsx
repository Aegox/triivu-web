import Link from 'next/link';

const CommunityGrowthSection = () => {
  return (
    <section className="flex flex-col md:gap-8 gap-10 h-full md:h-[600px] md:flex-row items-center justify-between px-6 py-24 md:px-16 bg-[#0A0A0A]">
      {/* Texto */}
      <div className="md:w-1/3 text-center md:text-left">
        <h2 className="text-4xl font-bold text-white mb-8">
          CREA UNA COMUNIDAD, QUE CREZCA Y TE HAGA CRECER
        </h2>
        <p className="text-white mb-12">
          Personas que amen tu producto y sean clientes frecuentes, no solo te darán dinero por anticipado antes de comprar, sino que invitan amigos a probar tu producto o servicio.
        </p>
        <Link href="/planes" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-colors text-md whitespace-nowrap">
            ¡Comienza ahora!
        </Link>
      </div>
      
      {/* Video */}
      <div className="md:w-1/2 md:h-full mt-6 md:mt-0 flex justify-center">
        <video className="w-full rounded-lg shadow-lg" autoPlay loop muted>
          <source src="/community.webm" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </div>
    </section>
  );
};

export default CommunityGrowthSection;

