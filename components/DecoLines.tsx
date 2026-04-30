'use client'

import { motion } from 'motion/react'

/* ── Ornamento SVG central ─────────────────────────────────────── */
function Ornament() {
  const c = 'rgba(201,168,76,'
  return (
    <svg width="38" height="72" viewBox="0 0 38 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gota superior */}
      <circle cx="19" cy="4"  r="1.6" fill={`${c}0.45)`} />
      {/* Línea superior hasta el florón */}
      <line x1="19" y1="6"   x2="19" y2="19" stroke={`${c}0.28)`} strokeWidth="0.7"/>

      {/* Brazo izquierdo superior */}
      <path d="M19 22 C11 19 5 23 7 28 C9 31 14 29 16 26"
        stroke={`${c}0.38)`} strokeWidth="0.8" strokeLinecap="round"/>
      {/* Voluta izquierda superior */}
      <path d="M7 28 C5 31 7 35 10 33" stroke={`${c}0.25)`} strokeWidth="0.7" strokeLinecap="round"/>

      {/* Brazo derecho superior */}
      <path d="M19 22 C27 19 33 23 31 28 C29 31 24 29 22 26"
        stroke={`${c}0.38)`} strokeWidth="0.8" strokeLinecap="round"/>
      {/* Voluta derecha superior */}
      <path d="M31 28 C33 31 31 35 28 33" stroke={`${c}0.25)`} strokeWidth="0.7" strokeLinecap="round"/>

      {/* Diamante central */}
      <polygon points="19,18 22.5,24 19,30 15.5,24"
        fill={`${c}0.12)`} stroke={`${c}0.45)`} strokeWidth="0.7"/>
      {/* Punto central */}
      <circle cx="19" cy="24" r="1.2" fill={`${c}0.5)`} />

      {/* Brazo izquierdo inferior */}
      <path d="M19 30 C11 33 5 29 7 44 C8 47 13 47 16 44"
        stroke={`${c}0.38)`} strokeWidth="0.8" strokeLinecap="round"/>
      {/* Voluta izquierda inferior */}
      <path d="M7 44 C5 47 7 51 10 49" stroke={`${c}0.25)`} strokeWidth="0.7" strokeLinecap="round"/>

      {/* Brazo derecho inferior */}
      <path d="M19 30 C27 33 33 29 31 44 C30 47 25 47 22 44"
        stroke={`${c}0.38)`} strokeWidth="0.8" strokeLinecap="round"/>
      {/* Voluta derecha inferior */}
      <path d="M31 44 C33 47 31 51 28 49" stroke={`${c}0.25)`} strokeWidth="0.7" strokeLinecap="round"/>

      {/* Línea inferior hasta gota */}
      <line x1="19" y1="53" x2="19" y2="66" stroke={`${c}0.28)`} strokeWidth="0.7"/>
      {/* Gota inferior */}
      <path d="M19 67 Q20.5 70 19 72 Q17.5 70 19 67Z" fill={`${c}0.4)`} />
    </svg>
  )
}

/* ── Línea lateral con ornamento y shimmer ─────────────────────── */
function Line({ side, delay = 0 }: { side: 'left' | 'right'; delay?: number }) {
  const pos = side === 'left'
    ? 'left-5 md:left-8 lg:left-14'
    : 'right-5 md:right-8 lg:right-14'

  return (
    <div className={`fixed top-0 ${pos} h-full pointer-events-none z-10 hidden md:block`}>

      {/* Línea completa */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.11) 8%, rgba(201,168,76,0.11) 92%, transparent 100%)',
        }}
      />

      {/* Shimmer principal */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-px"
        style={{
          height: 130,
          background: 'linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.5) 45%, rgba(201,168,76,0.65) 50%, rgba(201,168,76,0.5) 55%, transparent 100%)',
        }}
        animate={{ top: ['-130px', '100vh'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay }}
      />

      {/* Ornamento central con pulso suave */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.5 }}
      >
        <Ornament />
      </motion.div>

      {/* Marcas en cuartos */}
      {['25%', '75%'].map(top => (
        <div
          key={top}
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top, width: 10, height: 1, marginLeft: -5, background: 'rgba(201,168,76,0.2)' }}
        />
      ))}
    </div>
  )
}

export default function DecoLines() {
  return (
    <>
      <Line side="left"  delay={0}   />
      <Line side="right" delay={5}   />
    </>
  )
}
