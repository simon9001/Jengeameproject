"use client";
import React, { useMemo, memo } from "react";
import { Building2, Target, Users, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CredentialCard = memo(({ item }) => (
  <motion.div
    variants={itemVariants}
    className="skeu-card p-6 flex items-start gap-5"
  >
    <div className="w-14 h-14 flex-shrink-0 skeu-icon-box flex items-center justify-center rounded-xl">
      <img
        src={item.logo}
        alt={item.alt}
        className="w-10 h-10 object-contain rounded-lg"
        loading="lazy"
      />
    </div>
    <div className="flex flex-col text-left gap-1">
      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
      <p className="text-sm text-primary font-medium">{item.program}</p>
      <div className="text-sm text-muted-foreground mt-1 space-y-0.5">
        <p><span className="font-medium text-foreground">Year:</span> {item.year}</p>
        <p><span className="font-medium text-foreground">{item.scoreLabel}:</span> {item.score}</p>
      </div>
    </div>
  </motion.div>
));
CredentialCard.displayName = "CredentialCard";

const ValueCard = memo(({ icon: Icon, title, description }) => (
  <motion.div
    variants={itemVariants}
    className="skeu-card p-5 flex flex-col gap-3"
  >
    <div className="w-10 h-10 rounded-xl skeu-icon-box flex items-center justify-center text-primary">
      <Icon className="w-5 h-5" />
    </div>
    <h4 className="font-semibold text-foreground">{title}</h4>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
));
ValueCard.displayName = "ValueCard";

const CREDENTIALS = [
  {
    logo: "https://avatars.githubusercontent.com/u/155526985?s=280&v=4",
    alt: "Teach2Give",
    title: "Teach2Give",
    program: "Software Engineering Program",
    year: "2024",
    scoreLabel: "Focus Areas",
    score: "Backend Development, APIs, System Design",
  },
  {
    logo: "https://ui-avatars.com/api/?name=UoE&background=1d4ed8&color=fff&size=64",
    alt: "University of Embu",
    title: "University of Embu",
    program: "BSc Information Technology",
    year: "2021 – 2025",
    scoreLabel: "Class",
    score: "Second Class Honors (Upper Division)",
  },
];

const VALUES = [
  { icon: Target, title: "Reliability", description: "We deliver on time, every time. Deadlines are commitments, not suggestions." },
  { icon: CheckCircle, title: "Quality", description: "Clean, maintainable code with thorough testing and production-ready deployments." },
  { icon: Users, title: "Client Focus", description: "Your business goals drive every decision we make throughout the project." },
  { icon: Award, title: "Innovation", description: "We stay current with the latest technologies to give your product a competitive edge." },
];

const AboutUs = memo(function AboutUs() {
  const credentialCards = useMemo(() =>
    CREDENTIALS.map((item, i) => <CredentialCard key={i} item={item} />), []);

  const valueCards = useMemo(() =>
    VALUES.map((v) => <ValueCard key={v.title} {...v} />), []);

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full max-w-5xl"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full skeu-badge mb-4">
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wide">Who We Are</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">About Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gatungo Digital is a Nairobi-based full-stack development agency founded by Simon Gatungo Wanyoike — a software engineer with a BSc in Information Technology and hands-on training in real-world product development.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          variants={itemVariants}
          className="w-full skeu-card p-6 mb-10 text-center"
        >
          <h3 className="text-xl font-bold text-foreground mb-2">Our Mission</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            To empower African businesses and global clients with affordable, high-quality digital solutions — building systems that scale, perform, and deliver real value.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div variants={itemVariants} className="w-full mb-10">
          <h3 className="text-2xl font-bold text-foreground mb-5 text-center">Our Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valueCards}
          </div>
        </motion.div>

        {/* Credentials */}
        <motion.div variants={itemVariants} className="w-full">
          <h3 className="text-2xl font-bold text-foreground mb-5 text-center">Credentials &amp; Training</h3>
          <div className="flex flex-col gap-5 max-w-2xl mx-auto">
            {credentialCards}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
});

AboutUs.displayName = "AboutUs";
export default AboutUs;
