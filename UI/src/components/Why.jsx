import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const easeOut = (x) => 1 - Math.pow(1 - x, 3);

function Stat({ value, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1600;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      setN(Math.floor(easeOut(p) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <div ref={ref} className="text-center">
      <div className="font-fraunces text-lmills-sun text-4xl md:text-5xl font-bold">{n}{suffix}</div>
      <div className="text-lmills-cream/70 font-manrope text-xs uppercase tracking-wider mt-2">{label}</div>
    </div>
  );
}

const POINTS = [
  "Locally owned in Escondido, CA",
  "Reliable weekly & bi-weekly schedules",
  "Licensed, insured & dependable crew",
  "North County valley turf expertise",
  "Fair, upfront pricing — no surprises",
  "Satisfaction guaranteed on every visit",
];

export default function Why() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  return (
    <section id="lm-why" className="bg-lmills-cream py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-lmills-sage font-manrope text-sm font-semibold tracking-[0.25em] uppercase">Why L Mills</span>
          <h2 className="font-fraunces text-lmills-ink text-4xl md:text-5xl font-bold mt-3">Escondido's friendly, dependable crew.</h2>
          <p className="text-lmills-ink/65 font-manrope mt-4 text-lg">We treat every yard like our own — honest work, fair pricing, and results you can see.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.6 }} className="bg-lmills-sage rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          <Stat value={12} suffix="+" label="Years Local" />
          <Stat value={500} suffix="+" label="Lawns Serviced" />
          <Stat value={48} suffix="" label="Hr Response" />
          <Stat value={100} suffix="%" label="Satisfaction" />
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {POINTS.map((p, idx) => (
            <motion.div
              key={p}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex items-center gap-3 bg-white border border-lmills-ink/8 rounded-xl px-5 py-4"
            >
              <span className="w-7 h-7 rounded-full bg-lmills-sun grid place-items-center shrink-0"><Check className="text-lmills-ink" size={15} /></span>
              <span className="text-lmills-ink/80 font-manrope text-sm font-medium">{p}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}