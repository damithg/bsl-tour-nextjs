import './globals.css';
import { Inter, Playfair_Display, Raleway } from 'next/font/google';
import { Providers } from '@/components/Providers';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Currency } from '@/lib/types';
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });

export const metadata = {
  title: 'Best Sri Lanka Tours',
  description: 'Discover the beauty of Sri Lanka with our curated tours',
};

async function detectCurrencyServerSide(): Promise<Currency> {
  const cookieStore = await cookies();
  const currencyCookie = cookieStore.get('currency');

  if (currencyCookie) {
    try {
      return JSON.parse(currencyCookie.value);
    } catch (e) {}
  }

  return {
    code: 'USD',
    symbol: '$',
    flag: '/images/flags/us.svg',
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const initialCurrency = await detectCurrencyServerSide();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Raleway:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${raleway.variable} antialiased`}>
        <Providers initialCurrency={initialCurrency}>
          <Navigation />
          <main>{children}</main>
          <Footer />  {/* ✅ Footer also inside Providers */}
        </Providers>
      </body>
    </html>
  );
}