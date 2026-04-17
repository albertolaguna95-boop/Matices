import Link from 'next/link'

const NAV = [
  { href: '/',         label: 'Inicio'   },
  { href: '/carta',    label: 'Carta'    },
  { href: '/reservas', label: 'Reservas' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-reserve-bg border-t border-reserve-outline">
      <div className="editorial-container py-16 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 pb-14 border-b border-reserve-outline">
          <div>
            <p className="font-serif text-[1.55rem] text-reserve-gold tracking-[0.22em] mb-5">MATICES</p>
            <p className="text-reserve-cream/30 text-[13px] leading-relaxed max-w-[220px]">
              Bar Restaurante de cocina mediterránea en el corazón de Valdemoro, Madrid.
            </p>
          </div>

          <div>
            <p className="text-[10px] text-reserve-gold uppercase tracking-[0.42em] mb-6">Páginas</p>
            <nav className="flex flex-col gap-3">
              {NAV.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[12px] uppercase tracking-[0.22em] text-reserve-cream/30 hover:text-reserve-gold transition-colors w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[10px] text-reserve-gold uppercase tracking-[0.42em] mb-6">Contacto</p>
            <div className="flex flex-col gap-3 text-[13px] text-reserve-cream/30 leading-relaxed">
              <span>Av. Mar Mediterráneo, 73<br />28341 Valdemoro, Madrid</span>
              <span>+34 910 23 15 72</span>
              <span>+34 622 18 26 46</span>
              <span>reservas@maticesrestaurante.es</span>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-reserve-cream/20 text-[10px] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Matices Bar Restaurante. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            <div className="h-px w-5 bg-reserve-gold/20" />
            <span className="text-reserve-gold/20 text-[10px] uppercase tracking-widest">Valdemoro, Madrid</span>
            <div className="h-px w-5 bg-reserve-gold/20" />
          </div>
        </div>

      </div>
    </footer>
  )
}
