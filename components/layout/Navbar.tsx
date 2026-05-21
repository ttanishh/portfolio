"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/lib/navigation";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-6 transition-all duration-500">
      <nav
        className={`
          flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-500
          ${isScrolled ? "glass shadow-2xl scale-95" : "bg-transparent scale-100"}
        `}
      >
        {/* Logo / Home */}
        <a href="#home" className="px-4 py-2 text-sm font-bold tracking-tight text-white">
          TP
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`
                relative px-4 py-2 text-[13px] font-medium transition-colors duration-300
                ${activeSection === item.id ? "text-white" : "text-muted hover:text-white"}
              `}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden lg:block ml-4">
          <a
            href="#contact"
            className="px-5 py-2 text-[13px] font-bold text-black bg-white rounded-full transition hover:bg-zinc-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 mx-6 p-6 glass rounded-apple-lg lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium ${activeSection === item.id ? "text-white" : "text-muted"}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
