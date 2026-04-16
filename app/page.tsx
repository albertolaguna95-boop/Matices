// app/page.tsx
// Página de inicio con hero elegante

import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="bg-[#0A0A0A]">

      {/* ═══ HERO PRINCIPAL ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Fondo con gradiente y textura */}
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#C9A84C]/5 via-transparent to-[#0A0A0A]" />

        {/* Líneas decorativas de fondo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="w-[600px] h-[600px] border border-[#C9A84C] rounded-full" />
          <div className="absolute w-[400px] h-[400px] border border-[#C9A84C] rounded-full" />
          <div className="absolute w-[200px] h-[200px] border border-[#C9A84C] rounded-full" />
        </div>

        {/* Contenido principal del hero */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

          {/* Línea decorativa superior */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase">
              Madrid, España
            </span>
            <div className="h-px w-16 bg-[#C9A84C]" />
          </div>

          {/* Nombre del restaurante */}
          <h1 className="font-serif text-7xl md:text-9xl text-[#FFFFFF] tracking-widest uppercase mb-6">
            Matices
          </h1>

          {/* Línea dorada divisoria */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#C9A84C]" />
            <div className="w-1.5 h-1.5 bg-[#C9A84C] rotate-45" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#C9A84C]" />
          </div>

          {/* Eslogan */}
          <p className="text-[#E8DCC8] text-lg md:text-xl tracking-[0.2em] uppercase mb-4">
            Una experiencia gastronómica
          </p>
          <p className="text-[#E8DCC8]/60 text-sm md:text-base tracking-widest mb-12 max-w-lg mx-auto leading-relaxed">
            Donde cada plato cuenta una historia y cada visita se convierte en un recuerdo inolvidable
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/reservas"
              className="bg-[#C9A84C] text-[#0A0A0A] px-10 py-4 text-xs
                         tracking-[0.3em] uppercase font-semibold
                         hover:bg-[#E8DCC8] transition-all duration-300
                         min-w-[200px] text-center"
            >
              Reservar mesa
            </Link>
            <Link
              href="/carta"
              className="border border-[#C9A84C]/60 text-[#E8DCC8] px-10 py-4 text-xs
                         tracking-[0.3em] uppercase
                         hover:border-[#C9A84C] hover:text-[#C9A84C]
                         transition-all duration-300
                         min-w-[200px] text-center"
            >
              Ver la carta
            </Link>
          </div>

        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[#E8DCC8] text-xs tracking-widest uppercase">Descubrir</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent" />
        </div>
      </section>

      {/* ═══ SECCIÓN — PROPUESTA DE VALOR ═══ */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        {/* Título de sección */}
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase">
            Nuestra filosofía
          </span>
          <h2 className="font-serif text-4xl text-white mt-3">
            El arte de la gastronomía
          </h2>
        </div>

        {/* Tres columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {[
            {
              numero: '01',
              titulo: 'Producto de temporada',
              texto: 'Trabajamos con los mejores productores locales para garantizar ingredientes frescos y de máxima calidad en cada plato.',
            },
            {
              numero: '02',
              titulo: 'Técnica y creatividad',
              texto: 'Combinamos técnicas clásicas de la cocina española con toques contemporáneos que sorprenden y emocionan.',
            },
            {
              numero: '03',
              titulo: 'Experiencia completa',
              texto: 'Desde la sala hasta la bodega, cada detalle está pensado para que tu visita sea perfecta e irrepetible.',
            },
          ].map((item) => (
            <div key={item.numero} className="flex flex-col items-start">
              <span className="text-[#C9A84C]/30 font-serif text-5xl mb-4">
                {item.numero}
              </span>
              <div className="w-8 h-px bg-[#C9A84C] mb-4" />
              <h3 className="text-white text-lg tracking-wide mb-3">
                {item.titulo}
              </h3>
              <p className="text-[#E8DCC8]/60 text-sm leading-relaxed">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SECCIÓN — LLAMADA A LA ACCIÓN ═══ */}
      <section className="py-24 px-6 border-t border-[#C9A84C]/20">
        <div className="max-w-2xl mx-auto text-center">

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#C9A84C]" />
            <div className="w-1.5 h-1.5 bg-[#C9A84C] rotate-45" />
            <div className="h-px w-12 bg-[#C9A84C]" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            ¿Listo para vivir la experiencia?
          </h2>
          <p className="text-[#E8DCC8]/60 text-sm tracking-wide leading-relaxed mb-10">
            Reserva tu mesa ahora y déjate sorprender por una cocina que habla de matices, de sabor y de pasión.
          </p>

          <Link
            href="/reservas"
            className="inline-block bg-[#C9A84C] text-[#0A0A0A] px-12 py-4
                       text-xs tracking-[0.3em] uppercase font-semibold
                       hover:bg-[#E8DCC8] transition-all duration-300"
          >
            Hacer una reserva
          </Link>

          <p className="text-[#E8DCC8]/30 text-xs tracking-widest mt-6">
            También puedes llamarnos al +34 91 123 45 67
          </p>
        </div>
      </section>

    </div>
  )
}