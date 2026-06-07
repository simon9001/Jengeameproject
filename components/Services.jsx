"use client";
import React, { memo, useMemo } from "react";
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

const ServiceTag = memo(({ tag }) => (
  <span className="skeu-tag px-3 py-1 rounded-full text-xs whitespace-nowrap">
    {tag}
  </span>
));
ServiceTag.displayName = "ServiceTag";

const ServiceCard = memo(({ section }) => {
  const { icon, title, description, tags } = section;
  return (
    <motion.div
      variants={itemVariants}
      className="skeu-card p-6 flex flex-col"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-3 rounded-xl skeu-icon-box text-primary shadow-sm">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.slice(0, 4).map((tag) => (
          <ServiceTag key={tag} tag={tag} />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full skeu-badge mb-4">
            <Settings2 className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wide">Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
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
