"use client";
import React, { useState, useCallback, useMemo, memo } from "react";
import { Settings2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";
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

const ServiceTag = memo(({ tag, className }) => (
  <span
    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors duration-150 ${className} text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600`}
  >
    {tag}
  </span>
));
ServiceTag.displayName = "ServiceTag";

const ServiceCard = memo(({ section }) => {
  const { icon, title, description, tags } = section;
  return (
    <motion.div
      variants={itemVariants}
      className="rounded-2xl bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 shadow p-6 flex flex-col card-interactive"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary shadow-sm">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">{title}</h3>
      </div>
      <p className="text-sm text-neutral-700 dark:text-neutral-200 mb-4 leading-relaxed flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.slice(0, 4).map((tag) => (
          <ServiceTag key={tag} tag={tag} className="bg-neutral-100 dark:bg-neutral-800" />
        ))}
      </div>
    </motion.div>
  );
});
ServiceCard.displayName = "ServiceCard";

export default memo(function Services({ limit }) {
  const displayedServices = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <div className="w-full py-24 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center w-full max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Settings2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black dark:text-white">
            Our Services
          </h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-200 max-w-2xl">
            End-to-end digital solutions tailored to your business needs. We cover the full stack — from design to deployment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedServices.map((section) => (
            <ServiceCard key={section.title} section={section} />
          ))}
        </motion.div>

        {limit && (
          <motion.div variants={itemVariants} className="mt-12">
            <Button asChild variant="ghost" className="group text-primary hover:bg-primary/5">
              <Link href="/services" className="flex items-center gap-2">
                Explore All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
});
