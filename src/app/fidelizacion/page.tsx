import Link from 'next/link';

export default function Fidelizacion() {
  return (
    <div>
      {/* Primer Contenedor */}
      <section
        className="min-h-screen flex justify-center items-center lg:px-10 lg:gap-10"
      >
        <div className="px-4">
          <h1 className="text-4xl font-bold mb-6">
            AUMENTA TUS INGRESOS EXPONENCIALMENTE
          </h1>
          <p className="mb-10 lg:w-[80%]">
            Aumenta tus ingresos mensuales con las recargas de tus clientes y triplica la recurrencia.
          </p>
          <Link
            href="/planes"
            className="px-6 py-3 bg-[var(--color-primary)] rounded-full font-bold"
          >
            ¡Conozcámonos más!
          </Link>
        </div>
         <div className="bg-black rounded-3xl w-1/2 ">
          <img src="" alt="a fidelizacion imagen" className=""/>
        </div>
      </section>

      {/* Segundo Contenedor */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">CREA TU COMUNIDAD</h2>
          <p className="mb-8">
            Utiliza nuestra App para crear cuentas a todos tus clientes fieles, haz que se sientan parte de tu negocio, consiéntelos y fidelízalos mediante: descuentos, recompensas y regalos por su fidelidad.
          </p>
          <Link
            href="/planes"
            className="px-6 py-3 bg-[var(--primary-color)] text-white rounded-full font-bold"
          >
            ¡Conozcámonos más!
          </Link>
        </div>
      </section>

      {/* Tercer Contenedor */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              FIDELIZA A TUS CLIENTES
            </h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>
                <strong>Status de tus clientes:</strong> Dale un status a tus clientes según su recurrencia.
              </li>
              <li>
                <strong>Descuentos:</strong> Descuentos por recargas y según el status.
              </li>
              <li>
                <strong>Premios:</strong> Recompensa a tus clientes por cumplir desafíos (8 visitas en 1 mes, etc.).
              </li>
              <li>
                <strong>Ofertas:</strong> Ofertas por tiempo limitado y relámpago.
              </li>
            </ul>
            <Link
              href="/start"
              className="mt-6 inline-block px-6 py-3 bg-[var(--primary-color)] text-white rounded-full font-bold"
            >
              ¡Empieza ahora y prueba Gratis!
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/fidelizacion-clientes.jpg"
              alt="Fideliza a tus clientes"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Cuarto Contenedor */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Lleva el control del dinero</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold text-xl mb-2">Recargas</h3>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold text-xl mb-2">Compras</h3>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold text-xl mb-2">Dinero Residual</h3>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold text-xl mb-2">Control de descuentos y premios</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Quinto Contenedor */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Simplifica la creación de una aplicación exclusiva para tu comunidad
          </h2>
          <p className="mb-8">
            Utiliza nuestro gestor de aplicaciones para crear tu aplicación personalizada, con unos pocos clicks y sin saber de programación.
          </p>
          <Link
            href="/register"
            className="px-6 py-3 bg-[var(--primary-color)] text-white rounded-full font-bold"
          >
            ¡Comienza Gratis!
          </Link>
        </div>
      </section>
    </div>
  );
}

