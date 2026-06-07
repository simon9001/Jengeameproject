"use client";
import { Github, Linkedin, Mail, Phone, ArrowRight, Globe, Smartphone, Server, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { memo, useMemo, useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

/* ── Typewriter hook ─────────────────────────────────────────── */
const PHRASES = [
  "Available for projects — Nairobi, Kenya",
  "Building your digital future",
  "Web · Mobile · Backend · AI",
  "Remote-friendly · Africa & Beyond",
  "Turning ideas into shipped products",
  "Let's build something great",
];

function useTypewriter(phrases, typeSpeed = 65, deleteSpeed = 32, pauseMs = 2400) {
  const [display, setDisplay] = useState("");
  const phraseIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timer;
    function tick() {
      const phrase = phrases[phraseIdx.current];
      if (!deleting.current) {
        if (charIdx.current < phrase.length) {
          charIdx.current++;
          setDisplay(phrase.slice(0, charIdx.current));
          timer = setTimeout(tick, typeSpeed);
        } else {
          timer = setTimeout(() => { deleting.current = true; tick(); }, pauseMs);
        }
      } else {
        if (charIdx.current > 0) {
          charIdx.current--;
          setDisplay(phrase.slice(0, charIdx.current));
          timer = setTimeout(tick, deleteSpeed);
        } else {
          deleting.current = false;
          phraseIdx.current = (phraseIdx.current + 1) % phrases.length;
          timer = setTimeout(tick, 300);
        }
      }
    }
    tick();
    return () => clearTimeout(timer);
  }, []); // eslint-disable-line

  return display;
}

/* ── TypewriterBadge ─────────────────────────────────────────── */
const TypewriterBadge = memo(function TypewriterBadge() {
  const text = useTypewriter(PHRASES);
  return (
    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full skeu-badge mb-5">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
      </span>
      <span className="text-sm font-bold tracking-wide min-w-[260px]">
        {text}
        <span className="tw-cursor" />
      </span>
    </div>
  );
});

/* ── Other sub-components ────────────────────────────────────── */
const SocialLink = memo(({ href, icon, title }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="skeu-icon-btn w-11 h-11 flex items-center justify-center rounded-xl text-muted-foreground hover:text-primary"
    title={title}
  >
    {icon}
  </a>
));
SocialLink.displayName = "SocialLink";

const Tag = memo(({ tag }) => (
  <span className="skeu-badge px-4 py-1.5 rounded-full text-xs hover:scale-105 transition-transform cursor-default">
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
  { icon: Globe, value: "10+", label: "Projects" },
  { icon: Smartphone, value: "3+", label: "Mobile Apps" },
  { icon: Server, value: "5+", label: "Backends" },
  { icon: Zap, value: "100%", label: "Satisfaction" },
];

/* ── Hero ────────────────────────────────────────────────────── */
export default memo(function Hero() {
  const socialLinks = useMemo(() =>
    SOCIAL_LINKS.map(({ href, icon, title }) => (
      <SocialLink key={title} href={href} icon={icon} title={title} />
    )), []);

  const tags = useMemo(() => TAGS.map((t) => <Tag key={t} tag={t} />), []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="w-full min-h-[85vh] flex items-center justify-center px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <TypewriterBadge />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-foreground">
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
              {tags}
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
              <Link
                href="/portfolio"
                className="skeu-btn-primary inline-flex items-center gap-2 px-6 py-3 text-base"
              >
                View Our Work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="skeu-btn-outline inline-flex items-center gap-2 px-6 py-3 text-base"
              >
                Get a Quote
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {socialLinks}
            </div>
          </motion.div>

          {/* Right — Image + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0 w-full max-w-lg lg:max-w-xl"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-[#F28482] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <div className="relative skeu-card overflow-hidden">
                <img
                  src="/assets/hero.png"
                  alt="Gatungo Digital Hero"
                  className="w-full h-auto transform hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="skeu-stat-card rounded-xl p-3 flex flex-col items-center text-center gap-1">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-lg font-extrabold text-foreground leading-none">{value}</span>
                  <span className="text-[10px] text-muted-foreground leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
});
