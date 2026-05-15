"use client";
import React, { useState, memo } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, Phone, MapPin, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const formContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const StatusMessage = ({ status, message }) => {
  if (status === "idle") return null;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center gap-2 p-3 rounded-lg text-sm font-medium ${
        status === "success"
          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
          : status === "error"
          ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800"
          : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
      }`}
    >
      {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
      {status === "success" && <CheckCircle2 className="w-4 h-4" />}
      {status === "error" && <AlertCircle className="w-4 h-4" />}
      {message}
    </motion.div>
  );
};

const CONTACT_INFO = [
  { icon: MapPin, label: "Location", value: "Nairobi, Kenya" },
  { icon: Phone, label: "Phone", value: "+254 0757 568845", href: "tel:+254757568845" },
  { icon: Mail, label: "Email", value: "simongatungo300@gmail.com", href: "mailto:simongatungo300@gmail.com" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
];

function Contact() {
  const [formState, setFormState] = useState({ status: "idle", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ status: "loading", message: "Sending your enquiry, please wait..." });

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/xnjvypqj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormState({ status: "success", message: "Thank you! We'll get back to you within 24 hours." });
        e.target.reset();
        setTimeout(() => setFormState({ status: "idle", message: "" }), 6000);
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      setFormState({ status: "error", message: "Something went wrong. Please email us directly." });
      setTimeout(() => setFormState({ status: "idle", message: "" }), 5000);
    }
  };

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        variants={sectionContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full max-w-5xl"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Let's Talk</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">Get a Free Quote</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours with a tailored proposal. No obligation, no pressure.
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-5">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 p-4 rounded-xl bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium text-black dark:text-white hover:text-primary transition-colors">{value}</a>
                  ) : (
                    <p className="text-sm font-medium text-black dark:text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm text-primary font-medium">
                🌍 Serving clients across Kenya, Africa, and globally — remote-friendly, deadline-driven.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={formContainerVariants}
            className="lg:col-span-3 p-6 sm:p-8 bg-white/90 dark:bg-neutral-900/80 border border-border/40 dark:border-border/60 rounded-2xl shadow space-y-4"
          >
            <input type="hidden" name="_subject" value="New Project Enquiry — Gatungo Digital" />

            <AnimatePresence>
              <motion.div key={formState.status} variants={itemVariants} layout>
                <StatusMessage status={formState.status} message={formState.message} />
              </motion.div>
            </AnimatePresence>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                <Input type="text" name="name" placeholder="John Doe" required disabled={formState.status === "loading"} className="text-foreground disabled:opacity-50" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                <Input type="email" name="_replyto" placeholder="john@company.com" required disabled={formState.status === "loading"} className="text-foreground disabled:opacity-50" />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-foreground mb-1.5">Service Needed *</label>
                <select
                  name="service"
                  required
                  disabled={formState.status === "loading"}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 text-foreground"
                >
                  <option value="">Select a service...</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App (Flutter)</option>
                  <option value="Backend / API">Backend & API Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Database / Cloud">Database & Cloud</option>
                  <option value="AI & Automation">AI & Automation</option>
                  <option value="Full Project">Full Project (End-to-End)</option>
                  <option value="Other">Other / Not Sure</option>
                </select>
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-foreground mb-1.5">Budget Range</label>
                <select
                  name="budget"
                  disabled={formState.status === "loading"}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 text-foreground"
                >
                  <option value="">Select budget range...</option>
                  <option value="Under $500">Under $500</option>
                  <option value="$500 – $2,000">$500 – $2,000</option>
                  <option value="$2,000 – $10,000">$2,000 – $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                  <option value="Let's discuss">Let's discuss</option>
                </select>
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-foreground mb-1.5">Company / Organisation</label>
              <Input type="text" name="company" placeholder="Your company name (optional)" disabled={formState.status === "loading"} className="text-foreground disabled:opacity-50" />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-foreground mb-1.5">Project Description *</label>
              <Textarea
                rows={5}
                name="message"
                placeholder="Describe your project, goals, timeline, and any specific requirements..."
                required
                disabled={formState.status === "loading"}
                className="resize-y text-foreground disabled:opacity-50"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                disabled={formState.status === "loading"}
                className="w-full text-base font-semibold py-3 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState.status === "loading" ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                ) : (
                  <>Send Enquiry <Send className="w-4 h-4" /></>
                )}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}

export default memo(Contact);
