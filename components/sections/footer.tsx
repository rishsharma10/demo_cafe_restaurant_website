import { Coffee, Instagram, Facebook, Phone, MapPin, Mail, ArrowUp } from 'lucide-react';

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@downtowncafe.in' },
  { icon: Phone, label: 'Phone', href: 'tel:+91172517777' },
];

export default function Footer() {
  return (
    <footer className="relative bg-espresso text-cream overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-caramel/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-10 w-10 rounded-full bg-caramel text-espresso">
                <Coffee className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block font-display font-bold text-xl text-cream">Down Town</span>
                <span className="block text-[11px] uppercase tracking-[0.22em] text-caramel font-body font-bold">
                  Cafe &amp; Bakery
                </span>
              </span>
            </div>
            <p className="mt-4 text-cream/70 text-sm leading-relaxed max-w-xs">
              A cozy corner in Sector 21, Chandigarh for handcrafted coffee,
              wood-fired pizzas &amp; fresh-baked treats. Cozy vibes, honest prices.
            </p>
            <p className="mt-4 font-display text-caramel text-lg" lang="pa">
              ਡਾਊਨ ਟਾਊਨ ਕੈਫੇ &amp; ਬੇਕਰੀ
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-display font-bold text-lg text-cream mb-4">Explore</p>
            <ul className="space-y-2 text-sm">
              {[
                { href: '#about', label: 'Our Story' },
                { href: '#menu', label: 'Menu' },
                { href: '#gallery', label: 'Gallery' },
                { href: '#reviews', label: 'Reviews' },
                { href: '#visit', label: 'Visit &amp; Hours' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-cream/70 hover:text-caramel transition-colors"
                    dangerouslySetInnerHTML={{ __html: l.label }}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + socials */}
          <div>
            <p className="font-display font-bold text-lg text-cream mb-4">Reach Us</p>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex gap-2.5">
                <MapPin className="h-4 w-4 text-caramel shrink-0 mt-0.5" />
                SCO-45, Sector 21C, Chandigarh, 160022
              </li>
              <li className="flex gap-2.5">
                <Phone className="h-4 w-4 text-caramel shrink-0 mt-0.5" />
                <a href="tel:+91172517777" className="hover:text-caramel transition-colors">0172 517 7777</a>
              </li>
            </ul>

            <div className="mt-5 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid place-items-center h-10 w-10 rounded-full bg-white/5 border border-cream/15 text-cream/80 hover:bg-caramel hover:text-espresso hover:border-caramel transition-all duration-300 hover:-translate-y-0.5"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/50 text-center sm:text-left">
            © {new Date().getFullYear()} Down Town Cafe &amp; Bakery · Chandigarh. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cream/70 hover:text-caramel transition-colors"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
