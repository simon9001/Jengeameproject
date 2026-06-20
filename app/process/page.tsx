import type { Metadata } from "next";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "How We Build Your Project | Our Development Process",
  description:
    "See how Jengeame takes your idea from discovery to deployment. Our clear, 6-step process keeps you informed at every stage — no surprises, just results.",
  alternates: { canonical: "https://jengeame.co.ke/process" },
  openGraph: {
    title: "How We Build Your Project | Our Development Process | Jengeame",
    description:
      "Transparent, collaborative, and deadline-driven. Discover how Jengeame delivers production-ready software for businesses in Kenya.",
    url: "https://jengeame.co.ke/process",
  },
};

export default function ProcessPage() {
  return <Process />;
}
