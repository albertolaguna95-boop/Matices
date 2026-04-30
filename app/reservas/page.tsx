'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { supabase } from '@/lib/supabase'
import { CheckCircle, ArrowRight } from 'lucide-react'

type FormData = {
  nombre:   string
  email:    string
  telefono: string
  fecha:    string
  hora:     string
  personas: string
  mensaje:  string
}

const HORAS = [
  '13:00','13:30','14:00','14:30','15:00','15:30',
  '20:00','20:30','21:00','21:30','22:00','22:30',
]

const INPUT_CLS =
  'bg-transparent border-b border-reserve-gold/25 text-white py-3.5 text-sm tracking-wide outline-none ' +
  'placeholder:text-reserve-cream/20 focus:border-reserve-gold transition-colors duration-300 w-full'

const SELECT_CLS =
  'bg-reserve-bg border-b border-reserve-gold/25 text-white py-3.5 text-sm tracking-wide outline-none ' +
  'focus:border-reserve-gold transition-colors duration-300 w-full appearance-none cursor-pointer'

const LABEL_CLS = 'text-[10px] uppercase tracking-[0.38em] text-reserve-cream/40 mb-2 block'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
}

const EMPTY: FormData = {
  nombre: '', email: '', telefono: '', fecha: '', hora: '', personas: '2', mensaje: '',
}

export default function ReservasPage() {
  const [form, setForm]       = useState<FormData>(EMPTY)
  const [enviando, setEnviando] = useState(false)
  const [exito, setExito]     = useState(false)
  const [error, setError]     = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)
    setError('')

    const { error: err } = await supabase.from('reservas').insert([{
      nombre:   form.nombre,
      email:    form.email,
      telefono: form.telefono,
      fecha:    form.fecha,
      hora:     form.hora,
      personas: parseInt(form.personas),
      mensaje:  form.mensaje,
    }])

    if (err) { setEnviando(false); setError('Ha ocurrido un error. Por favor, inténtalo de nuevo.'); return }

    // Enviar email de confirmación
    await fetch('/api/reserva', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(form),
    })

    setEnviando(false)
    setExito(true)
  }

  /* ── Éxito ── */
  if (exito) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center max-w-md"
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 border border-reserve-gold/30 rounded-full flex items-center justify-center">
              <CheckCircle className="text-reserve-gold" size={28} strokeWidth={1.5} />
            </div>
          </div>

          <div className="flex items-center justify-center gap-5 mb-6">
            <div className="h-px w-10 bg-reserve-gold/40" />
            <span className="text-reserve-gold text-[10px] uppercase tracking-[0.45em]">Confirmado</span>
            <div className="h-px w-10 bg-reserve-gold/40" />
          </div>

          <h2 className="font-serif text-4xl text-white mb-5">Reserva recibida</h2>

          <p className="text-reserve-cream/50 text-sm leading-relaxed mb-10">
            Gracias, <span className="text-reserve-cream">{form.nombre}</span>. Hemos recibido tu
            reserva para el <span className="text-reserve-cream">{form.fecha}</span> a las{' '}
            <span className="text-reserve-cream">{form.hora}</span>.
            <br /><br />
            Nos pondremos en contacto para confirmarla.
          </p>

          <button
            onClick={() => { setExito(false); setForm(EMPTY) }}
            className="border border-reserve-gold/40 text-reserve-gold text-[10px] uppercase tracking-[0.38em] px-10 py-4 hover:bg-reserve-gold hover:text-reserve-bg transition-all duration-300"
          >
            Hacer otra reserva
          </button>
        </motion.div>
      </div>
    )
  }

  /* ── Formulario ── */
  return (
    <div className="min-h-screen">

      {/* Header */}
      <section className="pt-40 pb-20 px-6 text-center border-b border-reserve-outline">
        <div className="flex items-center justify-center gap-5 mb-8">
          <div className="h-px w-14 bg-reserve-gold/40" />
          <span className="text-reserve-gold text-[10px] uppercase tracking-[0.5em]">
            Reserva tu mesa
          </span>
          <div className="h-px w-14 bg-reserve-gold/40" />
        </div>
        <h1 className="font-serif text-[clamp(3rem,8vw,7rem)] leading-none tracking-wide text-white mb-6">
          Reservas
        </h1>
        <p className="text-reserve-cream/40 text-sm tracking-wide max-w-sm mx-auto leading-relaxed">
          Completa el formulario y confirmaremos tu reserva a la brevedad
        </p>
      </section>

      {/* Form */}
      <section className="max-w-2xl mx-auto px-6 py-24">
        <motion.form
          variants={stagger}
          initial="hidden"
          animate="show"
          onSubmit={handleSubmit}
          className="flex flex-col gap-10"
        >
          {/* Nombre */}
          <motion.div variants={fadeUp} className="flex flex-col">
            <label className={LABEL_CLS}>Nombre completo *</label>
            <input type="text" name="nombre" value={form.nombre} onChange={handleChange}
              required placeholder="Tu nombre completo" className={INPUT_CLS} />
          </motion.div>

          {/* Email + Teléfono */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col">
              <label className={LABEL_CLS}>Email *</label>
              <input type="email" name="email" value={form.email} onChange={handleChange}
                required placeholder="tu@email.com" className={INPUT_CLS} />
            </div>
            <div className="flex flex-col">
              <label className={LABEL_CLS}>Teléfono *</label>
              <input type="tel" name="telefono" value={form.telefono} onChange={handleChange}
                required placeholder="+34 600 000 000" className={INPUT_CLS} />
            </div>
          </motion.div>

          {/* Fecha + Hora + Personas */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col">
              <label className={LABEL_CLS}>Fecha *</label>
              <input type="date" name="fecha" value={form.fecha} onChange={handleChange}
                required className={`${INPUT_CLS} [color-scheme:dark]`} />
            </div>
            <div className="flex flex-col">
              <label className={LABEL_CLS}>Hora *</label>
              <select name="hora" value={form.hora} onChange={handleChange} required className={SELECT_CLS}>
                <option value="">Selecciona</option>
                {HORAS.map(h => <option key={h} value={h}>{h}</option>)}
              </select>
            </div>
            <div className="flex flex-col">
              <label className={LABEL_CLS}>Personas *</label>
              <select name="personas" value={form.personas} onChange={handleChange} required className={SELECT_CLS}>
                {[1,2,3,4,5,6,7,8].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Mensaje */}
          <motion.div variants={fadeUp} className="flex flex-col">
            <label className={LABEL_CLS}>Peticiones especiales</label>
            <textarea name="mensaje" value={form.mensaje} onChange={handleChange}
              placeholder="Alergias, ocasión especial, preferencias de mesa..." rows={3}
              className={`${INPUT_CLS} resize-none`} />
          </motion.div>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-400 text-sm tracking-wide -mt-4"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Submit */}
          <motion.div variants={fadeUp}>
            <button
              type="submit"
              disabled={enviando}
              className="w-full gold-gradient text-reserve-bg py-5 text-[10px] font-bold uppercase tracking-[0.38em] hover:opacity-80 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {enviando ? 'Enviando...' : (<>Confirmar reserva <ArrowRight size={13} /></>)}
            </button>
            <p className="text-reserve-cream/25 text-[11px] tracking-wide text-center mt-5">
              * Campos obligatorios. Te confirmaremos la reserva por email o teléfono.
            </p>
          </motion.div>
        </motion.form>
      </section>

    </div>
  )
}
