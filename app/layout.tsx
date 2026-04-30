import type { Metadata } from 'next'
import { Manrope, Noto_Serif } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
})

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-noto-serif',
})

export const metadata: Metadata = {
  title: 'Matices — Bar Restaurante · Valdemoro',
  description: 'Restaurante de cocina mediterránea en Valdemoro, Madrid. Parrilla, entrantes, ensaladas y postres caseros. Reservas: +34 910 23 15 72.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${manrope.variable} ${notoSerif.variable}`}>
      <body className="bg-reserve-bg text-reserve-cream min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
