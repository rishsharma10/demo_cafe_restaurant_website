import { CalendarDays, Music, Coffee, Clock } from 'lucide-react';

const events = [
  {
    title: "Friday Acoustic Nights",
    date: "Every Friday",
    time: "7:00 PM - 10:00 PM",
    icon: Music,
    description: "Kick off your weekend with live acoustic music from local artists. Enjoy wood-fired pizzas and a great vibe."
  },
  {
    title: "Latte Art Masterclass",
    date: "Saturday, 25th",
    time: "10:00 AM - 12:00 PM",
    icon: Coffee,
    description: "Learn the secrets behind the perfect pour. Our head barista will guide you through espresso extraction and milk texturing."
  }
];

export default function Events() {
  return (
    <section id="events" className="relative py-24 sm:py-32 bg-latte/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="reveal text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
            Community
          </p>
          <h2 className="reveal font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-espresso leading-tight text-balance">
            Upcoming Events at Vidhyonix Cafe
          </h2>
          <p className="reveal mt-4 text-mocha/80 text-lg">
            Join us for live music, coffee workshops, and local gatherings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {events.map((event, i) => (
            <div 
              key={i}
              className="reveal group flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-3xl bg-white shadow-lg border border-primary/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="shrink-0 flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <event.icon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-espresso mb-2">{event.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-caramel mb-4">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </span>
                </div>
                <p className="text-mocha/80 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#visit"
            className="reveal inline-flex items-center gap-2 rounded-full border-2 border-caramel text-espresso px-8 py-3.5 text-sm font-bold hover:bg-caramel hover:text-white transition-all duration-300"
          >
            RSVP or Book a Table
          </a>
        </div>
      </div>
    </section>
  );
}
