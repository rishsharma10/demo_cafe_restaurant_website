"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SlowDown() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section 
      ref={containerRef}
      className="bg-latte text-espresso py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cream/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Images */}
        <div className="flex-1 w-full relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto lg:mx-0 border-8 border-cream/50"
          >
            <img 
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop"
              alt="Pouring coffee"
              className="w-full h-full object-cover"
            />
            {/* Soft overlay */}
            <div className="absolute inset-0 bg-espresso/10 mix-blend-multiply" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 10 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: -5 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="absolute -bottom-10 -right-4 sm:-right-10 w-48 sm:w-64 rounded-2xl overflow-hidden shadow-xl border-4 border-cream hidden sm:block bg-cream"
          >
            <img 
              src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop"
              alt="Fresh pastries"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right Side: Text */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-cursive text-caramel text-4xl sm:text-5xl -rotate-2 inline-block">
              Slow down...
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15]"
          >
            Sip, savor, and <br/>
            stay a while.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-espresso/70 text-lg sm:text-xl font-body leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            In a world that moves too fast, we believe in the magic of pausing. Every cup we brew and every pastry we bake is an invitation to take a moment for yourself. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="font-cursive text-3xl text-espresso/60 mt-8">
              "The best ideas start with coffee."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
