'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
}

const VALORES = [
  {
    num: '01', titulo: 'Producto fresco',
    texto: 'Seleccionamos a diario el mejor producto del mercado: gambas rojas mediterráneas, pulpo gallego, carnes maduradas y verduras de temporada.',
  },
  {
    num: '02', titulo: 'Parrilla a la vista',
    texto: 'Nuestra parrilla es el corazón del restaurante. Cada chuletón, secreto ibérico o chuletilla de cordero se cocina a fuego vivo ante tus ojos.',
  },
  {
    num: '03', titulo: 'Recetas caseras',
    texto: 'Los postres y elaboraciones propias —tarta de queso, croquetas, cocido madrileño— son la seña de identidad de Matices desde el primer día.',
  },
  {
    num: '04', titulo: 'Hospitalidad real',
    texto: 'Cada cliente es un invitado. Disponemos de terraza exterior, acceso para movilidad reducida y aceptamos mascotas. El espacio es tuyo.',
  },
]

const SERVICIOS = [
  'Terraza exterior',
  'Aire acondicionado',
  'Eventos privados',
  'Banquetes y bodas',
  'Accesible para movilidad reducida',
  'Mascotas bienvenidas',
  'Pago con tarjeta',
  'Parking cercano',
]

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">

      {/* Header */}
      <section className="pt-40 pb-20 px-6 text-center border-b border-reserve-outline">
        <div className="flex items-center justify-center gap-5 mb-8">
          <div className="h-px w-14 bg-reserve-gold/40" />
          <span className="text-reserve-gold text-[10px] uppercase tracking-[0.5em]">Quiénes somos</span>
          <div className="h-px w-14 bg-reserve-gold/40" />
        </div>
        <h1 className="font-serif text-[clamp(3rem,8vw,7rem)] leading-none tracking-wide text-white mb-6">
          Nosotros
        </h1>
        <p className="text-reserve-cream/40 text-sm tracking-wide max-w-sm mx-auto leading-relaxed">
          Bar Restaurante de cocina mediterránea en Valdemoro, Madrid
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-28">

        {/* Historia */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span variants={fadeUp}
              className="block text-reserve-gold text-[10px] uppercase tracking-[0.45em] mb-6"
            >
              Valdemoro, Madrid
            </motion.span>
            <motion.h2 variants={fadeUp}
              className="font-serif text-[clamp(2rem,4vw,3.2rem)] text-white leading-tight mb-8"
            >
              Cocina mediterránea con alma propia
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-5 text-reserve-cream/50 text-[15px] leading-[1.85]">
              <p>
                Matices nació con una idea clara: ofrecer cocina mediterránea de verdad en Valdemoro.
                Producto fresco, parrilla honesta y recetas de siempre ejecutadas con cariño y precisión.
              </p>
              <p>
                Desde nuestros entrantes —gambas rojas, pulpo a la brasa, alcachofas asadas—
                hasta los postres caseros como la tarta de queso o la pannacota, todo lo que
                sale de nuestra cocina está hecho con el mismo criterio: que sea rico de verdad.
              </p>
              <p>
                Nuestra parrilla es el alma del restaurante. Chuletones de vaca vieja, secreto
                ibérico, chuletillas de cordero… cada pieza se cocina a fuego vivo para que
                llegue a tu mesa en su punto exacto.
              </p>
            </motion.div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="border-l-2 border-reserve-gold/25 pl-10"
          >
            <blockquote className="font-serif text-2xl md:text-[1.7rem] text-white leading-[1.4] mb-8 italic">
              "Buena materia prima, fuego y tiempo. Con eso es suficiente para que algo sea memorable."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-reserve-gold/45" />
              <span className="text-reserve-gold/55 text-[10px] uppercase tracking-[0.38em]">
                Matices Bar Restaurante · Valdemoro
              </span>
            </div>
          </motion.div>

        </div>

        {/* Valores */}
        <div className="border-t border-reserve-outline pt-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="mb-16"
          >
            <motion.span variants={fadeUp}
              className="block text-reserve-gold text-[10px] uppercase tracking-[0.45em] mb-4"
            >
              Lo que nos define
            </motion.span>
            <motion.h2 variants={fadeUp}
              className="font-serif text-[clamp(2rem,4vw,3.2rem)] text-white"
            >
              Nuestra forma de cocinar
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-24">
            {VALORES.map((v, i) => (
              <motion.div
                key={v.titulo}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-7"
              >
                <span className="text-reserve-gold/20 font-serif text-4xl leading-none mt-1 select-none flex-shrink-0">
                  {v.num}
                </span>
                <div>
                  <h3 className="text-white text-lg font-serif mb-3">{v.titulo}</h3>
                  <p className="text-reserve-cream/45 text-sm leading-relaxed">{v.texto}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            className="border-t border-reserve-outline pt-16"
          >
            <span className="block text-reserve-gold text-[10px] uppercase tracking-[0.45em] mb-8">
              Instalaciones y servicios
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {SERVICIOS.map(s => (
                <div key={s} className="flex items-center gap-3 border border-reserve-outline px-4 py-3">
                  <div className="w-1 h-1 bg-reserve-gold rounded-full flex-shrink-0" />
                  <span className="text-reserve-cream/50 text-[12px] leading-tight">{s}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-28 pt-20 border-t border-reserve-outline"
        >
          <p className="text-reserve-cream/40 text-sm mb-10 tracking-wide">
            ¿Quieres vivir la experiencia Matices?
          </p>
          <Link
            href="/reservas"
            className="gold-gradient text-reserve-bg px-14 py-5 text-[10px] font-bold uppercase tracking-[0.42em] hover:opacity-80 transition-opacity inline-flex items-center gap-3"
          >
            Reservar mesa <ArrowRight size={13} />
          </Link>
        </motion.div>

      </section>
    </div>
  )
}
