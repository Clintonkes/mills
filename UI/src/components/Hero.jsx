import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Sun } from "lucide-react";
import heroLawn from "@/assets/hero-lawn.jpg";
import mowingAction from "@/assets/mowing-action.jpg";

const SLIDES = [heroLawn, mowingAction];

const STATS = [
  { n: 12, s: "+", l: "Years in Escondido" },
  { n: 500, s: "+", l: "Lawns Serviced" },
  { n: 100, s: "%", l: "Satisfaction" },
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="lm-top" className="relative min-h-screen flex items-center overflow-hidden bg-lmills-ink">
      <div className="absolute -top-32 -right-24 w-[34rem] h-[34rem] rounded-full bg-lmills-sun/25 blur-2xl pointer-events-none" />
      <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full border-[14px] border-lmills-sun/20 pointer-events-none" />
      <AnimatePresence>
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.3 }}
          className="absolute inset-0"
        >
          <img src={SLIDES[i]} alt="Escondido lawncare" className="absolute inset-0 w-full h-full object-cover lm-kenburns" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-lmills-ink via-lmills-ink/85 to-lmills-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-lmills-ink via-transparent to-lmills-ink/30" />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-8 w-full pt-32 pb-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 text-lmills-sun text-sm font-manrope font-semibold tracking-[0.25em] uppercase mb-5"
        >
          <Sun size={16} /> Escondido, CA · Sun Valley Lawncare
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-fraunces text-lmills-cream text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight max-w-4xl"
        >
          Valley lawns, kept to <span className="italic text-lmills-sun">perfection</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-lmills-cream/80 text-lg md:text-xl font-manrope mt-6 max-w-xl leading-relaxed"
        >
          L Mills LLC brings reliable, detail-driven lawncare to Escondido and the North County valley — mowing, edging, and full seasonal upkeep that keeps every yard looking its sun-ready best.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap gap-4 mt-9"
        >
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-lmills-sun text-lmills-ink font-manrope font-semibold hover:bg-lmills-cream transition shadow-xl shadow-lmills-ink/40"
          >
            <ArrowRight size={18} /> Get a Free Quote
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-lmills-cream/30 text-lmills-cream font-manrope font-semibold hover:bg-lmills-cream hover:text-lmills-ink transition"
          >
            Explore Services
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center gap-10 mt-14"
        >
          {STATS.map((st) => (
            <div key={st.l}>
              <div className="font-fraunces text-lmills-sun text-3xl md:text-4xl font-bold">{st.n}{st.s}</div>
              <div className="text-lmills-cream/60 text-xs font-manrope uppercase tracking-wider mt-1 max-w-[120px]">{st.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
      <a href="#lm-services" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-lmills-cream/60 hover:text-lmills-sun transition animate-bounce">
        <ChevronDown size={28} />
      </a>
    </section>
  );
}