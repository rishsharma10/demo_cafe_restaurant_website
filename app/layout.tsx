import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Cafe JC | Chandigarh',
  description:
    'Cafe JC in Sector 10D, Chandigarh — cozy vibes, handcrafted coffee, wood-fired pizzas, fresh bakes & more. Dine-in, takeaway & no-contact delivery.',
  keywords: [
    'Cafe JC',
    'cafe in Chandigarh',
    'bakery Chandigarh',
    'coffee shop Sector 10',
    'pizza pasta Chandigarh',
  ],
  openGraph: {
    title: 'Cafe JC | Chandigarh',
    description:
      'Cozy vibes, handcrafted coffee, wood-fired pizzas & fresh bakes in Sector 10D, Chandigarh.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
