"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-nav shadow-soft" : "bg-transparent"
      )}
    >
      <nav className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-extrabold text-ink dark:text-primary-50">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-grad-brand text-white shadow-soft">
            <Sprout className="h-5 w-5" strokeWidth={2.5} />
          </span>
          Funngro
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-pill px-4 py-2 text-sm font-semibold transition-colors duration-200",
                    isActive
                      ? "text-primary-700 dark:text-primary-300"
                      : "text-ink-soft hover:text-primary-700 dark:text-primary-100 dark:hover:text-primary-300"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-pill bg-primary-100 dark:bg-primary-900/40"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-200 text-primary-700 transition-colors hover:bg-primary-50 dark:border-primary-800 dark:text-primary-200 dark:hover:bg-primary-900/40"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <Button href="/for-teens" size="sm">
            Get Started
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-200 text-primary-700 dark:border-primary-800 dark:text-primary-200"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-200 text-primary-800 dark:border-primary-800 dark:text-primary-200"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden border-t border-primary-100 bg-white lg:hidden dark:border-dark-border dark:bg-dark-surface"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-ink-soft hover:bg-primary-50 hover:text-primary-700 dark:text-primary-100 dark:hover:bg-primary-900/30"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 px-4">
                <Button href="/for-teens" className="w-full justify-center">
                  Get Started
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
