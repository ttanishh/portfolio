"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const [paths, setPaths] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const generatePaths = useCallback(() => {
    const width = containerRef.current?.clientWidth || 1000;
    const height = containerRef.current?.clientHeight || 1000;
    const newPaths = [];
    for (let i = 0; i < 20; i++) {
      const x1 = Math.random() * width;
      const y1 = Math.random() * height;
      const x2 = Math.random() * width;
      const y2 = Math.random() * height;
      newPaths.push(`M${x1},${y1} Q${(x1 + x2) / 2},${(y1 + y2) / 2} ${x2},${y2}`);
    }
    setPaths(newPaths);
  }, []);

  useEffect(() => {
    generatePaths();
    window.addEventListener("resize", generatePaths);
    return () => window.removeEventListener("resize", generatePaths);
  }, [generatePaths]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 z-0 h-full w-full pointer-events-none overflow-hidden",
        className
      )}
    >
      <svg
        className="absolute h-full w-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((path, idx) => (
          <path
            key={idx}
            d={path}
            stroke="url(#beam-gradient)"
            strokeWidth="0.5"
            fill="none"
            className="animate-pulse"
            style={{
              animationDelay: `${idx * 0.2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
