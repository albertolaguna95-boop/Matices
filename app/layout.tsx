// app/layout.tsx
// Plantilla madre — envuelve todas las páginas con Navbar y Footer

import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Matices — Restaurante',
  description: 'Una experiencia gastronómica única en Madrid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-[#0A0A0A] text-white min-h-screen flex flex-col">

        {/* Barra de navegación - siempre arriba */}
        <Navbar />

        {/* Contenido de cada página */}
        <main className="flex-1">
          {children}
        </main>

        {/* Pie de página - siempre abajo */}
        <Footer />

      </body>
    </html>
  )
}