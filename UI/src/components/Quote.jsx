import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, MapPin, Phone, Mail } from "lucide-react";

const OPTIONS = [
  "Weekly Mowing", "Bi-Weekly Mowing", "One-Time Cut", "Edging & Trimming",
  "Fertilization & Weed Control", "Fall Clean-Up", "Landscape Care",
];

export default function Quote() {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", service: OPTIONS[0], notes: "" });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const submit = (e) => { e.preventDefault(); setDone(true); };
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

  return (
    <section id="lm-quote" className="bg-lmills-sage py-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.6 }}>
          <span className="text-lmills-sun font-manrope text-sm font-semibold tracking-[0.25em] uppercase">Free Quote</span>
          <h2 className="font-fraunces text-lmills-cream text-4xl md:text-5xl font-bold mt-3 leading-tight">Let's care for your yard.</h2>
          <p className="text-lmills-cream/75 font-manrope mt-5 text-lg max-w-md">Tell us about your property and we'll send a straightforward quote and schedule a visit.</p>
          <div className="mt-8 space-y-4 font-manrope">
            <div className="flex items-start gap-3 text-lmills-cream/85"><MapPin className="text-lmills-sun shrink-0 mt-0.5" size={18} /><span>211 N Citrus Ave, Sp 58<br />Escondido, CA 92027</span></div>
            <a href="tel:+16199880715" className="flex items-center gap-3 text-lmills-cream/85 hover:text-lmills-sun"><Phone className="text-lmills-sun shrink-0" size={18} />+1 619 988 0715</a>
            <a href="mailto:lmillinfo@proton.me" className="flex items-center gap-3 text-lmills-cream/85 hover:text-lmills-sun break-all"><Mail className="text-lmills-sun shrink-0" size={18} />lmillinfo@proton.me</a>
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.6 }} className="bg-lmills-cream rounded-3xl p-7 md:p-9 shadow-xl shadow-lmills-ink/20">
          {done ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-lmills-sun mx-auto mb-5 flex items-center justify-center">
                <Check className="text-lmills-ink" size={30} />
              </div>
              <h3 className="font-fraunces text-lmills-ink text-2xl font-bold mb-2">Thank you, {form.name || "neighbor"}!</h3>
              <p className="text-lmills-ink/70 font-manrope">We'll reach out within one business day to schedule your free quote.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid md:grid-cols-2 gap-5">
              <Field label="Name">
                <input required value={form.name} onChange={(e) => set("name", e.target.value)} className="lm-input" placeholder="Your name" />
              </Field>
              <Field label="Phone">
                <input required type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} className="lm-input" placeholder="(760) 555-0100" />
              </Field>
              <Field label="Email">
                <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className="lm-input" placeholder="you@email.com" />
              </Field>
              <Field label="Service">
                <select value={form.service} onChange={(e) => set("service", e.target.value)} className="lm-input">
                  {OPTIONS.map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <div className="md:col-span-2">
                <Field label="Property Address">
                  <input required value={form.address} onChange={(e) => set("address", e.target.value)} className="lm-input" placeholder="Property address, Escondido, CA" />
                </Field>
              </div>
              <div className="md:col-span-2">
                <Field label="Notes (optional)">
                  <textarea rows="3" value={form.notes} onChange={(e) => set("notes", e.target.value)} className="lm-input" placeholder="Lot size, gates, anything we should know…" />
                </Field>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full md:w-auto px-10 py-4 rounded-full bg-lmills-sage text-lmills-cream font-manrope font-semibold hover:bg-lmills-ink transition">
                  Request My Free Quote
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-lmills-ink/60 text-xs font-manrope font-semibold uppercase tracking-[0.15em] mb-2">{label}</span>
      {children}
    </label>
  );
}