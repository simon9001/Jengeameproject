"use client";
import React, { memo } from "react";
import { Check, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { PRICING } from "@/lib/data";
import { Button } from "./ui/button";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const PricingCard = memo(({ tier }) => (
  <motion.div
    variants={itemVariants}
    className={`relative flex flex-col p-8 rounded-2xl border ${
      tier.recommended
        ? "bg-card border-primary shadow-xl scale-105 z-10"
        : "bg-white/90 dark:bg-neutral-900/80 border-border shadow-sm"
    } card-interactive`}
  >
    {tier.recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-widest">
        Recommended
      </div>
    )}
    <div className="mb-6">
      <h3 className="text-xl font-bold text-black dark:text-white mb-2">{tier.plan}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-black dark:text-white">{tier.price}</span>
      </div>
      <p className="text-sm text-neutral-700 dark:text-neutral-200 mt-2">{tier.desc}</p>
    </div>
    <ul className="space-y-3 mb-8 flex-grow">
      {tier.features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-300">
          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button
      asChild
      variant={tier.recommended ? "default" : "outline"}
      className="w-full font-bold py-6 rounded-xl"
    >
      <Link href="/contact">Get Started</Link>
    </Button>
  </motion.div>
));
PricingCard.displayName = "PricingCard";

export default memo(function Pricing() {
  return (
    <div className="w-full py-24 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Investment</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black dark:text-white">Pricing Plans</h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-200 max-w-2xl">
            Transparent pricing for businesses of all sizes. Choose the plan that fits your current needs and scale as you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {PRICING.map((tier) => (
            <PricingCard key={tier.plan} tier={tier} />
          ))}
        </div>
      </motion.div>
    </div>
  );
});
