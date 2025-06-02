import type { Metadata } from 'next'
import { Inter, Playfair_Display, Raleway } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })

export const metadata: Metadata = {
  title: 'Best Sri Lanka Tours',
  description: 'Discover the beauty of Sri Lanka with our curated tours',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${raleway.variable} antialiased`}>
        <div className="min-h-screen bg-background text-foreground">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}