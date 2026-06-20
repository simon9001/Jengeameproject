import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Our Portfolio | Web & App Projects Built in Kenya",
  description:
    "See the real-world projects Jengeame has shipped for clients across Kenya and Africa — AgriTech platforms, property rentals, news sites, infrastructure companies, and more.",
  alternates: { canonical: "https://jengeame.co.ke/portfolio" },
  openGraph: {
    title: "Our Portfolio | Web & App Projects Built in Kenya | Jengeame",
    description:
      "From Farm with Irene to GetQeja to Taarifa — real products built by Jengeame, live and serving customers across Kenya.",
    url: "https://jengeame.co.ke/portfolio",
  },
};

export default function PortfolioPage() {
  return <Portfolio />;
}
