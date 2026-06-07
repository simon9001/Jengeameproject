"use client";
import React, { memo, useMemo } from "react";
import { GitBranch, Search, Lightbulb, Code2, TestTube, Rocket, HeartHandshake, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const PROCESS_STEPS = [
  { icon: Search, step: "01", title: "Discovery", description: "We start by understanding your business goals, target audience, and technical requirements through a detailed consultation." },
  { icon: Lightbulb, step: "02", title: "Design", description: "From wireframes to high-fidelity prototypes — we design intuitive user experiences before writing a single line of code." },
  { icon: Code2, step: "03", title: "Build", description: "Our engineers implement your solution using modern, scalable technologies with clean, maintainable code." },
  { icon: TestTube, step: "04", title: "Test", description: "Rigorous testing across devices and environments to ensure your product works perfectly before launch." },
  { icon: Rocket, step: "05", title: "Deploy", description: "Seamless deployment to production with monitoring, performance optimization, and zero-downtime strategies." },
  { icon: HeartHandshake, step: "06", title: "Support", description: "Post-launch support, maintenance, and iterations to keep your product growing with your business." },
];

const WHY_US = [
  "End-to-end ownership — from design to deployment",
  "Agile development with regular progress updates",
  "Transparent pricing — no hidden costs",
  "Post-launch support and maintenance included",
  "Modern tech stack for long-term scalability",
  "Africa-based agency with global delivery standards",
  "Fast turnaround without compromising quality",
  "Direct communication — no middlemen",
];

const TECH_STACK = [
  { name: "React / Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Django / Python", logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" },
  { name: "Flutter", logo: "https://storage.googleapis.com/cms-storage-bucket/ec64036b4eacc9f3fd73.svg" },
  { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
  { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" },
];

const ProcessStep = memo(({ step, isLast }) => {
  const Icon = step.icon;
  return (
    <motion.div variants={itemVariants} className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-xl skeu-icon-box flex items-center justify-center flex-shrink-0 text-primary">
          <Icon className="w-5 h-5" />
        </div>
        {!isLast && <div className="w-0.5 bg-border flex-grow mt-2 mb-0 min-h-[2rem]" />}
      </div>
      <div className="pb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">{step.step}</span>
        </div>
        <h4 className="text-lg font-bold text-foreground mb-1">{step.title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
});
ProcessStep.displayName = "ProcessStep";

const Process = memo(function Process() {
  const processSteps = useMemo(() =>
    PROCESS_STEPS.map((step, i) => (
      <ProcessStep key={step.step} step={step} isLast={i === PROCESS_STEPS.length - 1} />
    )), []);

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full space-y-14"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full skeu-badge mb-4">
            <GitBranch className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wide">How We Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Our Process</h2>
          <p className="text-lg text-muted-foreground">
            A structured, transparent workflow that keeps you informed at every stage — from first conversation to final deployment.
          </p>
        </motion.div>

        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Process Steps */}
          <motion.div variants={itemVariants} className="skeu-card p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">6-Step Delivery Framework</h3>
            <div>{processSteps}</div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {/* Why Us */}
            <motion.div variants={itemVariants} className="skeu-card p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Why Choose Us?</h3>
              <ul className="space-y-2">
                {WHY_US.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={itemVariants} className="skeu-card p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Our Tech Stack</h3>
              <div className="grid grid-cols-3 gap-3">
                {TECH_STACK.map((tech) => (
                  <div key={tech.name} className="skeu-tech-tile flex flex-col items-center gap-1.5 p-3 rounded-xl">
                    <img src={tech.logo} alt={tech.name} className="w-8 h-8 object-contain" loading="lazy" />
                    <span className="text-xs text-muted-foreground text-center leading-tight">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

Process.displayName = "Process";
export default Process;
