"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Coffee, Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories } from '@/lib/data';

const links = [
  { href: '/about', label: 'About' },
  { href: '/menu', label: 'Menu', hasDropdown: true },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/visit', label: 'Visit' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center h-10 w-10 rounded-xl overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-110">
            <img src="/logo.png" alt="Vidhyonix Logo" className="h-full w-full object-contain" />
          </span>
          <span className="leading-tight">
            <span className={`block font-display font-bold text-lg sm:text-xl tracking-tight transition-colors ${scrolled ? 'text-espresso' : 'text-cream drop-shadow-sm'}`}>
              Vidhyonix Cafe
            </span>
            <span className={`block text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-body font-bold transition-colors ${scrolled ? 'text-mocha/80' : 'text-cream/70 drop-shadow-sm'}`}>
              Cafe
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 h-full relative">
          {links.map((l) => (
            <div 
              key={l.href}
              className="relative h-full flex items-center"
              onMouseEnter={() => l.hasDropdown && setActiveDropdown(l.label)}
            >
              <Link
                href={l.href}
                className={`relative px-4 py-2 text-sm font-bold hover:text-primary transition-colors group flex items-center gap-1 ${scrolled ? 'text-mocha' : 'text-cream drop-shadow-sm'}`}
                onClick={() => setActiveDropdown(null)}
              >
                {l.label}
                {l.hasDropdown && (
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === l.label ? 'rotate-180' : ''}`} />
                )}
                <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-accent rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+918770283188"
            className={`flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors ${scrolled ? 'text-mocha' : 'text-cream drop-shadow-sm'}`}
          >
            <Phone className="h-4 w-4" />
            +91 87702 83188
          </a>
          <Link
            href="/visit"
            className="rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold shadow-md hover:bg-espresso hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Reserve a Table
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid place-items-center h-10 w-10 rounded-full bg-primary/10 text-primary"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {activeDropdown === 'Menu' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-cream border-t border-espresso/10 shadow-2xl hidden md:block"
            onMouseEnter={() => setActiveDropdown('Menu')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-6xl mx-auto px-8 py-6 grid grid-cols-5 gap-4">
              {menuCategories.map((category) => (
                <div key={category.id} className="flex flex-col gap-3">
                  <h3 className="font-display font-bold text-base text-espresso border-b border-accent/20 pb-2">{category.label}</h3>
                  <div className="flex flex-col gap-2">
                    {category.items.slice(0, 1).map((item, idx) => (
                      <Link 
                        key={idx} 
                        href={`/product/${item.id}`}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex flex-col gap-2 rounded-xl hover:bg-white p-2 -mx-2 transition-colors"
                      >
                        <div className="aspect-[4/3] rounded-lg overflow-hidden relative shadow-sm">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-espresso group-hover:text-primary transition-colors">{item.name}</p>
                          <p className="text-xs text-mocha/70">{item.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link href={`/menu#${category.id}`} onClick={() => setActiveDropdown(null)} className="text-sm font-bold text-accent hover:text-espresso transition-colors mt-1 flex items-center gap-1">
                    View all {category.label} &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass px-5 pb-5 pt-1 flex flex-col gap-1 border-t border-border/60">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-lg text-mocha font-bold hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+91172517777"
            className="flex items-center gap-2 px-3 py-3 rounded-lg text-mocha font-bold hover:bg-primary/10 hover:text-primary transition-colors mt-2 border-t border-border/60"
          >
            <Phone className="h-4 w-4" />
            0172 517 7777
          </a>
        </div>
      </div>
    </header>
  );
}
