'use client'

import { motion } from 'motion/react'

/* ── Ornamento barroco horizontal (inspirado en la imagen de referencia) ── */
function Ornament() {
  return (
    <svg
      width="110"
      height="44"
      viewBox="0 0 110 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: '#C9A84C' }}
    >
      {/* ── Fleurón superior central ── */}
      <path d="M55 2 Q53 6 55 9 Q57 6 55 2Z"               fill="currentColor" opacity="0.55"/>
      <path d="M52 5 Q49 8 51 11 Q54 9 52 5Z"              fill="currentColor" opacity="0.35"/>
      <path d="M58 5 Q61 8 59 11 Q56 9 58 5Z"              fill="currentColor" opacity="0.35"/>

      {/* ── Eje vertical central ── */}
      <line x1="55" y1="10" x2="55" y2="34"                stroke="currentColor" strokeWidth="0.9" opacity="0.45"/>

      {/* ── Diamante central ── */}
      <polygon points="55,13 58.5,20 55,27 51.5,20"         stroke="currentColor" strokeWidth="0.85" opacity="0.55" fill="none"/>
      <circle  cx="55" cy="20" r="1.4"                      fill="currentColor" opacity="0.6"/>

      {/* ── Brazo izquierdo principal ── */}
      <path d="M51.5 20 C42 15 28 13 18 18 C12 21 11 27 16 30 C21 33 30 28 36 23"
            stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.55"/>
      {/* Hoja izquierda superior */}
      <path d="M34 16 C30 11 24 12 23 17 C27 16 31 17 34 16Z"
            stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.35"/>
      {/* Voluta izquierda */}
      <path d="M16 30 C9 29 5 24 8 19 C10 16 14 17 14 21 C14 25 10 26 9 23"
            stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.5"/>
      {/* Punta izquierda */}
      <circle cx="9" cy="22" r="1.2"                        fill="currentColor" opacity="0.4"/>

      {/* ── Brazo derecho principal ── */}
      <path d="M58.5 20 C68 15 82 13 92 18 C98 21 99 27 94 30 C89 33 80 28 74 23"
            stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.55"/>
      {/* Hoja derecha superior */}
      <path d="M76 16 C80 11 86 12 87 17 C83 16 79 17 76 16Z"
            stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.35"/>
      {/* Voluta derecha */}
      <path d="M94 30 C101 29 105 24 102 19 C100 16 96 17 96 21 C96 25 100 26 101 23"
            stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.5"/>
      {/* Punta derecha */}
      <circle cx="101" cy="22" r="1.2"                      fill="currentColor" opacity="0.4"/>

      {/* ── Gota inferior central ── */}
      <path d="M55 27 Q57 32 55 38 Q53 32 55 27Z"           fill="currentColor" opacity="0.45"/>
      <circle cx="55" cy="39" r="1.3"                       fill="currentColor" opacity="0.4"/>
    </svg>
  )
}

/* ── Línea lateral ────────────────────────────────────────────── */
function Line({ side, delay = 0 }: { side: 'left' | 'right'; delay?: number }) {
  const pos = side === 'left'
    ? 'left-4 md:left-7 lg:left-12'
    : 'right-4 md:right-7 lg:right-12'

  return (
    <div className={`fixed top-0 ${pos} h-full pointer-events-none z-10 hidden md:block`}>

      {/* Línea fina vertical */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.22) 6%, rgba(201,168,76,0.22) 94%, transparent 100%)',
        }}
      />

      {/* Shimmer que baja */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-px"
        style={{
          height: 160,
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.6) 45%, rgba(201,168,76,0.8) 50%, rgba(201,168,76,0.6) 55%, transparent 100%)',
        }}
        animate={{ top: ['-160px', '100vh'] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'linear', delay }}
      />

      {/* Ornamento centrado verticalmente con pulso */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: delay + 1 }}
      >
        <Ornament />
      </motion.div>

      {/* Marcas horizontales en 1/4 y 3/4 */}
      {['25%', '75%'].map(top => (
        <div
          key={top}
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top,
            width: 12,
            height: 1,
            marginLeft: -6,
            background: 'rgba(201,168,76,0.3)',
          }}
        />
      ))}
    </div>
  )
}

export default function DecoLines() {
  return (
    <>
      <Line side="left"  delay={0} />
      <Line side="right" delay={5.5} />
    </>
  )
}
