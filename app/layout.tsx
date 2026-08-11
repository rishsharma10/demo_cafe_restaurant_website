import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import TableBookingBot from '@/components/table-booking-bot';

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
        <TableBookingBot />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              "name": "Cafe JC",
              "image": "https://images.pexels.com/photos/11696469/pexels-photo-11696469.jpeg",
              "url": "https://cafejc.in",
              "telephone": "01724630666",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No. 2 & 3, Azaadi Rte, 10D",
                "addressLocality": "Sector 10, Chandigarh",
                "postalCode": "160011",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 30.7495,
                "longitude": 76.7901
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
              "menu": "https://cafejc.in/#menu",
              "acceptsReservations": "True",
              "priceRange": "₹400–1,600",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.1",
                "reviewCount": "3005"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
