import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bedrijfseconomie HAVO - Leer & Oefen Platform',
  description: 'Complete leer- en oefen omgeving voor bedrijfseconomie HAVO 4 en 5 met AI-ondersteuning',
  keywords: ['bedrijfseconomie', 'HAVO', 'onderwijs', 'leren', 'oefenen', 'examens'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-gray-50`} suppressHydrationWarning>
        <div id="__next">
          {children}
        </div>
      </body>
    </html>
  )
}