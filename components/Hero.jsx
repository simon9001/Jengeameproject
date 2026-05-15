"use client";
import { Github, Linkedin, Mail, Phone, ArrowRight, Globe, Smartphone, Server, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import Link from "next/link";

const SocialLink = memo(({ href, icon, title, className }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className} title={title}>
    {icon}
  </a>
));
SocialLink.displayName = "SocialLink";

const Tag = memo(({ tag }) => (
  <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 dark:border-primary/30 hover:bg-primary/20 transition-all">
    {tag}
  </span>
));
Tag.displayName = "Tag";

const SOCIAL_LINKS = [
  { href: "https://github.com/simon9001", icon: <Github className="w-5 h-5" />, title: "GitHub" },
  { href: "https://www.linkedin.com/in/simongatungob8a429225", icon: <Linkedin className="w-5 h-5" />, title: "LinkedIn" },
  { href: "mailto:simongatungo300@gmail.com", icon: <Mail className="w-5 h-5" />, title: "Email" },
  { href: "tel:+254757568845", icon: <Phone className="w-5 h-5" />, title: "Phone" },
];

const TAGS = [
  "Web Development",
  "Mobile Apps (Flutter)",
  "Backend & REST APIs",
  "UI/UX Design",
  "Database Engineering",
  "E-commerce Solutions",
  "AI & Automation",
  "Cloud Deployment",
  "System Architecture",
  "IT Consulting",
];

const STATS = [
  { icon: Globe, value: "10+", label: "Projects Delivered" },
  { icon: Smartphone, value: "3+", label: "Mobile Apps" },
  { icon: Server, value: "5+", label: "Backend Systems" },
  { icon: Zap, value: "100%", label: "Client Satisfaction" },
];

export default memo(function Hero() {
  const socialLinksElements = useMemo(() =>
    SOCIAL_LINKS.map(({ href, icon, title }) => (
      <SocialLink
        key={title}
        href={href}
        icon={icon}
        title={title}
        className="w-11 h-11 flex items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:scale-105 transition-all"
      />
    )), []);

  const tagElements = useMemo(() => TAGS.map((tag) => <Tag key={tag} tag={tag} />), []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* HERO SECTION */}
      <div className="w-full min-h-[85vh] flex items-center justify-center px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-5">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Available for Projects — Nairobi, Kenya
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-black dark:text-white">
              We Build{" "}
              <span className="bg-gradient-to-r from-[#D97706] via-[#DC2626] to-[#065F46] bg-clip-text text-transparent">
                Digital Products
              </span>{" "}
              That Drive Growth
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mb-6">
              Full-stack agency delivering{" "}
              <span className="text-foreground font-medium">web, mobile, and backend solutions</span>{" "}
              — from idea to deployment. We turn real business problems into scalable, reliable software.
            </p>

            <div className="flex flex-wrap gap-2 mb-7 justify-center md:justify-start">
              {tagElements}
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-base shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02]"
              >
                View Our Work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-foreground font-semibold text-base hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 hover:scale-[1.02]"
              >
                Get a Quote
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {socialLinksElements}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0 w-full max-w-lg lg:max-w-xl"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-[#F28482] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <img
                src="/assets/hero.png"
                alt="Gatungo Digital Hero"
                className="relative rounded-2xl shadow-2xl border border-white/20 object-cover w-full h-auto transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
});
