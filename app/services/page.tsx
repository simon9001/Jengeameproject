import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Web & Mobile App Development Services in Kenya",
  description:
    "Jengeame offers web development, mobile app development (Flutter), backend APIs, UI/UX design, database engineering, and AI automation for businesses in Kenya.",
  alternates: { canonical: "https://jengeame.co.ke/services" },
  openGraph: {
    title: "Web & Mobile App Development Services in Kenya | Jengeame",
    description:
      "From landing pages to full SaaS platforms — explore Jengeame's full range of software development services for businesses across Kenya and Africa.",
    url: "https://jengeame.co.ke/services",
  },
};

export default function ServicesPage() {
  return <Services />;
}
