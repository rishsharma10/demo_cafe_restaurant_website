"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CozyCorners() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects for different elements
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[90vh] bg-espresso text-cream overflow-hidden flex items-center py-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-espresso/80 mix-blend-multiply z-10" />
        <motion.img
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop"
          alt="Cozy Cafe Corner"
          className="w-full h-[120%] object-cover -top-[10%] absolute"
          style={{ y: y1 }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-20 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <motion.div 
          style={{ opacity, y: y2 }}
          className="flex-1 space-y-6 md:pr-10"
        >
          <span className="font-cursive text-caramel text-3xl md:text-5xl -rotate-2 inline-block">
            Find your favorite spot...
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            The Reading Nook
          </h2>
          <p className="text-cream/70 text-lg md:text-xl font-body max-w-md leading-relaxed">
            Curl up with a good book, the smell of freshly roasted beans, and our warm, ambient lighting. Time slows down in our cozy corners.
          </p>
        </motion.div>

        <motion.div 
          style={{ y: y1, rotate: -3 }}
          className="flex-1 relative hidden md:block"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-caramel/20 bg-espresso">
            <img 
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1200&auto=format&fit=crop"
              alt="Steaming coffee and book"
              className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 font-cursive text-3xl text-caramel">
              Perfect pairs.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
