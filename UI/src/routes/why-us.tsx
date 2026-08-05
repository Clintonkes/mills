import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Why from "@/components/Why";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why L Mills — L Mills LLC" },
      { name: "description", content: "Escondido's friendly, dependable lawncare crew — locally owned, licensed, insured, and trusted across the North County valley." },
    ],
  }),
  component: WhyUsPage,
});

function WhyUsPage() {
  return (
    <div className="bg-lmills-cream font-manrope text-lmills-ink">
      <Navbar />
      <main className="pt-24">
        <Why />
      </main>
      <Footer />
    </div>
  );
}
