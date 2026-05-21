"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/lib/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Menu, X, Command, Cpu } from "lucide-react";
import { MagneticLink } from "@/components/ui/Magnetic";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] flex justify-center py-8 transition-all duration-700 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <nav
        className={`
          flex items-center gap-3 px-6 py-2.5 rounded-full transition-all duration-700
          ${isScrolled ? "glass shadow-[0_0_30px_rgba(0,0,0,0.4)] border-white/10 scale-95" : "bg-transparent border-transparent scale-100"}
        `}
      >
        {/* Dynamic Logo */}
        <MagneticLink href="#home" className="flex items-center gap-3 px-4 py-2 group">
          <div className="w-8 h-8 rounded-xl bg-apple-blue flex items-center justify-center text-white shadow-[0_0_15px_rgba(0,113,227,0.4)] group-hover:rotate-[360deg] transition-transform duration-1000">
             <Cpu size={18} strokeWidth={2.5} />
          </div>
          <span className="text-base font-black tracking-tighter text-white">TANISH</span>
        </MagneticLink>

        {/* Separator */}
        <div className="w-[1px] h-6 bg-white/10 mx-2 hidden lg:block" />

        {/* Desktop Navigation Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`
                relative px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500
                ${activeSection === item.id ? "text-white" : "text-muted-strong hover:text-white"}
              `}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10 shadow-inner"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Separator */}
        <div className="w-[1px] h-6 bg-white/10 mx-2 hidden lg:block" />

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-4 ml-2">
          <MagneticLink
            href="#contact"
            className="px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] text-black bg-white rounded-full transition-all hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Terminal
          </MagneticLink>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-3 text-white hover:bg-white/10 rounded-full transition-colors"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Advanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[-1] bg-black/60 lg:hidden flex items-center justify-center p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-sm glass rounded-[40px] p-10 flex flex-col gap-8 shadow-2xl"
            >
              <div className="flex flex-col gap-6">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-black tracking-tighter ${activeSection === item.id ? "text-apple-blue" : "text-white"}`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
              <motion.a
                 href="#contact"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="mt-4 py-5 bg-white text-black text-center font-black uppercase tracking-widest rounded-full shadow-xl"
              >
                Get Started
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
