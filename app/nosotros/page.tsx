// app/nosotros/page.tsx

import Link from 'next/link'

export default function NosotrosPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">

      {/* Cabecera */}
      <section className="py-24 px-6 text-center border-b border-[#C9A84C]/20">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase">
            Nuestra historia
          </span>
          <div className="h-px w-16 bg-[#C9A84C]" />
        </div>
        <h1 className="font-serif text-5xl md:text-7xl text-white tracking-widest uppercase mb-4">
          Nosotros
        </h1>
        <p className="text-[#E8DCC8]/60 text-sm tracking-wide max-w-md mx-auto">
          Conoce la historia, los valores y las personas detrás de Matices
        </p>
      </section>

      {/* Historia */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase">
              Desde 2018
            </span>
            <h2 className="font-serif text-4xl text-white mt-3 mb-6">
              Una pasión hecha restaurante
            </h2>
            <p className="text-[#E8DCC8]/60 text-sm leading-relaxed mb-4">
              Matices nació de la convicción de que la gastronomía es mucho más que alimentarse. Es cultura, es memoria, es emoción. Fundado en 2018 en el corazón de Madrid, nuestro restaurante es el resultado de años de viajes, aprendizajes y una profunda admiración por el producto español.
            </p>
            <p className="text-[#E8DCC8]/60 text-sm leading-relaxed">
              Cada plato que sale de nuestra cocina es el resultado de un proceso cuidadoso: selección del mejor género, respeto por las temporadas y una técnica depurada que realza, sin ocultar, la esencia de cada ingrediente.
            </p>
          </div>

          {/* Cita destacada */}
          <div className="border-l-2 border-[#C9A84C] pl-8">
            <p className="font-serif text-2xl text-white leading-relaxed mb-6">
              "Cocinar es un acto de amor. Cada plato es una conversación entre el chef y el comensal."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-widest uppercase">
                Chef Ejecutivo, Matices
              </span>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="border-t border-[#C9A84C]/20 pt-20">
          <div className="text-center mb-16">
            <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase">
              Lo que nos define
            </span>
            <h2 className="font-serif text-4xl text-white mt-3">
              Nuestros valores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                titulo: 'Producto local',
                texto: 'Colaboramos con productores y agricultores de proximidad. Conocemos el origen de cada ingrediente que entra en nuestra cocina.',
              },
              {
                titulo: 'Temporalidad',
                texto: 'Nuestra carta cambia con las estaciones. Trabajamos con lo que la naturaleza nos ofrece en cada momento del año.',
              },
              {
                titulo: 'Sostenibilidad',
                texto: 'Minimizamos el desperdicio alimentario y apostamos por prácticas respetuosas con el medio ambiente en toda nuestra cadena.',
              },
              {
                titulo: 'Hospitalidad',
                texto: 'Cada cliente que entra por nuestra puerta es un invitado. Nos importa que te sientas cómodo, atendido y especial.',
              },
            ].map((valor) => (
              <div key={valor.titulo} className="flex gap-6">
                <div className="w-1 flex-shrink-0 bg-gradient-to-b from-[#C9A84C] to-transparent rounded-full" />
                <div>
                  <h3 className="text-white text-lg tracking-wide mb-2">
                    {valor.titulo}
                  </h3>
                  <p className="text-[#E8DCC8]/60 text-sm leading-relaxed">
                    {valor.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24 pt-16 border-t border-[#C9A84C]/20">
          <p className="text-[#E8DCC8]/60 text-sm mb-8 tracking-wide">
            ¿Quieres vivir la experiencia Matices?
          </p>
          <Link
            href="/reservas"
            className="inline-block bg-[#C9A84C] text-[#0A0A0A] px-12 py-4
                       text-xs tracking-[0.3em] uppercase font-semibold
                       hover:bg-[#E8DCC8] transition-all duration-300"
          >
            Reservar mesa
          </Link>
        </div>
      </section>
    </div>
  )
}