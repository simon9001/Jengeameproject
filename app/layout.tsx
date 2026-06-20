import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://jengeame.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Jengeame | Web & Mobile App Development Agency in Nairobi, Kenya",
    template: "%s | Jengeame",
  },
  description:
    "Jengeame is a full-stack digital agency in Nairobi, Kenya. We build fast, scalable websites, mobile apps (Flutter), and backend systems for businesses across Africa.",
  keywords: [
    "web development Kenya",
    "mobile app development Nairobi",
    "web design Kenya",
    "app developer Kenya",
    "software company Nairobi",
    "Next.js developer Kenya",
    "Flutter developer Kenya",
    "web agency Kenya",
    "website design Nairobi",
    "e-commerce website Kenya",
    "Jengeame",
  ],
  authors: [{ name: "Jengeame", url: BASE_URL }],
  creator: "Jengeame",
  publisher: "Jengeame",
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: BASE_URL,
    siteName: "Jengeame",
    title: "Jengeame | Web & Mobile App Development Agency in Nairobi, Kenya",
    description:
      "Custom websites, mobile apps, and backend APIs for businesses in Kenya and across Africa. Fast, secure, built to grow.",
    images: [
      {
        url: "/assets/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Jengeame — Digital Agency Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jengeame | Web & Mobile App Dev Agency, Kenya",
    description:
      "Custom websites, Flutter apps, and scalable backends for Kenyan and African businesses.",
    images: ["/assets/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/logo.jpeg",
    shortcut: "/assets/logo.jpeg",
    apple: "/assets/logo.jpeg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Jengeame",
  url: BASE_URL,
  logo: `${BASE_URL}/assets/logo.jpeg`,
  image: `${BASE_URL}/assets/logo.jpeg`,
  description:
    "Full-stack digital agency in Nairobi, Kenya delivering web development, mobile apps, and backend solutions for businesses across Africa.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  email: "simongatungo300@gmail.com",
  telephone: "+254757568845",
  areaServed: ["Kenya", "Africa"],
  serviceType: [
    "Web Development",
    "Mobile App Development",
    "Backend API Development",
    "UI/UX Design",
    "E-commerce Development",
    "AI & Automation",
  ],
  sameAs: [
    "https://github.com/simon9001",
    "https://www.linkedin.com/in/simongatungob8a429225",
  ],
  priceRange: "KES 15,000 – Custom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
