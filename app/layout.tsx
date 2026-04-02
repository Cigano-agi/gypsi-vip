import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GUILD — Elite AI Networking',
  description:
    'A elite dos builders que utilizam IA para gerar receita de alta velocidade. Sem ruído. Apenas execução.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* We load Mondwest via @font-face in globals.css */}
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
