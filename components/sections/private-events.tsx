import { PartyPopper, Mail } from 'lucide-react';

export default function PrivateEvents() {
  return (
    <section id="private-events" className="relative py-24 sm:py-32 bg-espresso text-cream overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src="https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&h=800&w=600"
                alt="Friends celebrating at a cafe"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-10 sm:-right-10 bg-caramel text-espresso p-6 rounded-3xl shadow-xl rotate-3">
              <PartyPopper className="h-10 w-10 mb-2" />
              <p className="font-display font-bold text-xl leading-tight">Host Your<br/>Next Party</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="reveal text-xs font-bold uppercase tracking-[0.25em] text-caramel mb-3">
              Private Events & Catering
            </p>
            <h2 className="reveal font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Make Your Moments Memorable
            </h2>
            <p className="reveal text-lg text-cream/80 leading-relaxed mb-8">
              Whether it's a corporate luncheon, an intimate birthday celebration, or a creative workshop, Cafe JC provides the perfect backdrop. Enjoy custom menus, our signature coffees, and a dedicated team to make your event flawless.
            </p>

            <ul className="reveal space-y-4 mb-10">
              {[
                "Customizable wood-fired pizza & pasta menus",
                "Dedicated barista for your party",
                "Indoor & outdoor seating options",
                "Capacity for up to 40 guests"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-cream/90">
                  <span className="shrink-0 h-2 w-2 rounded-full bg-caramel" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="mailto:hello@cafejc.in?subject=Private Booking Inquiry"
              className="reveal inline-flex items-center gap-2 rounded-full bg-caramel text-espresso px-8 py-4 text-sm font-bold shadow-lg hover:bg-white hover:-translate-y-1 transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
