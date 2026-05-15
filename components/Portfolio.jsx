"use client";
import React, { memo, useMemo } from "react";
import { Code, ExternalLink, FolderKanban, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import Link from "next/link";
import { Button } from "./ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProjectCard = memo(({ project }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex flex-col h-full card-interactive"
  >
    {project.category && (
      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3 w-fit">
        {project.category}
      </span>
    )}
    <h3 className="text-lg font-bold text-black dark:text-white mb-2 leading-tight">{project.title}</h3>
    <p className="text-sm text-neutral-700 dark:text-neutral-200 mb-4 flex-grow leading-relaxed">{project.desc}</p>

    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
      {project.tags.slice(0, 3).map((tag, i) => (
        <span
          key={i}
          className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600"
        >
          {tag}
        </span>
      ))}
    </div>

    <div className="flex gap-4 flex-wrap">
      {project.links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline hover:text-foreground transition-colors"
        >
          {link.type === "code" ? <Code className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
          {link.type === "code" ? "Source" : "Live"}
        </a>
      ))}
    </div>
  </motion.div>
));
ProjectCard.displayName = "ProjectCard";

export default memo(function Portfolio({ limit }) {
  const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <div className="w-full py-24 px-4 bg-muted/20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center w-full max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <FolderKanban className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black dark:text-white">Our Portfolio</h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-200 max-w-2xl">
            A selection of projects built with a focus on real business impact, performance, and scalability.
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
