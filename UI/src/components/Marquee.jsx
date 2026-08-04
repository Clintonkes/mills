import React from "react";

const ITEMS = [
  "Lawn Mowing", "Precision Edging", "Hedge Trimming", "Yard Clean-Up",
  "Fertilization", "Mulch & Beds", "Weed Control", "Aeration",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="bg-lmills-sun py-4 overflow-hidden">
      <div className="flex w-max animate-lm-marquee">
        {row.map((it, idx) => (
          <span key={idx} className="flex items-center gap-4 px-8 font-fraunces text-lmills-ink text-lg md:text-xl italic whitespace-nowrap">
            {it}<span className="w-1.5 h-1.5 rounded-full bg-lmills-ink/40" />
          </span>
        ))}
      </div>
    </div>
  );
}