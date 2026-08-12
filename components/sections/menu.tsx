'use client';

import { useState } from 'react';
import { menuCategories } from '@/lib/data';
import { Star, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Menu() {
  const [active, setActive] = useState(menuCategories[0].id);
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const [activeMood, setActiveMood] = useState<string | null>(null);
  
  const current = menuCategories.find((c) => c.id === active) ?? menuCategories[0];
  const allItems = menuCategories.flatMap(c => c.items);
  
  const aiMoods = [
    { id: 'energy', label: '⚡ Need Energy', desc: 'AI Suggestion: High caffeine and a quick sugar rush to keep you moving.', items: ['cold-coffee', 'kitkat-crunch-shake', 'peri-peri-pizza'] },
    { id: 'cozy', label: '🔥 Cozy Date', desc: 'AI Suggestion: Perfect for sharing and warming up on a chilly evening.', items: ['cappuccino', 'cheese-burst-pizza', 'chocolate-oreo-shake'] },
    { id: 'light', label: '🥗 Healthy & Light', desc: 'AI Suggestion: Fresh, crisp, and refreshing choices without the heavy calories.', items: ['iced-americano', 'watermelon-mint-cooler', 'arrabbiata-pasta'] }
  ];

  const currentMoodObj = aiMoods.find(m => m.id === activeMood);
  const displayedItems = activeMood && currentMoodObj
    ? currentMoodObj.items.map(id => allItems.find(i => i.id === id)!).filter(Boolean)
    : current.items;

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-espresso overflow-hidden">
      {/* Decorative beans */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden>
        <div className="absolute top-10 left-8 h-40 w-28 rounded-full bg-caramel blur-3xl" />
        <div className="absolute bottom-10 right-8 h-52 w-40 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="reveal text-xs font-bold uppercase tracking-[0.25em] text-caramel mb-3">
            Our Menu
          </p>
          <h2 className="reveal font-display font-bold text-4xl sm:text-5xl text-cream leading-tight text-balance">
            Crafted with love, priced for everyone
          </h2>
          <p className="reveal mt-4 text-cream/70 text-lg">
            ₹200–400 per person · reported by 91 people
          </p>
        </div>

        {/* AI Mood Bar */}
        <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-espresso via-espresso/90 to-espresso border border-caramel/30 rounded-2xl p-4 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2 text-caramel">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <span className="font-bold text-sm uppercase tracking-widest">What are you craving?</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {aiMoods.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => {
                    setActiveMood(activeMood === mood.id ? null : mood.id);
                  }}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all border ${
                    activeMood === mood.id
                      ? 'bg-caramel text-espresso border-caramel scale-105'
                      : 'bg-white/5 text-cream border-cream/20 hover:bg-white/10'
                  }`}
                >
                  {mood.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        {!activeMood && (
          <div className="reveal mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            {menuCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 border ${
                  active === c.id
                    ? 'bg-caramel text-espresso border-caramel shadow-lg scale-105'
                    : 'bg-white/5 text-cream/80 border-cream/15 hover:bg-white/10 hover:text-cream'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        )}

        <p className="mt-5 text-center text-cream/60 text-sm italic font-display min-h-[1.5rem]">
          {activeMood && currentMoodObj ? currentMoodObj.desc : current.blurb}
        </p>

        {/* Product cards */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeMood || active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          >
            {displayedItems.map((item, i) => (
              <Link
                href={`/product/${item.id}`}
                key={item.id || item.name}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/10 hover:border-caramel/50 hover:from-white/[0.15] hover:to-white/[0.08] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]"
              >
              {/* Image */}
              <div 
                id={item.id === 'hazelnut-frappe' ? 'hazelnut-target' : undefined}
                className={`relative h-56 sm:h-64 overflow-hidden ${item.id === 'hazelnut-frappe' ? 'bg-[#f1ede9]' : ''}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
                {item.tag && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-espresso bg-caramel px-2.5 py-1 rounded-full shadow-md">
                    <Star className="h-3 w-3 fill-espresso text-espresso" />
                    {item.tag}
                  </span>
                )}
                <span className="absolute top-3 right-3 font-display font-bold text-lg text-cream bg-espresso/70 backdrop-blur px-3 py-1 rounded-full">
                  {item.price}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-display font-bold text-2xl text-cream group-hover:text-caramel transition-colors">
                    {item.name}
                  </h3>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setAddedItem(item.name);
                    }}
                    aria-label={`Add ${item.name} to order`}
                    className="shrink-0 grid place-items-center h-10 w-10 rounded-full bg-caramel/20 text-caramel hover:bg-caramel hover:text-espresso hover:scale-110 transition-all duration-300"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                {item.popularity && (
                  <div className="mt-2 inline-block">
                    <span className="text-xs font-bold text-[#ff6b6b] bg-[#ff6b6b]/10 px-2 py-0.5 rounded border border-[#ff6b6b]/20">
                      {item.popularity}
                    </span>
                  </div>
                )}
                <p className="mt-2 text-sm text-cream/70 leading-relaxed min-h-[3rem]">
                  {item.desc}
                </p>
                {addedItem === item.name && (
                  <p className="mt-3 text-xs font-bold tracking-wide text-caramel uppercase">
                    Added to order
                  </p>
                )}
              </div>
              </Link>
            ))}
        </motion.div>
        </AnimatePresence>

        <p className="mt-10 text-center text-cream/50 text-sm">
          Prices are indicative &amp; may vary. Last updated by visitors a year ago.
        </p>
      </div>
    </section>
  );
}
