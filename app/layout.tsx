import type { Metadata } from 'next'
import { Mukta } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { buildPageMetadata } from "@/lib/seo"
import './globals.css'

// Mukta as fallback for Kohinoor Bangla (Apple system font)
const mukta = Mukta({
  subsets: ["latin", "devanagari"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-mukta',
  display: 'swap',
});

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "REOCOM | Agence de Communication Strategique",
    description:
      "Creation de contenu et strategie de communication sur mesure. Boostez votre presence en ligne avec une identite visuelle strategique.",
    path: "/",
  }),
  generator: 'REOCOM',
  icons: {
    icon: [
      {
        url: '/1flaticon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/1flaticon.svg',
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
