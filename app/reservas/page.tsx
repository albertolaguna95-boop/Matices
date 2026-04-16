// app/reservas/page.tsx
// Formulario de reservas — guarda los datos en Supabase

'use client' // Necesario porque usamos useState y eventos de formulario

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

// Definimos la estructura del formulario
type FormData = {
  nombre: string
  email: string
  telefono: string
  fecha: string
  hora: string
  personas: string
  mensaje: string
}

export default function ReservasPage() {
  // Estado del formulario
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: '',
    personas: '2',
    mensaje: '',
  })

  // Estado para saber si está enviando, si tuvo éxito o si hubo error
  const [enviando, setEnviando] = useState(false)
  const [exito, setExito] = useState(false)
  const [error, setError] = useState('')

  // Función que actualiza el formulario cuando el usuario escribe
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Función que se ejecuta cuando el usuario envía el formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() // Evita que la página se recargue
    setEnviando(true)
    setError('')

    // Guardamos la reserva en Supabase
    const { error: supabaseError } = await supabase
      .from('reservas')
      .insert([
        {
          nombre:   formData.nombre,
          email:    formData.email,
          telefono: formData.telefono,
          fecha:    formData.fecha,
          hora:     formData.hora,
          personas: parseInt(formData.personas),
          mensaje:  formData.mensaje,
        }
      ])

    setEnviando(false)

    if (supabaseError) {
      setError('Ha ocurrido un error al guardar la reserva. Inténtalo de nuevo.')
      return
    }

    // Si todo fue bien, mostramos el mensaje de éxito
    setExito(true)
  }

  // ═══ PANTALLA DE ÉXITO ═══
  if (exito) {
    return (
      <div className="bg-[#0A0A0A] min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#C9A84C]" />
            <div className="w-2 h-2 bg-[#C9A84C] rotate-45" />
            <div className="h-px w-12 bg-[#C9A84C]" />
          </div>
          <h2 className="font-serif text-4xl text-white mb-4">
            Reserva confirmada
          </h2>
          <p className="text-[#E8DCC8]/60 text-sm leading-relaxed mb-8">
            Gracias, <span className="text-[#E8DCC8]">{formData.nombre}</span>.
            Hemos recibido tu reserva para el{' '}
            <span className="text-[#E8DCC8]">{formData.fecha}</span> a las{' '}
            <span className="text-[#E8DCC8]">{formData.hora}</span>.
            <br /><br />
            Nos pondremos en contacto contigo para confirmarla.
          </p>
          <button
            onClick={() => { setExito(false); setFormData({
              nombre: '', email: '', telefono: '',
              fecha: '', hora: '', personas: '2', mensaje: ''
            })}}
            className="border border-[#C9A84C]/60 text-[#C9A84C] px-8 py-3
                       text-xs tracking-widest uppercase
                       hover:bg-[#C9A84C] hover:text-[#0A0A0A]
                       transition-all duration-300"
          >
            Hacer otra reserva
          </button>
        </div>
      </div>
    )
  }

  // ═══ FORMULARIO ═══
  return (
    <div className="bg-[#0A0A0A] min-h-screen">

      {/* Cabecera */}
      <section className="py-24 px-6 text-center border-b border-[#C9A84C]/20">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase">
            Reserva tu mesa
          </span>
          <div className="h-px w-16 bg-[#C9A84C]" />
        </div>
        <h1 className="font-serif text-5xl md:text-7xl text-white tracking-widest uppercase mb-4">
          Reservas
        </h1>
        <p className="text-[#E8DCC8]/60 text-sm tracking-wide max-w-md mx-auto">
          Completa el formulario y nos pondremos en contacto contigo para confirmar tu reserva
        </p>
      </section>

      {/* Formulario */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">

          {/* Fila — Nombre */}
          <div className="flex flex-col gap-2">
            <label className="text-[#E8DCC8]/60 text-xs tracking-widest uppercase">
              Nombre completo *
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
              className="bg-transparent border-b border-[#C9A84C]/30 text-white
                         py-3 text-sm tracking-wide outline-none
                         placeholder:text-[#E8DCC8]/20
                         focus:border-[#C9A84C] transition-colors duration-300"
            />
          </div>

          {/* Fila — Email y Teléfono */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[#E8DCC8]/60 text-xs tracking-widest uppercase">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
                className="bg-transparent border-b border-[#C9A84C]/30 text-white
                           py-3 text-sm tracking-wide outline-none
                           placeholder:text-[#E8DCC8]/20
                           focus:border-[#C9A84C] transition-colors duration-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#E8DCC8]/60 text-xs tracking-widest uppercase">
                Teléfono *
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                placeholder="+34 600 000 000"
                className="bg-transparent border-b border-[#C9A84C]/30 text-white
                           py-3 text-sm tracking-wide outline-none
                           placeholder:text-[#E8DCC8]/20
                           focus:border-[#C9A84C] transition-colors duration-300"
              />
            </div>
          </div>

          {/* Fila — Fecha, Hora y Personas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[#E8DCC8]/60 text-xs tracking-widest uppercase">
                Fecha *
              </label>
              <input
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                required
                className="bg-transparent border-b border-[#C9A84C]/30 text-white
                           py-3 text-sm tracking-wide outline-none
                           focus:border-[#C9A84C] transition-colors duration-300
                           [color-scheme:dark]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#E8DCC8]/60 text-xs tracking-widest uppercase">
                Hora *
              </label>
              <select
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                required
                className="bg-[#0A0A0A] border-b border-[#C9A84C]/30 text-white
                           py-3 text-sm tracking-wide outline-none
                           focus:border-[#C9A84C] transition-colors duration-300"
              >
                <option value="">Selecciona</option>
                {['13:00','13:30','14:00','14:30','15:00','15:30',
                  '20:00','20:30','21:00','21:30','22:00','22:30'].map(h => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#E8DCC8]/60 text-xs tracking-widest uppercase">
                Personas *
              </label>
              <select
                name="personas"
                value={formData.personas}
                onChange={handleChange}
                required
                className="bg-[#0A0A0A] border-b border-[#C9A84C]/30 text-white
                           py-3 text-sm tracking-wide outline-none
                           focus:border-[#C9A84C] transition-colors duration-300"
              >
                {[1,2,3,4,5,6,7,8].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Fila — Mensaje opcional */}
          <div className="flex flex-col gap-2">
            <label className="text-[#E8DCC8]/60 text-xs tracking-widest uppercase">
              Peticiones especiales
            </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Alergias, ocasión especial, preferencias..."
              rows={3}
              className="bg-transparent border-b border-[#C9A84C]/30 text-white
                         py-3 text-sm tracking-wide outline-none resize-none
                         placeholder:text-[#E8DCC8]/20
                         focus:border-[#C9A84C] transition-colors duration-300"
            />
          </div>

          {/* Mensaje de error */}
          {error && (
            <p className="text-red-400 text-sm tracking-wide">{error}</p>
          )}

          {/* Botón de envío */}
          <button
            type="submit"
            disabled={enviando}
            className="bg-[#C9A84C] text-[#0A0A0A] py-4 text-xs
                       tracking-[0.3em] uppercase font-semibold
                       hover:bg-[#E8DCC8] transition-all duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            {enviando ? 'Enviando...' : 'Confirmar reserva'}
          </button>

          <p className="text-[#E8DCC8]/30 text-xs tracking-wide text-center">
            * Campos obligatorios. Te confirmaremos la reserva por email o teléfono.
          </p>

        </form>
      </section>
    </div>
  )
}