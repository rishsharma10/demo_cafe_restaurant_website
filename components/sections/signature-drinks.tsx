"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const signatureDrinks = [
  {
    id: "01",
    label: "CAFE.01",
    name: "Cappuccino",
    subtitle: "Espresso & Micro-foam",
    description: "Double shot of our finest espresso, velveted micro-foam, and a generous dusting of rich cocoa. The perfect start to any morning.",
    ingredients: [
      { amount: "30 ML", name: "Espresso" },
      { amount: "150 ML", name: "Steamed Milk" },
      { amount: "10 G", name: "Cocoa Powder" },
    ],
    blend: "CAFFEINE",
    blendAmount: "80 MG",
    image: "/images/media__1786443653554.png",
    tags: ["CLASSIC", "HOT"]
  },
  {
    id: "02",
    label: "CAFE.02",
    name: "Cold Coffee",
    subtitle: "Blended & Crowned",
    description: "Chilled to perfection. Our signature blend is blended with crushed ice and crowned with a thick scoop of vanilla ice cream. A decadent afternoon treat.",
    ingredients: [
      { amount: "60 ML", name: "Espresso" },
      { amount: "200 ML", name: "Chilled Milk" },
      { amount: "1 SCOOP", name: "Vanilla Ice Cream" },
    ],
    blend: "CAFFEINE",
    blendAmount: "160 MG",
    image: "/images/media__1786443705022.png",
    tags: ["SWEET", "CHILLED"]
  },
  {
    id: "03",
    label: "CAFE.03",
    name: "Hazelnut",
    subtitle: "Sweet & Nutty",
    description: "Rich espresso meets roasted hazelnut syrup, blended with milk and ice, then generously topped with whipped cream and caramel drizzle.",
    ingredients: [
      { amount: "60 ML", name: "Espresso" },
      { amount: "30 ML", name: "Hazelnut Syrup" },
      { amount: "TOP", name: "Whipped Cream" },
    ],
    blend: "CAFFEINE",
    blendAmount: "160 MG",
    image: "/images/media__1786443680876.png",
    tags: ["NUTTY", "BLENDED"]
  }
];

export default function SignatureDrinks() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  return (
    <section ref={containerRef} className="relative z-50 h-[400vh] bg-[#f1ede9] text-[#1a1a1a]">
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row max-w-[1600px] mx-auto">
        
        {/* Global Header */}
        <div className="absolute top-8 left-8 sm:top-12 sm:left-12 z-20 pointer-events-none">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Three formulations.
          </h2>
        </div>

        {/* Left Side: Content */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center p-8 sm:p-12 md:pl-24 z-10 pt-24 md:pt-0">
          {signatureDrinks.map((drink, index) => {
            const start = index * 0.25;
            const end = (index + 1) * 0.25;
            const opacity = useTransform(
              smoothProgress,
              [start - 0.1, start + 0.05, end - 0.05, end + 0.1],
              [0, 1, 1, 0]
            );

            const y = useTransform(
              smoothProgress,
              [start - 0.1, start + 0.05, end - 0.05, end + 0.1],
              [100, 0, 0, -100]
            );

            return (
              <motion.div 
                key={drink.name}
                style={{ opacity, y }}
                className="absolute left-8 sm:left-12 md:left-24 right-8 md:right-12 flex flex-col pointer-events-none"
              >
                <p className="font-display font-bold text-sm tracking-widest uppercase mb-4 sm:mb-6">
                  {drink.label}
                </p>
                <div className="flex items-end mb-2">
                  <h3 className="font-display text-6xl sm:text-8xl tracking-tight leading-none">
                    {drink.name}
                  </h3>
                  <span className="w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full mb-2 sm:mb-4 ml-1"></span>
                </div>
                <p className="text-lg sm:text-xl font-body italic text-black/60 mb-6 sm:mb-8">
                  {drink.subtitle}
                </p>
                <p className="text-base sm:text-lg leading-relaxed max-w-md mb-8 sm:mb-12 text-black/80">
                  {drink.description}
                </p>

                {/* Ingredients Table */}
                <div className="max-w-md w-full border-t border-black/10">
                  {drink.ingredients.map((ing, i) => (
                    <div key={i} className="flex gap-4 py-3 border-b border-black/5 text-sm sm:text-base">
                      <span className="w-20 sm:w-24 font-bold text-black/90">{ing.amount}</span>
                      <span className="text-black/70">{ing.name}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center py-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-black/50 border-b border-black/20">
                    <span>ACTIVE BLEND</span>
                    <span className="text-black">{drink.blendAmount}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Side: Visuals */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full z-0 flex items-center justify-center overflow-hidden">
          
          {/* Huge Background Numbers */}
          {signatureDrinks.map((drink, index) => {
            const start = index * (1 / signatureDrinks.length);
            const end = (index + 1) * (1 / signatureDrinks.length);
            
            const opacity = useTransform(
              smoothProgress,
              [start - 0.15, start + 0.1, end - 0.1, end + 0.15],
              [0, 1, 1, 0]
            );

            const scale = useTransform(
              smoothProgress,
              [start - 0.15, end + 0.15],
              [0.8, 1.2]
            );

            return (
              <motion.div
                key={`bg-num-${drink.id}`}
                style={{ opacity, scale }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <span 
                  className="font-display font-bold text-[300px] sm:text-[400px] md:text-[500px] leading-none text-transparent tracking-tighter"
                  style={{ WebkitTextStroke: '2px rgba(0,0,0,0.05)' }}
                >
                  {drink.id}
                </span>
              </motion.div>
            );
          })}

          {/* Central Images */}
          {signatureDrinks.map((drink, index) => {
            const start = index * 0.25;
            const end = (index + 1) * 0.25;
            const opacity = useTransform(
              smoothProgress,
              // For the 3rd drink, fade it out early (0.72) on desktop so the overlay can seamlessly take over
              drink.id === "03" && isDesktop
                ? [start - 0.1, start + 0.05, 0.72, 0.75] 
                : [start - 0.1, start + 0.05, end - 0.05, end + 0.1],
              [0, 1, 1, 0]
            );

            const y = useTransform(
              smoothProgress,
              [start - 0.1, start + 0.05, end - 0.05, end + 0.1],
              [100, 0, 0, -100]
            );

            const rotate = useTransform(
              smoothProgress,
              [start - 0.1, start + 0.05, end - 0.05, end + 0.1],
              [-20, 0, 5, 25]
            );

            return (
              <motion.div
                key={`img-${drink.name}`}
                style={{ opacity, y }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <motion.div style={{ rotate }} className="relative w-64 sm:w-80 md:w-96 aspect-square sm:aspect-[3/4] md:aspect-[3/4] flex items-center justify-center">
                  <img 
                    src={drink.image} 
                    alt={drink.name}
                    className="w-full h-full object-contain filter drop-shadow-2xl scale-110 mix-blend-multiply"
                  />
                </motion.div>
                  {/* Vertical Text floating beside the cup */}
                  <div className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-8 py-4 opacity-30">
                    <span className="font-display font-bold text-xs tracking-[0.3em] uppercase text-black" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                      CAFE
                    </span>
                    <span className="font-display font-bold text-2xl text-black">
                      {drink.id}
                    </span>
                  </div>

                {/* Floating Tags */}
                <div className="absolute hidden md:flex items-center justify-between w-full max-w-lg px-8 pointer-events-none">
                   <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-black/40 uppercase -translate-x-12">
                     {drink.tags[0]}
                     <div className="w-12 h-px bg-black/10"></div>
                   </div>
                   <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-black/40 uppercase translate-x-12">
                     <div className="w-12 h-px bg-black/10"></div>
                     {drink.tags[1]}
                   </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* 3D Flying Cup Overlay (Desktop Only) */}
        <motion.div
          className={`absolute inset-0 pointer-events-none z-[100] flex-col md:flex-row ${isDesktop ? 'flex' : 'hidden'}`}
          style={{
            // Fade in the overlay right as the scroll reaches the end of the 3rd slide
            opacity: useTransform(
              smoothProgress,
              [0.72, 0.75, 0.8],
              [0, 1, 1]
            )
          }}
        >
           {/* Empty spacer for the left column (text side) */}
           <div className="hidden md:block w-1/2 h-full" />
           
           {/* Right column container exactly matching the visuals column */}
           <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center origin-center">
             <motion.div 
               className="relative aspect-[3/4] flex items-center justify-center origin-center"
               style={{
                 width: "24rem", // matches md:w-96
                 scale: useTransform(smoothProgress, [0.75, 1], [1, 0.9]),
                 y: useTransform(smoothProgress, [0.75, 1], [0, 800]),
                 // Need to move it from the right column to the left column (approx -50vw - a bit more)
                 x: useTransform(smoothProgress, [0.75, 1], [0, -950]), 
                 rotate: useTransform(smoothProgress, [0.75, 1], [0, -5]),
               }}
             >
               <img 
                 src="/images/media__1786443680876.png" 
                 alt="Hazelnut"
                 className="w-full h-full object-contain filter drop-shadow-2xl scale-110 mix-blend-multiply"
               />
             </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
