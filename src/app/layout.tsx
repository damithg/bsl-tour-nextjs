import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Providers } from '@/components/common/Providers';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Best Sri Lanka Tours - Luxury Travel Experiences',
  description: 'Discover the enchanting beauty of Sri Lanka with our expertly crafted tours and personalized experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}