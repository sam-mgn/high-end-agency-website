import type { Metadata } from 'next'
import { Mukta } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Mukta as fallback for Kohinoor Bangla (Apple system font)
const mukta = Mukta({
  subsets: ["latin", "devanagari"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-mukta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'REOCOM | Agence de Communication Stratégique',
  description: 'Création de contenu et stratégie de communication sur mesure. Boostez votre présence en ligne avec une identité visuelle stratégique.',
  generator: 'REOCOM',
  keywords: ['communication', 'branding', 'stratégie', 'identité visuelle', 'agence', 'marketing'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body className={`${mukta.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
