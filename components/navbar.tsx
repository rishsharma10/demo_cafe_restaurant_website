'use client';

import { useEffect, useState } from 'react';
import { Coffee, Menu, X, Phone } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#visit', label: 'Visit' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-[0_8px_30px_-12px_rgba(60,30,10,0.25)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center h-10 w-10 rounded-full bg-primary text-primary-foreground shadow-md transition-transform duration-500 group-hover:rotate-12">
            <Coffee className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display font-bold text-lg sm:text-xl text-espresso tracking-tight">
              Down Town
            </span>
            <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-mocha/80 font-body font-bold">
              Cafe &amp; Bakery
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm font-bold text-mocha hover:text-primary transition-colors group"
            >
              {l.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-accent rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+91172517777"
            className="flex items-center gap-2 text-sm font-bold text-mocha hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            0172 517 7777
          </a>
          <a
            href="#visit"
            className="rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold shadow-md hover:bg-espresso hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Reserve a Table
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid place-items-center h-10 w-10 rounded-full bg-primary/10 text-primary"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass px-5 pb-5 pt-1 flex flex-col gap-1 border-t border-border/60">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-lg text-mocha font-bold hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#visit"
            onClick={() => setOpen(false)}
            className="mt-2 text-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-bold shadow-md"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </header>
  );
}
