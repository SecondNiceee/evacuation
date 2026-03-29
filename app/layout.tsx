import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://155.212.138.216'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Купить права в СПб — водительское удостоверение без обучения',
  description: 'Купить права в Санкт-Петербурге. Водительское удостоверение категории A, B, C, D без автошколы. Быстрое оформление, гарантия качества, доступные цены.',
  keywords: 'купить права, купить права СПб, водительское удостоверение, права без обучения, права без автошколы, купить водительские права, права категории B, права Санкт-Петербург',
  openGraph: {
    title: 'Купить права в СПб — водительское удостоверение без обучения',
    description: 'Купить водительские права в Санкт-Петербурге. Все категории: A, B, C, D. Быстро, надежно, с гарантией.',
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
