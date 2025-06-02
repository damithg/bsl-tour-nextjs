
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BSL Tours - Best Sri Lanka Tours | Travel Packages & Adventures',
  description: 'Discover the magic of Sri Lanka with BSL Tours. Premium travel packages, cultural tours, wildlife safaris, and authentic experiences across the pearl of the Indian Ocean.',
  keywords: 'Sri Lanka tours, travel packages, Ceylon tours, wildlife safari, cultural tours, beach holidays, tea plantation tours',
  openGraph: {
    title: 'BSL Tours - Best Sri Lanka Tours',
    description: 'Premium Sri Lanka travel experiences and tour packages',
    url: 'https://bestsrilankatours.com',
    siteName: 'BSL Tours',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BSL Tours - Sri Lanka Travel',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BSL Tours - Best Sri Lanka Tours',
    description: 'Premium Sri Lanka travel experiences and tour packages',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
