import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BSL Tours - Best Sri Lanka Tours & Travel Packages',
  description: 'Discover authentic Sri Lanka with our curated tour packages. From ancient temples to pristine beaches, experience the beauty of Sri Lanka with BSL Tours.',
  keywords: 'Sri Lanka tours, travel packages, Ceylon travel, Sri Lanka holidays, cultural tours, beach holidays, wildlife safaris',
  openGraph: {
    title: 'BSL Tours - Best Sri Lanka Tours & Travel Packages',
    description: 'Discover authentic Sri Lanka with our curated tour packages. From ancient temples to pristine beaches.',
    url: 'https://bsltours.com',
    siteName: 'BSL Tours',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BSL Tours - Sri Lanka Travel Experiences',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BSL Tours - Best Sri Lanka Tours & Travel Packages',
    description: 'Discover authentic Sri Lanka with our curated tour packages.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        {children}
      </body>
    </html>
  )
}