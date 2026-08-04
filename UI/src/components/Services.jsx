import React from "react";
import { motion } from "framer-motion";
import { Scissors, Leaf, Sparkles, Droplets } from "lucide-react";

const SERVICES = [
  { icon: Scissors, t: "Lawn Mowing", d: "Weekly or bi-weekly cuts with clean, even lines tuned to Escondido's growing season." },
  { icon: Leaf, t: "Precision Edging", d: "Crisp edging along beds, walkways and driveways — the finish that makes a yard look finished." },
  { icon: Sparkles, t: "Seasonal Programs", d: "Fertilization, aeration, weed control and soil care through every North County season." },
  { icon: Droplets, t: "Yard & Landscape Care", d: "Hedge trimming, mulch, clean-ups and bed management for a sun-ready, healthy landscape." },
];

export default function Services() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };
  return (
    <section id="lm-services" className="bg-lmills-cream py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-2xl mb-14">
          <span className="text-lmills-sage font-manrope text-sm font-semibold tracking-[0.25em] uppercase">What We Do</span>
          <h2 className="font-fraunces text-lmills-ink text-4xl md:text-5xl font-bold mt-3">Lawncare the valley can rely on.</h2>
          <p className="text-lmills-ink/65 font-manrope mt-4 text-lg">Every service is delivered by a dependable, local crew — reliable week after week.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={s.t}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white border border-lmills-ink/8 rounded-2xl p-7 hover:-translate-y-2 hover:shadow-xl hover:shadow-lmills-sage/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-lmills-sun/15 grid place-items-center mb-5 group-hover:bg-lmills-sun transition">
                <s.icon className="text-lmills-sage group-hover:text-lmills-ink" size={26} />
              </div>
              <h3 className="font-fraunces text-lmills-ink text-2xl font-bold mb-2">{s.t}</h3>
              <p className="text-lmills-ink/60 font-manrope text-sm leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}