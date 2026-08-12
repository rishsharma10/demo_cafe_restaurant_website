"use client";
import { motion } from "framer-motion";

export default function Marquee() {
  const text = "✦ FUEL YOUR VIBE ✦ FRESHLY ROASTED ✦ CRAFTED WITH LOVE ";
  
  return (
    <div className="w-full bg-[#1a1a1a] text-[#f1ede9] overflow-hidden py-4 border-y-2 border-black/10">
      <div className="whitespace-nowrap flex font-display text-xl sm:text-2xl font-bold tracking-widest uppercase">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15,
          }}
          className="flex"
        >
          <span className="pr-8">{text}</span>
          <span className="pr-8">{text}</span>
          <span className="pr-8">{text}</span>
          <span className="pr-8">{text}</span>
          <span className="pr-8">{text}</span>
          <span className="pr-8">{text}</span>
        </motion.div>
      </div>
    </div>
  );
}
