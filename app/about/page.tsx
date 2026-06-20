import type { Metadata } from "next";
import AboutUs from "@/components/AboutUs";

export const metadata: Metadata = {
  title: "About Us | Full-Stack Dev Agency in Nairobi, Kenya",
  description:
    "Meet the team behind Jengeame — a full-stack digital agency based in Nairobi, Kenya. We build websites, mobile apps, and backend systems for businesses across Africa.",
  alternates: { canonical: "https://jengeame.co.ke/about" },
  openGraph: {
    title: "About Jengeame | Full-Stack Dev Agency in Nairobi, Kenya",
    description:
      "Get to know the people and values behind Jengeame. We're a Nairobi-based agency turning ideas into scalable digital products.",
    url: "https://jengeame.co.ke/about",
  },
};

export default function AboutPage() {
  return <AboutUs />;
}
