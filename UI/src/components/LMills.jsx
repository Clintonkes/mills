import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Services from "./Services";
import Why from "./Why";
import Work from "./Work";
import Quote from "./Quote";
import Footer from "./Footer";

export default function LMills() {
  return (
    <div className="bg-lmills-cream font-manrope text-lmills-ink">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Why />
        <Work />
        <Quote />
      </main>
      <Footer />
    </div>
  );
}