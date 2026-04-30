'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import type { Plato } from '@/app/carta/page'

const CATEGORIAS = [
  { id: 'entrantes', label: 'Entrantes' },
  { id: 'ensaladas', label: 'Ensaladas' },
  { id: 'carnes',    label: 'Carnes'    },
  { id: 'postres',   label: 'Postres'   },
  { id: 'bebidas',   label: 'Bebidas'   },
  { id: 'vinos',     label: 'Vinos'     },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.05 } },
}

function Precio({ plato }: { plato: Plato }) {
  const display = plato.precio_texto ?? String(plato.precio)
  if (!display) return null

  if (display.includes('/ud'))
    return (
      <span className="font-serif text-base text-reserve-gold">
        {display.replace('/ud', '')}
        <span className="text-reserve-gold/50 text-xs">€/ud</span>
      </span>
    )
  if (display.includes('/kg'))
    return (
      <span className="font-serif text-base text-reserve-gold">
        {display.replace('/kg', '')}
        <span className="text-reserve-gold/50 text-xs">€/kg</span>
      </span>
    )
  return (
    <>
      <span className="font-serif text-xl text-reserve-gold">{display}</span>
      <span className="text-reserve-gold/50 text-sm">€</span>
    </>
  )
}

function NavCarta() {
  const [activo, setActivo] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActivo(e.target.id) }),
      { rootMargin: '-25% 0px -65% 0px' }
    )
    CATEGORIAS.forEach(c => {
      const el = document.getElementById(`cat-${c.id}`)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(`cat-${id}`)
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' })
  }

  return (
    <div className="sticky top-[64px] z-30 bg-reserve-bg/95 backdrop-blur-xl border-b border-reserve-outline">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex gap-1.5 overflow-x-auto py-4 scrollbar-hide">
          {CATEGORIAS.map(cat => (
            <button
              key={cat.id}
              onClick={() => scrollTo(cat.id)}
              className={`flex-shrink-0 px-5 py-2 text-[10px] uppercase tracking-[0.3em] transition-all duration-300 ${
                activo === `cat-${cat.id}`
                  ? 'bg-reserve-gold text-reserve-bg font-bold'
                  : 'text-reserve-cream/50 hover:text-reserve-gold border border-reserve-outline hover:border-reserve-gold/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CartaContent({ platos }: { platos: Plato[] }) {
  return (
    <>
      <NavCarta />
      <section className="max-w-4xl mx-auto px-6 py-24">
        {CATEGORIAS.map((cat, catIndex) => {
          const items = platos.filter(p => p.categoria === cat.id)
          if (items.length === 0) return null

          return (
            <motion.div
              key={cat.id}
              id={`cat-${cat.id}`}
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="mb-24 last:mb-0"
            >
              {/* Category header */}
              <motion.div variants={fadeUp} className="flex items-center gap-8 mb-10">
                <h2 className="font-serif text-3xl md:text-4xl text-white whitespace-nowrap">
                  {cat.label}
                </h2>
                <div className="flex-1 h-px bg-reserve-gold/15" />
                <span className="text-reserve-gold/35 text-[10px] uppercase tracking-[0.38em] whitespace-nowrap">
                  {String(catIndex + 1).padStart(2, '0')}
                </span>
              </motion.div>

              {/* Nota carnes */}
              {cat.id === 'carnes' && (
                <motion.p variants={fadeUp} className="text-reserve-cream/30 text-xs tracking-wide mb-8 italic">
                  Todas las carnes se acompañan de patatas fritas caseras.
                </motion.p>
              )}

              {/* Items */}
              <div className="flex flex-col">
                {items.map((item, i) => {
                  /* Subsection header */
                  if (item.es_seccion) {
                    return (
                      <motion.div
                        key={item.id}
                        variants={fadeUp}
                        className={`flex items-center gap-6 py-4 ${i > 0 ? 'mt-8 pt-10 border-t border-reserve-gold/10' : 'mb-2'}`}
                      >
                        <span className="text-reserve-gold/50 text-[10px] uppercase tracking-[0.45em] whitespace-nowrap">
                          {item.nombre}
                        </span>
                        <div className="flex-1 h-px bg-reserve-gold/10" />
                      </motion.div>
                    )
                  }

                  /* Regular dish */
                  const siguiente = items[i + 1]
                  const esBorde = siguiente && !siguiente.es_seccion

                  return (
                    <motion.div
                      key={item.id}
                      variants={fadeUp}
                      className={`group flex items-center gap-5 py-5 ${
                        esBorde ? 'border-b border-reserve-gold/10' : ''
                      }`}
                    >
                      {/* Foto del plato */}
                      {item.imagen ? (
                        <div className="flex-shrink-0 w-20 h-16 overflow-hidden border border-reserve-gold/20">
                          <img
                            src={item.imagen}
                            alt={item.nombre}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-20 h-16 border border-dashed border-reserve-gold/30 bg-white/[0.03] flex flex-col items-center justify-center gap-1">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-reserve-gold/30">
                            <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
                          </svg>
                          <span className="text-reserve-gold/30 text-[8px] uppercase tracking-widest">foto</span>
                        </div>
                      )}

                      {/* Nombre + descripción */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white text-base tracking-wide mb-1 group-hover:text-reserve-cream transition-colors">
                          {item.nombre}
                        </h3>
                        {item.descripcion && (
                          <p className="text-reserve-cream/38 text-sm leading-relaxed">{item.descripcion}</p>
                        )}
                      </div>

                      {/* Precio */}
                      <div className="flex-shrink-0 text-right">
                        <Precio plato={item} />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )
        })}

        {/* Footer note */}
        <div className="mt-16 pt-10 border-t border-reserve-outline text-center">
          <p className="text-reserve-cream/25 text-xs tracking-wide leading-relaxed">
            Precios en € · IVA incluido · Servicio de pan 1,30 €/unidad
          </p>
        </div>
      </section>
    </>
  )
}
