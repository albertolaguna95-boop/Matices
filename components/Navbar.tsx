
'use client' 

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  // Estado para abrir/cerrar el menú en móvil
  const [menuAbierto, setMenuAbierto] = useState(false)

  // Enlaces de navegación
  const enlaces = [
    { href: '/',         texto: 'Inicio'    },
    { href: '/carta',    texto: 'Carta'     },
    { href: '/reservas', texto: 'Reservas'  },
    { href: '/nosotros', texto: 'Nosotros'  },
    { href: '/contacto', texto: 'Contacto'  },
  ]

  return (
    <nav className="bg-[#0A0A0A] border-b border-[#C9A84C]/30 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Nombre del restaurante */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-[#C9A84C] font-serif text-2xl tracking-widest uppercase">
            Matices
          </span>
          <span className="text-[#E8DCC8]/60 text-xs tracking-[0.3em] uppercase">
            Restaurante
          </span>
        </Link>

        {/* Enlaces de escritorio - se ocultan en móvil */}
        <ul className="hidden md:flex items-center gap-8">
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <Link
                href={enlace.href}
                className="text-[#E8DCC8] text-sm tracking-widest uppercase
                           hover:text-[#C9A84C] transition-colors duration-300"
              >
                {enlace.texto}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón de reserva - escritorio */}
        <Link
          href="/reservas"
          className="hidden md:block border border-[#C9A84C] text-[#C9A84C]
                     px-6 py-2 text-xs tracking-widest uppercase
                     hover:bg-[#C9A84C] hover:text-[#0A0A0A]
                     transition-all duration-300"
        >
          Reservar mesa
        </Link>

        {/* Botón hamburguesa - solo móvil */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menú"
        >
          <span className={`block w-6 h-px bg-[#C9A84C] transition-all duration-300
                           ${menuAbierto ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-[#C9A84C] transition-all duration-300
                           ${menuAbierto ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-[#C9A84C] transition-all duration-300
                           ${menuAbierto ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuAbierto && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#C9A84C]/20 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {enlaces.map((enlace) => (
              <li key={enlace.href}>
                <Link
                  href={enlace.href}
                  onClick={() => setMenuAbierto(false)}
                  className="text-[#E8DCC8] text-sm tracking-widest uppercase
                             hover:text-[#C9A84C] transition-colors duration-300"
                >
                  {enlace.texto}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/reservas"
                onClick={() => setMenuAbierto(false)}
                className="inline-block border border-[#C9A84C] text-[#C9A84C]
                           px-6 py-2 text-xs tracking-widest uppercase
                           hover:bg-[#C9A84C] hover:text-[#0A0A0A]
                           transition-all duration-300 mt-2"
              >
                Reservar mesa
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}