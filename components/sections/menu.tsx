'use client';

import { useState } from 'react';
import { menuCategories } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Category icons as simple SVG paths
const categoryIcons: Record<string, string> = {
  coffee: 'M17 8h1a4 4 0 0 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8zm4-5a2 2 0 0 0-2 2v3h12V5a2 2 0 0 0-2-2H7z',
  shakes: 'M9 2h6l1 4H8L9 2zM8 6v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6M5 6h14',
  mains: 'M3 11l19-9-9 19-2-8-8-2z',
  bites: 'M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z',
  bakes: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z',
};

export default function Menu() {
  const [active, setActive] = useState(menuCategories[0].id);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const current = menuCategories.find((c) => c.id === active) ?? menuCategories[0];

  return (
    <section id="menu" className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#f5f0e8' }}>
      {/* Organic blob decorations */}
      <div className="absolute -top-32 -right-32 w-96 h-96 opacity-20 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 400 400" className="w-full h-full fill-[#5c6b3a]">
          <path d="M300,150 C350,100 380,200 350,280 C320,360 220,380 160,340 C100,300 80,220 100,160 C120,100 180,60 240,70 C270,75 260,190 300,150Z"/>
        </svg>
      </div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 opacity-10 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 400 400" className="w-full h-full fill-[#3d2b1f]">
          <path d="M220,80 C280,60 340,120 360,200 C380,280 320,360 240,370 C160,380 80,320 60,240 C40,160 80,80 140,70 C170,65 180,95 220,80Z"/>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#5c6b3a] font-bold text-xs tracking-[0.3em] uppercase mb-4">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#5c6b3a] stroke-2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/>
            </svg>
            Our Menu
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#2c1f12] leading-tight mb-4">
            Crafted with Love,<br/>Priced for Everyone
          </h2>
          <p className="text-[#6b5744] text-lg max-w-md mx-auto">
            ₹140–₹360 per item · Fresh daily · Honest ingredients
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {menuCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 border ${
                active === c.id
                  ? 'bg-[#2c1f12] text-[#f5f0e8] border-[#2c1f12] shadow-lg scale-105'
                  : 'bg-white/60 text-[#2c1f12] border-[#2c1f12]/20 hover:bg-white hover:border-[#2c1f12]/40'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <p className="text-center text-[#6b5744] italic text-sm mb-10 font-body">{current.blurb}</p>

        {/* Product Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {current.items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
              >
                <Link
                  href={`/product/${item.id}`}
                  className="group block bg-white rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(44,31,18,0.15)] relative"
                >
                  {/* Category icon badge */}
                  <div className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm border border-[#e8e0d4]">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#5c6b3a] stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round">
                      <path d={categoryIcons[active] || categoryIcons.coffee}/>
                    </svg>
                  </div>

                  {/* Tag badge */}
                  {item.tag && (
                    <div className="absolute top-4 right-4 z-10 bg-[#5c6b3a] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                      {item.tag}
                    </div>
                  )}

                  {/* Image - organic blob shape */}
                  <div className="relative h-52 overflow-hidden bg-[#f0ebe1]">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-display font-bold text-[#2c1f12] text-lg leading-tight mb-1 group-hover:text-[#5c6b3a] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[#6b5744] text-sm leading-relaxed mb-4 line-clamp-2">
                      {item.desc}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#2c1f12] text-lg">{item.price}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setAddedItem(item.name);
                          setTimeout(() => setAddedItem(null), 2000);
                        }}
                        aria-label={`Add ${item.name} to order`}
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 font-bold text-xl shadow-md ${
                          addedItem === item.name
                            ? 'bg-[#5c6b3a] text-white scale-90'
                            : 'bg-[#2c1f12] text-white hover:bg-[#5c6b3a] hover:scale-110'
                        }`}
                      >
                        {addedItem === item.name ? '✓' : '+'}
                      </button>
                    </div>

                    {item.popularity && (
                      <p className="mt-2 text-[10px] font-bold text-[#5c6b3a] tracking-wide">{item.popularity}</p>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#6b5744] text-sm mb-4">Prices may vary · Last updated recently</p>
        </div>
      </div>
    </section>
  );
}
