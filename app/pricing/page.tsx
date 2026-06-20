import type { Metadata } from "next";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Website & App Development Pricing in Kenya 2025",
  description:
    "Transparent, fair pricing for websites and mobile apps in Kenya. Jengeame offers Starter (from KES 15,000), Professional (from KES 30,000), and Enterprise packages.",
  alternates: { canonical: "https://jengeame.co.ke/pricing" },
  openGraph: {
    title: "Website & App Development Pricing in Kenya 2025 | Jengeame",
    description:
      "How much does a website cost in Kenya? See Jengeame's clear, honest pricing — no hidden fees, no surprises.",
    url: "https://jengeame.co.ke/pricing",
  },
};

export default function PricingPage() {
  return <Pricing />;
}
