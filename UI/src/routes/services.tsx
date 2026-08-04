import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-layout";
import { Scissors, Sprout, Trees, Leaf, Wrench, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — L Mills LLC" },
      { name: "description", content: "Lawn mowing, precision edging, seasonal programs, and yard & landscape care serving Escondido and the North County valley." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Scissors, title: "Estate Mowing", desc: "Weekly or bi-weekly precision cuts with alternating stripe patterns tuned to your turf." },
  { icon: Sprout, title: "Precision Edging", desc: "Crisp, defined edges along beds, walkways and driveways — the finish that sets estates apart." },
  { icon: Leaf, title: "Leaf Clean-Up", desc: "Full-property leaf removal, debris haul-off, and post-storm resets that leave your grounds spotless." },
  { icon: Trees, title: "Hedge & Shrub Care", desc: "Architectural shaping, pruning, and health-focused maintenance for hedges and ornamentals." },
  { icon: Sprout, title: "Seasonal Fertilization", desc: "Fertilization, aeration, overseeding and soil care calibrated to North County's inland climate." },
  { icon: Wrench, title: "Coastal Landscape Care", desc: "Hedge sculpting, mulch, irrigation tuning and full bed management for a flawless groundscape." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteNav />
      <main>
        <section className="border-b border-primary/10 bg-gradient-to-b from-secondary/40 to-transparent py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Services</span>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              A full studio of lawn craft.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Everything your property needs — from precision mowing to seasonal care — under one roof.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="rounded-3xl border border-primary/10 bg-card p-8">
                <Icon className="size-8 text-primary" />
                <h3 className="mt-6 font-display text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-7xl px-6 text-center">
            <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground">
              Get a Free Quote <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
