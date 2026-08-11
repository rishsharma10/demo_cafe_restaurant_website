"use client";

import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="relative py-20 bg-accent text-white overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-20" />
      <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center relative z-10">
        <h2 className="reveal font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
          Get 10% Off Your Next Coffee
        </h2>
        <p className="reveal text-white/80 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          Join our community to get exclusive weekend specials, secret menu items, and invitations to tasting events.
        </p>
        
        <form className="reveal flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 rounded-full px-6 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-caramel transition-shadow"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-caramel text-espresso px-8 py-3.5 font-bold hover:bg-cream transition-colors shadow-lg shadow-black/10"
          >
            Subscribe
            <Send className="h-4 w-4" />
          </button>
        </form>
        <p className="reveal text-xs text-white/50 mt-4">
          We respect your inbox. No spam, ever.
        </p>
      </div>
    </section>
  );
}
