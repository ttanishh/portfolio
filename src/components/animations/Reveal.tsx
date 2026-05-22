"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  width?: "fit-content" | "100%";
  centered?: boolean;
}

export const Reveal = ({ 
  children, 
  className = "", 
  delay = 0.2, 
  direction = "up",
  width = "100%",
  centered = false
}: RevealProps) => {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };

  return (
    <div className={`${className} ${centered ? "flex flex-col items-center text-center" : ""}`} style={{ width }}>
      <motion.div
        initial={{ 
          opacity: 0, 
          ...directions[direction],
          filter: "blur(15px)" 
        }}
        whileInView={{ 
          opacity: 1, 
          y: 0, 
          x: 0,
          filter: "blur(0px)"
        }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 1.2, 
          delay, 
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
