import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun } from "lucide-react";

const LINKS = [
  { l: "Services", h: "#lm-services" },
  { l: "Why Us", h: "#lm-why" },
  { l: "Our Work", h: "#lm-work" },
  { l: "Quote", h: "#lm-quote" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-lmills-ink/95 backdrop-blur-md py-3 shadow-lg" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#lm-top" className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-full bg-lmills-sun grid place-items-center"><Sun className="text-lmills-ink" size={18} /></span>
          <span className="font-fraunces text-lmills-cream text-xl font-bold tracking-tight">L Mills</span>
          <span className="font-manrope text-lmills-cream/60 text-[10px] tracking-[0.3em] uppercase border-l border-lmills-cream/30 pl-2">LLC</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.h} href={l.h} className="text-lmills-cream/80 hover:text-lmills-sun text-sm font-medium transition">{l.l}</a>
          ))}
          <a href="#lm-quote" className="px-5 py-2.5 rounded-full bg-lmills-sun text-lmills-ink font-semibold text-sm hover:bg-lmills-cream transition">Free Quote</a>
        </nav>
        <button className="md:hidden text-lmills-cream" onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden bg-lmills-ink border-t border-lmills-sun/20 overflow-hidden"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {LINKS.map((l) => (
              <a key={l.h} href={l.h} onClick={() => setOpen(false)} className="text-lmills-cream/85 py-2">{l.l}</a>
            ))}
            <a href="#lm-quote" onClick={() => setOpen(false)} className="text-center px-5 py-3 rounded-full bg-lmills-sun text-lmills-ink font-semibold">Free Quote</a>
          </div>
        </motion.div>
      )}
    </header>
  );
}