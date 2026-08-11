import { Coffee, Pizza, Cookie, Leaf, Heart, Users } from 'lucide-react';

const features = [
  { icon: Coffee, title: 'Handcrafted Coffee', text: 'Hand-pulled espresso & silky micro-foam, made to order.' },
  { icon: Pizza, title: 'Wood-fired Pizzas', text: 'Fresh dough, slow-fermented, loaded with cheese.' },
  { icon: Cookie, title: 'Daily Bakes', text: 'Brownies, cakes & tarts baked fresh every morning.' },
  { icon: Leaf, title: 'Cozy Vibes', text: 'Warm lighting, soft music & a corner that feels like home.' },
];

const marqueeWords = [
  'Cappuccino', 'Wood-fired Pizza', 'White Sauce Pasta', 'Garlic Bread',
  'Brownie with Ice Cream', 'Cold Coffee', 'Honey Chilli Potato', 'Oreo Shake',
  'Peach Iced Tea', 'Cheese Quesadilla', 'Peri Peri Wings', 'Tiramisu',
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-cream bg-grain overflow-hidden">
      {/* Marquee */}
      <div className="absolute top-0 inset-x-0 border-y border-primary/15 bg-latte/60 overflow-hidden">
        <div className="flex w-max animate-marquee py-3">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="flex items-center gap-3 px-6 font-display text-lg sm:text-xl font-semibold text-mocha/80 whitespace-nowrap">
              {w}
              <span className="text-caramel text-2xl leading-none">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image cluster */}
          <div className="reveal relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-primary/10">
              <img
                src="https://images.pexels.com/photos/7898213/pexels-photo-7898213.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200"
                alt="Warm rustic coffee shop interior with wooden furniture"
                className="w-full h-[420px] sm:h-[520px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 glass rounded-2xl p-5 shadow-xl border border-cream/40 max-w-[220px]">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center h-12 w-12 rounded-full bg-primary text-primary-foreground animate-pulse-ring">
                  <Heart className="h-5 w-5 fill-primary-foreground" />
                </span>
                <div>
                  <p className="font-display font-bold text-2xl text-espresso leading-none">4.3</p>
                  <p className="text-xs text-mocha font-body">774 happy reviews</p>
                </div>
              </div>
            </div>
            {/* Floating bean badge */}
            <div className="hidden sm:flex absolute -top-6 -left-6 items-center gap-2 glass rounded-full px-4 py-2 shadow-lg border border-cream/40 animate-float">
              <Coffee className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold text-espresso">Since the heart of Chandigarh</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="reveal text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
              Our Story
            </p>
            <h2 className="reveal font-display font-bold text-4xl sm:text-5xl text-espresso leading-tight text-balance">
              A cozy corner where coffee, food &amp; good company meet
            </h2>
            <p className="reveal mt-5 text-lg text-mocha/90 leading-relaxed">
              Tucked into Shop No. 2 & 3, Azaadi Rte, 10D, Sector 10, Cafe JC has
              become a neighbourhood favourite for its affordable, flavourful
              food and warm, unhurried ambience. From hand-pulled cappuccinos to
              wood-fired pizzas and brownies fresh out of the oven — everything
              is made with care, served with a smile.
            </p>
            <p className="reveal mt-4 text-mocha/80 leading-relaxed">
              Dine in, grab a takeaway, or order no-contact delivery — the
              experience stays just as warm.
            </p>

            <div className="reveal mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group flex gap-3 p-4 rounded-2xl bg-white/70 border border-primary/10 hover:border-accent/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="shrink-0 grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display font-bold text-espresso">{f.title}</p>
                    <p className="text-sm text-mocha/80 leading-snug">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-latte px-4 py-2 text-sm font-bold text-mocha">
                <Users className="h-4 w-4 text-primary" /> Dine-in
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-latte px-4 py-2 text-sm font-bold text-mocha">
                <Coffee className="h-4 w-4 text-primary" /> Takeaway
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-latte px-4 py-2 text-sm font-bold text-mocha">
                <Leaf className="h-4 w-4 text-primary" /> No-contact delivery
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
