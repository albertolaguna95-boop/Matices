'use client'

import { motion } from 'motion/react'

/* Marca pequeña horizontal en la línea */
function Tick({ pos }: { pos: string }) {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 w-2 h-px bg-reserve-gold/25"
      style={{ top: pos }}
    />
  )
}

/* Línea lateral con shimmer animado */
function Line({ side, delay = 0 }: { side: 'left' | 'right'; delay?: number }) {
  const pos = side === 'left' ? 'left-5 md:left-8 lg:left-12' : 'right-5 md:right-8 lg:right-12'

  return (
    <div className={`fixed top-0 ${pos} h-full w-px pointer-events-none z-10 hidden md:block overflow-hidden`}
      style={{ background: 'rgba(201,168,76,0.08)' }}
    >
      {/* Marcas fijas */}
      <Tick pos="25%" />
      <Tick pos="50%" />
      <Tick pos="75%" />

      {/* Shimmer que baja */}
      <motion.div
        className="absolute w-full"
        style={{
          height: 140,
          background: 'linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.35) 40%, rgba(201,168,76,0.55) 50%, rgba(201,168,76,0.35) 60%, transparent 100%)',
        }}
        animate={{ top: ['-140px', '100vh'] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'linear',
          delay,
        }}
      />

      {/* Segundo shimmer más tenue */}
      <motion.div
        className="absolute w-full"
        style={{
          height: 80,
          background: 'linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.18) 50%, transparent 100%)',
        }}
        animate={{ top: ['-80px', '100vh'] }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'linear',
          delay: delay + 5,
        }}
      />
    </div>
  )
}

export default function DecoLines() {
  return (
    <>
      <Line side="left"  delay={0} />
      <Line side="right" delay={4.5} />
    </>
  )
}
