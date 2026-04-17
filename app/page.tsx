'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.13 } },
}

/* ─── Hero ─── */
function Hero() {
  const ref                 = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const ring1Y              = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const ring2Y              = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentOpacity      = useTransform(scrollYProgress, [0, 0.65], [1, 0])
  const contentY            = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  const letters = 'MATICES'.split('')

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.div style={{ y: ring1Y }}
          className="absolute w-[680px] h-[680px] rounded-full border border-reserve-gold/[0.06]" />
        <motion.div style={{ y: ring2Y }}
          className="absolute w-[460px] h-[460px] rounded-full border border-reserve-gold/[0.09]" />
        <div className="absolute w-[240px] h-[240px] rounded-full border border-reserve-gold/[0.13]" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-reserve-bg pointer-events-none" />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Ubicación */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="block text-reserve-gold text-[10px] uppercase tracking-[0.55em] mb-10 font-medium"
        >
          Valdemoro, Madrid · Cocina Mediterránea
        </motion.span>

        {/* MATICES — letra a letra con clip reveal */}
        <h1 className="mb-4">
          <div className="overflow-hidden">
            <div className="flex items-end justify-center">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1.0, delay: 0.35 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-[clamp(4.5rem,14vw,11rem)] leading-none tracking-[0.04em] gold-text-gradient inline-block select-none"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </h1>

        {/* Línea decorativa animada */}
        <div className="flex items-center justify-center mb-7">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0.5 }}
            className="h-px w-24 bg-reserve-gold/40"
          />
        </div>

        {/* Subtítulo — más pequeño */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-reserve-cream/45 text-xs md:text-sm uppercase tracking-[0.35em] mb-5"
        >
          Una experiencia gastronómica
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-reserve-cream/30 text-sm leading-relaxed mb-14 max-w-sm mx-auto"
        >
          Parrilla, cocina mediterránea y producto de temporada en el corazón de Valdemoro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/reservas"
            className="gold-gradient text-reserve-bg px-10 py-4 text-[10px] font-bold uppercase tracking-[0.38em] hover:opacity-80 transition-opacity inline-flex items-center justify-center gap-3"
          >
            Reservar mesa <ArrowRight size={13} />
          </Link>
          <Link
            href="/carta"
            className="border border-reserve-cream/20 text-reserve-cream px-10 py-4 text-[10px] font-bold uppercase tracking-[0.38em] hover:border-reserve-gold hover:text-reserve-gold transition-all inline-flex items-center justify-center"
          >
            Ver la carta
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-reserve-cream/25 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.5em]">Descubrir</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ─── Especialidades ─── */
function Especialidades() {
  return (
    <section className="py-36 overflow-hidden">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://picsum.photos/seed/mediterranean-food/800/1067"
                alt="Especialidades de Matices"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 border border-reserve-gold/20 hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-10 h-10 border border-reserve-gold/10 hidden lg:block" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <motion.span variants={fadeUp}
              className="block text-reserve-gold text-[10px] uppercase tracking-[0.48em] mb-7"
            >
              Nuestra cocina
            </motion.span>

            <motion.h2 variants={fadeUp}
              className="text-[clamp(2.2rem,5vw,4rem)] font-serif leading-[1.05] mb-10"
            >
              Sabor mediterráneo,
              <br />
              <span className="text-reserve-cream/40 italic font-light">alma madrileña</span>
            </motion.h2>

            <motion.div variants={fadeUp}
              className="space-y-5 text-reserve-cream/55 text-[15px] leading-[1.85] mb-10"
            >
              <p>
                En Matices apostamos por la cocina mediterránea de calidad: producto fresco, parrilla
                a la vista y recetas que combinan la tradición española con toques modernos.
              </p>
              <p>
                Nuestras especialidades de parrilla, los entrantes de temporada y los postres caseros
                —como nuestra famosa tarta de queso o el cocido— hacen de cada visita una experiencia memorable.
              </p>
            </motion.div>

            {/* Servicios destacados */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 mb-10">
              {['Terraza exterior', 'Eventos privados', 'Bodas y banquetes', 'Mascotas bienvenidas'].map(s => (
                <div key={s} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-reserve-gold rounded-full flex-shrink-0" />
                  <span className="text-reserve-cream/50 text-sm">{s}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link href="/nosotros" className="group inline-flex items-center gap-5">
                <span className="text-reserve-gold text-[10px] uppercase tracking-[0.38em] font-bold">
                  Conoce el restaurante
                </span>
                <span className="block h-px bg-reserve-gold w-8 group-hover:w-16 transition-all duration-500" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ─── Carta destacada ─── */
const PLATOS = [
  {
    nombre: 'Tomate rosa con burrata',
    desc:   'Burrata fresca · Pesto de albahaca · Tomates cherry',
    precio: '€14',
    img:    'https://picsum.photos/seed/burrata-tomato/600/800',
  },
  {
    nombre: 'Chuletón de vaca vieja',
    desc:   'Vaca madurada · A la parrilla · Al punto',
    precio: '€30',
    img:    'https://picsum.photos/seed/ribeye-steak/600/800',
  },
  {
    nombre: 'Tarta de queso casera',
    desc:   'Receta tradicional · Cremosa · Elaboración propia',
    precio: '€7',
    img:    'https://picsum.photos/seed/cheesecake-dessert/600/800',
  },
]

function CartaDestacada() {
  return (
    <section className="py-32 bg-[#080808]">
      <div className="editorial-container">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-20"
        >
          <motion.span variants={fadeUp}
            className="block text-reserve-gold text-[10px] uppercase tracking-[0.48em] mb-5"
          >
            Nuestras especialidades
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2 variants={fadeUp} className="text-[clamp(2.5rem,6vw,5rem)] font-serif">
              Lo más pedido
            </motion.h2>
            <motion.p variants={fadeUp}
              className="max-w-xs text-reserve-cream/35 text-sm leading-relaxed md:text-right"
            >
              Platos que conquistan a todos los que nos visitan, elaborados con el mejor producto.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {PLATOS.map((plato, i) => (
            <motion.div
              key={plato.nombre}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[3/4] overflow-hidden bg-white/5"
            >
              <img
                src={plato.img}
                alt={plato.nombre}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                style={{ filter: 'brightness(0.65)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-reserve-gold text-[10px] uppercase tracking-[0.38em] mb-2">{plato.precio}</p>
                <h3 className="text-white text-lg font-serif mb-2 leading-tight">{plato.nombre}</h3>
                <p className="text-reserve-cream/45 text-xs tracking-wide">{plato.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link href="/carta" className="group inline-flex items-center gap-5">
            <span className="text-reserve-gold text-[10px] uppercase tracking-[0.38em] font-bold">
              Ver carta completa
            </span>
            <span className="block h-px bg-reserve-gold w-8 group-hover:w-16 transition-all duration-500" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

/* ─── Galería de especialidades ─── */
const GALERIA = [
  { titulo: 'Ensalada Matices',          desc: 'Tomate · Aguacate · Atún · Cebolla roja' },
  { titulo: 'Helado artesano de pistacho', desc: 'Elaboración propia' },
  { titulo: 'Pannacota',                 desc: 'Postre clásico italiano' },
  { titulo: 'Sorbete de mojito',         desc: 'Refrescante y artesano' },
  { titulo: 'Pulpo a la brasa',          desc: 'Galicia · Patatas al vapor' },
  { titulo: 'Gamba roja mediterránea',   desc: '12 unidades · A la plancha' },
]

const SEEDS = ['salad-matices', 'pistachio-ice-cream', 'pannacotta', 'mojito-sorbet', 'grilled-octopus', 'red-shrimp']

function Galeria() {
  return (
    <section className="py-32">
      <div className="editorial-container">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-16"
        >
          <motion.span variants={fadeUp}
            className="block text-reserve-gold text-[10px] uppercase tracking-[0.48em] mb-5"
          >
            Galería
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(2.5rem,6vw,5rem)] font-serif">
            Nuestros platos
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALERIA.map((item, i) => (
            <motion.div
              key={item.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-square overflow-hidden bg-white/5"
            >
              <img
                src={`https://picsum.photos/seed/${SEEDS[i]}/600/600`}
                alt={item.titulo}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                style={{ filter: 'brightness(0.7)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-white text-sm font-serif mb-1">{item.titulo}</h3>
                <p className="text-reserve-cream/50 text-xs">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ─── CTA Reserva ─── */
function ReservaCTA() {
  return (
    <section className="py-44 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] select-none">
        <div className="w-[900px] h-[900px] rounded-full border border-reserve-gold" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="text-center px-6 max-w-2xl mx-auto"
      >
        <motion.span variants={fadeUp}
          className="block text-reserve-gold text-[10px] uppercase tracking-[0.55em] mb-9"
        >
          Reserva tu mesa
        </motion.span>

        <motion.h2 variants={fadeUp}
          className="text-[clamp(2.8rem,7vw,5.5rem)] font-serif leading-[1.0] mb-8"
        >
          Vive la experiencia
        </motion.h2>

        <motion.p variants={fadeUp}
          className="text-reserve-cream/45 text-sm leading-relaxed mb-6 max-w-sm mx-auto"
        >
          Reserva tu mesa por teléfono o a través de nuestro formulario. Estaremos encantados de atenderte.
        </motion.p>

        <motion.div variants={fadeUp}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="h-px w-10 bg-reserve-gold/30" />
          <a href="tel:+34910231572"
            className="text-reserve-gold font-serif text-lg tracking-wide hover:opacity-70 transition-opacity"
          >
            +34 910 23 15 72
          </a>
          <div className="h-px w-10 bg-reserve-gold/30" />
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/reservas"
            className="gold-gradient text-reserve-bg px-12 py-5 text-[10px] font-bold uppercase tracking-[0.42em] hover:opacity-80 transition-opacity inline-flex items-center justify-center gap-3"
          >
            Reservar online <ArrowRight size={13} />
          </Link>
          <Link
            href="/contacto"
            className="border border-reserve-cream/20 text-reserve-cream/60 px-12 py-5 text-[10px] font-bold uppercase tracking-[0.42em] hover:border-reserve-gold hover:text-reserve-gold transition-all"
          >
            Cómo llegar
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Especialidades />
      <CartaDestacada />
      <Galeria />
      <ReservaCTA />
    </>
  )
}
