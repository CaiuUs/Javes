import type { Metadata } from 'next'
import { Montserrat, Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-montserrat',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'JAVES Videomarketing',
  description: 'Produtora de vídeo marketing. Casamentos, corporativo e comercial. +500 projetos.',
}

type Props = { children: React.ReactNode }

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
