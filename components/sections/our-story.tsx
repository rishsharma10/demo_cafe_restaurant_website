import { Leaf, Coffee, HeartHandshake } from 'lucide-react';

export default function OurStory() {
  return (
    <section id="our-story" className="relative py-24 sm:py-32 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="reveal text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
              Behind the Beans
            </p>
            <h2 className="reveal font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-espresso leading-tight mb-6">
              Ethically Sourced. Locally Loved.
            </h2>
            <div className="reveal space-y-6 text-mocha/90 text-lg leading-relaxed">
              <p>
                At Vidhyonix Cafe, we believe that a great cup of coffee starts long before it reaches your mug. It begins with the soil, the farmers, and the roasting process. That's why we partner exclusively with ethical estates that prioritize sustainable farming.
              </p>
              <p>
                Every bean we pull for your espresso is freshly roasted in small batches to preserve its natural oils and complex flavor profile. When you sip our coffee, you're tasting the dedication of dozens of passionate people.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {[
                { icon: Leaf, title: "Sustainable", desc: "100% ethically sourced beans." },
                { icon: Coffee, title: "Small Batch", desc: "Roasted weekly for maximum freshness." },
                { icon: HeartHandshake, title: "Community", desc: "Supporting local artisans & bakers." }
              ].map((feature, i) => (
                <div key={i} className="reveal text-center sm:text-left">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-latte text-accent mb-4">
                    <feature.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display font-bold text-espresso mb-1">{feature.title}</h3>
                  <p className="text-sm text-mocha/80">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12">
                <img
                  src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=600&h=800"
                  alt="Barista pouring latte art"
                  className="reveal rounded-3xl w-full object-cover shadow-lg"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=600&h=600"
                  alt="Fresh coffee beans"
                  className="reveal rounded-3xl w-full object-cover shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <img
                  src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=80&w=600&h=600"
                  alt="Espresso machine brewing"
                  className="reveal rounded-3xl w-full object-cover shadow-lg"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600&h=800"
                  alt="Cafe interior"
                  className="reveal rounded-3xl w-full object-cover shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
