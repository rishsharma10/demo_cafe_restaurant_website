import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Lato, Caveat, Outfit } from 'next/font/google';
import TableBookingBot from '@/components/table-booking-bot';
import QrSimulator from '@/components/qr-simulator';

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

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-cursive',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-brand',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vidhyonix Cafe | Mohali',
  description:
    'Vidhyonix Cafe in Phase 8b, Mohali — cozy vibes, handcrafted coffee, wood-fired pizzas, fresh bakes & more. Dine-in, takeaway & no-contact delivery.',
  keywords: [
    'Vidhyonix Cafe',
    'cafe in Mohali',
    'bakery Mohali',
    'coffee shop Phase 8b',
    'pizza pasta Mohali',
  ],
  openGraph: {
    title: 'Vidhyonix Cafe | Mohali',
    description:
      'Cozy vibes, handcrafted coffee, wood-fired pizzas & fresh bakes in Phase 8b, Mohali.',
    type: 'website',
    url: 'https://vidhyonix.com'
  },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  metadataBase: new URL('https://vidhyonix.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${lato.variable} ${caveat.variable} ${outfit.variable} font-body antialiased bg-cream text-espresso overflow-x-hidden selection:bg-caramel selection:text-espresso`}>
        {/* We use a custom cursor everywhere on desktop */}
        {children}
        <TableBookingBot />
        <QrSimulator />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              "name": "Vidhyonix Cafe",
              "image": "https://images.pexels.com/photos/11696469/pexels-photo-11696469.jpeg",
              "url": "https://vidhyonix.com",
              "telephone": "01724630666",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "F-452, Phase 8b",
                "addressLocality": "Mohali",
                "postalCode": "160055",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 30.7046,
                "longitude": 76.7179
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                  ],
                  "opens": "06:00",
                  "closes": "23:30"
                }
              ],
              "menu": "https://vidhyonix.com/#menu",
              "acceptsReservations": "True",
              "priceRange": "₹400–1,600",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "10432"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
