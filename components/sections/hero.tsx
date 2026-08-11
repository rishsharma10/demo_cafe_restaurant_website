'use client';

import { useEffect, useState } from 'react';
import { Coffee, Star, MapPin, Clock, ArrowDown } from 'lucide-react';

const beans = [
  { left: '8%', delay: '0s', dur: '14s', size: 14 },
  { left: '22%', delay: '4s', dur: '18s', size: 10 },
  { left: '38%', delay: '2s', dur: '16s', size: 12 },
  { left: '55%', delay: '6s', dur: '20s', size: 9 },
  { left: '72%', delay: '1s', dur: '15s', size: 13 },
  { left: '88%', delay: '3s', dur: '17s', size: 11 },
];

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7590623/pexels-photo-7590623.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920')",
          transform: `translateY(${offset * 0.32}px) scale(1.12)`,
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/55 to-espresso/85" aria-hidden />
      <div className="absolute inset-0 bg-grain opacity-60" aria-hidden />

      {/* Floating coffee beans */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {beans.map((b, i) => (
          <span
            key={i}
            className="absolute bottom-[-40px] rounded-full bg-caramel/40 animate-bean"
            style={{
              left: b.left,
              width: b.size,
              height: b.size * 1.4,
              borderRadius: '50%',
              animationDelay: b.delay,
              animationDuration: b.dur,
            }}
          />
        ))}
      </div>

      {/* Steam */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-24 flex gap-3 opacity-70 pointer-events-none" aria-hidden>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block w-1.5 h-16 rounded-full bg-gradient-to-t from-white/0 to-white/80 steam"
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 text-center text-cream">
        <div
          className="reveal inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs sm:text-sm font-bold text-cream/90 mb-6 border border-cream/20"
        >
          <span className="flex items-center gap-0.5 text-warning">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-warning" />
            ))}
          </span>
          4.1 · 3,005 reviews · Chandigarh
        </div>

        <h1 className="reveal font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-[1.04] text-balance text-shadow-soft">
          Cafe JC
          <span className="block text-caramel mt-1">Cafe</span>
        </h1>

        <p className="reveal mt-5 font-body text-lg sm:text-xl text-cream/85 max-w-2xl mx-auto text-balance">
          Handcrafted coffee, wood-fired pizzas &amp; fresh-baked treats in the
          heart of Sector 10D, Chandigarh. Cozy vibes, honest prices.
        </p>

        <div className="reveal mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 rounded-full bg-caramel text-espresso px-7 py-3.5 text-sm font-bold shadow-xl hover:bg-cream hover:-translate-y-0.5 transition-all duration-300"
          >
            <Coffee className="h-4 w-4" />
            Explore the Menu
          </a>
          <a
            href="#visit"
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 text-cream px-7 py-3.5 text-sm font-bold hover:bg-cream/10 transition-all duration-300"
          >
            Reserve a Table
          </a>
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-cream/80 font-body">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-caramel" /> Shop No. 2 & 3, Azaadi Rte, 10D, Sector 10
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-caramel" /> Open · Closes 11:30 pm
          </span>
          <span className="inline-flex items-center gap-1.5">₹400–1,600 per person</span>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-cream/70 hover:text-cream transition-colors"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
