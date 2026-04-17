'use client'

import { motion } from 'motion/react'
import { MapPin, Phone, Mail, Clock, Utensils } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
}

const INFO = [
  {
    Icon:   MapPin,
    titulo: 'Dirección',
    lineas: ['Av. Mar Mediterráneo, 73', '28341 Valdemoro, Madrid'],
    link:   'https://www.google.com/maps/search/?api=1&query=Av+Mar+Mediterr%C3%A1neo+73+Valdemoro+Madrid',
  },
  {
    Icon:   Phone,
    titulo: 'Teléfono',
    lineas: ['+34 910 23 15 72', '+34 622 18 26 46'],
    link:   'tel:+34910231572',
  },
  {
    Icon:   Mail,
    titulo: 'Email',
    lineas: ['reservas@maticesrestaurante.es'],
    link:   'mailto:reservas@maticesrestaurante.es',
  },
  {
    Icon:   Clock,
    titulo: 'Horario',
    lineas: ['Consulta disponibilidad por teléfono', 'o a través del formulario de reservas'],
    link:   null,
  },
  {
    Icon:   Utensils,
    titulo: 'Servicios',
    lineas: ['Terraza · Aire acondicionado', 'Eventos privados · Bodas', 'Mascotas bienvenidas · Accesible'],
    link:   null,
  },
]

export default function ContactoPage() {
  return (
    <div className="min-h-screen">

      {/* Header */}
      <section className="pt-40 pb-20 px-6 text-center border-b border-reserve-outline">
        <div className="flex items-center justify-center gap-5 mb-8">
          <div className="h-px w-14 bg-reserve-gold/40" />
          <span className="text-reserve-gold text-[10px] uppercase tracking-[0.5em]">Estamos aquí</span>
          <div className="h-px w-14 bg-reserve-gold/40" />
        </div>
        <h1 className="font-serif text-[clamp(3rem,8vw,7rem)] leading-none tracking-wide text-white mb-6">
          Contacto
        </h1>
        <p className="text-reserve-cream/40 text-sm tracking-wide max-w-sm mx-auto leading-relaxed">
          Visítanos en Valdemoro o contáctanos por cualquiera de estos medios
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-10"
          >
            {INFO.map(({ Icon, titulo, lineas, link }) => (
              <motion.div key={titulo} variants={fadeUp} className="flex gap-6">
                <div className="w-10 h-10 border border-reserve-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="text-reserve-gold" size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-reserve-gold text-[10px] uppercase tracking-[0.38em] mb-2">{titulo}</p>
                  {lineas.map((l, i) =>
                    link && i === 0 ? (
                      <a key={i} href={link} target={link.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="block text-reserve-cream/55 text-sm leading-relaxed hover:text-reserve-gold transition-colors"
                      >
                        {l}
                      </a>
                    ) : (
                      <p key={i} className="text-reserve-cream/55 text-sm leading-relaxed">{l}</p>
                    )
                  )}
                </div>
              </motion.div>
            ))}

            {/* Pago */}
            <motion.div variants={fadeUp}>
              <p className="text-reserve-gold text-[10px] uppercase tracking-[0.38em] mb-3">Métodos de pago</p>
              <div className="flex flex-wrap gap-2">
                {['Efectivo', 'Visa', 'Mastercard', 'Débito'].map(p => (
                  <span key={p} className="border border-reserve-outline text-reserve-cream/40 text-[11px] uppercase tracking-widest px-3 py-1.5">
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Map + transport */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="w-full h-80 border border-reserve-outline overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Av+Mar+Mediterr%C3%A1neo+73+Valdemoro+28341+Madrid&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(85%) contrast(85%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="border border-reserve-outline p-7">
              <p className="text-reserve-gold text-[10px] uppercase tracking-[0.38em] mb-5">
                Cómo llegar
              </p>
              <ul className="flex flex-col gap-3 text-reserve-cream/50 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-reserve-gold/50 mt-0.5 leading-none flex-shrink-0">—</span>
                  <span>Desde Madrid: A-4 dirección Córdoba, salida Valdemoro</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-reserve-gold/50 mt-0.5 leading-none flex-shrink-0">—</span>
                  <span>Cercanías: Línea C-3 hasta Valdemoro</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-reserve-gold/50 mt-0.5 leading-none flex-shrink-0">—</span>
                  <span>Parking disponible en la zona sin restricciones</span>
                </li>
              </ul>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Av+Mar+Mediterr%C3%A1neo+73+Valdemoro+Madrid"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient text-reserve-bg text-[10px] font-bold uppercase tracking-[0.35em] py-4 text-center hover:opacity-80 transition-opacity"
            >
              Abrir en Google Maps
            </a>
          </motion.div>

        </div>
      </section>

    </div>
  )
}
