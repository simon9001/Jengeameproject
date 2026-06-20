import type { Metadata } from "next";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Blog | Tech Tips & Insights for Kenyan Businesses",
  description:
    "Practical guides, tutorials, and insights from the Jengeame team — covering web development, mobile apps, M-Pesa integration, local SEO, and building tech businesses in Kenya.",
  alternates: { canonical: "https://jengeame.co.ke/blog" },
  openGraph: {
    title: "Blog | Tech Tips & Insights for Kenyan Businesses | Jengeame",
    description:
      "How much does a website cost in Kenya? How to rank on Google? How to add M-Pesa to your site? Find practical answers from Nairobi's leading dev agency.",
    url: "https://jengeame.co.ke/blog",
  },
};

export default function BlogPage() {
  return <Blog />;
}
