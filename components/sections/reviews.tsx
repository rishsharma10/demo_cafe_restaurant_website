import { reviews, ratingBreakdown } from '@/lib/data';
import { Star, Quote, BadgeCheck } from 'lucide-react';

export default function Reviews() {
  const total = ratingBreakdown.reduce((s, r) => s + r.count, 0);

  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-latte/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="reveal text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
            Guest Love
          </p>
          <h2 className="reveal font-display font-bold text-4xl sm:text-5xl text-espresso leading-tight text-balance">
            4.1 stars across 3,005 reviews
          </h2>
          <p className="reveal mt-4 text-mocha/80 text-lg">
            Customers consistently praise this cafe for its fresh food, satisfying sandwiches, and good brownies, complemented by a wide variety of beverages.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-8 items-start">
          {/* Rating breakdown */}
          <div className="reveal lg:sticky lg:top-28 rounded-3xl bg-white p-7 shadow-lg border border-primary/10">
            <div className="flex items-end gap-3">
              <span className="font-display font-black text-6xl text-espresso leading-none">4.1</span>
              <div className="pb-1">
                <div className="flex items-center gap-0.5 text-warning">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning" />
                  ))}
                </div>
                <p className="text-xs text-mocha font-body mt-1">3,005 reviews</p>
              </div>
            </div>

            <div className="mt-5 space-y-2.5">
              {ratingBreakdown.map((r) => (
                <div key={r.stars} className="flex items-center gap-3 text-sm">
                  <span className="w-5 text-mocha font-bold">{r.stars}</span>
                  <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                  <div className="flex-1 h-2 rounded-full bg-latte overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-primary transition-all duration-1000"
                      style={{ width: `${(r.count / total) * 100}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-mocha/70 text-xs font-body">{r.count}%</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-border space-y-2">
              {[
                'Tasty pasta & satisfying sandwiches',
                'Welcoming & aesthetic ambiance',
                'Pet-friendly options available',
              ].map((t) => (
                <p key={t} className="flex items-start gap-2 text-sm text-mocha">
                  <BadgeCheck className="h-4 w-4 text-success shrink-0 mt-0.5" />
                  {t}
                </p>
              ))}
            </div>
          </div>

          {/* Review cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {reviews.map((rev) => (
              <article
                key={rev.name}
                className="reveal relative rounded-3xl bg-white p-6 shadow-md border border-primary/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/10" />
                <div className="flex items-center gap-0.5 text-warning mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning" />
                  ))}
                </div>
                <p className="text-mocha leading-relaxed text-[15px]">
                  &ldquo;{rev.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="grid place-items-center h-11 w-11 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg">
                    {rev.initial}
                  </span>
                  <div>
                    <p className="font-display font-bold text-espresso leading-tight">{rev.name}</p>
                    <p className="text-xs text-mocha/70">{rev.role}</p>
                  </div>
                  <span className="ml-auto text-xs text-mocha/60">{rev.time}</span>
                </div>
              </article>
            ))}

            <div className="reveal sm:col-span-2 rounded-3xl bg-gradient-to-br from-primary to-espresso p-7 text-cream text-center shadow-lg">
              <p className="font-display font-bold text-2xl">Visited us recently?</p>
              <p className="text-cream/80 mt-1">We&apos;d love to hear what you thought.</p>
              <a
                href="#visit"
                className="inline-flex mt-4 items-center gap-2 rounded-full bg-caramel text-espresso px-6 py-2.5 text-sm font-bold hover:bg-cream transition-colors"
              >
                Write a Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
