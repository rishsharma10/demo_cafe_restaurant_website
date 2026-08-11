"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ArtOfRoast() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Background Parallax
  const bgY = useTransform(smoothProgress, [0, 1], ["-10%", "10%"]);
  const bgScale = useTransform(smoothProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  
  // Floating Elements Parallax (Y-axis)
  const img1Y = useTransform(smoothProgress, [0, 1], ["30%", "-30%"]);
  const img2Y = useTransform(smoothProgress, [0, 1], ["-20%", "40%"]);
  const img3Y = useTransform(smoothProgress, [0, 1], ["50%", "-50%"]);

  // 3D Rotations to simulate GSAP ScrollTrigger 3D depth
  const rotateX1 = useTransform(smoothProgress, [0, 1], [25, -25]);
  const rotateY1 = useTransform(smoothProgress, [0, 1], [-15, 15]);

  const rotateX2 = useTransform(smoothProgress, [0, 1], [-30, 30]);
  const rotateY2 = useTransform(smoothProgress, [0, 1], [20, -20]);

  const rotateX3 = useTransform(smoothProgress, [0, 1], [15, -45]);
  const rotateY3 = useTransform(smoothProgress, [0, 1], [30, -30]);
  
  // Text Parallax
  const textY = useTransform(smoothProgress, [0, 1], ["20%", "-20%"]);
  const textOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[120vh] sm:h-[150vh] bg-[#1a120c] overflow-hidden perspective-1000"
      style={{ perspective: "1000px" }}
    >
      {/* Background Layer */}
      <motion.div 
        className="absolute inset-0 w-full h-[120%] -top-[10%] opacity-40 mix-blend-luminosity"
        style={{ y: bgY, scale: bgScale }}
      >
        <img 
          src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=80&w=2000" 
          alt="Coffee roasting machine" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a120c] via-[#1a120c]/50 to-[#1a120c]"></div>
      </motion.div>

      {/* Content Container */}
      <div className="relative w-full h-full max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-center">
        
        {/* Center Text Block */}
        <motion.div 
          className="absolute z-30 text-center max-w-3xl pointer-events-none"
          style={{ y: textY, opacity: textOpacity }}
        >
          <p className="text-accent font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 drop-shadow-lg">
            The Craft
          </p>
          <h2 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl text-cream leading-tight drop-shadow-2xl">
            Mastering <br className="hidden sm:block" /> the Roast.
          </h2>
          <p className="mt-6 text-cream/80 text-lg sm:text-xl font-medium max-w-xl mx-auto drop-shadow-lg">
            Every bean is roasted to perfection in-house, unlocking complex flavors that define the unforgettable Cafe JC experience.
          </p>
        </motion.div>

        {/* 3D Floating Images (The GSAP Vibe) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
          
          {/* Top Left Floating Image */}
          <motion.div 
            className="absolute top-[10%] left-[5%] sm:left-[10%] w-48 sm:w-64 md:w-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5"
            style={{ 
              y: img1Y, 
              rotateX: rotateX1, 
              rotateY: rotateY1,
              z: 100 // push forward
            }}
          >
            <div className="aspect-[4/5] relative">
              <img 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800" 
                alt="Latte art pouring" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
            </div>
          </motion.div>

          {/* Bottom Right Floating Image */}
          <motion.div 
            className="absolute bottom-[10%] right-[5%] sm:right-[10%] w-56 sm:w-72 md:w-96 rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-4 border-white/5 z-20"
            style={{ 
              y: img2Y, 
              rotateX: rotateX2, 
              rotateY: rotateY2,
              z: 200 // push further forward
            }}
          >
            <div className="aspect-square relative">
              <img 
                src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800" 
                alt="Fresh coffee beans" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
            </div>
          </motion.div>

          {/* Top Right Small Floating Element */}
          <motion.div 
            className="absolute top-[30%] right-[15%] sm:right-[20%] w-32 sm:w-40 rounded-xl overflow-hidden shadow-xl border-2 border-white/10 z-40 hidden md:block"
            style={{ 
              y: img3Y, 
              rotateX: rotateX3, 
              rotateY: rotateY3,
              z: 300 // closest to camera
            }}
          >
            <div className="aspect-[3/4] relative">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600" 
                alt="Cafe interior detail" 
                className="w-full h-full object-cover filter contrast-125"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
