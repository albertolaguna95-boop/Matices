// app/contacto/page.tsx

export default function ContactoPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">

      {/* Cabecera */}
      <section className="py-24 px-6 text-center border-b border-[#C9A84C]/20">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase">
            Estamos aquí
          </span>
          <div className="h-px w-16 bg-[#C9A84C]" />
        </div>
        <h1 className="font-serif text-5xl md:text-7xl text-white tracking-widest uppercase mb-4">
          Contacto
        </h1>
        <p className="text-[#E8DCC8]/60 text-sm tracking-wide max-w-md mx-auto">
          Puedes encontrarnos en el corazón de Madrid o contactarnos por cualquiera de estos medios
        </p>
      </section>

      {/* Contenido */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Información de contacto */}
          <div className="flex flex-col gap-10">

            {[
              {
                titulo: 'Dirección',
                lineas: ['Calle Gran Vía, 28', '28013 Madrid, España'],
              },
              {
                titulo: 'Teléfono',
                lineas: ['+34 91 123 45 67'],
              },
              {
                titulo: 'Email',
                lineas: ['hola@restaurantematices.es'],
              },
              {
                titulo: 'Horario',
                lineas: [
                  'Lunes a viernes: 13:00 – 23:00',
                  'Sábado y domingo: 12:00 – 24:00',
                  'Lunes: cerrado',
                ],
              },
            ].map((item) => (
              <div key={item.titulo}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-4 h-px bg-[#C9A84C]" />
                  <span className="text-[#C9A84C] text-xs tracking-widest uppercase">
                    {item.titulo}
                  </span>
                </div>
                {item.lineas.map((linea, i) => (
                  <p key={i} className="text-[#E8DCC8]/70 text-sm leading-relaxed">
                    {linea}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Mapa */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-4 h-px bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs tracking-widest uppercase">
                  Cómo llegar
                </span>
              </div>
            </div>

            {/* Mapa de Google Maps embebido */}
            <div className="w-full h-80 border border-[#C9A84C]/20 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4!2d-3.7038!3d40.4200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422886c06a7019%3A0x71eb2c4da91c2b11!2sGran%20V%C3%ADa%2C%2028%2C%20Madrid!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Transporte */}
            <div className="border border-[#C9A84C]/20 p-6">
              <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3">
                Transporte público
              </p>
              <ul className="flex flex-col gap-2 text-[#E8DCC8]/60 text-sm">
                <li>🚇 Metro: Gran Vía (L1, L5)</li>
                <li>🚌 Autobús: líneas 1, 2, 44, 74, 133, 146, 147, 148, 150</li>
                <li>🚗 Parking: Plaza del Callao (5 min a pie)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
