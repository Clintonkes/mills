import { createFileRoute } from "@tanstack/react-router";
import LMills from "@/components/LMills";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "L Mills LLC — Lawncare & Yard Care in Escondido, CA" },
      { name: "description", content: "Reliable, detail-driven lawncare serving Escondido and the North County valley. Free quotes and tailored seasonal programs." },
    ],
  }),
  component: LMills,
});
