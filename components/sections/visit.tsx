import { MapPin, Phone, Clock, Navigation, Car, Bike, UtensilsCrossed } from 'lucide-react';

const hours = [
  { day: 'Monday', time: '9:00 AM – 11:00 PM' },
  { day: 'Tuesday', time: '9:00 AM – 11:00 PM', today: true },
  { day: 'Wednesday', time: '9:00 AM – 11:00 PM' },
  { day: 'Thursday', time: '9:00 AM – 11:00 PM' },
  { day: 'Friday', time: '9:00 AM – 11:30 PM' },
  { day: 'Saturday', time: '8:30 AM – 11:30 PM' },
  { day: 'Sunday', time: '8:30 AM – 11:00 PM' },
];

const services = [
  { icon: UtensilsCrossed, label: 'Dine-in' },
  { icon: Bike, label: 'Takeaway' },
  { icon: Car, label: 'No-contact delivery' },
];

export default function Visit() {
  return (
    <section id="visit" className="relative py-24 sm:py-32 bg-cream bg-grain overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="reveal text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
            Visit Us
          </p>
          <h2 className="reveal font-display font-bold text-4xl sm:text-5xl text-espresso leading-tight text-balance">
            Find your table in the heart of Mohali
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Info card */}
          <div className="reveal rounded-3xl bg-white p-7 sm:p-9 shadow-lg border border-primary/10 flex flex-col">
            <div className="space-y-5 flex-1">
              <div className="flex gap-4">
                <span className="shrink-0 grid place-items-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display font-bold text-espresso">Address</p>
                  <p className="text-mocha/85 leading-snug">
                    F-452, Phase 8b, Mohali 160055
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="shrink-0 grid place-items-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display font-bold text-espresso">Reservations</p>
                  <a href="tel:+918770283188" className="text-mocha/85 hover:text-primary transition-colors">
                    +91 87702 83188
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="shrink-0 grid place-items-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="font-display font-bold text-espresso">Opening Hours</p>
                  <ul className="mt-1 space-y-1">
                    {hours.map((h) => (
                      <li
                        key={h.day}
                        className={`flex justify-between text-sm py-0.5 ${
                          h.today ? 'text-primary font-bold' : 'text-mocha/80'
                        }`}
                      >
                        <span>{h.day}{h.today ? ' · Today' : ''}</span>
                        <span className="font-body">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                {services.map((s) => (
                  <span
                    key={s.label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-latte px-3.5 py-1.5 text-xs font-bold text-mocha"
                  >
                    <s.icon className="h-3.5 w-3.5 text-primary" />
                    {s.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Vidhyonix+Phase+8b+Mohali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-bold shadow-md hover:bg-espresso hover:-translate-y-0.5 transition-all"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
              <a
                href="tel:+918770283188"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 text-primary px-5 py-3 text-sm font-bold hover:bg-primary/5 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call to Reserve
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="reveal rounded-3xl overflow-hidden shadow-lg border border-primary/10 min-h-[360px] bg-latte">
            <iframe
              title="Vidhyonix Cafe location map"
              src="https://www.google.com/maps?q=Vidhyonix,+Phase+8b,+Mohali&output=embed"
              className="w-full h-full min-h-[360px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
