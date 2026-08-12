"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  const isHome = pathname === '/';

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
      className={`fixed top-0 inset-x-0 z-[200] transition-all duration-500 ${scrolled || !isHome ? 'glass shadow-[0_8px_30px_-12px_rgba(60,30,10,0.25)]' : 'bg-transparent'
        }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <img
            src={scrolled || !isHome ? "/vlogo.png" : "/vlogobgrm.png"}
            alt="Vidhyonix Cafe"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
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
                className={`relative px-4 py-2 text-sm font-bold hover:text-primary transition-colors group flex items-center gap-1 ${scrolled || !isHome ? 'text-mocha' : 'text-cream drop-shadow-sm'}`}
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
            href="https://wa.me/918770283188"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white shadow-md hover:bg-[#128C7E] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
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
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
            href="https://wa.me/918770283188"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-3 rounded-lg text-[#25D366] font-bold hover:bg-[#25D366]/10 transition-colors mt-2 border-t border-border/60"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
