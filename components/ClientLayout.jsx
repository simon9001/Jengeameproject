"use client";
import React, { useState, useEffect, useCallback } from "react";
import Layout from "./Layout";
import ScrollToTop from "./ScrollToTop";

export default function ClientLayout({ children }) {
  const [theme, setTheme] = useState("light");
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initialTheme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <>
      <ScrollToTop />
      <Layout
        theme={theme}
        toggleTheme={toggleTheme}
        sideNavOpen={sideNavOpen}
        setSideNavOpen={setSideNavOpen}
      >
        {children}
      </Layout>
    </>
  );
}
