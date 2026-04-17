import { supabase } from '@/lib/supabase'
import CartaContent from '@/components/CartaContent'

export type Plato = {
  id:           number
  nombre:       string
  descripcion:  string
  precio:       number
  precio_texto: string | null
  categoria:    string
  disponible:   boolean
  orden:        number
  es_seccion:   boolean | null
}

export default async function CartaPage() {
  const { data: platos, error } = await supabase
    .from('platos')
    .select('*')
    .eq('disponible', true)
    .order('orden')

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <p className="text-reserve-cream/40 text-sm tracking-wide">
          Error al cargar la carta. Por favor, inténtalo de nuevo.
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen">

      {/* Header */}
      <section className="pt-40 pb-20 px-6 text-center border-b border-reserve-outline">
        <div className="flex items-center justify-center gap-5 mb-8">
          <div className="h-px w-14 bg-reserve-gold/40" />
          <span className="text-reserve-gold text-[10px] uppercase tracking-[0.5em]">
            Temporada actual
          </span>
          <div className="h-px w-14 bg-reserve-gold/40" />
        </div>

        <h1 className="font-serif text-[clamp(3rem,8vw,7rem)] leading-none tracking-wide text-white mb-6">
          Nuestra Carta
        </h1>

        <p className="text-reserve-cream/40 text-sm tracking-wide max-w-sm mx-auto leading-relaxed">
          Cocina mediterránea elaborada con producto fresco y parrilla a la vista.
          Precios con IVA incluido · Pan: 1,30 €/ud
        </p>
      </section>

      <CartaContent platos={(platos ?? []) as Plato[]} />

      {/* Footer note */}
      <section className="border-t border-reserve-outline py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-reserve-cream/25 text-xs tracking-wide text-center md:text-left leading-relaxed">
            Todos nuestros platos pueden contener alérgenos. Consulta con el personal.
            <br />
            Los precios incluyen IVA. Pan: 1,30 €/ud.
          </p>
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-reserve-gold/20" />
            <span className="text-reserve-gold/20 text-[10px] tracking-widest uppercase">Matices · Valdemoro</span>
            <div className="h-px w-8 bg-reserve-gold/20" />
          </div>
        </div>
      </section>

    </div>
  )
}
