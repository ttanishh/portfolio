"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  width?: "fit-content" | "100%";
}

export const Reveal = ({ 
  children, 
  className = "", 
  delay = 0.2, 
  direction = "up",
  width = "fit-content" 
}: RevealProps) => {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction],
        filter: "blur(8px)" 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0,
        filter: "blur(0px)"
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.19, 1, 0.22, 1] 
      }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
