import React from "react";
import { Link } from "@tanstack/react-router";
import { Sun, Leaf, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-lmills-ink text-lmills-cream/70 pt-16 pb-8">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-9 h-9 rounded-full bg-lmills-sun grid place-items-center"><Sun className="text-lmills-ink" size={18} /></span>
            <span className="font-fraunces text-lmills-cream text-xl font-bold">L Mills</span>
            <span className="font-manrope text-lmills-cream/60 text-[10px] tracking-[0.3em] uppercase border-l border-lmills-cream/30 pl-2">LLC</span>
          </div>
          <p className="font-manrope max-w-sm">Reliable, detail-driven lawncare serving Escondido and the North County valley. Honest work, fair pricing, yards kept sun-ready — every visit.</p>
          <div className="flex items-center gap-2 mt-5"><Leaf className="text-lmills-sun" size={18} /><span className="font-manrope text-sm text-lmills-cream/60">Licensed & Insured · Escondido, CA</span></div>
        </div>
        <div>
          <h4 className="font-fraunces text-lmills-cream text-lg font-bold mb-4">Contact</h4>
          <ul className="space-y-3 font-manrope text-sm">
            <li className="flex items-start gap-3"><MapPin className="text-lmills-sun mt-0.5 shrink-0" size={16} /><span>211 N Citrus Ave, Sp 58<br />Escondido, CA 92027</span></li>
            <li><a href="tel:+16199880715" className="flex items-center gap-3 hover:text-lmills-sun"><Phone size={16} />+1 619 988 0715</a></li>
            <li><a href="mailto:lmillinfo@proton.me" className="flex items-center gap-3 hover:text-lmills-sun break-all"><Mail size={16} />lmillinfo@proton.me</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-fraunces text-lmills-cream text-lg font-bold mb-4">Services</h4>
          <ul className="space-y-2 font-manrope text-sm">
            <li><Link to="/services" className="hover:text-lmills-sun">Lawn Mowing</Link></li>
            <li><Link to="/services" className="hover:text-lmills-sun">Precision Edging</Link></li>
            <li><Link to="/services" className="hover:text-lmills-sun">Seasonal Programs</Link></li>
            <li><Link to="/services" className="hover:text-lmills-sun">Yard & Landscape Care</Link></li>
          </ul>
          <Link to="/book" className="inline-block mt-5 px-5 py-2.5 rounded-full bg-lmills-sun text-lmills-ink font-manrope font-semibold text-sm hover:bg-lmills-cream transition">Free Quote</Link>
        </div>
      </div>
      <div className="border-t border-lmills-cream/10 mt-12 pt-6 max-w-[1320px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-3 font-manrope text-xs text-lmills-cream/50">
        <span>© {new Date().getFullYear()} L Mills LLC. All rights reserved.</span>
        <span>Escondido · San Marcos · Vista · North County Valley</span>
      </div>
    </footer>
  );
}