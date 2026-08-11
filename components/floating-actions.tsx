"use client";

import { useEffect, useState } from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show buttons after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-center p-3 gap-2 bg-espresso border-t border-cream/20 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href="tel:+911724630666"
        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-accent text-white py-3 text-sm font-bold shadow-md hover:bg-accent/90 transition-colors"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <a
        href="https://www.google.com/maps?q=Cafe+JC,+Sector+10,+Chandigarh"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-caramel text-espresso py-3 text-sm font-bold shadow-md hover:bg-caramel/90 transition-colors"
      >
        <MapPin className="h-4 w-4" />
        Directions
      </a>
    </div>
  );
}
