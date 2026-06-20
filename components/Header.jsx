"use client";
import React, { memo, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/process", label: "Process" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Header = memo(({ toggleTheme, currentTheme, onHamburgerClick }) => {
  const pathname = usePathname();

  const handleThemeToggle = useCallback((e) => {
    toggleTheme();
    e.currentTarget.blur();
  }, [toggleTheme]);

  const ThemeIcon = useMemo(() => (currentTheme === "light" ? Moon : Sun), [currentTheme]);
  const themeAriaLabel = useMemo(() => `Switch to ${currentTheme === "light" ? "dark" : "light"} mode`, [currentTheme]);

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 py-4 skeu-header"
      style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
    >
      {/* Logo */}
      <Link href="/" className="select-none hover:opacity-90 transition-opacity">
      
        <img
          src="/assets/logo.jpeg"
          alt="jengeaMe"
          className="h-10 w-auto rounded-xl object-contain"
        />
        
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden min-[935px]:flex gap-1 sm:gap-2 items-center">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.to ||
            (link.to === "/" && pathname === "/");
          return (
            <Link
              key={link.to}
              href={link.to}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150
                ${isActive
                  ? "text-primary bg-primary/10 dark:bg-primary/20"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
            >
              {link.label}
            </Link>
          );
        })}

        <button
          onClick={handleThemeToggle}
          type="button"
          className="ml-2 p-2 rounded-full text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 will-change-transform"
          aria-label={themeAriaLabel}
        >
          <ThemeIcon className="w-5 h-5" />
        </button>

        <Link
          href="/contact"
          className="ml-2 skeu-btn-primary px-4 py-2 text-sm"
        >
          Get a Quote
        </Link>
      </nav>

      {/* Mobile */}
      <div className="flex min-[935px]:hidden items-center gap-2">
        <button
          onClick={handleThemeToggle}
          type="button"
          className="p-2 rounded-full text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-110 focus:outline-none will-change-transform"
          aria-label={themeAriaLabel}
        >
          <ThemeIcon className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={onHamburgerClick}
          aria-label="Open menu"
          className="hamburger flex items-center justify-center w-12 h-12 rounded-full hover:bg-primary/10 active:scale-95 transition"
        >
          <Menu className="w-6 h-6 text-primary" />
        </button>
      </div>
    </motion.header>
  );
});

Header.displayName = "Header";
export default Header;
