"use client";
import React, { memo, useState, useCallback } from "react";
import { Code, ExternalLink, FolderKanban, ArrowRight, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import Link from "next/link";
import { Button } from "./ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* Category gradient covers (used when no project.image is provided) */
const COVER_GRADIENT = {
  "Property Tech":        "linear-gradient(135deg, #f59e0b 0%, #b45309 45%, #7c2d12 100%)",
  "Management System":    "linear-gradient(135deg, #34d399 0%, #059669 45%, #064e3b 100%)",
  "Civic Tech":           "linear-gradient(135deg, #60a5fa 0%, #2563eb 45%, #1e3a8a 100%)",
  "AI / Computer Vision": "linear-gradient(135deg, #a78bfa 0%, #7c3aed 45%, #3b0764 100%)",
  "AgriTech":             "linear-gradient(135deg, #a3e635 0%, #65a30d 45%, #1a2e05 100%)",
  "Mobile App":           "linear-gradient(135deg, #22d3ee 0%, #0284c7 45%, #0c4a6e 100%)",
  "Infrastructure":       "linear-gradient(135deg, #94a3b8 0%, #334155 45%, #0f172a 100%)",
  "Media & News":         "linear-gradient(135deg, #f87171 0%, #b91c1c 45%, #450a0a 100%)",
};
const DEFAULT_COVER = "linear-gradient(135deg, #f59e0b 0%, #78350f 100%)";

const ProjectCard = memo(({ project }) => {
  const [active, setActive] = useState(false);
  const cover = COVER_GRADIENT[project.category] ?? DEFAULT_COVER;
  const hasImage = Boolean(project.image);

  const show = useCallback(() => setActive(true), []);
  const hide = useCallback(() => setActive(false), []);
  const onPointerUp = useCallback((e) => {
    if (e.pointerType === "touch") setActive((a) => !a);
  }, []);

  return (
    <motion.div
      variants={itemVariants}
      className="relative overflow-hidden rounded-2xl cursor-pointer"
      style={{ aspectRatio: "4/3" }}
      onMouseEnter={show}
      onMouseLeave={hide}
      onPointerUp={onPointerUp}
    >
      {/* ── Cover: real screenshot OR gradient ── */}
      {hasImage ? (
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
          style={{ transform: active ? "scale(1.06)" : "scale(1)" }}
        />
      ) : (
        <>
          <div className="absolute inset-0" style={{ background: cover }} />
          {/* Dot-grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
        </>
      )}

      {/* Always-on bottom gradient for text readability */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent" />

      {/* ── Default state: title + category ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4"
        animate={{ opacity: active ? 0 : 1, y: active ? 8 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {project.category && (
          <span className="skeu-badge inline-block px-2.5 py-0.5 rounded-full text-[10px] mb-1.5 w-fit">
            {project.category}
          </span>
        )}
        <h3 className="text-white font-bold text-lg leading-tight drop-shadow-lg">
          {project.title}
        </h3>
        {/* Live indicator */}
        {project.links[0]?.type === "live" && (
          <span className="inline-flex items-center gap-1 mt-1 text-[10px] font-semibold text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live site
          </span>
        )}
      </motion.div>

      {/* ── Hover overlay: full details ── */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-between p-5"
        style={{ background: "rgba(0,0,0,0.90)" }}
        initial={false}
        animate={{ opacity: active ? 1 : 0, y: active ? "0%" : "100%" }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* jengeaMe logo watermark — top right */}
        <div className="absolute top-3 right-3 opacity-70">
          <img
            src="/assets/logo.jpeg"
            alt="Built by jengeaMe"
            className="h-7 w-auto rounded-lg"
            title="Built by jengeaMe"
          />
        </div>

        {/* Top: category + title + description */}
        <div className="pr-12">
          {project.category && (
            <span className="skeu-badge inline-block px-2.5 py-0.5 rounded-full text-[10px] mb-3 w-fit">
              {project.category}
            </span>
          )}
          <h3 className="text-white font-bold text-lg leading-tight mb-2">{project.title}</h3>
          <p className="text-neutral-300 text-sm leading-relaxed line-clamp-4">{project.desc}</p>
        </div>

        {/* Bottom: tags + link */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/10 text-white/80 border border-white/15"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`flex items-center gap-1.5 font-semibold text-sm transition-colors ${
                  link.type === "live"
                    ? "text-emerald-400 hover:text-emerald-300"
                    : "text-amber-400 hover:text-amber-300"
                }`}
              >
                {link.type === "live" ? (
                  <><Globe className="w-4 h-4" /> Visit Site</>
                ) : (
                  <><Code className="w-4 h-4" /> View Code</>
                )}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});
ProjectCard.displayName = "ProjectCard";

export default memo(function Portfolio({ limit }) {
  const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <div className="w-full py-24 px-4 skeu-section-bg">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center w-full max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full skeu-badge mb-4">
            <FolderKanban className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wide">Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Real products we&apos;ve shipped — from concept to production. Built for performance, designed for users.
          </p>
          <p className="text-sm text-muted-foreground mt-2 opacity-60 italic">
            Hover over a card (or tap on mobile) to explore each project.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedProjects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </motion.div>

        {limit && (
          <motion.div variants={itemVariants} className="mt-12">
            <Button asChild variant="ghost" className="group text-primary hover:bg-primary/5">
              <Link href="/portfolio" className="flex items-center gap-2">
                View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
});
