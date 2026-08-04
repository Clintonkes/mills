import React from "react";
import { motion } from "framer-motion";
import heroLawn from "@/assets/hero-lawn.jpg";
import mowingAction from "@/assets/mowing-action.jpg";

const HERO = heroLawn;
const LAWN = mowingAction;
const YARD = heroLawn;

export default function Work() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  return (
    <section id="lm-work" className="bg-lmills-cream py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-2xl mb-12">
          <span className="text-lmills-sage font-manrope text-sm font-semibold tracking-[0.25em] uppercase">Selected Work</span>
          <h2 className="font-fraunces text-lmills-ink text-4xl md:text-5xl font-bold mt-3">Yards we keep looking sharp.</h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {[
            { name: "Escondido Valley Home", area: "Escondido", img: HERO },
            { name: "Crisp Mow Stripes", area: "North County", img: LAWN },
          ].map((p, idx) => (
            <motion.div
              key={p.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5]"
            >
              <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-lmills-ink via-lmills-ink/15 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <h3 className="font-fraunces text-lmills-cream text-2xl font-bold">{p.name}</h3>
                <p className="text-lmills-sun font-manrope text-sm">{p.area}, CA</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="group relative rounded-3xl overflow-hidden aspect-[21/9]"
        >
          <img src={YARD} alt="Curb appeal" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-lmills-ink/80 via-lmills-ink/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-10">
            <span className="inline-block bg-lmills-sun text-lmills-ink text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1 mb-3">Featured</span>
            <h3 className="font-fraunces text-lmills-cream text-3xl md:text-4xl font-bold">Curb appeal that turns heads.</h3>
            <p className="text-lmills-sun font-manrope text-sm mt-1">Full landscape care · Escondido, CA</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}