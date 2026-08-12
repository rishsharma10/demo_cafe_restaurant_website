import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { menuCategories, MenuItem } from '@/lib/data';
import Navbar from '@/components/navbar';
import Footer from '@/components/sections/footer';
import ReserveButton from '@/components/reserve-button';

export function generateStaticParams() {
  const allItems = menuCategories.flatMap(c => c.items);
  return allItems.map(item => ({ id: item.id }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  let product: MenuItem | null = null;
  let categoryName = '';
  let categoryBlurb = '';

  for (const category of menuCategories) {
    const found = category.items.find(item => item.id === params.id);
    if (found) {
      product = found;
      categoryName = category.label;
      categoryBlurb = category.blurb;
      break;
    }
  }

  if (!product) notFound();

  const featuredProducts = menuCategories
    .flatMap(c => c.items)
    .filter(item => item.id !== product!.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <main style={{ background: '#f5f0e8' }} className="min-h-screen">
      <Navbar />

      {/* Hero Product Section */}
      <div className="pt-24 sm:pt-32 pb-0 px-5 sm:px-8 max-w-7xl mx-auto">
        <Link
          href="/#menu"
          className="inline-flex items-center gap-2 text-[#6b5744] hover:text-[#2c1f12] transition-colors font-bold text-sm mb-10 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Menu
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Image */}
          <div className="relative">
            {/* Blob background shape */}
            <div
              className="absolute -inset-8 opacity-30 pointer-events-none"
              aria-hidden
            >
              <svg viewBox="0 0 500 500" className="w-full h-full fill-[#5c6b3a]">
                <path d="M380,160 C430,100 460,200 440,300 C420,400 300,440 200,420 C100,400 60,300 80,200 C100,100 180,60 270,70 C310,75 340,210 380,160Z"/>
              </svg>
            </div>

            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src={product!.image}
                alt={product!.name}
                className="w-full h-full object-cover"
              />
              {product!.tag && (
                <span className="absolute top-6 left-6 bg-[#5c6b3a] text-white text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full shadow-lg">
                  {product!.tag}
                </span>
              )}
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col md:pt-10">
            <p className="text-[#5c6b3a] font-bold uppercase tracking-[0.25em] text-xs mb-3">{categoryName}</p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-[#2c1f12] leading-none mb-3">
              {product!.name}
            </h1>
            {product!.tag && (
              <p className="text-[#6b5744] italic font-body text-lg mb-6">{product!.tag}</p>
            )}

            <div className="h-px bg-[#2c1f12]/10 mb-6" />

            <p className="text-[#6b5744] text-lg leading-relaxed mb-8 max-w-md">
              {product!.desc}
              <br /><br />
              Prepared fresh daily by our team, using honest, quality ingredients sourced with care.
            </p>

            {/* Tags row */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-[#2c1f12]/8 text-[#2c1f12] text-xs font-bold px-4 py-2 rounded-full border border-[#2c1f12]/15">🌱 Freshly Made</span>
              <span className="bg-[#2c1f12]/8 text-[#2c1f12] text-xs font-bold px-4 py-2 rounded-full border border-[#2c1f12]/15">☕ Café Favourite</span>
              {product!.popularity && (
                <span className="bg-[#5c6b3a]/10 text-[#5c6b3a] text-xs font-bold px-4 py-2 rounded-full border border-[#5c6b3a]/20">{product!.popularity}</span>
              )}
            </div>

            {/* Price + Order CTA */}
            <div className="flex items-center gap-6">
              <span className="font-display font-bold text-4xl text-[#2c1f12]">{product!.price}</span>
              <ReserveButton />
            </div>

            {/* Divider */}
            <div className="h-px bg-[#2c1f12]/10 mt-10 mb-8" />

            {/* Category blurb */}
            <div className="flex items-start gap-3 p-5 rounded-2xl bg-white/60 border border-[#e8e0d4]">
              <div className="w-10 h-10 rounded-full bg-[#5c6b3a]/15 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#5c6b3a] stroke-[1.5]" strokeLinecap="round">
                  <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#2c1f12] text-sm mb-0.5">From our {categoryName}</p>
                <p className="text-[#6b5744] text-sm">{categoryBlurb}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <section className="py-20 mt-16" style={{ background: '#eee8db' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Section header */}
          <div className="mb-10">
            <p className="text-[#5c6b3a] font-bold text-xs uppercase tracking-[0.3em] mb-2">Explore More</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#2c1f12]">
              You Might Also Like
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.id}`}
                className="group block bg-white rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(44,31,18,0.15)]"
              >
                {/* Icon badge */}
                <div className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-sm border border-[#e8e0d4]">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-[#5c6b3a] stroke-[1.5]" strokeLinecap="round">
                    <path d="M17 8h1a4 4 0 0 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8zm4-5a2 2 0 0 0-2 2v3h12V5a2 2 0 0 0-2-2H7z"/>
                  </svg>
                </div>

                <div className="relative h-48 overflow-hidden bg-[#f0ebe1]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="font-display font-bold text-[#2c1f12] text-lg mb-1 group-hover:text-[#5c6b3a] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[#6b5744] text-sm leading-relaxed mb-4 line-clamp-2">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#2c1f12] text-lg">{item.price}</span>
                    <span className="w-9 h-9 rounded-full bg-[#2c1f12] text-white flex items-center justify-center font-bold text-lg group-hover:bg-[#5c6b3a] transition-colors">
                      +
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
