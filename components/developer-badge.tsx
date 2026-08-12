"use client";

import { motion } from "framer-motion";
import { Code2, ArrowRight } from "lucide-react";

export default function DeveloperBadge() {
  return (
    <motion.a
      href="mailto:hello@yourdomain.com" // TODO: Change this to your actual contact info
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.5 }}
      className="fixed bottom-24 right-4 md:bottom-6 md:right-6 md:left-auto z-50 group flex items-center gap-3 bg-espresso/90 backdrop-blur-md text-cream px-4 py-3 rounded-2xl shadow-2xl border border-white/10 hover:border-caramel hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(202,156,104,0.3)] transition-all duration-300"
    >
      <div className="bg-caramel/20 p-2 rounded-xl text-caramel group-hover:bg-caramel group-hover:text-espresso transition-colors">
        <Code2 size={20} />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold tracking-widest uppercase text-caramel">Like what you see?</span>
        <span className="text-sm font-bold flex items-center gap-1">
          Want a website like this? <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </motion.a>
  );
}
