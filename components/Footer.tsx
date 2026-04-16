import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#C9A84C]/30 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          <div>
            <h3 className="text-[#C9A84C] font-serif text-xl tracking-widest uppercase mb-3">
              Matices
            </h3>
            <p className="text-[#E8DCC8]/60 text-sm leading-relaxed">
              Una experiencia gastronómica donde cada plato cuenta una historia.
            </p>
          </div>

          <div>
            <h4 className="text-[#E8DCC8] text-xs tracking-widest uppercase mb-4">
              Navegación
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { href: '/carta',    texto: 'Carta'    },
                { href: '/reservas', texto: 'Reservas' },
                { href: '/nosotros', texto: 'Nosotros' },
                { href: '/contacto', texto: 'Contacto' },
              ].map((enlace) => (
                <li key={enlace.href}>
                  <Link
                    href={enlace.href}
                    className="text-[#E8DCC8]/60 text-sm hover:text-[#C9A84C] transition-colors duration-300"
                  >
                    {enlace.texto}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#E8DCC8] text-xs tracking-widest uppercase mb-4">
              Encuéntranos
            </h4>
            <ul className="flex flex-col gap-2 text-[#E8DCC8]/60 text-sm">
              <li>Calle Gran Vía, 28 — Madrid</li>
              <li>+34 91 123 45 67</li>
              <li>hola@restaurantematices.es</li>
              <li className="pt-1">
                Lun–Vie: 13:00 – 23:00<br />
                Sáb–Dom: 12:00 – 24:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#C9A84C]/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#E8DCC8]/40 text-xs tracking-widest">
            © {new Date().getFullYear()} Matices. Todos los derechos reservados.
          </p>
          <p className="text-[#E8DCC8]/40 text-xs tracking-widest">
            Diseñado con cuidado y buen gusto
          </p>
        </div>

      </div>
    </footer>
  )
}