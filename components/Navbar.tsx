'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '/carta',    label: 'Carta'    },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const pathname                = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-reserve-bg/95 backdrop-blur-xl border-b border-reserve-outline py-4 shadow-[0_1px_40px_rgba(0,0,0,0.7)]'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="editorial-container flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-[1.3rem] text-reserve-gold tracking-[0.22em] hover:opacity-70 transition-opacity"
          >
            MATICES
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-[11px] uppercase tracking-[0.28em] transition-colors duration-300 ${
                  pathname === href
                    ? 'text-reserve-gold'
                    : 'text-reserve-cream/50 hover:text-reserve-cream'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/reservas"
            className="hidden md:inline-block gold-gradient text-reserve-bg text-[10px] font-bold uppercase tracking-[0.28em] px-8 py-3 hover:opacity-80 transition-opacity"
          >
            Reservar
          </Link>

          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden text-reserve-gold p-1"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-reserve-bg flex flex-col items-center justify-center gap-9 px-8"
          >
            <Link href="/" className="font-serif text-3xl text-reserve-gold tracking-[0.22em] mb-4">
              MATICES
            </Link>

            {[...LINKS, { href: '/reservas', label: 'Reservas' }].map(({ href, label }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <Link
                  href={href}
                  className={`font-serif text-[2rem] transition-colors ${
                    pathname === href
                      ? 'text-reserve-gold'
                      : 'text-reserve-cream/65 hover:text-reserve-gold'
                  }`}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
