import { galleryImages } from '@/lib/data';
import { Camera } from 'lucide-react';

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-cream bg-grain overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="reveal text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
            Photos &amp; Vibe
          </p>
          <h2 className="reveal font-display font-bold text-4xl sm:text-5xl text-espresso leading-tight text-balance">
            A little taste of the atmosphere
          </h2>
          <p className="reveal mt-4 text-mocha/80 text-lg">
            Coffee, food &amp; the corners our guests love the most.
          </p>
        </div>

        <div className="reveal mt-12 grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-primary/10 ${img.span ?? ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 inset-x-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cream bg-espresso/50 backdrop-blur px-2.5 py-1 rounded-full">
                  <Camera className="h-3 w-3" />
                  {img.alt}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
