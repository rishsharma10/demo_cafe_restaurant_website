'use client';

import { useState } from 'react';
import { menuCategories } from '@/lib/data';
import { Star, Plus } from 'lucide-react';

export default function Menu() {
  const [active, setActive] = useState(menuCategories[0].id);
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const current = menuCategories.find((c) => c.id === active) ?? menuCategories[0];

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

        {/* Tabs */}
        <div className="reveal mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
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

        <p className="mt-5 text-center text-cream/60 text-sm italic font-display">
          {current.blurb}
        </p>

        {/* Product cards */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {current.items.map((item, i) => (
            <article
              key={item.name}
              className="reveal group relative overflow-hidden rounded-2xl bg-white/[0.04] border border-cream/10 hover:border-caramel/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Image */}
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
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
              <div className="p-4">
                <h3 className="font-display font-bold text-xl text-cream group-hover:text-caramel transition-colors">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-cream/65 leading-snug min-h-[2.5rem]">
                  {item.desc}
                </p>
                <button
                  type="button"
                  onClick={() => setAddedItem(item.name)}
                  aria-label={`Add ${item.name} to order`}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-caramel hover:text-cream transition-colors group/btn"
                >
                  <span className="grid place-items-center h-7 w-7 rounded-full bg-caramel/15 group-hover/btn:bg-caramel group-hover/btn:text-espresso transition-all duration-300">
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                  {addedItem === item.name ? 'Added to order' : 'Add to order'}
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-cream/50 text-sm">
          Prices are indicative &amp; may vary. Last updated by visitors a year ago.
        </p>
      </div>
    </section>
  );
}
