"use client";

import { Reveal } from "@/components/animations/Reveal";

interface SectionIntroProps {
  id: string;
  eyebrow: string;
  title: string;
  text?: string;
  centered?: boolean;
}

export function SectionIntro({ id, eyebrow, title, text, centered = false }: SectionIntroProps) {
  return (
    <div id={id} className={`mb-20 ${centered ? "text-center" : ""}`}>
      <Reveal direction={centered ? "up" : "right"}>
        <span className="keynote-pill mb-6 text-apple-blue inline-block">{eyebrow}</span>
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight ${centered ? "mx-auto" : ""}`}>
          {title}
        </h2>
        {text && (
          <p className={`max-w-3xl text-lg md:text-xl text-muted leading-relaxed ${centered ? "mx-auto" : ""}`}>
            {text}
          </p>
        )}
      </Reveal>
    </div>
  );
}
