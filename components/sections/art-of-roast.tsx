"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ArtOfRoast() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-15%" });

  return (
    <section 
      ref={containerRef}
      className="py-24 sm:py-32 bg-espresso text-cream overflow-hidden relative"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-caramel/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Image Grid */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 w-4/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-espresso"
            >
              <div className="aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=1200&auto=format&fit=crop" 
                  alt="Coffee roasting machine" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute -bottom-12 -right-4 sm:-right-8 w-1/2 z-20 rounded-2xl overflow-hidden shadow-2xl border-8 border-espresso bg-espresso"
            >
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop" 
                  alt="Freshly roasted coffee beans" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Decorative text element */}
            <motion.div 
              initial={{ opacity: 0, rotate: -15 }}
              animate={isInView ? { opacity: 1, rotate: -15 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute top-10 -right-10 z-30 font-cursive text-4xl text-caramel hidden sm:block"
            >
              Pure Craft.
            </motion.div>
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:pl-10 mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-caramel font-bold uppercase tracking-[0.25em] text-sm mb-4">
                The Craft
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
            >
              Mastering the Roast.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-cream/80 text-lg leading-relaxed"
            >
              <p>
                Every bean is roasted to perfection in-house, unlocking complex flavors that define the unforgettable Vidhyonix Cafe experience.
              </p>
              <p>
                We source our beans from sustainable farms around the globe, ensuring each cup tells a story of its origin. Our master roasters meticulously monitor temperature and time to bring out the unique profile of every batch.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-2 border-espresso" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=150&auto=format&fit=crop" alt="Coffee 1" />
                <img className="w-12 h-12 rounded-full border-2 border-espresso" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=150&auto=format&fit=crop" alt="Coffee 2" />
                <img className="w-12 h-12 rounded-full border-2 border-espresso bg-caramel grid place-items-center text-espresso font-bold text-xs" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=150&auto=format&fit=crop" alt="Coffee 3" />
              </div>
              <p className="font-cursive text-xl text-cream/90">
                Crafted daily with love.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
