// app/carta/page.tsx
// Página de la carta — lee los platos desde Supabase y los organiza por categorías

import { supabase } from '@/lib/supabase'

// Definimos cómo es un plato (TypeScript necesita saber la estructura)
type Plato = {
  id: number
  nombre: string
  descripcion: string
  precio: number
  categoria: string
  disponible: boolean
}

// Las categorías en el orden que queremos mostrarlas
const CATEGORIAS = [
  { id: 'entrantes',   label: 'Entrantes'   },
  { id: 'principales', label: 'Principales' },
  { id: 'postres',     label: 'Postres'     },
  { id: 'bebidas',     label: 'Bebidas'     },
]

export default async function CartaPage() {
  // Pedimos todos los platos disponibles a Supabase
  const { data: platos, error } = await supabase
    .from('platos')
    .select('*')
    .eq('disponible', true)   // Solo los platos marcados como disponibles
    .order('categoria')       // Ordenados por categoría

  // Si hay error, mostramos un mensaje
  if (error) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <p className="text-[#E8DCC8]/60">Error al cargar la carta. Inténtalo de nuevo.</p>
      </div>
    )
  }

  return (
    <div className="bg-[#0A0A0A] min-h-screen">

      {/* ═══ CABECERA DE LA PÁGINA ═══ */}
      <section className="py-24 px-6 text-center border-b border-[#C9A84C]/20">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase">
            Temporada actual
          </span>
          <div className="h-px w-16 bg-[#C9A84C]" />
        </div>
        <h1 className="font-serif text-5xl md:text-7xl text-white tracking-widest uppercase mb-4">
          Nuestra Carta
        </h1>
        <p className="text-[#E8DCC8]/60 text-sm tracking-wide max-w-md mx-auto">
          Elaborada con productos de temporada y el mejor género seleccionado a diario
        </p>
      </section>

      {/* ═══ SECCIONES POR CATEGORÍA ═══ */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        {CATEGORIAS.map((categoria) => {
          // Filtramos los platos de esta categoría
          const platosDeLaCategoria = platos?.filter(
            (p: Plato) => p.categoria === categoria.id
          ) ?? []

          // Si no hay platos en esta categoría, no mostramos la sección
          if (platosDeLaCategoria.length === 0) return null

          return (
            <div key={categoria.id} className="mb-20">

              {/* Título de la categoría */}
              <div className="flex items-center gap-6 mb-10">
                <h2 className="font-serif text-3xl text-white tracking-wide">
                  {categoria.label}
                </h2>
                <div className="flex-1 h-px bg-[#C9A84C]/20" />
              </div>

              {/* Lista de platos */}
              <div className="flex flex-col gap-0">
                {platosDeLaCategoria.map((plato: Plato, index: number) => (
                  <div
                    key={plato.id}
                    className={`flex items-start justify-between gap-6 py-6
                                ${index < platosDeLaCategoria.length - 1
                                  ? 'border-b border-[#C9A84C]/10'
                                  : ''
                                }`}
                  >
                    {/* Nombre y descripción */}
                    <div className="flex-1">
                      <h3 className="text-white text-lg tracking-wide mb-1">
                        {plato.nombre}
                      </h3>
                      <p className="text-[#E8DCC8]/50 text-sm leading-relaxed">
                        {plato.descripcion}
                      </p>
                    </div>

                    {/* Precio */}
                    <div className="flex-shrink-0 text-right">
                      <span className="text-[#C9A84C] font-serif text-xl">
                        {plato.precio}
                      </span>
                      <span className="text-[#C9A84C]/60 text-sm ml-0.5">€</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      {/* ═══ NOTA AL PIE DE LA CARTA ═══ */}
      <section className="border-t border-[#C9A84C]/20 py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row
                        items-center justify-between gap-6">
          <p className="text-[#E8DCC8]/40 text-xs tracking-wide text-center md:text-left">
            Todos nuestros platos pueden contener alérgenos. Consulta con el personal.
            <br />
            Los precios incluyen IVA.
          </p>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#C9A84C]/40" />
            <span className="text-[#C9A84C]/40 text-xs tracking-widest uppercase">
              Matices
            </span>
            <div className="h-px w-8 bg-[#C9A84C]/40" />
          </div>
        </div>
      </section>

    </div>
  )
}