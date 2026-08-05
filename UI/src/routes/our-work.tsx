import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      { title: "Our Work — L Mills LLC" },
      { name: "description", content: "Yards we keep looking sharp across Escondido and the North County valley." },
    ],
  }),
  component: OurWorkPage,
});

function OurWorkPage() {
  return (
    <div className="bg-lmills-cream font-manrope text-lmills-ink">
      <Navbar />
      <main className="pt-24">
        <Work />
      </main>
      <Footer />
    </div>
  );
}
