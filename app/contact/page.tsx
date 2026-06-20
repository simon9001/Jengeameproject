import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote for Your Project",
  description:
    "Ready to build? Contact Jengeame — Nairobi's full-stack digital agency. Share your project idea and we'll respond within 24 hours with a free quote.",
  alternates: { canonical: "https://jengeame.co.ke/contact" },
  openGraph: {
    title: "Contact Jengeame | Get a Free Quote for Your Project",
    description:
      "Have a project in mind? Reach out to Jengeame and we'll help you turn your idea into a live, production-ready product.",
    url: "https://jengeame.co.ke/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}
