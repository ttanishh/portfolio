"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const wordsArray = words.split(" ");

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-white leading-snug tracking-tight">
          {wordsArray.map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.1,
                }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
